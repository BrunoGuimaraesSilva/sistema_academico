import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import {
  InterClientContext,
  InterProviderProps,
} from "./clientsContext.interface";
import { parseCookies, setCookie } from "nookies";
import { useToast } from "@chakra-ui/react";

export const ClientContext = createContext({} as InterClientContext);

export function ClientProvider({ children }: InterProviderProps) {
  const toast = useToast();
  const urlApi: String = "https://pesquisa-satisfacao-api.herokuapp.com/api";
  const router = useRouter();

  async function login(login: string, password: string): Promise<void> {
    axios
      .post(`${urlApi}/login`, {
        email: login,
        senha: password,
      })
      .then((res): void => {
        setCookie(null, "token", res.data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        router.push("/dashboard");
      })
      .catch(function (error) {
        toast({
          title: "Erro",
          description: error.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  return (
    <ClientContext.Provider
      value={{
        login
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
