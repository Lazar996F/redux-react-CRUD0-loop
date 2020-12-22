/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Actionbar_scans$ref: FragmentReference;
declare export opaque type Actionbar_scans$fragmentType: Actionbar_scans$ref;
export type Actionbar_scans = {|
  +nodes: $ReadOnlyArray<?{|
    +id: any,
    +createdAt: any,
    +regionByTerritoryId: ?{|
      +name: ?string,
      +id: any,
    |},
    +platformByPlatformId: ?{|
      +name: ?string,
      +id: any,
    |},
  |}>,
  +$refType: Actionbar_scans$ref,
|};
export type Actionbar_scans$data = Actionbar_scans;
export type Actionbar_scans$key = {
  +$data?: Actionbar_scans$data,
  +$fragmentRefs: Actionbar_scans$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Actionbar_scans",
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Region",
          "kind": "LinkedField",
          "name": "regionByTerritoryId",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Platform",
          "kind": "LinkedField",
          "name": "platformByPlatformId",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ScansConnection",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '77254acbb82b684da2f691bc9d9b47e1';

module.exports = node;
