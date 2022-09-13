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
import { PersonAddressFragment } from "./personAddress";
import { Container } from "../../Container";
import { FinancialFragment } from "./financial";
import CustomDivider from "../../CustomDivider";
import { PersonDataFragment } from "./personData";
import { StudantRegisterFormValues } from "./studantRegister.interface";

export function StudantRegister() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const methods = useForm<StudantRegisterFormValues>();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  async function onSubmit(data: any): Promise<void> {}

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
