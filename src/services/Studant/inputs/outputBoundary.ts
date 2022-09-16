import { StudantRegisterFormValues } from "components";

export function converterToCreateUser(data: StudantRegisterFormValues) {
    let array = {
        name: data?.name,
        phone: data?.phone ? data?.phone.replace(/\D/g, "") : '',
        email: data?.email,
        password: data?.password,
        cpf: data?.cpf ? data?.cpf.replace(/\D/g, "") : '',
      
        cepStudant: data?.cepStudant ? data?.cepStudant.replace(/\D/g, "") : '',
        cityStudant: data?.cityStudant,
        neighborhoodStudant: data?.neighborhoodStudant,
        addressStudant: data?.addressStudant,
        stateStudant: data?.stateStudant,
        numberStudant: data?.numberStudant,
        
        cpfFinancial: data?.cpfFinancial ? data?.cpfFinancial.replace(/\D/g, "") : '',
        nameFinancial: data?.nameFinancial,
        cepFinancial: data?.cepFinancial ? data?.cepFinancial.replace(/\D/g, "") : '',
        cityFinancial: data?.cityFinancial,
        neighborhoodFinancial: data?.neighborhoodFinancial,
        addressFinancial: data?.addressFinancial,
        stateFinancial: data?.stateFinancial,
        numberFinancial: data?.numberFinancial,
      
        profession: data?.profession,
        birth_date: data?.birth_date,
        birth_place: data?.birth_place,
        father_name: data?.father_name,
        mother_name: data?.mother_name,
        session: data?.session,
        reservist: data?.reservist,
        year: data?.year,
        series: data?.series,
        gender_id: data?.gender_id,
        civil_status_id: data?.civil_status_id,
    }
    
    return array
  }