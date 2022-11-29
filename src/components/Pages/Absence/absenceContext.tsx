import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { parseCookies } from "nookies";
import { createContext } from "react";
import { bodyToSaveAbsence, converterToEditAbsence } from "./outputBoundery";

export interface AbsenceProviderProps {
  children: JSX.Element;
}

export interface IdsPeriodDisciplineClass {
  discipline_id: number;
  period_id: number;
  class_id: number;
  justification: string;
}

export interface BodyToSendAbsence {
  students_id: Array<number>;
  ids_period_discipline_class: IdsPeriodDisciplineClass;
}

export interface PeriodType {
  id: number;
  description: string;
  discipline_id: number;
  created_at: Date;
  updated_at: Date;
  discipline_name: string;
}

export interface ClassType {
  id: number;
  description: string;
  discipline_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface AbsenceContextProps {
  saveAbsenceStudents(body: bodyToSaveAbsence): Promise<void>;
  getPeriod(disciplineId: number): Promise<PeriodType[] | undefined>;
  getClass(disciplineId: number): Promise<ClassType[] | undefined>;
}

export const AbsenceContext = createContext({} as AbsenceContextProps);

export function AbsenceProvider({ children }: AbsenceProviderProps) {
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const toast = useToast();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function getPeriod(
    disciplineId: number
  ): Promise<PeriodType[] | undefined> {
    try {
      const res = await axios.get(
        `${urlApi}/period/discipline/${disciplineId}`,
        config
      );
      const responseData: PeriodType[] = res.data;
      return responseData;
    } catch (error) {
      toast({
        title: "Erro ao buscar os periodos",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  async function getClass(
    disciplineId: number
  ): Promise<ClassType[] | undefined> {
    try {
      const res = await axios.get(
        `${urlApi}/class/discipline/${disciplineId}`,
        config
      );
      const responseData: ClassType[] = res.data;
      return responseData;
    } catch (error) {
      toast({
        title: "Erro ao buscar os aulas",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  async function saveAbsenceStudents(body: bodyToSaveAbsence): Promise<void> {
    const value = converterToEditAbsence(body);
    axios
      .put(
        `${urlApi}/studentabsence/${body.ids_period_discipline_class.discipline_id}/${body.ids_period_discipline_class.period_id}`,
        value,
        config
      )
      .then(() => {
        toast({
          title: "Sucesso ao Cadastrar",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Erro ao salvar",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  return (
    <AbsenceContext.Provider
      value={{
        saveAbsenceStudents,
        getPeriod,
        getClass,
      }}
    >
      {children}
    </AbsenceContext.Provider>
  );
}
