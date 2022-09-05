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
  WrapItem,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import InputMask from "react-input-mask";
import uf from "../../assets/uf.json";
import { MdOutlineHouse, MdOutlineLocationCity } from "react-icons/md";
import { useForm } from "react-hook-form";
import { CepResponseType, StudantContext } from "../../services";

export function AddressFragment() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const { cep, getCepData } = useContext(StudantContext);

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setValue("city", cep?.localidade ?? "", {
      shouldValidate: cep?.localidade ? true : false,
    });
    setValue("neighborhood", cep?.bairro ?? "", {
      shouldValidate: cep?.bairro ? true : false,
    });
    setValue("address", cep?.logradouro ?? "", {
      shouldValidate: cep?.logradouro ? true : false,
    });
    setValue("state", cep?.uf ?? "", {
      shouldValidate: cep?.uf ? true : false,
    });

    if (!!cep?.erro) {
      Toast({
        title: "Cep Inválido",
        description: "Digite um cep valido!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [cep]);

  useEffect(() => {
    const value = getValues("cep");
    if (value) {
      if (value.indexOf("_") == -1) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }
  }, [watch()]);

  return (
    <React.Fragment>
      <Wrap spacing={5}>
        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={false}>
            <FormLabel>CEP</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu CEP"
                mask="99999-999"
                {...register("cep", {
                  required: "Preencha o campo de CEP",
                  minLength: 9,
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  disabled={disableButton}
                  size="sm"
                  onClick={() => {
                    getCepData(getValues("cep"));
                  }}
                >
                  <CheckIcon color="green.500" />
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {/* {errors.cep && errors.cep.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={false}>
            <FormLabel>Cidade</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Cidade"
                {...register("city", {
                  required: "Preencha o campo de Cidade",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {/* {errors.city && errors.city.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={false}>
            <FormLabel>Estado</FormLabel>
            <InputGroup>
              <Select
                id="country"
                placeholder="Selecione seu estado"
                {...register("state", {
                  required: "Selecione o seu Estado",
                })}
              >
                {uf.map((data) => {
                  return (
                    <option key={data.id} id={data.id} value={data.initials}>
                      {data.name}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
            <FormErrorMessage>
              {/* {errors.state && errors.state.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={false}>
            <FormLabel>Endereço</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Endereço"
                {...register("address", {
                  required: "Preencha o campo de Endereço",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {/* {errors.address && errors.address.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={false}>
            <FormLabel>Bairro</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Bairro"
                {...register("neighborhood", {
                  required: "Preencha o campo de Bairro",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {/* {errors.neighborhood && errors.neighborhood.message} */}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
      </Wrap>
    </React.Fragment>
  );
}
