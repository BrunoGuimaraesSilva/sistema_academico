import { Modal, ModalContent, ModalOverlay, Box } from "@chakra-ui/react";
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
          <Box height={"150%"} width={"150%"}>
            <Lottie animationData={loadingLogo} />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
