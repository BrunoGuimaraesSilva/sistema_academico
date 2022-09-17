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
import uf from "../../../assets/uf.json";
import { Fragment, useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdOutlineHouse, MdOutlineLocationCity } from "react-icons/md";
import InputMask from "react-input-mask";
import { StudantContext } from "../../../services";
import { StudantRegisterFormValues } from "./studantRegister.interface";

export function FinancialAddressFragment(): JSX.Element {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const { getCepData } = useContext(StudantContext);

  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext<StudantRegisterFormValues>();

  async function handleClick() {
    await getCepData(getValues("cepFinancial"))
      .then((value) => {
        setValue("cityFinancial", value?.city ?? "", {
          shouldValidate: value?.city ? true : false,
        });
        setValue("neighborhoodFinancial", value?.neighborhood ?? "", {
          shouldValidate: value?.neighborhood ? true : false,
        });
        setValue("addressFinancial", value?.address ?? "", {
          shouldValidate: value?.address ? true : false,
        });
        setValue("stateFinancial", value?.state ?? "", {
          shouldValidate: value?.state ? true : false,
        });

        if(value?.erro == 'true'){
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

  useEffect(() => {
    const value = getValues("cepFinancial");
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
          <FormControl isInvalid={!!errors.cepFinancial}>
            <FormLabel>CEP</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                as={InputMask}
                placeholder="Seu CEP"
                mask="99999-999"
                {...register("cepFinancial", {
                  required: "Preencha o campo de CEP",
                  minLength: 9,
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  disabled={disableButton}
                  size="sm"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <CheckIcon color="green.500" />
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.cepFinancial && errors.cepFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.cityFinancial}>
            <FormLabel>Cidade</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineLocationCity />
              </InputLeftElement>
              <Input
                placeholder="Seu Cidade"
                {...register("cityFinancial", {
                  required: "Preencha o campo de Cidade",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.cityFinancial && errors.cityFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.stateFinancial}>
            <FormLabel>Estado</FormLabel>
            <InputGroup>
              <Select
                id="country"
                placeholder="Selecione seu estado"
                {...register("stateFinancial", {
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
              {errors.stateFinancial && errors.stateFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.addressFinancial}>
            <FormLabel>Endereço</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Endereço"
                {...register("addressFinancial", {
                  required: "Preencha o campo de Endereço",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.addressFinancial && errors.addressFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.neighborhoodFinancial}>
            <FormLabel>Bairro</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Seu Bairro"
                {...register("neighborhoodFinancial", {
                  required: "Preencha o campo de Bairro",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.neighborhoodFinancial &&
                errors.neighborhoodFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>

        <WrapItem w={"250px"} h={"100px"}>
          <FormControl isInvalid={!!errors.numberFinancial}>
            <FormLabel>Numero da casa</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineHouse />
              </InputLeftElement>
              <Input
                placeholder="Numero da casa"
                {...register("numberFinancial", {
                  required: "Preencha o campo de numero da casa",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.numberFinancial && errors.numberFinancial.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
      </Wrap>
    </Fragment>
  );
}
