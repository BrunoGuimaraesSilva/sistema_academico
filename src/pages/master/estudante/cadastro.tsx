import { Container, GButton } from "@/components";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { StudantRegister } from "components/Pages";
import Sidebar from "components/Sidebar/sidebar";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ClientContext, ScreenControlContext } from "services";

export default function Dashboard(): JSX.Element {
    const { LinkItems } = useContext(ScreenControlContext);
    const { userData } = useContext(ClientContext);
    
    const router = useRouter()

    return (
        <Sidebar linkItems={LinkItems} userData={userData}>
            <Box p={10}>
                <GButton onClick={() => router.back()}>
                    <ChevronLeftIcon />
                </GButton>
                <StudantRegister />
            </Box>
        </Sidebar>
    );
}
