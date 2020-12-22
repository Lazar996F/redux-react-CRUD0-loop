import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";

const mutation = graphql`
  mutation DeletePlatformMutation($platformId: UUID!, $regionId: UUID!) {
    deletePlatformById(input: { id: $platformId }) {
      platform {
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
            }
          }
        }
      }
    }
  }
`;

export default (platformId, regionId, callback) => {
  // 4
  const variables = {
    platformId: platformId,
    regionId: regionId,
  };
  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    onCompleted: (response, errors) => {
      if (errors) {
        callback(errors[0]);
        console.log("Error !!!!");
      } else {
        callback(response);
      }
    },

    optimisticUpdater: (store) => {
      const rootField = store.getRoot();
      const currentRegions = rootField.getLinkedRecord("allRegions");
      const regionNodes = currentRegions.getLinkedRecords("nodes");
      const nodeByRegionId = regionNodes.find(
        (regionNode) => regionNode.getValue("id") === regionId
      );
      const platformsByTerritory = nodeByRegionId.getLinkedRecord(
        "platformsByTerritoryId"
      );
      const platformsByTerrNodes = platformsByTerritory.getLinkedRecords(
        "nodes"
      );
      const optimisticNodes = platformsByTerrNodes.filter(
        (node) => node.getValue("id") !== platformId
      );

      platformsByTerritory.setLinkedRecords(optimisticNodes, "nodes");
    },

    updater: (store) => {
      const mutation = store.getRootField("deletePlatformById");
      if (mutation === null) return;
      const queryField = mutation.getLinkedRecord("query");
      const newRegion = queryField.getLinkedRecord("regionById", {
        id: regionId,
      });
      const platformsByTerrId = newRegion.getLinkedRecord(
        "platformsByTerritoryId"
      );
      const newPlatformsByTerrIdNodes = platformsByTerrId.getLinkedRecords(
        "nodes"
      );
      const rootField = store.getRoot();
      const currentRegions = rootField.getLinkedRecord("allRegions");
      const regionNodes = currentRegions.getLinkedRecords("nodes");
      const nodeByRegionId = regionNodes.find(
        (regionNode) => regionNode.getValue("id") === regionId
      );
      const platformsByTerritory = nodeByRegionId.getLinkedRecord(
        "platformsByTerritoryId"
      );
      platformsByTerritory.setLinkedRecords(newPlatformsByTerrIdNodes, "nodes");
    },

    onError: (err) => console.error(err),
  });
};
