import {
  Box,
  Center,
  Divider,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

interface DividerProps {
  children?: JSX.Element;
}

const CustomDivider: React.FC<DividerProps> = ({ children }) => {
  return children ? (
    <Box py={10}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Center justifyContent={"center"}>{children}</Center>
      </Flex>
    </Box>
  ) : (
    <Divider />
  );
};

export default CustomDivider;