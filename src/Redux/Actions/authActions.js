import { LOGIN } from "../types";

const LoginUser = (user) => {
  return { type: LOGIN, user };
};
export { LoginUser };
