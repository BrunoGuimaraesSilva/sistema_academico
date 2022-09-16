export type StudantRegisterFormValues = {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  cpf?: string;

  cepStudant?: string;
  cityStudant?: string;
  neighborhoodStudant?: string;
  addressStudant?: string;
  stateStudant?: string;
  numberStudant?: string;
  
  cpfFinancial?: string;
  nameFinancial?: string;
  cepFinancial?: string;
  cityFinancial?: string;
  neighborhoodFinancial?: string;
  addressFinancial?: string;
  stateFinancial?: string;
  numberFinancial?: string;

  profession: string;
  birth_date: string;
  birth_place: string;
  father_name: string;
  mother_name: string;
  session: string;
  reservist: string;
  year: string;
  series: string;
  gender_id: string;
  civil_status_id: string;
};
