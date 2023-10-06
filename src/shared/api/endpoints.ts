import { externalSystemCall } from "./base";
import { LoginRequest, RegisterRequest } from "./types";

export const loginRequest = (data: LoginRequest) =>
  externalSystemCall<LoginRequest>({
    endpoint: "auth/login",
    method: "POST",
    data,
  });

export const registerResuest = (data: RegisterRequest) =>
  externalSystemCall<RegisterRequest>({
    endpoint: "auth/register",
    method: "POST",
    data,
  });

export const getMeRequest = () =>
  externalSystemCall({
    endpoint: "users/me",
    method: "GET",
  });
