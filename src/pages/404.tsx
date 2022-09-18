import { Container } from '@/components';
import {
  Box, Center, Flex, useColorModeValue
} from '@chakra-ui/react';
import Lottie from "lottie-react";
import black404 from "../assets/404-black.json";
import white404 from "../assets/404-white.json";

export default function Screen404() {

  const animation = useColorModeValue(black404, white404);

  return (
    <Container>
      <Center w='100%' mt='15%'>
        <Box>
          <Box alignItems={"center"}
            p={4}>
            <Flex>
              <Lottie animationData={animation} />
            </Flex>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
