import { useContext, useEffect, useState } from "react";
import { FinancialAddressFragment, FinancialFragment, GButton, PersonAddressFragment, PersonalDataFragment, PersonDataFragment, StudantRegisterFormValues } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { LoadingContext, ScreenControlContext, StudantContext } from "services";
import { useRouter } from "next/router";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Box, Text } from "@chakra-ui/react";
import CustomDivider from "@/components/CustomDivider";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function ListagemEstudantes() {
    const { getStudantPersonData, getStudantFinancialData } = useContext(StudantContext);
    const { loading } = useContext(LoadingContext);
    const { LinkItems } = useContext(ScreenControlContext);
    const router = useRouter()
    const { id: number, page } = router.query
    const idUser: number = number ? +number : 0
    const methods = useForm<StudantRegisterFormValues>();
    const [fragmentToRender, setFragmentToRender] = useState(false);
    const {
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    async function onSubmit(data: any): Promise<void> {
        console.log(data)
    }

    console.log(loading)

    async function getData() {
        if (page == 'pessoais') {
            getStudantPersonData(idUser).then((data) => {
                //Endereco
                setValue("cepStudant", data?.cep ?? "");
                setValue("stateStudant", data?.state ?? "");
                setValue("cityStudant", data?.city ?? "");
                setValue("addressStudant", data?.address ?? "");
                setValue("neighborhoodStudant", data?.neighborhood ?? "");
                setValue("numberStudant", data?.number ?? "");

                //dados
                setValue("name", data?.name ?? "");
                setValue("cpf", data?.cpf ?? "");
                setValue("email", data?.email ?? "");
                setValue("phone", data?.phone ?? "");

                //dados pessoais
                setValue("profession", data?.profession ?? "");
                setValue("birth_date", data?.birth_date ?? "");
                setValue("birth_place", data?.birth_place ?? "");
                setValue("father_name", data?.father_name ?? "");
                setValue("mother_name", data?.mother_name ?? "");
                setValue("session", data?.session ?? "");
                setValue("reservist", data?.reservist ?? "");
                setValue("year", `${data?.year}` ?? "");
                setValue("series", data?.series ?? "");

                setFragmentToRender(true)
            })
        }

        if (page == 'financeiro') {
            getStudantFinancialData(idUser).then((data) => {
                //Endereco
                setValue("cepFinancial", data?.cep ?? "");
                setValue("stateFinancial", data?.state ?? "");
                setValue("cityFinancial", data?.city ?? "");
                setValue("addressFinancial", data?.address ?? "");
                setValue("neighborhoodFinancial", data?.neighborhood ?? "");
                setValue("numberFinancial", data?.number ?? "");

                //Dados
                setValue("cpfFinancial", data?.cpf ?? "");
                setValue("nameFinancial", data?.name ?? "");

            })
        }

    }



    useEffect(() => {
        getData()
    }, [page]);

    function getPage() {
        if (page == 'pessoais') {
            return (
                <>
                    <CustomDivider>
                        <Text>Dados</Text>
                    </CustomDivider>
                    <PersonDataFragment />
                    <CustomDivider>
                        <Text>Dados Pessoais</Text>
                    </CustomDivider>
                    <PersonalDataFragment />
                    <CustomDivider>
                        <Text>Endereço</Text>
                    </CustomDivider>
                    <PersonAddressFragment />
                </>
            )
        }

        if (page == 'financeiro') {
            return (
                <>
                    <CustomDivider>
                        <Text>Financeiro</Text>
                    </CustomDivider>
                    <FinancialFragment />
                    <CustomDivider>
                        <Text>Endereço Financeiro</Text>
                    </CustomDivider>
                    <FinancialAddressFragment />
                </>
            )
        }

        return <></>
    }

    return (
        <Sidebar linkItems={LinkItems}>
            <Box mt={10} pl={'10%'} pr={'10%'}>
                <GButton onClick={() => router.back()}>
                    <ChevronLeftIcon />
                </GButton>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {getPage()}
                        <Box m={10}>
                            <GButton
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
                            </GButton>
                        </Box>
                    </form>

                </FormProvider>
            </Box>
        </Sidebar>
    );
}