import { CepInputType, CepType, StudantInputType, StudantType } from "./";

export function CepInput(data: CepInputType): CepType {
  let array: CepType = {
    cep: data.cep,
    city: data.localidade,
    address: data.logradouro,
    neighborhood: data.bairro,
    state: data.uf,
    erro: data?.erro,
  };

  return array;
}

export function StudantInput(data: StudantInputType[]): StudantType[] {
  const array: StudantInputType[] = [];
  data.forEach((element) => {
    let dataFormated = {
      id: element.id,
      name: element.name,
      ra: element.ra,
      email: element.email,
      password: element.password,
      telephone: element.telephone,
      cpf: element.cpf,
      financial_id: element.financial_id,
      address_id: element.address_id,
      file_document_id: element.file_document_id,
      auxiliary_document_id: element.auxiliary_document_id,
      note: element.note,
      created_at: element.created_at,
      updated_at: element.updated_at,
      cep: element.cep,
      city: element.city,
      state: element.state,
      address: element.address,
      district: element.district,
      number: element.number,
      profession: element.profession,
      birth_date: element.birth_date,
      birth_place: element.birth_place,
      father_name: element.father_name,
      mother_name: element.mother_name,
      session: element.session,
      reservist: element.reservist,
      year: element.year,
      series: element.series,
      gender_id: element.gender_id,
      civil_status_id: element.civil_status_id,
      rg: element.rg,
      voter_registration: element.voter_registration,
      proof_residence: element.proof_residence,
      birth_certificate: element.birth_certificate,
      school_records: element.school_records,
      photograph: element.photograph,
      military_certificate: element.military_certificate,
      regularity_studies: element.regularity_studies,
    };
    array.push(dataFormated);
  });

  return array;
}
