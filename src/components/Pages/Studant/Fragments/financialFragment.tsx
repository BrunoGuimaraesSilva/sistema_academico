import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input, InputGroup,
  InputLeftElement, Wrap,
  WrapItem
} from "@chakra-ui/react";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineLocationCity } from "react-icons/md";
import InputMask from "react-input-mask";
import { StudantRegisterFormValues } from "../studantRegister.interface";

export function FinancialFragment(): JSX.Element {

  const {
    register,
    formState: { errors },
  } = useFormContext<StudantRegisterFormValues>();

  return (
    <Fragment>

      <Wrap justify='center' mt={15} spacing={5}>
        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.cpfFinancial}>
            <FormLabel>CPF</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu CPF"
                mask="999.999.999-99"
                {...register("cpfFinancial", {
                  required: "Preencha o campo de CPF",
                  minLength: 11,
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.cpfFinancial && errors.cpfFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.nameFinancial}>
            <FormLabel>Nome</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Nome"
                {...register("nameFinancial", {
                  required: "Preencha o campo de Nome",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.nameFinancial && errors.nameFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

      </Wrap>
    </Fragment>
  );
}
