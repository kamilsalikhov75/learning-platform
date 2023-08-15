import { createDomain } from "effector";

const auth = createDomain();

interface User {
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

export const login = auth.createEvent<User>();
export const logout = auth.createEvent();

export const $user = auth
  .createStore<User>(initialState)
  .on(login, (_, payload) => payload)
  .on(logout, () => initialState);
