/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateRegionInput = {|
  clientMutationId?: ?string,
  region: RegionInput,
|};
export type RegionInput = {|
  id?: ?any,
  name?: ?string,
  createdAt?: ?any,
  updatedAt?: ?any,
  isoCode?: ?string,
  currency?: ?string,
  flagFileName?: ?string,
  flagContentType?: ?string,
  flagFileSize?: ?number,
  flagUpdatedAt?: ?any,
  locale?: ?string,
  sortKey?: ?number,
|};
export type CreateRegionMutationMutationVariables = {|
  RegionInput: CreateRegionInput
|};
export type CreateRegionMutationMutationResponse = {|
  +createRegion: ?{|
    +region: ?{|
      +id: any,
      +name: ?string,
    |},
    +query: ?{|
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
      |}
    |},
  |}
|};
export type CreateRegionMutationMutation = {|
  variables: CreateRegionMutationMutationVariables,
  response: CreateRegionMutationMutationResponse,
|};
*/


/*
mutation CreateRegionMutationMutation(
  $RegionInput: CreateRegionInput!
) {
  createRegion(input: $RegionInput) {
    region {
      id
      name
    }
    query {
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
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "RegionInput"
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
        "variableName": "RegionInput"
      }
    ],
    "concreteType": "CreateRegionPayload",
    "kind": "LinkedField",
    "name": "createRegion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Region",
        "kind": "LinkedField",
        "name": "region",
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
    "name": "CreateRegionMutationMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateRegionMutationMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "1372b722d31323376ca21be69c1c06d8",
    "id": null,
    "metadata": {},
    "name": "CreateRegionMutationMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRegionMutationMutation(\n  $RegionInput: CreateRegionInput!\n) {\n  createRegion(input: $RegionInput) {\n    region {\n      id\n      name\n    }\n    query {\n      allRegions {\n        nodes {\n          id\n          name\n          platformsByTerritoryId {\n            nodes {\n              name\n              id\n              scansByPlatformId(orderBy: CREATED_AT_DESC) {\n                nodes {\n                  id\n                  createdAt\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '409a00e90dd00174d1907d4773e37511';

module.exports = node;
