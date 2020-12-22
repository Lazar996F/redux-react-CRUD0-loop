/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRegionMutationVariables = {|
  regionId: any
|};
export type DeleteRegionMutationResponse = {|
  +deleteRegionById: ?{|
    +region: ?{|
      +id: any
    |},
    +query: ?{|
      +allRegions: ?{|
        +nodes: $ReadOnlyArray<?{|
          +name: ?string,
          +id: any,
        |}>
      |}
    |},
  |}
|};
export type DeleteRegionMutation = {|
  variables: DeleteRegionMutationVariables,
  response: DeleteRegionMutationResponse,
|};
*/


/*
mutation DeleteRegionMutation(
  $regionId: UUID!
) {
  deleteRegionById(input: {id: $regionId}) {
    region {
      id
    }
    query {
      allRegions {
        nodes {
          name
          id
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
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "regionId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeleteRegionPayload",
    "kind": "LinkedField",
    "name": "deleteRegionById",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  (v1/*: any*/)
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
    "name": "DeleteRegionMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRegionMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "035be2206758a9e7f6784f22e0b52aa7",
    "id": null,
    "metadata": {},
    "name": "DeleteRegionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRegionMutation(\n  $regionId: UUID!\n) {\n  deleteRegionById(input: {id: $regionId}) {\n    region {\n      id\n    }\n    query {\n      allRegions {\n        nodes {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '630bfec343088a80bdb147f4507792e5';

module.exports = node;
