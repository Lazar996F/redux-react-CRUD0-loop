import React, { useState, useEffect } from "react";
//import useTable from "../hooks/useTable";
import styled from "styled-components";
import Thead from "./Thead";
import Tbody from "./Tbody";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import environment from "../Environment";

const Table = styled.table`
  margin-bottom: 1rem;
  color: #212529;
  margin: 34px 37px;
  width: 95%;
  font-size: 11px;
  .row {
    padding-bottom: 5px;
  }
`;

const TittleMessage = styled.div`
  text-align: center;
`;

const tableQuery = graphql`
  query DataTableQuery($scanId: UUID!) {
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
`;

const renderQuery = ({ error, props }) => {
  if (error) {
    return <TittleMessage>{error}</TittleMessage>;
  } else if (props) {
    return (
      <>
        <Table>
          <Thead />
          <Tbody items={props.scanById.spotStatisticsByScanId.nodes} />
        </Table>
      </>
    );
  }
  return (
    <TittleMessage>You must choose Scan to see Spot Statistic</TittleMessage>
  );
};

const DataTable = (props) => {
  //const { headerItems, bodyItems } = useTable(items);
  const [scanId, setScanId] = useState("");
  useEffect(() => {
    setScanId(props.scanId);
  }, [props.scanId]);

  return (
    <div>
      {scanId ? (
        <QueryRenderer
          environment={environment}
          query={tableQuery}
          variables={{ scanId }}
          render={renderQuery}
        />
      ) : (
        "You must choose Scan to see Spot Statistics"
      )}
    </div>
  );
};

export default DataTable;
