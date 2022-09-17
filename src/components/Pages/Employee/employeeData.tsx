import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { useContext, Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineLocationCity } from "react-icons/md";
import InputMask from "react-input-mask";
import { EmployeeContext } from './../../../services/Employee/employeeContext';
import { EmployeeRegisterFormValues } from "./employeeRegister.interface";

export function EmployeeDataFragment(): JSX.Element {

  const { profile } = useContext(EmployeeContext);

  const {
    register,
    formState: { errors },
  } = useFormContext<EmployeeRegisterFormValues>();

  
  return (
    <Fragment>
      <Wrap justify='center' mt={15} spacing={5}>

      <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.profile}>
            <FormLabel>Perfil</FormLabel>
            <InputGroup>
              <Select
                id="id"
                placeholder="Selecione seu perfil"
                {...register("profile", {
                  required: "Selecione o seu perfil",
                })}
              >
                {profile?.map((data): JSX.Element => {
                  return (
                    <option key={data.id} id={data.id} value={data.id}>
                      {data.profile}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
            <FormErrorMessage>
              {errors.profile && errors.profile.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Nome</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Nome"
                {...register("name", {
                  required: "Preencha o campo de Nome",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.name && errors?.name.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.cpf}>
            <FormLabel>CPF</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu CPF"
                mask="999.999.999-99"
                {...register("cpf", {
                  required: "Preencha o campo de CPF",
                  minLength: 11,
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.cpf && errors.cpf.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Email"
                type="email"
                {...register("email", {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Não é um email valido",
                  },
                  required: "Preencha o campo de Email",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Sua senha"
                {...register("password", {
                  required: "Preencha o campo de senha",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel>Telefone</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu Telefone"
                mask="(99) 99999-9999"
                {...register("phone", {
                  required: "Preencha o campo de Telefone",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
      </Wrap>
    </Fragment>
  );
}
