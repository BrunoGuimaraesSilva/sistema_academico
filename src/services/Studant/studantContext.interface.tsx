import { StudantRegisterFormValues } from "components";
import { ReactNode } from "react";
import { CepType, StudantType } from "./inputs";

export interface StudantProviderProps {
  children: ReactNode;
}

export interface StudantContextProps {
  cep?: CepType;
  getCepData(dados?: string): Promise<void>;
  saveStudantRegister(data: StudantRegisterFormValues): Promise<void>
  getAllStudants(): Promise<void>
  allStudants?: StudantType[]
}

