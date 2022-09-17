import { ReactNode } from "react";

export interface EmployeeProviderProps {
  children: ReactNode;
}
export interface ProfileResponseType {
  id: string;
  profile: string;
  created_at: string;
  updated_at: string;
}

export interface CepResponseEmployeeType {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: string;
}
export interface EmployeeContextProps {
  profile?: ProfileResponseType[];
  cep?: CepResponseEmployeeType;
  getCepData(dados?: string): Promise<void>;
}

