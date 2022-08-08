import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import {
  InterLoadingContext,
  InterLoadingProps,
} from "./loadingContext.interface";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export const LoadingContext = createContext({} as InterLoadingContext);

export function LoadingProvider({ children }: InterLoadingProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    setLoading(true);
    return config;
  };

  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    setLoading(false);
    return Promise.reject(error);
  };

  const onResponse = (response: AxiosResponse): AxiosResponse => {
    setLoading(false);
    return response;
  };

  const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    setLoading(false);
    return Promise.reject(error);
  };

  function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  }

  setupInterceptorsTo(axios);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {children}
    </LoadingContext.Provider>
  );
}
