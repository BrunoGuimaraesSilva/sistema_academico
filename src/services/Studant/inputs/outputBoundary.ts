import { StudantRegisterFormValues } from "components";
import moment from "moment";

export function converterToCreateUser(data: StudantRegisterFormValues) {
  const array = {
    name: data?.name,
    telephone: data?.phone ? data?.phone.replace(/\D/g, "") : "",
    email: data?.email,
    cpf: data?.cpf ? data?.cpf.replace(/\D/g, "") : "",
    studentAddress: {
      cep: data?.cepStudant ? data?.cepStudant.replace(/\D/g, "") : "",
      city: data?.cityStudant,
      district: data?.neighborhoodStudant,
      address: data?.addressStudant,
      state: data?.stateStudant,
      number: data?.numberStudant,
    },
    financial: {
      cpf_financial: data?.cpfFinancial ? data?.cpfFinancial.replace(/\D/g, "") : "",
      name_financial: data?.nameFinancial,
    },
    financialAddress: {
      cep: data?.cepFinancial ? data?.cepFinancial.replace(/\D/g, "") : "",
      city: data?.cityFinancial,
      district: data?.neighborhoodFinancial,
      address: data?.addressFinancial,
      state: data?.stateFinancial,
      number: data?.numberFinancial,
    },
    profession: data?.profession,
    birth_date: moment(data?.birth_date).format("YYYY-MM-DD"),
    birth_place: data?.birth_place,
    father_name: data?.father_name,
    mother_name: data?.mother_name,
    session: data?.session,
    reservist: data?.reservist,
    year: +data?.year,
    series: data?.series,
    note: "",
  };

  return array;
}
