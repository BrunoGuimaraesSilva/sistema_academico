import { StudantContext } from "@/services";
import { CivilStatusType, GenderType } from "@/services/Studant/inputs";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { DatePicker } from '@yamatomo/chakra-react-datepicker';
import moment from 'moment';
import { Fragment, useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineLocationCity } from "react-icons/md";
import { StudantRegisterFormValues } from "../studantRegister.interface";

export function PersonalDataFragment() {
  const {
    register,
    formState: { errors },
    setValue,
    getValues
  } = useFormContext<StudantRegisterFormValues>();

  const [gender, setGender] = useState<GenderType[]>();
  const [civilStatus, setCivilStatus] = useState<CivilStatusType[]>();

  const { getGender, getCivilStatus } = useContext(StudantContext)

  useEffect((): void => {
    getGender().then((data): void => {
      setGender(data)
    });

    getCivilStatus().then((data): void => {
      setCivilStatus(data)
    });
  }, []);


  return (
    <Fragment>
      <Wrap justify='center' mt={15} spacing={5}>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.profession}>
            <FormLabel>Profissão</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Sua Profissão"
                {...register("profession", {
                  required: "Preencha o campo de Profissão",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.profession && errors?.profession.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem zIndex={99} w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.birth_date}>
            <FormLabel>Data de Nascimento</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>

              <DatePicker
                datePickerSize={'xs'}
                dateFormat='dd/MM/yyyy'
                placeholderText="Sua Data de Nascimento"
                value={getValues('birth_date')}
                inputProps={
                  {
                    pl: '10',
                    ...register("birth_date", {
                      required: "Preencha o campo de Data de Nascimento",
                    })
                  }}
                onSelect={(data) => {
                  setValue('birth_date', moment(data).format('DD/MM/YYYY'))
                }}
                startDate={moment('01/01/2000').toDate()}
                onChange={(data) => {
                  console.log(data)
                }}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.birth_date && errors?.birth_date.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.birth_place}>
            <FormLabel>Local de Nascimento</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Local de Nascimento"
                {...register("birth_place", {
                  required: "Preencha o campo de Local de Nascimento",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.birth_place && errors?.birth_place.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.father_name}>
            <FormLabel>Nome do Pai</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Nome do Pai"
                {...register("father_name", {
                  required: "Preencha o campo de Nome do Pai",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.father_name && errors?.father_name.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.mother_name}>
            <FormLabel>Nome da Mãe</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Nome da Mãe"
                {...register("mother_name", {
                  required: "Preencha o campo de Nome da Mãe",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.mother_name && errors?.mother_name.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.session}>
            <FormLabel>Sessão</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Sessão"
                {...register("session", {
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.session && errors?.session.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>


        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.reservist}>
            <FormLabel>Reservista</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Reservista"
                {...register("reservist", {
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.reservist && errors?.reservist.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>


        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.year}>
            <FormLabel>Ano</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Ano"
                {...register("year", {
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.year && errors?.year.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>


        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.series}>
            <FormLabel>Serie</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Sua Serie"
                {...register("series", {
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.series && errors?.series.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>


        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.gender}>
            <FormLabel>Gênero</FormLabel>
            <InputGroup>
              <Select
                id="gender_select"
                placeholder="Selecione seu gênero"
                {...register("gender", {
                  required: "Selecione o seu gênero",
                })}
              >
                {gender?.map((data) => {
                  return (
                    <option key={data.id} id={data.id.toString()} value={data.id}>
                      {data.gender}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
            <FormErrorMessage>
              {errors.gender && errors.gender.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.civil_status}>
            <FormLabel>Estado Civil</FormLabel>
            <InputGroup>
              <Select
                id="civil_status_select"
                placeholder="Selecione seu estado civil"
                {...register("civil_status", {
                  required: "Selecione o seu estado civil",
                })}
              >
                {civilStatus?.map((data) => {
                  return (
                    <option key={data.id} id={data.id.toString()} value={data.id}>
                      {data.civil_status}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
            <FormErrorMessage>
              {errors.civil_status && errors.civil_status.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

      </Wrap>
    </Fragment>
  );
}
