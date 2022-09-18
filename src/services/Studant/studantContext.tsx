import axios from "axios";
import { useToast } from '@chakra-ui/react'
import { StudantRegisterFormValues } from "components";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import { StudantContextProps, StudantProviderProps } from "./";
import { CepInput, CepType, converterToCreateUser, FinancialInput, FinancialType, StudantInput, StudantType } from "./inputs";
import { useRouter } from "next/router";

export const StudantContext = createContext({} as StudantContextProps);

export function StudantProvider({ children }: StudantProviderProps) {
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const toast = useToast()
  const router = useRouter()

  const [allStudants, setAllStudants] = useState<StudantType[]>();
  const [financial, setFinancial] = useState<FinancialType>();
  const [studant, setStudant] = useState<StudantType>();
  const [cep, setCep] = useState<CepType>();

  async function inactivateStudant(id: number): Promise<void> {
    try {
      await axios.delete(`${urlApi}/student/${id}`, config).then(() => {
        toast({
          title: 'Sucesso ao inativar',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        getAllStudants();
      })
    } catch (error) { 
      toast({
        title: 'Erro ao buscar o estudante',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getStudantPersonData(id: number): Promise<StudantType | undefined> {
    try {
      const res = await axios.get(`${urlApi}/student/${id}`, config)
      //setStudant(StudantInput(res.data)[0]);
      return StudantInput(res.data)[0]
    } catch (error) { 
      toast({
        title: 'Erro ao buscar o estudante',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getStudantFinancialData(id: number): Promise<FinancialType | undefined> {
    try {
      const res = await axios.get(`${urlApi}/financial/${id}`, config)
      //setFinancial(FinancialInput(res.data));
      return FinancialInput(res.data)
    } catch (error) { 
      toast({
        title: 'Erro ao buscar os dados financeiros',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }


  async function getAllStudants(): Promise<void> {
    try {
      const res = await axios.get(`${urlApi}/student`, config)
      setAllStudants(StudantInput(res.data));

    } catch (error) { 
      toast({
        title: 'Erro ao buscar os estudantes',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function saveStudantRegister(data: StudantRegisterFormValues): Promise<void> {

    try {
      const dataToSend = converterToCreateUser(data)
      console.log(dataToSend)
      const res = axios.post(`${urlApi}/student`, dataToSend, config).then(() => {
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
        title: 'Erro ao salvar o estudante',
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

  return (
    <StudantContext.Provider
      value={{
        getCepData,
        saveStudantRegister,
        getAllStudants,
        getStudantPersonData,
        getStudantFinancialData,
        inactivateStudant,
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
