import { GButton } from "@/components/Button";
import {
  Box, List,
  ListIcon,
  Icon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table, TableContainer,
  Tbody,
  Td,
  Text, Th,
  Thead,
  Tr,
  useDisclosure,
  Wrap,
  WrapItem,
  IconProps,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  IconButton,
  UseDisclosureProps,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Select
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { MdCheckCircle, MdOutlineLocationCity } from "react-icons/md";
import { ModalContext } from "../ModalContext";
import { CoursesContext, EmployeeObject } from "./coursesContext";


export function CoursesModal(): JSX.Element {
  const { ModalState, setModalState } = useContext(ModalContext);
  const { getEmployees } = useContext(CoursesContext);
  const [employee, setEmployee] = useState<EmployeeObject[]>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>();



  useEffect(() => {
    getEmployees().then((data): void => {
      setEmployee(data)
    });
  }, []);


  async function onSubmit(data: any): Promise<void> {
    console.log(data)
    // saveStudantRegister(data);
  }


  return (
    <Modal size={'xl'} isOpen={ModalState} onClose={() => { setModalState(false) }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastro de Cursos</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Wrap justify='center' mt={15} spacing={5}>
              <WrapItem w={"250px"} h={"100px"}>
                <FormControl isInvalid={!!errors.courseName}>
                  <FormLabel>Nome do Curso</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdOutlineLocationCity />
                    </InputLeftElement>
                    <Input
                      placeholder="Nome do Curso"
                      {...register("courseName", {
                        required: "Preencha o campo de nome do Curso",
                        minLength: 11,
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {/* {errors.courseName && errors.courseName.message} */}
                  </FormErrorMessage>
                </FormControl>
              </WrapItem>

              <WrapItem w={"250px"} h={"100px"}>
                <FormControl isInvalid={!!errors.employeeId}>
                  <FormLabel>Coordenador</FormLabel>
                  <InputGroup>
                    <Select
                      id="id"
                      placeholder="Selecione seu perfil"
                      {...register("employeeId", {
                        required: "Selecione o seu perfil",
                      })}
                    >
                      {employee?.map((data): JSX.Element => {
                        return (
                          <option key={data.id} id={`${data.id}`} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                    </Select>
                  </InputGroup>
                  <FormErrorMessage>
                    {/* {errors.employeeId && errors.employeeId.message} */}
                  </FormErrorMessage>
                </FormControl>
              </WrapItem>
            </Wrap>
          </form>
        </ModalBody>

        <ModalFooter>
          <GButton colorScheme='blue' mr={3} onClick={() => { setModalState(false) }}>
            Fechar
          </GButton>
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}