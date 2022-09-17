import axios from "axios";
import { parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import {
  CepResponseEmployeeType,
  EmployeeContextProps,
  EmployeeProviderProps, ProfileResponseType
} from "./";

export const EmployeeContext = createContext({} as EmployeeContextProps);

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [profile, setProfile] = useState<ProfileResponseType[]>();
  const [cep, setCep] = useState<CepResponseEmployeeType>();
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


  useEffect(() => {
    if (!profile) {
      axios.get(urlApi + `/profile`, config).then((res): void => {
        setProfile(res.data);
      });
    }

  }, []);

  async function getCepData(cep: string): Promise<void> {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res): void => {
        setCep(res.data);
      });
  }


  return (
    <EmployeeContext.Provider
      value={{
        profile,
        getCepData,
        cep
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
