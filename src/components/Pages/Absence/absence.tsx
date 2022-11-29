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
import { SubmitHandler, useForm } from "react-hook-form";
import { AbsenceContext, ClassType, PeriodType } from "./absenceContext";
import { BodyToSaveAbsence } from "./outputBoundery";

interface DisciplinesObject {
  discipline_name: string;
  id: number;
}

export function AbsencePage(): JSX.Element {
  const { saveAbsenceStudents, getPeriod, getClass } =
    useContext(AbsenceContext);
  const { allStudants, getAllStudants } = useContext(StudantContext);
  const [disciplines, setDisciplines] = useState<[DisciplinesObject]>();
  const [period, setPeriod] = useState<PeriodType[]>();
  const [classDiscipline, setClassDiscipline] = useState<ClassType[]>();
  const [periodInputVisible, setPeriodInputVisible] = useState<boolean>(true);
  const [classInputVisible, setClassInputVisible] = useState<boolean>(true);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);

  const [disciplineIdValue, setDisciplineIdValue] = useState<number>(0);
  const [periodIdValue, setPeriodIdValue] = useState<number>(0);
  const [classIdValue, setClassIdValue] = useState<number>(0);

  const { register, handleSubmit, watch } = useForm<number[]>();
  console.log(watch());

  const onSubmit: SubmitHandler<number[]> = (data) => {
    const arrayToSend: BodyToSaveAbsence = {
      students_id: data,
      ids_period_discipline_class: {
        discipline_id: disciplineIdValue,
        period_id: periodIdValue,
        class_id: classIdValue,
        justification: "teste",
      },
    };
    saveAbsenceStudents(arrayToSend);
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
          setPeriodInputVisible(false),
          setClassDiscipline([]);
        setButtonVisible(true);
      })
      .catch((error) => {});
  }

  async function handleClickPeriod(id: number): Promise<void> {
    setPeriodIdValue(id);
    getClass(id)
      .then((responseValue): void => {
        setClassDiscipline(responseValue), setClassInputVisible(false);
      })
      .catch((error) => {});
  }

  async function handleClickClass(id: number): Promise<void> {
    setClassIdValue(id);
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
              key={element.id}
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
                key={element.id}
                onClick={() => {
                  handleClickPeriod(element.discipline_id);
                }}
                value={element.id}
              >
                {element.description}
              </option>
            ))}
          </Select>
          <Select
            ml="auto"
            mr="0"
            display="block"
            placeholder="Selecione a aula"
            hidden={classInputVisible}
          >
            {classDiscipline?.map((element: ClassType) => (
              <option
                key={element.id}
                onClick={() => {
                  handleClickClass(element.id);
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
                  <Th>Faltas</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allStudants?.map((element) => {
                  return (
                    <Tr key={element.id}>
                      <Td>{element.id}</Td>
                      <Td>{element.name}</Td>
                      <Td>
                        <NumberInput
                          w={150}
                          allowMouseWheel
                          step={2}
                          defaultValue={0}
                          min={0}
                          max={4}
                        >
                          <NumberInputField {...register(`${element.id}`)} />
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
