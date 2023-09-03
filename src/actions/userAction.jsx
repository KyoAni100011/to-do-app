import * as actionUserType from "./actionUserType";

const setUser = (user) => {
  return {
    type: actionUserType.SET_USER,
    payload: user,
  };
};

export { setUser };
