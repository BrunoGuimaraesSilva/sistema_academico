import { Box, BoxProps } from "@chakra-ui/react";

interface ContainerProps extends BoxProps {
  children: JSX.Element;
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box w={"100%"} {...rest}>
      {children}
    </Box>
  );
};
