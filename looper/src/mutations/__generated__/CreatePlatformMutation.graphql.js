/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePlatformInput = {|
  clientMutationId?: ?string,
  platform: PlatformInput,
|};
export type PlatformInput = {|
  id?: ?any,
  territoryId?: ?any,
  name?: ?string,
  createdAt?: ?any,
  updatedAt?: ?any,
  logoFileName?: ?string,
  logoContentType?: ?string,
  logoFileSize?: ?number,
  logoUpdatedAt?: ?any,
  faviconFileName?: ?string,
  faviconContentType?: ?string,
  faviconFileSize?: ?string,
  faviconUpdatedAt?: ?string,
  code?: ?string,
  currency?: ?string,
  hasUberArtwork?: ?boolean,
  hasBoxsets?: ?boolean,
  generateActions?: ?boolean,
  variants?: ?any,
|};
export type CreatePlatformMutationVariables = {|
  PlatformInput: CreatePlatformInput,
  regionId: any,
|};
export type CreatePlatformMutationResponse = {|
  +createPlatform: ?{|
    +platform: ?{|
      +id: any,
      +name: ?string,
    |},
    +query: ?{|
      +regionById: ?{|
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
      |}
    |},
  |}
|};
export type CreatePlatformMutation = {|
  variables: CreatePlatformMutationVariables,
  response: CreatePlatformMutationResponse,
|};
*/


/*
mutation CreatePlatformMutation(
  $PlatformInput: CreatePlatformInput!
  $regionId: UUID!
) {
  createPlatform(input: $PlatformInput) {
    platform {
      id
      name
    }
    query {
      regionById(id: $regionId) {
        id
        name
        platformsByTerritoryId {
          nodes {
            name
            id
            scansByPlatformId {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "PlatformInput"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "regionId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "PlatformInput"
      }
    ],
    "concreteType": "CreatePlatformPayload",
    "kind": "LinkedField",
    "name": "createPlatform",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Platform",
        "kind": "LinkedField",
        "name": "platform",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "regionId"
              }
            ],
            "concreteType": "Region",
            "kind": "LinkedField",
            "name": "regionById",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
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
                      (v2/*: any*/),
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
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
                              (v1/*: any*/),
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
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePlatformMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePlatformMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "84cff5cc8118c5201f45319a09db29e7",
    "id": null,
    "metadata": {},
    "name": "CreatePlatformMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePlatformMutation(\n  $PlatformInput: CreatePlatformInput!\n  $regionId: UUID!\n) {\n  createPlatform(input: $PlatformInput) {\n    platform {\n      id\n      name\n    }\n    query {\n      regionById(id: $regionId) {\n        id\n        name\n        platformsByTerritoryId {\n          nodes {\n            name\n            id\n            scansByPlatformId {\n              nodes {\n                id\n                createdAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9963ef2c2dd5ee0aaae4b10b3a7dddcf';

module.exports = node;
