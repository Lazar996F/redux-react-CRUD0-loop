/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ClientBarQueryVariables = {||};
export type ClientBarQueryResponse = {|
  +allRegions: ?{|
    +nodes: $ReadOnlyArray<?{|
      +id: any,
      +name: ?string,
      +platformsByTerritoryId: {|
        +nodes: $ReadOnlyArray<?{|
          +name: ?string,
          +id: any,
          +scansByPlatformId: {|
            +nodes: $ReadOnlyArray<?{|
              +id: any,
              +createdAt: any,
            |}>
          |},
        |}>
      |},
    |}>
  |},
  +allSpotStatistics: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +sectionName: ?string,
        +platformName: ?string,
        +spotType: ?string,
        +spotPosition: ?number,
        +sectionPosition: ?number,
        +titleType: ?string,
      |}
    |}>
  |},
|};
export type ClientBarQuery = {|
  variables: ClientBarQueryVariables,
  response: ClientBarQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "RegionsConnection",
    "kind": "LinkedField",
    "name": "allRegions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Region",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PlatformsConnection",
            "kind": "LinkedField",
            "name": "platformsByTerritoryId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Platform",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": "CREATED_AT_DESC"
                      }
                    ],
                    "concreteType": "ScansConnection",
                    "kind": "LinkedField",
                    "name": "scansByPlatformId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Scan",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v0/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "scansByPlatformId(orderBy:\"CREATED_AT_DESC\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "SpotStatisticsConnection",
    "kind": "LinkedField",
    "name": "allSpotStatistics",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SpotStatisticsEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SpotStatistic",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sectionName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "platformName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "spotType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "spotPosition",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sectionPosition",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "titleType",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientBarQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientBarQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c6f99ee6e2c444c423f3c7fb8ee4acf8",
    "id": null,
    "metadata": {},
    "name": "ClientBarQuery",
    "operationKind": "query",
    "text": "query ClientBarQuery {\n  allRegions {\n    nodes {\n      id\n      name\n      platformsByTerritoryId {\n        nodes {\n          name\n          id\n          scansByPlatformId(orderBy: CREATED_AT_DESC) {\n            nodes {\n              id\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n  allSpotStatistics {\n    edges {\n      node {\n        sectionName\n        platformName\n        spotType\n        spotPosition\n        sectionPosition\n        titleType\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1effff921ac94e4dff9635e8155cd86d';

module.exports = node;
