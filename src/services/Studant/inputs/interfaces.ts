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

export interface StudantInputType {
  id: number;
  name: string;
  ra: string;
  email: string;
  password: string;
  telephone: string;
  cpf: string;
  financial_id: number;
  address_id: number;
  file_document_id: number;
  auxiliary_document_id: number;
  note: string;
  created_at: Date;
  updated_at: Date;
  cep: string;
  city: string;
  state: string;
  address: string;
  district: string;
  number: string;
  profession: string;
  birth_date: string;
  birth_place: string;
  father_name: string;
  mother_name: string;
  session: string;
  reservist: string;
  year: number;
  series: string;
  gender_id: number;
  civil_status_id: number;
  rg: string;
  voter_registration: string;
  proof_residence: string;
  birth_certificate: string;
  school_records: string;
  photograph: string;
  military_certificate: string;
  regularity_studies: string;
}

export interface StudantType {
  id: number;
  name: string;
  ra: string;
  email: string;
  password: string;
  telephone: string;
  cpf: string;
  financial_id: number;
  address_id: number;
  file_document_id: number;
  auxiliary_document_id: number;
  note: string;
  created_at: Date;
  updated_at: Date;
  cep: string;
  city: string;
  state: string;
  address: string;
  district: string;
  number: string;
  profession: string;
  birth_date: string;
  birth_place: string;
  father_name: string;
  mother_name: string;
  session: string;
  reservist: string;
  year: number;
  series: string;
  gender_id: number;
  civil_status_id: number;
  rg: string;
  voter_registration: string;
  proof_residence: string;
  birth_certificate: string;
  school_records: string;
  photograph: string;
  military_certificate: string;
  regularity_studies: string;
}

export interface CepType {
  cep: string;
  city: string;
  address: string;
  neighborhood: string;
  state: string;
  erro?: string;
}
