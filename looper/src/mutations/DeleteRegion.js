import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";

const mutation = graphql`
  mutation DeleteRegionMutation($regionId: UUID!) {
    deleteRegionById(input: { id: $regionId }) {
      region {
        id
      }
      query {
        allRegions {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`;

export default (regionId, callback) => {
  // 4
  const variables = {
    regionId: regionId,
  };
  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    onCompleted: (response, errors) => {
      console.log("JA cekam bazu :/ ");
      if (errors) {
        callback(errors[0]);
        console.log("GRESKAAA!!!!");
      } else {
        callback(response);
      }
    },

    optimisticUpdater: (store) => {
      const rootField = store.getRoot();
      const currentPlatforms = rootField.getLinkedRecord("allRegions");
      const currentNodes = currentPlatforms.getLinkedRecords("nodes");

      const optimisticNodes = currentNodes.filter(
        (node) => node._dataID !== regionId
      );
      currentPlatforms.setLinkedRecords(optimisticNodes, "nodes");
    },

    updater: (store) => {
      const mutation = store.getRootField("deleteRegionById");
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
