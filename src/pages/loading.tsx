import { Modal, ModalContent, ModalOverlay, Flex } from "@chakra-ui/react";
import loadingLogo from "../assets/loading.json";
import { useContext } from "react";
import { LoadingContext } from "../services";
import Lottie from "lottie-react";

export default function Loading(): JSX.Element {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      <Modal onClose={(): void => { }} isOpen={loading} isCentered>
        <ModalOverlay />
        <ModalContent
          alignItems={"center"}
          m={25}
          boxShadow={0}
          bg={"rgba(0,0,0,0)"}
        >
          <Flex height={"80%"} width={"80%"}>
            <Lottie animationData={loadingLogo} />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
