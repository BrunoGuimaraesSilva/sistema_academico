import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiLogOut, FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { PersonFooterProps } from "./sidebar.interface";

export const PersonFooter: React.FC<PersonFooterProps> = ({
  avatar,
  name,
  title,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter()

  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      alignItems={"center"}
    >
      <HStack>
        {/* <IconButton
          onClick={toggleColorMode}
          aria-label={""}
          icon={useColorModeValue(<FiMoon />, <FiSun />)}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </IconButton> */}
        <Avatar size={"sm"} src={avatar} />
        <VStack
          display={{ base: "none", md: "flex" }}
          alignItems="flex-start"
          spacing="1px"
          ml="2"
        >
          <Text fontSize="sm" color={useColorModeValue("black", "white")}>
            {name}
          </Text>
          <Text fontSize="xs" color={useColorModeValue("black", "white")}>
            {title}
          </Text>
        </VStack>
        <IconButton
          onClick={toggleColorMode}
          aria-label={""}
          icon={useColorModeValue(<FiMoon />, <FiSun />)}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>
        <IconButton
          onClick={ () => {           router.push('/login')}}
          aria-label={""}
          icon={<FiLogOut/>}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>

      </HStack>
    </Flex>
  );
};
