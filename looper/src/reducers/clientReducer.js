import { SET_CLIENT_ID } from "../actions/types";
const initialState = {
  clientId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CLIENT_ID:
      return {
        clientId: action.payload,
      };
    default:
      return state;
  }
}
