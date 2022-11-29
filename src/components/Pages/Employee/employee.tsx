import { GButton } from "@/components/Button";
import CustomDivider from "@/components/CustomDivider";
import { EmployeeContext } from "@/services";
import { EmployeeType } from "@/services/Employee/inputs";
import {
    Box, Icon, IconProps, List,
    ListIcon, ListItem,
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
    WrapItem
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';
import { MdCheckCircle } from "react-icons/md";
import { CPFMask, PhoneMask } from '../../../utils/formaters';

export function EmployeePage(): JSX.Element {
  const { getAllEmployee, allEmployees, inactivateEmployee, activateEmployee } = useContext(EmployeeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [studant, setStudant] = useState<EmployeeType>();
  const router = useRouter();

  const CircleIcon = (props: IconProps) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )

  useEffect(() => {
    getAllEmployee();
  }, []);

  return (
    <>
      <Box mt={10} pl={'5%'} pr={'5%'}>
        <GButton ml='auto' mr="0" display='block' onClick={() => { router.push(`funcionario/cadastro`) }}>
          Cadastro de Funcionario
        </GButton>
        <TableContainer>
          <Table size={'sm'} variant="simple">
            <Thead>
              <Tr>
                <Th>Ativo</Th>
                <Th isNumeric>ID</Th>
                <Th>Nome</Th>
                <Th>CPF</Th>
                <Th>Telefone</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                allEmployees?.map((element) => {
                  return (
                    <Tr key={element.id}>
                      <Td>{element.status === 0 ? (<CircleIcon boxSize={8} color='red.500' />) : (<CircleIcon boxSize={8} color='green.500' />)}  </Td>
                      <Td isNumeric>{element.id}</Td>
                      <Td>{element.name}</Td>
                      <Td>{CPFMask(element.cpf ?? '')}</Td>
                      <Td>{PhoneMask(element.phone ?? '')}</Td>
                      <Td>
                        <Wrap>
                          <WrapItem>
                            <GButton onClick={() => { onOpen(), setStudant(element)}}>Resumo</GButton>
                          </WrapItem>
                          <WrapItem>
                            <GButton onClick={() => { router.push(`funcionario/${element.id}`) }}>Editar Dados</GButton>
                          </WrapItem>
                          <WrapItem>
                            <GButton onClick={() => { element.status === 0 ? activateEmployee(element?.id) : inactivateEmployee(element?.id)}}>{element.status === 0 ? (<Text> Ativar Funcinario</Text>) : (<Text> Inativar Funcinario</Text>)}</GButton>
                          </WrapItem>
                        </Wrap>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Tbody>

          </Table>
        </TableContainer>
      </Box>


      <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dados Pessoais</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Nome: {studant?.name}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                CPF: {CPFMask(studant?.cpf ?? '')}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Telefone: {PhoneMask(studant?.phone ?? '')}
              </ListItem>
              <CustomDivider>
                <Text>Endereço:</Text>
              </CustomDivider>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Cidade: {studant?.city} - {studant?.state}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Endereço: {studant?.address}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Bairro: {studant?.neighborhood}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Número: {studant?.number}
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <GButton colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </GButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
