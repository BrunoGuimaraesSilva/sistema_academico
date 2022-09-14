import axios from "axios";
import { createContext, useState } from "react";
import { parseCookies } from "nookies";
import {
  ProfileResponseType,
  EmployeeContextProps,
  EmployeeProviderProps,
} from "./";

export const EmployeeContext = createContext({} as EmployeeContextProps);

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [profile, setProfile] = useState<ProfileResponseType[]>();
  const urlApi: String = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getProfileData(): Promise<void> {
    axios.get(urlApi + `/profile`, config).then((res): void => {
      setProfile(res.data);
    });
  }

  return (
    <EmployeeContext.Provider
      value={{
        getProfileData,
        profile,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
