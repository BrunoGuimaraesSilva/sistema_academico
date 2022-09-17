import axios from "axios";
import { StudantRegisterFormValues } from "components";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import { StudantContextProps, StudantProviderProps } from "./";
import { CepInput, CepType, converterToCreateUser, FinancialInput, FinancialType, StudantInput, StudantType } from "./inputs";

export const StudantContext = createContext({} as StudantContextProps);

export function StudantProvider({ children }: StudantProviderProps) {
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [allStudants, setAllStudants] = useState<StudantType[]>();
  const [financial, setFinancial] = useState<FinancialType>();
  const [studant, setStudant] = useState<StudantType>();
  const [cep, setCep] = useState<CepType>();


  async function getStudantPersonData(id: number): Promise<StudantType | undefined> {
    try {
      const res = await axios.get(`${urlApi}/student/${id}`, config)
      //setStudant(StudantInput(res.data)[0]);
      return StudantInput(res.data)[0]
    } catch (error) { }

  }

  async function getStudantFinancialData(id: number): Promise<FinancialType | undefined> {
    try {
      const res = await axios.get(`${urlApi}/financial/${id}`, config)
      //setFinancial(FinancialInput(res.data));
      return FinancialInput(res.data)
    } catch (error) { }
  }


  async function getAllStudants(): Promise<void> {
    try {
      const res = await axios.get(`${urlApi}/student`, config)
      setAllStudants(StudantInput(res.data));

    } catch (error) { }
  }

  async function saveStudantRegister(data: StudantRegisterFormValues): Promise<void> {
    try {
      const dataToSend = converterToCreateUser(data)
      axios.post(`${urlApi}/perfil`, dataToSend, config).then((res): void => {

      });
    } catch (error) { }
  }

  async function getCepData(cep: string): Promise<CepType | undefined> {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const cepData = CepInput(res.data)
      return cepData;
    } catch (error) { }
  }

  return (
    <StudantContext.Provider
      value={{
        getCepData,
        saveStudantRegister,
        getAllStudants,
        getStudantPersonData,
        getStudantFinancialData,
        financial,
        studant,
        allStudants,
        cep
      }}
    >
      {children}
    </StudantContext.Provider>
  );
}
