import { StudantRegister } from "components/Pages";
import Sidebar from "components/Sidebar/sidebar";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  FiHome
} from "react-icons/fi";
import { ScreenControlContext } from "services";
import { LinkItemProps } from "../../components";

export default function Dashboard(): JSX.Element {
  const { Screen, LinkItems } = useContext(ScreenControlContext);

  const router = useRouter()

  return (
    <Sidebar linkItems={LinkItems}><></></Sidebar>
  );
}
