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
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { BsPerson } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import React from "react";
import { PersonAddressFragment } from "./studantAddress";
import { Container } from "../../Container";
import { FinancialFragment } from "./financial";
import CustomDivider from "../../CustomDivider";
import { PersonDataFragment } from "./studantData";
import { StudantRegisterFormValues } from "./studantRegister.interface";
import { FinancialAddressFragment } from "./financialAddress";

export function StudantRegister() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const methods = useForm<StudantRegisterFormValues>();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  async function onSubmit(data: any): Promise<void> {
    console.log(JSON.stringify( data))
  }

  return (
    <React.Fragment>
      <Container padding={15} w={"100%"}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomDivider>
              <Text>Dados do Aluno</Text>
            </CustomDivider>
            <PersonDataFragment />
            <CustomDivider>
              <Text>Endereço do Aluno</Text>
            </CustomDivider>
            <PersonAddressFragment />
            <CustomDivider>
              <Text>Financeiro</Text>
            </CustomDivider>
            <FinancialFragment />
            <CustomDivider>
              <Text>Endereço Financeiro</Text>
            </CustomDivider>
            <FinancialAddressFragment />

            <Box m={10}>
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
                Enviar
              </Button>
            </Box>
          </form>
        </FormProvider>
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
