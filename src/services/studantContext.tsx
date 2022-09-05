import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { useToast } from "@chakra-ui/react";
import { CepResponseType, StudantContextProps, StudantProviderProps } from "./";

export const StudantContext = createContext({} as StudantContextProps);

export function StudantProvider({ children }: StudantProviderProps) {
  const toast = useToast();
  const [cep, setCep] = useState<CepResponseType>();
  //const [perfil, setPerfil] = useState<Array<PerfilResponseType>>();
  const urlApi: String = "https://pesquisa-satisfacao-api.herokuapp.com/api";
  const router = useRouter();


  // async function getProfile(): Promise<void> {
  //   try {
  //     axios.get(`${urlApi}/perfil`, config).then((res): void => {
  //       setPerfil(res.data);
  //     });
  //   } catch (error) {}
  // }

  async function getCepData(cep: number): Promise<void> {
    try {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res): void => {
        setCep(res.data);
      });
    } catch (error) {}
  }


  return (
    <StudantContext.Provider
      value={{
        getCepData,
        cep
      }}
    >
      {children}
    </StudantContext.Provider>
  );
}
