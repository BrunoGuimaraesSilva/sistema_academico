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
  Tr,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { ClassType, PeriodType } from "../Absence";
import { NotesContext } from "./notesContext";
import { bodyToSaveNotes } from "./outputBoundery";

interface DisciplinesObject {
  discipline_name: string;
  id: number;
}

interface StudentsId {
    first_test: string[];
    second_test: string[];
    first_job: string[];
    second_job: string[];
  }

export function NotesPage(): JSX.Element {
  const { saveNotesStudents, getPeriod } = useContext(NotesContext);
  const { allStudants, getAllStudants } = useContext(StudantContext);
  const [disciplines, setDisciplines] = useState<any[]>();
  const [period, setPeriod] = useState<PeriodType[]>();
  const [periodInputVisible, setPeriodInputVisible] = useState<boolean>(true);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);

  const [disciplineIdValue, setDisciplineIdValue] = useState<number>(0);
  const [periodIdValue, setPeriodIdValue] = useState<number>(0);

  const {
    register,
    control,
    handleSubmit,
  } = useForm<StudentsId>();

  const onSubmit: SubmitHandler<StudentsId> = (data) => {
    
    const arrayToSend: bodyToSaveNotes = {
      students_id: data,
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
          setPeriod(responseValue),
          setPeriodInputVisible(false)
      })
      .catch((error) => {});
  }

  async function handleClickPeriod(id: number): Promise<void> {
    setPeriodIdValue(id);
    setButtonVisible(false);
  }

  return (
    <>
      <Box mt={10} pl={"5%"} pr={"5%"}>
        <SimpleGrid columns={3} spacing={5}>
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
                    console.log(element)
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
                        <NumberInput
                          w={150}
                          allowMouseWheel
                          step={1}
                          defaultValue={0}
                          min={0}
                          max={10}
                        >
                          <NumberInputField
                            {...register(`first_test.${element.id}` as const)}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Td>
                      <Td>
                        <NumberInput
                          w={150}
                          allowMouseWheel
                          step={1}
                          defaultValue={0}
                          min={0}
                          max={10}
                        >
                          <NumberInputField
                            {...register(`second_test.${element.id}` as const)}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Td>
                      <Td>
                        <NumberInput
                          w={150}
                          allowMouseWheel
                          step={1}
                          defaultValue={0}
                          min={0}
                          max={10}
                        >
                          <NumberInputField
                            {...register(`first_job.${element.id}` as const)}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Td>
                      <Td>
                        <NumberInput
                          w={150}
                          allowMouseWheel
                          step={1}
                          defaultValue={0}
                          min={0}
                          max={10}
                        >
                          <NumberInputField
                            {...register(`second_job.${element.id}` as const)}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
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
