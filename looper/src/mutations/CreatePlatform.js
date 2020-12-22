import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";

const mutation = graphql`
  mutation CreatePlatformMutation(
    $PlatformInput: CreatePlatformInput!
    $regionId: UUID!
  ) {
    createPlatform(input: $PlatformInput) {
      platform {
        id
        name
      }
      query {
        regionById(id: $regionId) {
          id
          name
          platformsByTerritoryId {
            nodes {
              name
              id
              scansByPlatformId {
                nodes {
                  id
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default (name, territoryId, callback) => {
  // 4
  const variables = {
    PlatformInput: {
      platform: {
        name,
        territoryId,
      },
    },
    regionId: territoryId,
  };
  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    onCompleted: (response, errors) => {
      if (errors) {
        callback(errors[0], false);
      } else {
        callback(response, false);
      }
    },
    optimisticUpdater: (store) => {
      const tempId = "platform:temp-id-12345";
      const node = store.create(tempId, "new platform");
      node.setValue(name, "name");
      node.setValue(tempId, "id");

      const rootField = store.getRoot();
      const currentRegions = rootField.getLinkedRecord("allRegions");
      const regionNodes = currentRegions.getLinkedRecords("nodes");
      const nodeByRegionId = regionNodes.find(
        (regionNode) => regionNode.getValue("id") === territoryId
      );

      const platformsByTerritory = nodeByRegionId.getLinkedRecord(
        "platformsByTerritoryId"
      );
      const currentPlatformsByTerrNodes = platformsByTerritory.getLinkedRecords(
        "nodes"
      );

      const optimisticNodes = [...currentPlatformsByTerrNodes, node];

      platformsByTerritory.setLinkedRecords(optimisticNodes, "nodes");
    },
    updater: (store) => {
      const mutation = store.getRootField("createPlatform");
      if (mutation === null) return;
      const queryField = mutation.getLinkedRecord("query");
      const newRegion = queryField.getLinkedRecord("regionById", {
        id: territoryId,
      });
      console.log("New Region from createPlatform>>", newRegion);
      const newPlatforms = newRegion.getLinkedRecord("platformsByTerritoryId");
      const newNodes = newPlatforms.getLinkedRecords("nodes");
      const rootField = store.getRoot();
      const currentRegions = rootField.getLinkedRecord("allRegions");
      const regionNodes = currentRegions.getLinkedRecords("nodes");
      const nodeByRegionId = regionNodes.find(
        (regionNode) => regionNode.getValue("id") === territoryId
      );
      const platformsByTerritory = nodeByRegionId.getLinkedRecord(
        "platformsByTerritoryId"
      );
      platformsByTerritory.setLinkedRecords(newNodes, "nodes");
    },
    onError: (err) => console.error(">>>>>>>>ERROR_graphql>>>", err),
  });
};
