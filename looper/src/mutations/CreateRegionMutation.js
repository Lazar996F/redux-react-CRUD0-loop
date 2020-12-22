import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";

const mutation = graphql`
  mutation CreateRegionMutationMutation($RegionInput: CreateRegionInput!) {
    createRegion(input: $RegionInput) {
      region {
        id
        name
      }
      query {
        allRegions {
          nodes {
            id
            name
            platformsByTerritoryId {
              nodes {
                name
                id
                scansByPlatformId(orderBy: CREATED_AT_DESC) {
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
  }
`;

export default (name, callback) => {
  // 4
  const variables = {
    RegionInput: {
      region: {
        name,
      },
    },
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
      const tempId = "region:temp-id-12345";
      const node = store.create(tempId, "new region");
      node.setValue(name, "name");
      node.setValue(tempId, "id");

      const rootField = store.getRoot();
      const currentRegions = rootField.getLinkedRecord("allRegions");
      const currentNodes = currentRegions.getLinkedRecords("nodes");
      const optimisticNodes = [...currentNodes, node];
      currentRegions.setLinkedRecords(optimisticNodes, "nodes");
    },
    updater: (store) => {
      const mutation = store.getRootField("createRegion");
      if (mutation === null) return;
      const queryField = mutation.getLinkedRecord("query");
      const newRegions = queryField.getLinkedRecord("allRegions");
      const newNodes = newRegions.getLinkedRecords("nodes");

      const rootField = store.getRoot();
      const currentRegion = rootField.getLinkedRecord("allRegions");

      currentRegion.setLinkedRecords(newNodes, "nodes");
    },

    onError: (err) => console.error(err),
  });
};
