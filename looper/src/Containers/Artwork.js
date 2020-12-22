import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../Environment";
import graphql from "babel-plugin-relay/macro";

const rootQuery = graphql`
  query ArtworkQuery {
    allScans {
      nodes {
        id
        createdAt
        territoryId
        platformId
        useBrowser
        clientId
      }
    }
  }
`;

const renderQuery = ({ error, props }) => {
  if (error) {
    console.log(error, "Artwork ERROR query");
    return <div>{error.message}</div>;
  } else if (props) {
    console.log("Artwork propsi>>>", props.allScans);
    return (
      <>
        <h1>Artwork props are here!! :)</h1>
      </>
    );
  }
  return <div>Loading</div>;
};

function Artwork() {
  return (
    <QueryRenderer
      environment={environment}
      query={rootQuery}
      variables={{}}
      render={renderQuery}
    />
  );
}

export default Artwork;
