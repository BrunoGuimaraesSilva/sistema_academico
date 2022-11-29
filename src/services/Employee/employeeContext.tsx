import { EmployeeRegisterFormValues } from "@/components/Pages/Employee/employeeRegister.interface";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import {
  EmployeeContextProps,
  EmployeeProviderProps
} from "./";
import { CepInput, CepType, ProfileType, EmployeeInput, EmployeeType, converterToEditEmployee, converterToSaveEmployee } from "./inputs";
import { useRouter } from "next/router";

export const EmployeeContext = createContext({} as EmployeeContextProps);

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [profile, setProfile] = useState<ProfileType[]>();
  const [allEmployees, setAllEmployees] = useState<EmployeeType[]>();
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const toast = useToast();
  const router = useRouter()


  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getAllProfiles(): Promise<void> {
    if (!profile) {
      try {
        const res = await axios.get(urlApi + `/profile`, config)
        setProfile(res.data);
      } catch (error) {
        toast({
          title: 'Erro ao buscar os estudantes',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
  }


  async function getAllEmployee(): Promise<void> {
    try {
      const res = await axios.get(`${urlApi}/employee`, config)
      setAllEmployees(EmployeeInput(res.data));
    } catch (error) {
      toast({
        title: 'Erro ao buscar os estudantes',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getCepData(cep: string): Promise<CepType | undefined> {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const cepData = CepInput(res.data)
      return cepData;
    } catch (error) {
      toast({
        title: 'Erro ao buscar o CEP',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function inactivateEmployee(id: number | undefined): Promise<void> {
    try {
      await axios.delete(`${urlApi}/employee/${id}`, config).then(() => {
        toast({
          title: 'Sucesso ao inativar',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        getAllEmployee();
      })
    } catch (error) {
      toast({
        title: 'Erro ao inativar',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function activateEmployee(id: number | undefined): Promise<void> {
    try {
      await axios.post(`${urlApi}/employeeactivate/${id}`,[], config).then(() => {
        toast({
          title: 'Sucesso ao ativar',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        getAllEmployee();
      })
    } catch (error) {
      toast({
        title: 'Erro ao ativar',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getEmployeeData(id: number): Promise<EmployeeType | undefined> {
    try {
      const res = await axios.get(`${urlApi}/employee/${id}`, config)
      return EmployeeInput(res.data)[0]
    } catch (error) {
      toast({
        title: 'Erro ao buscar o funcionario',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function editEmployee(data: EmployeeRegisterFormValues): Promise<void> {
    try {
      const dataToSend = converterToEditEmployee(data)
      const res = axios.put(`${urlApi}/employee/${data.id}`, dataToSend, config)
        .then(() => {
          toast({
            title: 'Sucesso ao editar',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          router.back()
        })
        .catch(() => {
          toast({
            title: 'Erro ao editar',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        });
    } catch (error) {

    }
  }

  async function saveStudantRegister(data: EmployeeRegisterFormValues): Promise<void> {

    try {
      const dataToSend = converterToSaveEmployee(data)
      const res = axios.post(`${urlApi}/employee`, dataToSend, config).then(() => {
        toast({
          title: 'Sucesso ao Cadastrar',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        router.back()
      });
    } catch (error) {
      toast({
        title: 'Erro ao salvar',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }


  return (
    <EmployeeContext.Provider
      value={{
        profile,
        allEmployees,
        getCepData,
        getAllEmployee,
        getAllProfiles,
        inactivateEmployee,
        activateEmployee,
        getEmployeeData,
        editEmployee,
        saveStudantRegister
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
