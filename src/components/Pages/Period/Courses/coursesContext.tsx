import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";

export interface CoursesProviderProps {
    children: JSX.Element;
}

export interface CoursesContextProps {
    getEmployees(): Promise<EmployeeObject[] | undefined>;
}

export interface EmployeeObject {
    id: number;
    profile_id: number;
    name: string;
    email: string;
    password: string;
    telephone: string;
    cpf: string;
    address_id: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    profile: string;
    cep: string;
    city: string;
    state: string;
    address: string;
    district: string;
    number: string;
}


export const CoursesContext = createContext({} as CoursesContextProps);

export function CoursesProvider({ children }: CoursesProviderProps) {
    const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
    const cookies = parseCookies();
    const token = cookies.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const toast = useToast()


    async function getEmployees(): Promise<EmployeeObject[] | undefined> {
        try {
          const res = await axios.get(`${urlApi}/gender`, config)
          const responseData: EmployeeObject[] = res.data
          return responseData
        } catch (error) {
          toast({
            title: 'Erro ao buscar os funcionarios',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      }


    return (
        <CoursesContext.Provider
            value={{
                getEmployees,
            }}
        >
            {children}
        </CoursesContext.Provider>
    );
}
