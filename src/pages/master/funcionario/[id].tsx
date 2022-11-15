import CustomDivider from "@/components/CustomDivider";
import { EmployeeRegisterFormValues } from "@/components/Pages/Employee/employeeRegister.interface";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { EmployeeAddressFragment, EmployeeDataFragment, GButton } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ClientContext, EmployeeContext, ScreenControlContext } from "services";

export default function ListEmployee() {
    const { getEmployeeData, editEmployee } = useContext(EmployeeContext);
    const [addressId, setAddressId] = useState<number>();
    const [auxiliaryDocumentId, setAuxiliaryDocumentId] = useState<number>();
    const { LinkItems } = useContext(ScreenControlContext);
    const router = useRouter()
    const { id: number, page } = router.query
    const idUser: number = number ? +number : 0
    const methods = useForm<EmployeeRegisterFormValues>();
    const { userData } = useContext(ClientContext);

    const {
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    async function onSubmit(data: any): Promise<void> {
        const arrayToSend: EmployeeRegisterFormValues = {
            address_id: addressId,
            id: idUser,
            ...data
        }
        editEmployee(arrayToSend)

    }

    function getData() {
        getEmployeeData(idUser).then((data) => {
            console.log(data)
            //Endereco
            setValue("cepEmployee", data?.cep ?? "");
            setValue("stateEmployee", data?.state ?? "");
            setValue("cityEmployee", data?.city ?? "");
            setValue("addressEmployee", data?.address ?? "");
            setValue("neighborhoodEmployee", data?.neighborhood ?? "");
            setValue("numberEmployee", data?.number ?? "");

            //Dados
            setValue("name", data?.name ?? "");
            setValue("email", data?.email ?? "");
            setValue("phone", data?.phone ?? "");
            setValue("cpf", data?.cpf ?? "");

            setAddressId(data?.address_id)
        }).catch(() => {
            router.push('/master/funcionario')
        })
    }



    useEffect(() => {
        getData()
    }, [page]);


    return (
        <Sidebar linkItems={LinkItems} userData={userData}>
            <Box mt={10} pl={'10%'} pr={'10%'}>
                <GButton onClick={() => router.back()}>
                    <ChevronLeftIcon />
                </GButton>
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
