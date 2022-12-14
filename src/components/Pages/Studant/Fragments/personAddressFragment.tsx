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
  WrapItem,
  useToast
} from "@chakra-ui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineHouse, MdOutlineLocationCity } from "react-icons/md";
import InputMask from "react-input-mask";
import uf from "../../../../assets/uf.json";
import { StudantContext } from "../../../../services";
import { StudantRegisterFormValues } from "../studantRegister.interface";

export function PersonAddressFragment() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const { getCepData } = useContext(StudantContext);
  const toast = useToast()

  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext<StudantRegisterFormValues>();

  async function handleClickCepButton() {
    await getCepData(getValues("cepStudant"))
      .then((value) => {
        setValue("cityStudant", value?.city ?? "", {
          shouldValidate: value?.city ? true : false,
        });
        setValue("neighborhoodStudant", value?.neighborhood ?? "", {
          shouldValidate: value?.neighborhood ? true : false,
        });
        setValue("addressStudant", value?.address ?? "", {
          shouldValidate: value?.address ? true : false,
        });
        setValue("stateStudant", value?.state ?? "", {
          shouldValidate: value?.state ? true : false,
        });

        if (value?.erro == 'true') {
          toast({
            title: "Cep Inválido",
            description: "Digite um cep valido!",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
  }

  useEffect(() => {
    const value = getValues("cepStudant");
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
          <FormControl isInvalid={!!errors.cepStudant}>
            <FormLabel>CEP</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu CEP"
                mask="99999-999"
                {...register("cepStudant", {
                  required: "Preencha o campo de CEP",
                  minLength: 9,
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  disabled={disableButton}
                  size="sm"
                  onClick={() => {
                    handleClickCepButton();
                  }}
                >
                  <CheckIcon color="green.500" />
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.cepStudant && errors.cepStudant.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.cityStudant}>
            <FormLabel>Cidade</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Cidade"
                {...register("cityStudant", {
                  required: "Preencha o campo de Cidade",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.cityStudant && errors.cityStudant.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.stateStudant}>
            <FormLabel>Estado</FormLabel>
            <InputGroup>
              <Select
                id="country"
                placeholder="Selecione seu estado"
                {...register("stateStudant", {
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
              {errors.stateStudant && errors.stateStudant.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.addressStudant}>
            <FormLabel>Endereço</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Endereço"
                {...register("addressStudant", {
                  required: "Preencha o campo de Endereço",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.addressStudant && errors.addressStudant.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.neighborhoodStudant}>
            <FormLabel>Bairro</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Bairro"
                {...register("neighborhoodStudant", {
                  required: "Preencha o campo de Bairro",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.neighborhoodStudant && errors.neighborhoodStudant.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.numberStudant}>
            <FormLabel>Numero da casa</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Numero da casa"
                {...register("numberStudant", {
                  required: "Preencha o campo de numero da casa",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.numberStudant && errors.numberStudant.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
      </Wrap>
    </Fragment>
  );
}
