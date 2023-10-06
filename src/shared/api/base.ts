import { createStandaloneToast } from "@chakra-ui/react";
import axios, { Method, ResponseType } from "axios";
import Cookies from "js-cookie";

export const REACT_APP_ENDPOINT_URL = `http://localhost:3000/`;
const { toast } = createStandaloneToast();

interface IExternalSystemCallArguments<T> {
  method: Method;
  endpoint: string;
  url?: string;
  data?: T;
  responseType?: ResponseType;
}

export async function externalSystemCall<T>({
  method,
  endpoint,
  url = REACT_APP_ENDPOINT_URL,
  data,
  responseType,
}: IExternalSystemCallArguments<T>) {
  try {
    const bearerToken = Cookies.get("token");
    const client = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    client.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error.response.data.message);

        if (error.response.status === 401) {
          Cookies.remove("token");
          // return Promise.reject(
          //   new Error("Срок сессии истек. Авторизуйтесь снова.")
          // );
        }
        return Promise.reject(error);
      }
    );

    const response = await client.request({
      url: endpoint,
      method,
      data,
      responseType,
    });
    return response;
  } catch (error) {
    toast({
      status: "error",
      title: error.response.data.message,
    });
    return Promise.reject(new Error(error.message));
  }
}
