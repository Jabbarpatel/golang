import { SET_TOKEN, SET_USER_LOGGED_IN } from "./actions";

type State = {
  token: string;
  userLoggedIn: boolean;
};

const initialState: State = {
  token: "",
  userLoggedIn: false,
};

export const AuthReducer = (
  state: State = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER_LOGGED_IN:
      return { ...state, userLoggedIn: action.payload };
    default:
      return state;
  }
};
