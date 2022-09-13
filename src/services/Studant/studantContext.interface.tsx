import { ReactNode } from "react";

export interface StudantProviderProps {
  children: ReactNode;
}

export interface StudantContextProps {
    cep?: CepResponseType;
    getCepData(dados?: string): Promise<void>;
}

export interface CepResponseType {
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