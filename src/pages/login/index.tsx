import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Center,
  Image as ImageChakra,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  InputRightElement,
  useToast,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

import Image from "next/image";
import { useForm } from "react-hook-form";

import logo from "../../assets/logo.svg";
import logo_black from "../../assets/logo_black.svg";
import { BsEye, BsEyeSlash, BsPerson } from "react-icons/bs";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { useContext, useState } from "react";
import { ClientContext } from "../../services";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const clickButtonShowPassword = () => setShowPassword(!showPassword);
  const { login } = useContext(ClientContext);

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data: any): Promise<void> {
    login(data.email, data.password);
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Center>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} h={"full"} w={"full"} maxW={"900px"}>
              <Flex align={"center"}>
                <Center w="80px">
                  <Image alt="logo" src={useColorModeValue(logo_black, logo)} />
                </Center>
              </Flex>
              <Heading fontSize={"2xl"}>Login</Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl h={"100px"} isInvalid={!!errors.email}>
                  <FormLabel>Login</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdOutlineEmail />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Login"
                      {...register("email", {
                        required: "Preencha o campo de Login",
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {!!errors.email && !!errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl h={"100px"} isInvalid={!!errors.password}>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdLockOutline />
                    </InputLeftElement>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Sua Senha"
                      {...register("password", {
                        required: "Preencha o campo de senha",
                      })}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={clickButtonShowPassword}
                      >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {!!errors.password && !!errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={6}>
                  <Button
                    mt={15}
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    isLoading={isSubmitting}
                    type="submit"
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Center>
      </Flex>
      <Flex flex={1}>
        <ImageChakra
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
          }
        />
      </Flex>
    </Stack>
  );
}
