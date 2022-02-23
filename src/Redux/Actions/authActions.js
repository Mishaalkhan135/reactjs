import { LOGIN, LOGOUT } from "../types";

const LoginUser = (user) => {
  return { type: LOGIN, user };
};

const removeUser = () => {
  return { type: LOGOUT };
};

export { LoginUser, removeUser };
