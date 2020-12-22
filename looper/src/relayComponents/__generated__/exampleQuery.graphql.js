/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChildExample_region$ref = any;
export type exampleQueryVariables = {|
  sarajevoID: any
|};
export type exampleQueryResponse = {|
  +regionById: ?{|
    +name: ?string
  |},
  +allScans: ?{|
    +nodes: $ReadOnlyArray<?{|
      +id: any,
      +scrapeId: ?string,
    |}>
  |},
  +allRegions: ?{|
    +nodes: $ReadOnlyArray<?{|
      +$fragmentRefs: ChildExample_region$ref
    |}>
  |},
|};
export type exampleQuery = {|
  variables: exampleQueryVariables,
  response: exampleQueryResponse,
|};
*/


/*
query exampleQuery(
  $sarajevoID: UUID!
) {
  regionById(id: $sarajevoID) {
    name
  }
  allScans {
    nodes {
      id
      scrapeId
    }
  }
  allRegions {
    nodes {
      ...ChildExample_region
    }
  }
}

fragment ChildExample_region on Region {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sarajevoID"
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
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "sarajevoID"
    }
  ],
  "concreteType": "Region",
  "kind": "LinkedField",
  "name": "regionById",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
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
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "scrapeId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "exampleQuery",
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/),
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "ChildExample_region"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "exampleQuery",
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/),
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
              (v3/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1c14e3fc68caa6fb363e59fe15b01415",
    "id": null,
    "metadata": {},
    "name": "exampleQuery",
    "operationKind": "query",
    "text": "query exampleQuery(\n  $sarajevoID: UUID!\n) {\n  regionById(id: $sarajevoID) {\n    name\n  }\n  allScans {\n    nodes {\n      id\n      scrapeId\n    }\n  }\n  allRegions {\n    nodes {\n      ...ChildExample_region\n    }\n  }\n}\n\nfragment ChildExample_region on Region {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c53776b327ab9dd07dab0285a2b7916';

module.exports = node;
