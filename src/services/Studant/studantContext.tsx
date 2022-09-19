import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { StudantRegisterFormValues } from "components";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import { StudantContextProps, StudantProviderProps } from "./";
import { CepInput, CepType, CivilStatusType, converterToCreateUser, converterToEditFinancial, converterToEditStudent, FinancialInput, FinancialType, GenderType, StudantInput, StudantType } from "./inputs";

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


  async function getCivilStatus(): Promise<CivilStatusType[] | undefined> {
    try {
      const res = await axios.get(`${urlApi}/civilstatus`, config)
      const responseData: CivilStatusType[] = res.data
      return responseData
    } catch (error) {
      toast({
        title: 'Erro ao buscar os estados civis',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function getGender(): Promise<GenderType[] | undefined> {
    try {
      const res = await axios.get(`${urlApi}/gender`, config)
      const responseData: GenderType[] = res.data
      return responseData
    } catch (error) {
      toast({
        title: 'Erro ao buscar os generos',
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
      return FinancialInput(res.data[0])
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

  async function editStudant(data: StudantRegisterFormValues): Promise<void> {
    try {
      const dataToSend = converterToEditStudent(data)
      const res = axios.put(`${urlApi}/student/${data.id}`, dataToSend, config)
        .then(() => {
          toast({
            title: 'Sucesso ao editar o estudante',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          router.back()
        })
        .catch(() => {
          toast({
            title: 'Erro ao editar o estudante',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        });
    } catch (error) {

    }
  }

  async function editFinancial(data: StudantRegisterFormValues): Promise<void> {
    try {
      const dataToSend = converterToEditFinancial(data)
      const res = axios.put(`${urlApi}/financial/${data.id}`, dataToSend, config)
        .then(() => {
          toast({
            title: 'Sucesso ao editar financeiro',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          router.back()
        })
        .catch(() => {
          toast({
            title: 'Erro ao editar o financeiro',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        });
    } catch (error) {

    }
  }

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

  async function activateStudant(id: number): Promise<void> {
    try {
      await axios.post(`${urlApi}/studentactivate/${id}`, config).then(() => {
        toast({
          title: 'Sucesso ao ativar',
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

  return (
    <StudantContext.Provider
      value={{
        getCepData,
        saveStudantRegister,
        getAllStudants,
        getStudantPersonData,
        getStudantFinancialData,
        inactivateStudant,
        activateStudant,
        editStudant,
        editFinancial,
        getCivilStatus,
        getGender,
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
