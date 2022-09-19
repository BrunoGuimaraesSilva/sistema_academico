export type StudantRegisterFormValues = {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  cpf?: string;

  addressIdStudant?: number;
  cepStudant?: string;
  cityStudant?: string;
  neighborhoodStudant?: string;
  addressStudant?: string;
  stateStudant?: string;
  numberStudant?: string;

  addressIdFinancial?: number;
  idFinancial?: number;
  cpfFinancial?: string;
  nameFinancial?: string;
  cepFinancial?: string;
  cityFinancial?: string;
  neighborhoodFinancial?: string;
  addressFinancial?: string;
  stateFinancial?: string;
  numberFinancial?: string;

  auxiliaryDocumentId?: number
  profession: string;
  birth_date: string;
  birth_place: string;
  father_name: string;
  mother_name: string;
  session: string;
  reservist: string;
  year: string;
  series: string;
  gender: string;
  civil_status: string;
  
};
