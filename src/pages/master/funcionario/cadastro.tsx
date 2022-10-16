import { Container, GButton } from "@/components";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { EmployeeRegister } from "components/Pages";
import Sidebar from "components/Sidebar/sidebar";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ScreenControlContext } from "services";

export default function Dashboard(): JSX.Element {
    const { LinkItems } = useContext(ScreenControlContext);
    const router = useRouter()

    return (
        <Sidebar linkItems={LinkItems}>
            <Box p={10}>
                <GButton onClick={() => router.back()}>
                    <ChevronLeftIcon />
                </GButton>
                <EmployeeRegister />
            </Box>
        </Sidebar>
    );
}

