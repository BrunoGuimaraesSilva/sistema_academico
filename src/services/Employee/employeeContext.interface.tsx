import { EmployeeRegisterFormValues } from "@/components/Pages/Employee/employeeRegister.interface";
import { ReactNode } from "react";
import { CepType, EmployeeType, ProfileType } from "./inputs";

export interface EmployeeProviderProps {
  children: ReactNode;
}

export interface EmployeeContextProps {
  profile?: ProfileType[];
  getCepData(dados?: string): Promise<CepType | undefined>;
  getAllEmployee(): Promise<void>;
  allEmployees?: EmployeeType[];
  inactivateEmployee(id: number | undefined): Promise<void>;
  activateEmployee(id: number | undefined): Promise<void>;
  getEmployeeData(id: number): Promise<EmployeeType | undefined>;
  editEmployee(data: EmployeeRegisterFormValues): Promise<void>;
  saveStudantRegister(data: EmployeeRegisterFormValues): Promise<void>
}

