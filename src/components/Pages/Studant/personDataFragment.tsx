import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineLocationCity } from "react-icons/md";
import InputMask from "react-input-mask";
import { StudantRegisterFormValues } from "./studantRegister.interface";

export function PersonDataFragment() {
  const {
    register,
    formState: { errors },
  } = useFormContext<StudantRegisterFormValues>();

  
  return (
    <Fragment>
      <Wrap justify='center' mt={15} spacing={5}>
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
{/* 
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
        </WrapItem> */}

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
