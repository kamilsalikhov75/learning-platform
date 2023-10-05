import { createDomain } from "effector";
import { externalSystemCall } from "@/shared/api/base";

const user = createDomain();

export interface User {
  isAuth: boolean;
  userName: string;
  email: string;
  telegramUserName: string;
  githubUserName: string;
}

const initialState = {
  isAuth: false,
  userName: "",
  email: "",
  telegramUserName: "",
  githubUserName: "",
};

export const login = user.createEffect(
  (data: { email: string; password: string }) =>
    externalSystemCall({
      endpoint: "auth/login",
      method: "POST",
      data,
    })
);
export const logout = user.createEvent();

export const $user = user
  .createStore<User>(initialState)
  .on(logout, () => initialState);
