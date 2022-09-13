import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Toast,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import InputMask from "react-input-mask";
import uf from "../../assets/uf.json";
import { MdOutlineHouse, MdOutlineLocationCity } from "react-icons/md";
import { useForm } from "react-hook-form";
import { CepResponseType, StudantContext } from "../../services";

export function FinancialFragment() {

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <React.Fragment>
      
      <Wrap mt={15} spacing={5}>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={true}>
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
              {/* {errors.cep && errors.cep.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={false}>
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
              {/* {errors.city && errors.city.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

      </Wrap>
    </React.Fragment>
  );
}
