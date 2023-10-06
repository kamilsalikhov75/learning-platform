import { createDomain } from "effector";
import Cookies from "js-cookie";
import {
  getMeRequest,
  loginRequest,
  registerResuest,
} from "@/shared/api/endpoints";
import { LoginRequest, RegisterRequest } from "@/shared/api/types";

const user = createDomain();

export interface User {
  isAuth: boolean;
  id?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  github?: string;
  telegram?: string;
}

const initialState: User = {
  isAuth: false,
};

export const login = user.createEffect((data: LoginRequest) =>
  loginRequest(data)
);

export const register = user.createEffect((data: RegisterRequest) =>
  registerResuest(data)
);

export const getMe = user.createEffect(() => getMeRequest());

login.done.watch(({ result }) => {
  Cookies.set("token", result.data.token);
  getMe();
});

login.fail.watch(({ error, params }) => {
  console.log(params, error);
});

register.done.watch(({ result }) => {
  Cookies.set("token", result.data.token);
  getMe();
});

register.fail.watch(({ error, params }) => {
  console.log(params, error);
});

getMe.done.watch(({ result }) => {
  return result.data as User;
});

getMe.fail.watch(({ error, params }) => {
  console.log(params, error);
});

export const logout = user.createEvent();

export const $user = user
  .createStore<User>(initialState)
  .on(getMe.doneData, (_, userData) => ({ isAuth: true, ...userData.data }))
  .on(logout, () => {
    Cookies.remove("token");
    return initialState;
  });
