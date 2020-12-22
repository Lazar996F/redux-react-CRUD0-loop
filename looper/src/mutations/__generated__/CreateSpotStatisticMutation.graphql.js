/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSpotStatisticMutationVariables = {|
  scanId: any
|};
export type CreateSpotStatisticMutationResponse = {|
  +insertdatatospotstatistics: ?{|
    +spotStatistics: ?$ReadOnlyArray<?{|
      +id: any,
      +pageName: ?string,
    |}>,
    +query: ?{|
      +scanById: ?{|
        +id: any,
        +spotStatisticsByScanId: {|
          +nodes: $ReadOnlyArray<?{|
            +sectionName: ?string,
            +platformName: ?string,
            +spotType: ?string,
            +spotPosition: ?number,
            +sectionPosition: ?number,
            +titleType: ?string,
          |}>
        |},
      |}
    |},
  |}
|};
export type CreateSpotStatisticMutation = {|
  variables: CreateSpotStatisticMutationVariables,
  response: CreateSpotStatisticMutationResponse,
|};
*/


/*
mutation CreateSpotStatisticMutation(
  $scanId: UUID!
) {
  insertdatatospotstatistics(input: {_scanId__: $scanId}) {
    spotStatistics {
      id
      pageName
    }
    query {
      scanById(id: $scanId) {
        id
        spotStatisticsByScanId {
          nodes {
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scanId"
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
            "name": "_scanId__",
            "variableName": "scanId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "InsertdatatospotstatisticsPayload",
    "kind": "LinkedField",
    "name": "insertdatatospotstatistics",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SpotStatistic",
        "kind": "LinkedField",
        "name": "spotStatistics",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pageName",
            "storageKey": null
          }
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
                "variableName": "scanId"
              }
            ],
            "concreteType": "Scan",
            "kind": "LinkedField",
            "name": "scanById",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SpotStatisticsConnection",
                "kind": "LinkedField",
                "name": "spotStatisticsByScanId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SpotStatistic",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
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
    "name": "CreateSpotStatisticMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSpotStatisticMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bdb2531ac6c2274bf1bd96d26bafcec2",
    "id": null,
    "metadata": {},
    "name": "CreateSpotStatisticMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSpotStatisticMutation(\n  $scanId: UUID!\n) {\n  insertdatatospotstatistics(input: {_scanId__: $scanId}) {\n    spotStatistics {\n      id\n      pageName\n    }\n    query {\n      scanById(id: $scanId) {\n        id\n        spotStatisticsByScanId {\n          nodes {\n            sectionName\n            platformName\n            spotType\n            spotPosition\n            sectionPosition\n            titleType\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '633e504cdcc7f789ea8fb089e99fbb16';

module.exports = node;
