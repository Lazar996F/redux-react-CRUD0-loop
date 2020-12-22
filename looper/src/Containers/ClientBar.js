import React from "react";
//import useClientBar from "../hooks/useClientBar";
import { QueryRenderer } from "react-relay";
import environment from "../Environment";
import graphql from "babel-plugin-relay/macro";
import Dashboard from "../Containers/Dashboard";
const rootQuery = graphql`
  query ClientBarQuery {
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
    allSpotStatistics {
      edges {
        node {
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
    console.log(error, "render query error");
    return <div>{error.message}</div>;
  } else if (props) {
    return (
      <>
        <Dashboard regions={props.allRegions.nodes} />
      </>
    );
  }
  return <div>Loading</div>;
};

function ClientBar() {
  //const { scans, platforms, territories, statistics } = useClientBar();
  return (
    <div>
      <QueryRenderer
        environment={environment}
        query={rootQuery}
        variables={{}}
        render={renderQuery}
      />
    </div>
  );
}

export default ClientBar;
