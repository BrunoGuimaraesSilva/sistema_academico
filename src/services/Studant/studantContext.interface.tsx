import { StudantRegisterFormValues } from "components";
import { ReactNode } from "react";
import { CepType, StudantType, FinancialType, CivilStatusType, GenderType } from "./inputs";

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
  activateStudant(id: number): Promise<void>;
  editStudant(data: StudantRegisterFormValues): Promise<void>;
  editFinancial(data: StudantRegisterFormValues): Promise<void>;
  getCivilStatus(): Promise<CivilStatusType[] | undefined>;
  getGender(): Promise<GenderType[] | undefined>
  allStudants?: StudantType[];
  studant?: StudantType;
  financial?: FinancialType;
}

