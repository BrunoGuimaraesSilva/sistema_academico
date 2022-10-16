import { EmployeeRegisterFormValues } from "@/components/Pages/Employee/employeeRegister.interface";
import { CepInputType, CepType } from "./interfaces";

export function converterToEditEmployee(data: EmployeeRegisterFormValues) {
  const array = {
    profile_id: data.id,
    name: data.name,
    email: data.email,
    telephone: data?.phone ? data?.phone.replace(/\D/g, "") : "",
    cpf: data?.cpf ? data?.cpf.replace(/\D/g, "") : "",
    address: {
      id_address: data.address_id,
      cep: data?.cepEmployee ? data?.cepEmployee.replace(/\D/g, "") : "",
      city: data.cityEmployee,
      district: data.neighborhoodEmployee,
      address: data.addressEmployee,
      state: data.stateEmployee,
      number: data.numberEmployee,
    },
  };

  return array;
}



export function converterToSaveEmployee(data: EmployeeRegisterFormValues) {
  const array = {
    profile_id: data.profile,
    name: data.name,
    email: data.email,
    telephone: data?.phone ? data?.phone.replace(/\D/g, "") : "",
    cpf: data?.cpf ? data?.cpf.replace(/\D/g, "") : "",
    address: {
      cep: data?.cepEmployee ? data?.cepEmployee.replace(/\D/g, "") : "",
      city: data.cityEmployee,
      district: data.neighborhoodEmployee,
      address: data.addressEmployee,
      state: data.stateEmployee,
      number: data.numberEmployee,
    },
  };

  return array;
}



