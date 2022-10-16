export interface ProfileType {
  id: string;
  profile: string;
}

export interface CepType {
  cep: string;
  city: string;
  address: string;
  neighborhood: string;
  state: string;
  erro?: string;
}

export interface CepInputType {
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

export interface EmployeeInputType {
  id?: number;
  profile_id?: number;
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
  cpf?: string;
  address_id?: number;
  status?: number;
  profile?: string;
  cep?: string;
  city?: string;
  state?: string;
  address?: string;
  district?: string;
  number?: string;
}

export interface EmployeeType {
  id?: number;
  profile_id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  cpf?: string;
  address_id?: number;
  status?: number;
  profile?: string;
  cep?: string;
  city?: string;
  state?: string;
  address?: string;
  neighborhood?: string;
  number?: string;
}

