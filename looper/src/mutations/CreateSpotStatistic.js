import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";

const mutation = graphql`
  mutation CreateSpotStatisticMutation($scanId: UUID!) {
    insertdatatospotstatistics(input: { _scanId__: $scanId }) {
      spotStatistics {
        id
        pageName
      }
      query {
        scanById(id: $scanId) {
          id
          spotStatisticsByScanId {
            nodes {
              sectionName
              platformName
              spotType
              spotPosition
              sectionPosition
              titleType
            }
          }
        }
      }
    }
  }
`;

export default (scanID, callback) => {
  // 4
  const variables = {
    scanId: scanID,
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

    updater: (store) => {
      const mutation = store.getRootField("insertdatatospotstatistics");
      if (mutation === null) return;
      const queryField = mutation.getLinkedRecord("query");
      const scansByIdRecord = queryField.getLinkedRecord("scanById", {
        id: scanID,
      });
      const newStatisticByScan = scansByIdRecord.getLinkedRecord(
        "spotStatisticsByScanId"
      );
      const newNodes = newStatisticByScan.getLinkedRecords("nodes");

      const rootField = store.getRoot();
      const scansById = rootField.getLinkedRecord("scanById", {
        id: scanID,
      });
      const statisticsById = scansById.getLinkedRecord(
        "spotStatisticsByScanId"
      );
      statisticsById.setLinkedRecords(newNodes, "nodes");
    },

    onError: (err) => console.error(err),
  });
};
