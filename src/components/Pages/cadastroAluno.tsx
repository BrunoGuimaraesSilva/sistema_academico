import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  Toast,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import React from "react";
import { StudantContext } from "../../services/studantContext";
import { AddressFragment } from "./address";

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

  const { cep, getCepData } = useContext(StudantContext);
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
      <Tabs index={tabIndex} onChange={handleTabsChange} variant="enclosed">
        <TabList mb="1em">
          <Tab>Pessoa</Tab>
          <Tab>Endereço</Tab>
        </TabList>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TabPanels>
            <TabPanel>
              <SimpleGrid minChildWidth="120px" spacing="40px">
                <Box>
                  <Wrap>
                    <WrapItem w={"250px"} h={"100px"}>
                      <FormControl isInvalid={false}>
                        <FormLabel>Nome</FormLabel>
                        <InputGroup>
                          <InputLeftElement>
                            <BsPerson />
                          </InputLeftElement>
                          <Input
                            id="name"
                            placeholder="Seu Nome Completo"
                            {...register("name", {
                              required: "Preencha o campo de nome",
                              minLength: {
                                value: 4,
                                message: "Preencha corretamente o campo",
                              },
                            })}
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {/*  {errors.name && errors.name.message} */}
                        </FormErrorMessage>
                      </FormControl>
                    </WrapItem>
                  </Wrap>
                </Box>

                <Box>
                  <Wrap spacing={5}>
                    <WrapItem w={"250px"} h={"380px"}>
                      <FormControl isInvalid={false}>
                        <FormLabel>Conteúdo</FormLabel>
                        <InputGroup>
                          <Textarea
                            resize={"none"}
                            id="body"
                            size="sm"
                            h={"300px"}
                            placeholder="Seu Conteúdo"
                            {...register("body", {
                              required: "Preencha o campo de Conteúdo",
                            })}
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {/* {errors.body && errors.body.message} */}
                        </FormErrorMessage>
                      </FormControl>
                    </WrapItem>
                  </Wrap>
                </Box>

                <Box>
                  <Wrap>
                    <WrapItem w={"250px"} h={"100px"}>
                      <FormControl isInvalid={false}>
                        <FormLabel>Status</FormLabel>
                        <InputGroup>
                          <Switch {...register("status")} size="lg" />
                        </InputGroup>
                        <FormErrorMessage>
                          {/* {errors.status && errors.status.message} */}
                        </FormErrorMessage>
                      </FormControl>
                    </WrapItem>
                  </Wrap>
                </Box>
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <AddressFragment />
            </TabPanel>
          </TabPanels>
        </form>
      </Tabs>
    </React.Fragment>
  );
}

// <Box>
// <Wrap spacing={5}>
//   <WrapItem w={"250px"}>
//     <Button
//       colorScheme="blue"
//       bg="blue.400"
//       color="white"
//       isLoading={isSubmitting}
//       type="submit"
//       w={"full"}
//       _hover={{
//         bg: "blue.500",
//       }}
//     >
//       123
//     </Button>
//   </WrapItem>
// </Wrap>
// </Box>
