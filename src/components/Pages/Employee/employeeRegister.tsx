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
  import React from "react";
  import { Container } from "../../Container";
  import CustomDivider from "../../CustomDivider";
  import { EmployeeDataFragment } from './employeeData';
import { EmployeeContext, EmployeeProvider } from "../../../services";

  export function EmployeeRegister() {
    const methods = useForm();
  
    const {
      handleSubmit,
      formState: { isSubmitting },
    } = methods;
  
    async function onSubmit(data: any): Promise<void> {
      console.log(JSON.stringify( data))
    }
  
    return (
      <EmployeeProvider>

      <React.Fragment>
        <Container padding={15} w={"100%"}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomDivider>
                <Text>Dados do Funcionario</Text>
              </CustomDivider>
              <EmployeeDataFragment />
              <CustomDivider>
                <Text>Endereço do Aluno</Text>
              </CustomDivider>
              <CustomDivider>
                <Text>Financeiro</Text>
              </CustomDivider>
              <CustomDivider>
                <Text>Endereço Financeiro</Text>
              </CustomDivider>
  
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
      </EmployeeProvider>

    );
  }