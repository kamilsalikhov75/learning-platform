import { createDomain } from "effector";

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

export const login = user.createEvent<User>();
export const logout = user.createEvent();

export const $user = user
  .createStore<User>(initialState)
  .on(login, (_, payload) => payload)
  .on(logout, () => initialState);
