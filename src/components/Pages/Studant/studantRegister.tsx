import { Box, Button, Text } from "@chakra-ui/react";
import { Fragment, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StudantProvider } from "../../../services";
import { Container } from "../../Container";
import CustomDivider from "../../CustomDivider";
import { StudantContext } from './../../../services';
import { FinancialAddressFragment, FinancialFragment, PersonAddressFragment, PersonalDataFragment, PersonDataFragment } from "./Fragments";
import { StudantRegisterFormValues } from "./studantRegister.interface";

export function StudantRegister() {
  const methods = useForm<StudantRegisterFormValues>();
  const { saveStudantRegister } = useContext(StudantContext);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  async function onSubmit(data: StudantRegisterFormValues): Promise<void> {
    saveStudantRegister(data)
  }

  return (
    <StudantProvider>
      <Fragment>
        <Container padding={15} w={"100%"}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomDivider>
                <Text>Dados do Aluno</Text>
              </CustomDivider>
              <PersonDataFragment />
              <CustomDivider>
                <Text>Dados Pessoais do Aluno</Text>
              </CustomDivider>
              <PersonalDataFragment />
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
      </Fragment>
    </StudantProvider>
  );
}
