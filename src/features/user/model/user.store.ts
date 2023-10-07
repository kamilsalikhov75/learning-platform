import { createDomain } from "effector";
import { User } from "../types/user.types";
import { getMe } from "./user.effects";
import { logout } from "./user.events";
import Cookies from "js-cookie";

export const user = createDomain();

const initialState: User = {
  isAuth: false,
};

export const $user = user
  .createStore<User>(initialState)
  .on(getMe.doneData, (_, userData) => ({ isAuth: true, ...userData.data }))
  .on(logout, () => {
    Cookies.remove("token");
    return initialState;
  });
