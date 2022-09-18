import { Container } from '@/components';
import {
  Box, Center, Flex, Text, useColorModeValue
} from '@chakra-ui/react';
import Lottie from "lottie-react";
import White404 from "../assets/404-white.json";
import Black404 from "../assets/404-black.json";

export default function screen404() {

  const animation = useColorModeValue(Black404,White404);

  return (
    <Container>
      <Center w='100%' mt='15%'>
        <Box
        >
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
