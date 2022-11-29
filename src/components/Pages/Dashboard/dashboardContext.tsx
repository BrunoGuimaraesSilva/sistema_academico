import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
export interface DashboardProviderProps {
  children: JSX.Element;
}
export interface StudentObject {
  id: number;
  first_test: number;
  second_test: number;
  first_job: number;
  second_job: number;
  presence_grade: number;
  note: string;
  discipline_id: number;
  period_id: number;
  student_id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  discipline_name: string;
  description: string;
  studentApprove: boolean;
}

export interface GroupByStudents {
  id: number;
  discipline_name: string;
  student_id: number;
  name: string;
  element: StudentObject[];
}
export interface DashboardContextProps {
  getStudents(id: number): Promise<GroupByStudents[] | undefined>;
}




export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const urlApi = "https://site-lvhq52xtpa-uc.a.run.app/api";
  const cookies = parseCookies();
  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const toast = useToast();

  function agroupStudent(data: StudentObject[]): GroupByStudents[] {
    const temp: any[] = [];
    const result: any[] = [];

    data.map((o) => {
      if (!temp.includes(o.student_id)) {
        temp.push(o.student_id);
        const object = data.filter((t) => t.student_id === o.student_id);
        
        object.map((data, index) => {
          const first = data.first_job + data.first_test
          const second = data.second_job + data.second_test;
          const approveResult =(first + second) / 2 >= 7
          object[index].studentApprove = approveResult;
        })

        result.push({
          student_id: o.student_id,
          name: o.name,
          discipline_name: o.discipline_name,
          element: object,
        });
      }
    });
    return result;
  }

  async function getStudents(
    id: number
  ): Promise<GroupByStudents[] | undefined> {
    try {
      const res = await axios.get(
        `${urlApi}/studentgrade/discipline/${id}`,
        config
      );
      const responseData: StudentObject[] = res.data;
      return agroupStudent(responseData);
    } catch (error) {
      toast({
        title: "Erro ao buscar os dados",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  async function saveNotesStudents(
    id: number
  ): Promise<GroupByStudents[] | undefined> {
    try {
      const res = await axios.get(
        `${urlApi}/studentgrade/discipline/${id}`,
        config
      );
      const responseData: StudentObject[] = res.data;
      return agroupStudent(responseData);
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
    <DashboardContext.Provider
      value={{
        getStudents,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
