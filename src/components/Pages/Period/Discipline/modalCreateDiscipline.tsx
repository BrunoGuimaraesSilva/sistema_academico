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
  UseDisclosureProps
} from "@chakra-ui/react";
import { useContext } from "react";
import { MdCheckCircle } from "react-icons/md";
import { ModalContext } from "../ModalContext";


export function DisciplineModal(): JSX.Element {
  const { ModalState, setModalState } = useContext(ModalContext);

  return (
    <Modal size={'xl'} isOpen={ModalState} onClose={() => {setModalState(false)}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Dados Pessoais</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              123
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              123
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              123
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              123
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              123
            </ListItem>
          </List>
        </ModalBody>

        <ModalFooter>
          <GButton colorScheme='blue' mr={3} onClick={() => {setModalState(false)}}>
            Fechar
          </GButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}