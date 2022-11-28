import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { parseCookies } from "nookies";
import { createContext } from "react";
import { bodyToSaveNotes, converterToSaveNotes } from "./outputBoundery";

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


export interface NotesContextProps {
  saveNotesStudents(body: bodyToSaveNotes): Promise<void>;
  getPeriod(disciplineId: number): Promise<PeriodType[] | undefined>;
}

export const NotesContext = createContext({} as NotesContextProps);

export function NotesProvider({ children }: NotesProviderProps) {
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const toast = useToast()
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getPeriod(disciplineId: number): Promise<PeriodType[] | undefined> {
    try {
      const res = await axios.get(`${urlApi}/period/discipline/${disciplineId}` , config)
      const responseData: PeriodType[] = res.data
      return responseData
    } catch (error) {
      toast({
        title: 'Erro ao buscar os periodos',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }


  async function saveNotesStudents(body: bodyToSaveNotes): Promise<void> {
    const value = converterToSaveNotes(body);

    console.log(value)
    try {
      const res = axios.post(`${urlApi}/studentgrade`, value, config).then((data) => {
        console.log(data)
        toast({
          title: 'Sucesso ao Cadastrar',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      });
    } catch (error) {
      console.log(error)

      toast({
        title: 'Erro ao salvar',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <NotesContext.Provider
      value={{
        saveNotesStudents,
        getPeriod      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
