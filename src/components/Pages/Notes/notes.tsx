import { StudantContext } from "@/services";
import {
  Box,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {
  Controller,
  SubmitHandler, useForm
} from "react-hook-form";
import { PeriodType } from "../Absence";
import { NotesContext } from "./notesContext";
import { BodyToSaveNotes } from "./outputBoundery";

interface DisciplinesObject {
  discipline_name: string;
  id: number;
}
interface StudentsNotes {
  first_test: string[];
  second_test: string[];
  first_job: string[];
  second_job: string[];
}

export function NotesPage(): JSX.Element {
  const { saveNotesStudents, getPeriod, getStudentsNotes } =
    useContext(NotesContext);
  const { allStudants, getAllStudants } = useContext(StudantContext);
  const [disciplines, setDisciplines] = useState<DisciplinesObject[]>();
  const [period, setPeriod] = useState<PeriodType[]>();
  const [periodInputVisible, setPeriodInputVisible] = useState<boolean>(true);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);
  const [disciplineIdValue, setDisciplineIdValue] = useState<number>(0);
  const [periodIdValue, setPeriodIdValue] = useState<number>(0);
  const [studantsId, setStudantsId] = useState<number[]>([1,2]);

  const { control, handleSubmit, setValue } =
    useForm<StudentsNotes>();

  const onSubmit: SubmitHandler<StudentsNotes> = (data) => {
    console.log(studantsId)
    const arrayToSend: BodyToSaveNotes = {
      students_notes: data,
      students_id: studantsId,
      ids_period_discipline: {
        discipline_id: disciplineIdValue,
        period_id: periodIdValue,
        note: "",
      },
    };
    saveNotesStudents(arrayToSend);
  };

  useEffect(() => {
    getAllStudants();
    const item: [DisciplinesObject] = JSON.parse(
      localStorage.getItem("disciplines") ?? ""
    );
    setDisciplines(item);
  }, []);

  async function handleClickDisciplines(id: number): Promise<void> {
    setDisciplineIdValue(id);
    getPeriod(id)
      .then((responseValue): void => {
        setPeriod(responseValue), setPeriodInputVisible(false);
      })
      .catch(() => {});
  }

  async function handleClickPeriod(id: number): Promise<void> {
    setPeriodIdValue(id);
    setButtonVisible(false);
    verifyValues(id);
  }

  async function verifyValues(id: number) {
    const studentGradeData = await getStudentsNotes(disciplineIdValue, id);
    setValue("first_test", ["0", ...(studentGradeData?.first_test ?? "0")]);
    setValue("second_test",["0", ...(studentGradeData?.second_test ?? "0")]);
    setValue("first_job",  ["0", ...(studentGradeData?.first_job ?? "0")]);
    setValue("second_job", ["0", ...(studentGradeData?.second_job ?? "0")]);
  }

  return (
    <>
      <Box mt={10} pl={"5%"} pr={"5%"}>
        <SimpleGrid columns={2} spacing={5}>
          <Select
            ml="auto"
            mr="0"
            display="block"
            placeholder="Selecione a disciplina"
          >
            {disciplines?.map((element: DisciplinesObject) => (
              <option
                onClick={() => {
                  handleClickDisciplines(element.id);
                }}
                value={element.id}
              >
                {element.discipline_name}
              </option>
            ))}
          </Select>
          <Select
            ml="auto"
            mr="0"
            display="block"
            placeholder="Selecione o periodo"
            hidden={periodInputVisible}
          >
            {period?.map((element: PeriodType) => (
              <option
                onClick={() => {
                  console.log(element);
                  handleClickPeriod(element.id);
                }}
                value={element.id}
              >
                {element.description}
              </option>
            ))}
          </Select>
        </SimpleGrid>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TableContainer mt={18}>
            <Table size={"sm"} variant="simple">
              <TableCaption>
                <Button
                  disabled={buttonVisible}
                  type="submit"
                  w={"100%"}
                  colorScheme={"green"}
                >
                  Enviar
                </Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th isNumeric>ID</Th>
                  <Th>Nome</Th>
                  <Th>Primeira Prova</Th>
                  <Th>Segunda Prova</Th>
                  <Th>Primeiro Trabalho</Th>
                  <Th>Segundo Trabalho</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allStudants?.map((element) => {
                  return (
                    <Tr>
                      <Td>{element.id}</Td>
                      <Td>{element.name}</Td>
                      <Td>
                        <Controller
                          name={`first_test.${element.id}`}
                          control={control}
                          render={({ field: { ref, ...restField } }) => (
                            <NumberInput
                              w={150}
                              allowMouseWheel
                              step={1}
                              defaultValue={0}
                              min={0}
                              max={10}
                              {...restField}
                            >
                              <NumberInputField
                                ref={ref}
                                name={restField.name}
                              />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          )}
                        />
                      </Td>
                      <Td>
                        <Controller
                          name={`second_test.${element.id}`}
                          control={control}
                          render={({ field: { ref, ...restField } }) => (
                            <NumberInput
                              w={150}
                              allowMouseWheel
                              step={1}
                              defaultValue={0}
                              min={0}
                              max={10}
                              {...restField}
                            >
                              <NumberInputField
                                ref={ref}
                                name={restField.name}
                              />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          )}
                        />
                      </Td>
                      <Td>
                        <Controller
                          name={`first_job.${element.id}`}
                          control={control}
                          render={({ field: { ref, ...restField } }) => (
                            <NumberInput
                              w={150}
                              allowMouseWheel
                              step={1}
                              defaultValue={0}
                              min={0}
                              max={10}
                              {...restField}
                            >
                              <NumberInputField
                                ref={ref}
                                name={restField.name}
                              />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          )}
                        />
                      </Td>
                      <Td>
                        <Controller
                          name={`second_job.${element.id}`}
                          control={control}
                          render={({ field: { ref, ...restField } }) => (
                            <NumberInput
                              w={150}
                              allowMouseWheel
                              step={1}
                              defaultValue={0}
                              min={0}
                              max={10}
                              {...restField}
                            >
                              <NumberInputField
                                ref={ref}
                                name={restField.name}
                              />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          )}
                        />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </form>
      </Box>
    </>
  );
}
