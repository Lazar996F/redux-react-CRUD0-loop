/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DataTableQueryVariables = {|
  scanId: any
|};
export type DataTableQueryResponse = {|
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
|};
export type DataTableQuery = {|
  variables: DataTableQueryVariables,
  response: DataTableQueryResponse,
|};
*/


/*
query DataTableQuery(
  $scanId: UUID!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scanId"
  }
],
v1 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DataTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DataTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "891d33903bd5f424a11d66684cf238aa",
    "id": null,
    "metadata": {},
    "name": "DataTableQuery",
    "operationKind": "query",
    "text": "query DataTableQuery(\n  $scanId: UUID!\n) {\n  scanById(id: $scanId) {\n    id\n    spotStatisticsByScanId {\n      nodes {\n        sectionName\n        platformName\n        spotType\n        spotPosition\n        sectionPosition\n        titleType\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ad485656f32914ac2d99450b6aa3535';

module.exports = node;
