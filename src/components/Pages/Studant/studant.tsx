import { GButton } from "@/components/Button";
import CustomDivider from "@/components/CustomDivider";
import { StudantContext } from "@/services";
import { StudantType } from "@/services/Studant/inputs";
import {
  Box, List,
  ListIcon,
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
  WrapItem
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';
import { MdCheckCircle } from "react-icons/md";
import { CPFMask, PhoneMask } from '../../../utils/formaters';

export function StudantPage(): JSX.Element {
  const { getAllStudants, allStudants } = useContext(StudantContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [studant, setStudant] = useState<StudantType>();
  const router = useRouter()
  useEffect(() => {
    getAllStudants()
  }, []);

  return (
    <>
      <Box mt={10} pl={'5%'} pr={'5%'}>
        <TableContainer>
          <Table size={'sm'} variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>RA</Th>
                <Th>Nome</Th>
                <Th>CPF</Th>
                <Th>Telefone</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                allStudants?.map((element) => {
                  return (
                    <Tr key={element.id}>
                      <Td isNumeric>{element.id}</Td>
                      <Td>{element.name}</Td>
                      <Td>{CPFMask(element.cpf ?? '')}</Td>
                      <Td>{PhoneMask(element.phone ?? '')}</Td>
                      <Td>
                        <Wrap>
                          <WrapItem>
                            <GButton onClick={() => { onOpen(), setStudant(element), console.log(element) }}>Resumo</GButton>
                          </WrapItem>
                          <WrapItem>
                            <GButton onClick={() => { router.push(`estudante/${element.id}?page=pessoais`) }}>Editar Dados</GButton>
                          </WrapItem>
                          <WrapItem>
                            <GButton onClick={() => { router.push(`estudante/${element.financial_id}?page=financeiro`) }}>Editar Financeiro</GButton>
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
                RA: {studant?.id}
              </ListItem>
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
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Data Aniversario: {studant?.birth_date}
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
