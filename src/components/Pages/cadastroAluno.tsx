import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Switch,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import React from "react";
import { AddressFragment } from "./address";
import { Container } from "./../Container/index";
import { FinancialFragment } from "./financial";
import CustomDivider from "../CustomDivider";
import { PersonDataFragment } from "./personData";

export function CadastroAluno() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  console.log(errors);
  async function onSubmit(data: any): Promise<void> {}

  // useEffect(() => {
  //   if (clientToEdit?.id) {
  //     setValue("id", clientToEdit?.id);
  //     setValue("name", clientToEdit?.name);
  //     setValue("phone", clientToEdit?.phone);
  //     setValue("cpf", clientToEdit?.cpf);
  //     setValue("cep", clientToEdit?.cep, { shouldValidate: false });
  //     setValue("city", clientToEdit?.city);
  //     setValue("state", clientToEdit?.state);
  //     setValue("address", clientToEdit?.address);
  //     setValue("neighborhood", clientToEdit?.neighborhood);
  //     setValue("houseNumber", clientToEdit?.houseNumber);
  //     setValue("email", clientToEdit?.email);
  //     setValue("profile", clientToEdit?.profile);
  //   }

  //   return () => {
  //     reset()
  //     setClientToEdit(defaultUserFormData)
  //   };
  // }, []);

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleSliderChange = (event: { target: { value: string } }) => {
    setTabIndex(parseInt(event.target.value, 10));
  };
  const handleTabsChange = (index: React.SetStateAction<number>) => {
    setTabIndex(index);
  };

  return (
    <React.Fragment>
      <Container padding={15} w={"100%"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomDivider>
            <Text>Dados do Aluno</Text>
          </CustomDivider>
          <PersonDataFragment />
          <CustomDivider>
            <Text>Endereço do Aluno</Text>
          </CustomDivider>
          <AddressFragment />
          <CustomDivider>
            <Text>Financeiro</Text>
          </CustomDivider>
          <FinancialFragment />
          <Button
            colorScheme="blue"
            bg="blue.400"
            color="white"
            isLoading={isSubmitting}
            type="submit"
            w={"full"}
            _hover={{
              bg: "blue.500",
            }}
          >
            123
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
}

// <Box>
// <Wrap spacing={5}>
//   <WrapItem w={"250px"}>
//
//   </WrapItem>
// </Wrap>
// </Box>
