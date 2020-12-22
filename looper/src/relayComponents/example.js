// import React from "react";
// import { QueryRenderer } from "react-relay";
// import environment from "../Environment";
// import graphql from "babel-plugin-relay/macro";
// import ChildExample from "./ChildExample";

// const rootQuery = graphql`
//   query exampleQuery($sarajevoID: UUID!) {
//     regionById(id: $sarajevoID) {
//       name
//     }
//     allScans {
//       nodes {
//         id
//         scrapeId
//       }
//     }
//     allRegions {
//       nodes {
//         ...ChildExample_region
//       }
//     }
//   }
// `;

// const renderQuery = ({ error, props }) => {
//   if (error) {
//     console.log(error);
//     return <div>{error.message}</div>;
//   } else if (props) {
//     //return <div>{props.regionById.name} is the best city!</div>;
//     // return <ChildExample region={regions} />;
//     return <h1>asd</h1>;
//   }
//   return <div>Loading</div>;
// };

// const Example = () => {
//   return (
//     <div>
//       <QueryRenderer
//         environment={environment}
//         query={rootQuery}
//         variables={{
//           sarajevoID: "ea632139-4cad-4f6a-841a-71d466354b5d",
//         }}
//         render={renderQuery}
//       />
//     </div>
//   );
// };

// export default Example;
