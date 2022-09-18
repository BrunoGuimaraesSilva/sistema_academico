import { StudantRegisterFormValues } from "components";
import { ReactNode } from "react";
import { CepType, StudantType, FinancialType } from "./inputs";

export interface StudantProviderProps {
  children: ReactNode;
}

export interface StudantContextProps {
  cep?: CepType;
  getCepData(dados?: string): Promise<CepType | undefined>;
  saveStudantRegister(data: StudantRegisterFormValues): Promise<void>;
  getAllStudants(): Promise<void>;
  getStudantPersonData(id: number): Promise<StudantType | undefined>;
  getStudantFinancialData(id: number): Promise<FinancialType | undefined>;
  inactivateStudant(id: number): Promise<void>;
  allStudants?: StudantType[];
  studant?: StudantType;
  financial?: FinancialType;
}

