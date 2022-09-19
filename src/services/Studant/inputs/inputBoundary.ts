import moment from "moment";
import {
  CepInputType,
  CepType,
  FinancialInputType,
  FinancialType,
  StudantInputType,
  StudantType,
  CivilStatusType,
} from "./";

export function CepInput(data: CepInputType): CepType {
  const array: CepType = {
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
  const array: StudantType[] = [];
  data.forEach((element) => {
    const dataFormated = {
      id: element.id,
      name: element.name,
      ra: element.ra,
      email: element.email,
      password: element.password,
      phone: element.telephone,
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
      neighborhood: element.district,
      number: element.number,
      profession: element.profession,
      birth_date: moment(element?.birth_date).format("DD/MM/YYYY"),
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
      status: element.status,
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

export function FinancialInput(data: FinancialInputType): FinancialType {
  const array: FinancialType = {
    id: data.id,
    name: data?.name_financial,
    cpf: data?.cpf_financial,
    address_id: data?.address_id,
    cep: data?.cep,
    city: data?.city,
    state: data?.state,
    address: data?.address,
    neighborhood: data?.district,
    number: data?.number,
  };

  return array;
}