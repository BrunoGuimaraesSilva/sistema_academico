import { GButton } from "@/components/Button";
import CustomDivider from "@/components/CustomDivider";
import { StudantContext } from "@/services";
import { StudantType } from "@/services/Studant/inputs";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  IconButton
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';
import { MdCheckCircle } from "react-icons/md";
import { CPFMask, PhoneMask } from '../../../../utils/formaters';
import { DisciplineModal } from "./modalCreateDiscipline";
import { ModalContext } from "../ModalContext";

export function DisciplinePage(): JSX.Element {
  const { getAllStudants, allStudants, inactivateStudant, activateStudant } = useContext(StudantContext);
  const { ModalState, setModalState } = useContext(ModalContext);

  const router = useRouter();

  useEffect(() => {
    getAllStudants();
  }, []);

  return (
    <>
      <Box mt={10} pl={'5%'} pr={'5%'}>
        <GButton ml='auto' mr="0" display='block' onClick={() => { setModalState(true) }}>
          Cadastro de Disciplina
        </GButton>
        <TableContainer>
          <Table size={'sm'} variant="simple">
            <Thead>
              <Tr>
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
                        <Menu>
                          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Ações
                          </MenuButton>
                          <MenuList>
                            <MenuItem onClick={() => { setModalState(true) }}>
                              Editar Dados
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

      <DisciplineModal />
    </>
  );
}
