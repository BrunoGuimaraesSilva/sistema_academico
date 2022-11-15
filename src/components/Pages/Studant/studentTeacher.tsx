import { GButton } from "@/components/Button";
import CustomDivider from "@/components/CustomDivider";
import { StudantContext } from "@/services";
import { StudantType } from "@/services/Studant/inputs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box, Button, Icon, IconProps, List,
  ListIcon, ListItem, Menu,
  MenuButton, MenuItem, MenuList, Modal,
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
  useDisclosure
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';
import { MdCheckCircle } from "react-icons/md";
import { CPFMask, PhoneMask } from '../../../utils/formaters';

export function StudantPageTeacher(): JSX.Element {
  const { getAllStudants, allStudants } = useContext(StudantContext);
  const {
    isOpen: isOpenResume,
    onOpen: onOpenResume,
    onClose: onCloseResume
  } = useDisclosure();

  const {
    isOpen: isOpenAbsence,
    onOpen: onOpenAbsence,
    onClose: onCloseAbsence
  } = useDisclosure();
  
  const {
    isOpen: isOpenNotes,
    onOpen: onOpenNotes,
    onClose: onCloseNotes
  } = useDisclosure();

  const [studant, setStudant] = useState<StudantType>();
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
    getAllStudants();
  }, []);

  return (
    <>
      <Box mt={10} pl={'5%'} pr={'5%'}>
        <TableContainer>
          <Table size={'sm'} variant="simple">
            <Thead>
              <Tr>
                <Th>Ativo</Th>
                <Th isNumeric>RA</Th>
                <Th>Nome</Th>
                <Th>Aniversário</Th>
                <Th>Telefone</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                allStudants?.map((element) => {
                  return (
                    <Tr key={element.id}>
                      <Td>{element.status === 0 ? (<CircleIcon boxSize={8} color='red.500' />) : (<CircleIcon boxSize={8} color='green.500' />)}  </Td>
                      <Td isNumeric>{element.id}</Td>
                      <Td>{element.name}</Td>
                      <Td>{element.birth_date ?? ''}</Td>
                      <Td>{PhoneMask(element.phone ?? '')}</Td>
                      <Td>
                        <Menu>
                          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Ações
                          </MenuButton>
                          <MenuList>
                            <MenuItem onClick={() => { onOpenResume(), setStudant(element) }}>
                              Resumo
                            </MenuItem>
                            <MenuItem onClick={() => { onOpenAbsence() }}>
                              Lançamento de faltas
                            </MenuItem>
                            <MenuItem onClick={() => { onOpenNotes() }}>
                              Lançamento de notas
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Tbody>

          </Table>
        </TableContainer>
      </Box>


      <Modal size={'xl'} isOpen={isOpenResume} onClose={onCloseResume}>
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
                Telefone: {PhoneMask(studant?.phone ?? '')}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Data Aniversario: {studant?.birth_date}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Cidade: {studant?.city} - {studant?.state}
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <GButton colorScheme='blue' mr={3} onClick={onCloseResume}>
              Fechar
            </GButton>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal size={'xl'} isOpen={isOpenAbsence} onClose={onCloseAbsence}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Faltas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <GButton colorScheme='blue' mr={3} onClick={onCloseAbsence}>
              Fechar
            </GButton>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal size={'xl'} isOpen={isOpenNotes} onClose={onCloseNotes}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <GButton colorScheme='blue' mr={3} onClick={onCloseNotes}>
              Fechar
            </GButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
