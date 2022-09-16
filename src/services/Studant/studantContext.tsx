import axios from "axios";
import { StudantRegisterFormValues } from "components";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import { StudantContextProps, StudantProviderProps } from "./";
import { CepInput, CepType, converterToCreateUser, StudantInput, StudantType } from "./inputs";

export const StudantContext = createContext({} as StudantContextProps);

export function StudantProvider({ children }: StudantProviderProps) {
  const urlApi: String = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [allStudants, setAllStudants] = useState<StudantType[]>();
  const [cep, setCep] = useState<CepType>();

  async function getAllStudants(): Promise<void> {
    try {
      axios.get(`${urlApi}/student`, config).then((res): void => {
        setAllStudants(StudantInput(res.data));
      });
    } catch (error) { }
  }

  async function saveStudantRegister(data: StudantRegisterFormValues): Promise<void> {
    try {
      const dataToSend = converterToCreateUser(data)
      console.log(dataToSend)
      axios.post(`${urlApi}/perfil`, dataToSend, config).then((res): void => {

      });
    } catch (error) { }
  }

  async function getCepData(cep: string): Promise<void> {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res): void => {
        const cepData = CepInput(res.data)
        setCep(cepData);
      });
  }

  return (
    <StudantContext.Provider
      value={{
        getCepData,
        saveStudantRegister,
        getAllStudants,
        allStudants,
        cep
      }}
    >
      {children}
    </StudantContext.Provider>
  );
}
