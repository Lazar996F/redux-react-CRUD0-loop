/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChildExample_region$ref: FragmentReference;
declare export opaque type ChildExample_region$fragmentType: ChildExample_region$ref;
export type ChildExample_region = {|
  +id: any,
  +name: ?string,
  +$refType: ChildExample_region$ref,
|};
export type ChildExample_region$data = ChildExample_region;
export type ChildExample_region$key = {
  +$data?: ChildExample_region$data,
  +$fragmentRefs: ChildExample_region$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChildExample_region",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Region",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0a36714dfdda7fd08658e5bb261355fa';

module.exports = node;
