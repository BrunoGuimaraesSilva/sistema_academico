import { StudantContext } from "@/services";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useContext, useEffect } from 'react';

export function StudantPage(): JSX.Element {
  const { getAllStudants, allStudants } = useContext(StudantContext)

  useEffect(() => {
    getAllStudants()
  }, []);

  console.log(allStudants)
  return (
    <TableContainer >
      <Table size={'sm'} variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th isNumeric>RA</Th>
            <Th>Nome</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            allStudants?.map((element) => {
              return (
                <Tr>
                  <Td isNumeric>{element.id}</Td>
                  <Td isNumeric>{element.ra}</Td>
                  <Td>{element.name}</Td>
                </Tr>
              )
            })
          }
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}
