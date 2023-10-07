import {
  getMeRequest,
  loginRequest,
  registerResuest,
} from "@/shared/api/endpoints";
import { LoginRequest, RegisterRequest } from "@/shared/api/types";
import Cookies from "js-cookie";
import { User } from "../types/user.types";
import { createEffect } from "effector";

export const login = createEffect((data: LoginRequest) => loginRequest(data));

export const register = createEffect((data: RegisterRequest) =>
  registerResuest(data)
);

export const getMe = createEffect(() => getMeRequest());

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
