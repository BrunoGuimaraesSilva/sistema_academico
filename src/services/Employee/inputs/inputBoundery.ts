import {
  CepInputType,
  CepType,
  EmployeeInputType,
  EmployeeType,
} from "./interfaces";

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

export function EmployeeInput(data: EmployeeInputType[]): EmployeeType[] {
  const array: EmployeeType[] = [];
  data.forEach((element) => {
    const dataFormated = {
      id: element.id,
      profile_id: element.profile_id,
      name: element.name,
      email: element.email,
      phone: element.telephone,
      cpf: element.cpf,
      address_id: element.address_id,
      status: element.status,
      profile: element.profile,
      cep: element.cep,
      city: element.city,
      state: element.state,
      address: element.address,
      neighborhood: element.district,
      number: element.number,
    };

    array.push(dataFormated);
  });

  return array;
}
