import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { parseCookies } from "nookies";
import { createContext } from "react";
import { GroupByStudents, StudentObject } from "../Dashboard";
import { converterToSaveNotesFirstGrade, converterToSaveNotesSecondGrade, converterToSaveNotes, BodyToSaveNotes } from "./outputBoundery";

export interface NotesProviderProps {
  children: JSX.Element;
}

interface IdsPeriodDisciplineClass {
  discipline_id: number;
  period_id: number;
  class_id: number;
  justification: string;
}

interface BodyToSendNotes {
  students_id: Array<number>;
  ids_period_discipline_class: IdsPeriodDisciplineClass;
}

interface PeriodType {
  id: number;
  description: string;
  discipline_id: number;
  created_at: Date;
  updated_at: Date;
  discipline_name: string;
}

interface NotesStudents {
  first_job: string[];
  first_test: string[];
  second_job: string[];
  second_test: string[];
}
export interface NotesContextProps {
  saveNotesStudents(body: BodyToSaveNotes): Promise<void>;
  getPeriod(disciplineId: number): Promise<PeriodType[] | undefined>;
  getStudentsNotes(
    disciplineId: number,
    periodId: number
  ): Promise<NotesStudents| undefined>;
}

export const NotesContext = createContext({} as NotesContextProps);

export function NotesProvider({ children }: NotesProviderProps) {
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const toast = useToast();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
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

  async function saveNotesStudents(body: BodyToSaveNotes): Promise<void> {
    const value = converterToSaveNotes(body);
    const value1 = converterToSaveNotesFirstGrade(body);
    const value2 = converterToSaveNotesSecondGrade(body);

    axios.all([
      axios.put(`${urlApi}/studentgrade/firstgrade/${body.ids_period_discipline.discipline_id}/${body.ids_period_discipline.period_id}`, value1, config),
      axios.put(`${urlApi}/studentgrade/secondgrade/${body.ids_period_discipline.discipline_id}/${body.ids_period_discipline.period_id}`, value2, config) 
    ])
    .then(axios.spread((data1, data2) => {
      toast({
        title: "Sucesso ao Cadastrar",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    })).catch(() => {
      toast({
        title: "Sucesso ao Cadastrar",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });

  }

  function agroupStudent(
    data: StudentObject[],
    periodId: number
  ): NotesStudents {
    let temp: any[] = [];
    const notes: any[] = [];

    data.map((o) => {
      if (!temp.includes(o.student_id)) {
        temp.push(o.student_id);
        let object = data.filter((t) => t.student_id === o.student_id);
        object = object.filter((t) => t.period_id === periodId);
        notes.push({
          first_job: object[0].first_job,
          first_test: object[0].first_test,
          second_job: object[0].second_job,
          second_test: object[0].second_test,
          student_id: object[0].student_id,
        });
      }
    });
    
    temp = [];
    const first_job: string[] = [];
    const first_test: string[] = [];
    const second_job: string[] = [];
    const second_test: string[] = [];

    notes.map((o) => {
      if (!temp.includes(o.student_id)) {
        temp.push(o.student_id);
        const object = notes.filter((t) => t.student_id === o.student_id);

        first_job.push(`${object[0].first_job}`);
        first_test.push(`${object[0].first_test}`);
        second_job.push(`${object[0].second_job}`);
        second_test.push(`${object[0].second_test}`);
      }
    });

    const result: NotesStudents = {
      first_job: first_job,
      first_test: first_test,
      second_job: second_job,
      second_test: second_test,
    };

    return result;
  }

  async function getStudentsNotes(
    disciplineId: number,
    periodId: number
  ): Promise<NotesStudents| undefined> {
    try {
      const res = await axios.get(
        `${urlApi}/studentgrade/discipline/${disciplineId}`,
        config
      );
      const responseData: StudentObject[] = res.data;
      return agroupStudent(responseData, periodId);
    } catch (error) {
      toast({
        title: "Erro ao buscar os dados",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <NotesContext.Provider
      value={{
        saveNotesStudents,
        getStudentsNotes,
        getPeriod,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
