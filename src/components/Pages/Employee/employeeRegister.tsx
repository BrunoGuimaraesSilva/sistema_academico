import {
  Box,
  Button, Text
} from "@chakra-ui/react";
import { Fragment, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EmployeeProvider, EmployeeContext } from "../../../services";
import { Container } from "../../Container";
import CustomDivider from "../../CustomDivider";
import { EmployeeRegisterFormValues } from "./employeeRegister.interface";
import { EmployeeAddressFragment, EmployeeDataFragment } from './Fragment';

  export function EmployeeRegister(): JSX.Element {
    const methods = useForm();
    const { saveStudantRegister } = useContext(EmployeeContext);
  
    const {
      handleSubmit,
      formState: { isSubmitting },
    } = methods;
  
    async function onSubmit(data: EmployeeRegisterFormValues): Promise<void> {
      saveStudantRegister(data);
    }
  
    return (
      <EmployeeProvider>

      <Fragment>
        <Container padding={15} w={"100%"}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomDivider>
                <Text>Dados do Funcionario</Text>
              </CustomDivider>
              <EmployeeDataFragment />
              <CustomDivider>
                <Text>Endereço do Funcionario</Text>
              </CustomDivider>
              <EmployeeAddressFragment />  
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
      </Fragment>
      </EmployeeProvider>

    );
  }