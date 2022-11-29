import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  IconProps,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DashboardContext, GroupByStudents, GroupByStudentsAbsence } from "./dashboardContext";

export interface DisciplinesObject {
  discipline_name: string;
  id: number;
}

export function DashboardPage(): JSX.Element {
  const { getStudents,getStudentsAbsences } = useContext(DashboardContext);
  const [disciplines, setDisciplines] = useState<[DisciplinesObject]>();
  const [allStudentGrade, setStudentGrade] = useState<GroupByStudents[]>();
  const [allStudentAbsence, setStudentAbsence] = useState<GroupByStudentsAbsence[]>([]);

  useEffect(() => {
    const item: [DisciplinesObject] = JSON.parse(
      localStorage.getItem("disciplines") ?? ""
    );
    setDisciplines(item);
  }, []);

  async function handleClick(id: number) {
    const studentGradeData = await getStudents(id);
    const studentAbsencesData = await getStudentsAbsences(id);
    setStudentGrade(studentGradeData);
    setStudentAbsence(studentAbsencesData ?? []);
    console.log(studentAbsencesData)
  }

  const CircleIcon = (props: IconProps) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
  return (
    <>
      <Box mt={10} pl={"5%"} pr={"5%"}>
        <Select
          ml="auto"
          mr="0"
          display="block"
          placeholder="Selecione a Disciplina"
        >
          {disciplines?.map((element: DisciplinesObject) => (
            <option
              key={element.id}
              onClick={() => {
                handleClick(element.id);
              }}
              value={element.id}
            >
              {element.discipline_name}
            </option>
          ))}
        </Select>
        <TableContainer>
          <Table size={"sm"} variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>ID</Th>
                <Th>Nome</Th>
                <Th>Notas</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allStudentGrade?.map((data) => {
                return (
                  <Tr key={data.id}>
                    <Td>{data.student_id}</Td>
                    <Td>{data.name}</Td>
                    <Td width={"70%"}>
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <TableContainer>
                              <Table size="sm">
                                <Thead>
                                  <Tr>
                                    <Th>Periodo</Th>
                                    <Th>Primeira Prova</Th>
                                    <Th>Segunda Prova</Th>
                                    <Th>Primeiro Trabalho</Th>
                                    <Th>Segundo Trabalho</Th>
                                    <Th>Faltas</Th>
                                    <Th>Aprovado</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  {data.element.map((newData) => (
                                  <Tr key={newData.id}>
                                      <Td>{newData.period_id}</Td>
                                      <Td>{newData.first_test}</Td>
                                      <Td>{newData.second_test}</Td>
                                      <Td>{newData.first_job}</Td>
                                      <Td>{newData.second_job}</Td>
                                      <Td>{allStudentAbsence?.find(x => x.student_id === newData.student_id)?.absences}</Td>
                                      <Td>
                                        {newData.studentApprove ? (
                                          <CircleIcon
                                            boxSize={8}
                                            color="green.500"
                                          />
                                        ) : (
                                          <CircleIcon
                                            boxSize={8}
                                            color="red.500"
                                          />
                                        )}
                                      </Td>
                                    </Tr>
                                  ))}
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
