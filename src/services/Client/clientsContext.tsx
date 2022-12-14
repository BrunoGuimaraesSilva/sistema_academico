import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { createContext, useState } from "react";
import {
  InterClientContext,
  InterProviderProps,
  UserData
} from "./clientsContext.interface";

export const ClientContext = createContext({} as InterClientContext);

export function ClientProvider({ children }: InterProviderProps) {
  const toast = useToast();
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>();

  async function login(login: string, password: string): Promise<void> {
    axios
      .post(`${urlApi}/auth/login`, {
        user: login,
        password: password,
      })
      .then(({ data }): void => {

        if (typeof window !== "undefined") {
          localStorage.setItem('disciplines', JSON.stringify(data.disciplines))
        }
          

        setUserData(data)
        setCookie(null, "token", data.access_token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        // setCookie(null, "disciplines", data.user_data.disciplines, {
        //   maxAge: 30 * 24 * 60 * 60,
        //   path: "/",
        // });

        setCookie(null, "name", data.user_data.name, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        router.push("/master");
      })
      .catch(function (error) {
        toast({
          title: "Erro ao logar",
          description: 'Login ou senha invalida',
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  return (
    <ClientContext.Provider
      value={{
        login,
        userData
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
