/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ArtworkQueryVariables = {||};
export type ArtworkQueryResponse = {|
  +allScans: ?{|
    +nodes: $ReadOnlyArray<?{|
      +id: any,
      +createdAt: any,
      +territoryId: ?any,
      +platformId: ?any,
      +useBrowser: ?boolean,
      +clientId: ?any,
    |}>
  |}
|};
export type ArtworkQuery = {|
  variables: ArtworkQueryVariables,
  response: ArtworkQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ScansConnection",
    "kind": "LinkedField",
    "name": "allScans",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "territoryId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "platformId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "useBrowser",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "clientId",
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
    "name": "ArtworkQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "87f85da8cfe0c7fd6976aeaaab82f533",
    "id": null,
    "metadata": {},
    "name": "ArtworkQuery",
    "operationKind": "query",
    "text": "query ArtworkQuery {\n  allScans {\n    nodes {\n      id\n      createdAt\n      territoryId\n      platformId\n      useBrowser\n      clientId\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d9ff42a462251bcfd131e993a66517d';

module.exports = node;
