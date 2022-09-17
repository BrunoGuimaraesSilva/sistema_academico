import { Box, Button, Text } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { Fragment, useContext, useState } from "react";
import { StudantProvider } from "../../../services";
import { Container } from "../../Container";
import CustomDivider from "../../CustomDivider";
import { StudantContext } from './../../../services';
import { FinancialFragment } from "./financial";
import { FinancialAddressFragment } from "./financialAddress";
import { PersonAddressFragment } from "./studantAddress";
import { PersonDataFragment } from "./studantData";
import { PersonalDataFragment } from "./studantPersonalData";
import { StudantRegisterFormValues } from "./studantRegister.interface";

export function StudantRegister() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
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
