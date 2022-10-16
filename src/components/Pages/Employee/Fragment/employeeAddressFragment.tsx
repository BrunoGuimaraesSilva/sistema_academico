import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Toast,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineHouse, MdOutlineLocationCity } from "react-icons/md";
import InputMask from "react-input-mask";
import uf from "../../../../assets/uf.json";
import { EmployeeContext } from "../../../../services";
import { EmployeeRegisterFormValues } from "../employeeRegister.interface";

export function EmployeeAddressFragment(): JSX.Element {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const { getCepData } = useContext(EmployeeContext);

  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext<EmployeeRegisterFormValues>();

  async function handleClick(): Promise<void> {
    await getCepData(getValues("cepEmployee"))
      .then((value): void => {
        setValue("cityEmployee", value?.city ?? "", {
          shouldValidate: value?.city ? true : false,
        });
        setValue("neighborhoodEmployee", value?.neighborhood ?? "", {
          shouldValidate: value?.neighborhood ? true : false,
        });
        setValue("addressEmployee", value?.address ?? "", {
          shouldValidate: value?.address ? true : false,
        });
        setValue("stateEmployee", value?.state ?? "", {
          shouldValidate: value?.state ? true : false,
        });

        if (value?.erro == 'true') {
          Toast({
            title: "Cep Inválido",
            description: "Digite um cep valido!",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
  }

  useEffect((): void => {
    const value = getValues("cepEmployee");
    if (value) {
      if (value.indexOf("_") == -1) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }
  }, [watch()]);


  return (
    <Fragment>
      <Wrap justify='center' mt={15} spacing={5}>
        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.cepEmployee}>
            <FormLabel>CEP</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu CEP"
                mask="99999-999"
                {...register("cepEmployee", {
                  required: "Preencha o campo de CEP",
                  minLength: 9,
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  disabled={disableButton}
                  size="sm"
                  onClick={(): void => {
                    handleClick();
                  }}
                >
                  <CheckIcon color="green.500" />
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.cepEmployee && errors.cepEmployee.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.cityEmployee}>
            <FormLabel>Cidade</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Cidade"
                {...register("cityEmployee", {
                  required: "Preencha o campo de Cidade",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.cityEmployee && errors.cityEmployee.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.stateEmployee}>
            <FormLabel>Estado</FormLabel>
            <InputGroup>
              <Select
                id="country"
                placeholder="Selecione seu estado"
                {...register("stateEmployee", {
                  required: "Selecione o seu Estado",
                })}
              >
                {uf.map((data): JSX.Element => {
                  return (
                    <option key={data.id} id={data.id} value={data.initials}>
                      {data.name}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
            <FormErrorMessage>
              {errors.stateEmployee && errors.stateEmployee.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.addressEmployee}>
            <FormLabel>Endereço</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Endereço"
                {...register("addressEmployee", {
                  required: "Preencha o campo de Endereço",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.addressEmployee && errors.addressEmployee.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.neighborhoodEmployee}>
            <FormLabel>Bairro</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Bairro"
                {...register("neighborhoodEmployee", {
                  required: "Preencha o campo de Bairro",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.neighborhoodEmployee && errors.neighborhoodEmployee.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.numberEmployee}>
            <FormLabel>Numero da casa</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Numero da casa"
                {...register("numberEmployee", {
                  required: "Preencha o campo de numero da casa",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.numberEmployee && errors.numberEmployee.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
      </Wrap>
    </Fragment>
  );
}
