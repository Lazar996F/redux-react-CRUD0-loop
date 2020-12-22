import { SET_CLIENT_ID } from "./types";

export const setClientId = (clientName) => {
  return {
    type: SET_CLIENT_ID,
    payload: clientName,
  };
};
