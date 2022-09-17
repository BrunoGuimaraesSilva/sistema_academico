import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { DatePicker } from '@yamatomo/chakra-react-datepicker';
import moment from 'moment';
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineLocationCity } from "react-icons/md";
import { StudantRegisterFormValues } from "./studantRegister.interface";

export function PersonalDataFragment() {
  const {
    register,
    formState: { errors },
    setValue,
    getValues
  } = useFormContext<StudantRegisterFormValues>();

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


      </Wrap>
    </Fragment>
  );
}
