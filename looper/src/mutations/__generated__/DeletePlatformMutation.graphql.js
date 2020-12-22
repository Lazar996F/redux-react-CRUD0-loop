/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePlatformMutationVariables = {|
  platformId: any,
  regionId: any,
|};
export type DeletePlatformMutationResponse = {|
  +deletePlatformById: ?{|
    +platform: ?{|
      +name: ?string
    |},
    +query: ?{|
      +regionById: ?{|
        +id: any,
        +name: ?string,
        +platformsByTerritoryId: {|
          +nodes: $ReadOnlyArray<?{|
            +name: ?string,
            +id: any,
          |}>
        |},
      |}
    |},
  |}
|};
export type DeletePlatformMutation = {|
  variables: DeletePlatformMutationVariables,
  response: DeletePlatformMutationResponse,
|};
*/


/*
mutation DeletePlatformMutation(
  $platformId: UUID!
  $regionId: UUID!
) {
  deletePlatformById(input: {id: $platformId}) {
    platform {
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
    "name": "platformId"
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
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "platformId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeletePlatformPayload",
    "kind": "LinkedField",
    "name": "deletePlatformById",
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
          (v1/*: any*/)
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
              (v2/*: any*/),
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
                      (v2/*: any*/)
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
    "name": "DeletePlatformMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePlatformMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7053e61fd7eb2a5fb8213c29c5a2f54c",
    "id": null,
    "metadata": {},
    "name": "DeletePlatformMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePlatformMutation(\n  $platformId: UUID!\n  $regionId: UUID!\n) {\n  deletePlatformById(input: {id: $platformId}) {\n    platform {\n      name\n    }\n    query {\n      regionById(id: $regionId) {\n        id\n        name\n        platformsByTerritoryId {\n          nodes {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87b399deeaafb2d6fbce4dbd407e4157';

module.exports = node;
