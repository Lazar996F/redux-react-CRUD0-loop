/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NavbarQueryVariables = {||};
export type NavbarQueryResponse = {|
  +allClients: ?{|
    +nodes: $ReadOnlyArray<?{|
      +name: ?string
    |}>
  |}
|};
export type NavbarQuery = {|
  variables: NavbarQueryVariables,
  response: NavbarQueryResponse,
|};
*/


/*
query NavbarQuery {
  allClients {
    nodes {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ClientsConnection",
    "kind": "LinkedField",
    "name": "allClients",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "name": "NavbarQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NavbarQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ca995466a15831dfb1798685fb681c69",
    "id": null,
    "metadata": {},
    "name": "NavbarQuery",
    "operationKind": "query",
    "text": "query NavbarQuery {\n  allClients {\n    nodes {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf27757c83af35a07014c066839f223a';

module.exports = node;
