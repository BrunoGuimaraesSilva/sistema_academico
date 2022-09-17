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
  const { Screen } = useContext(ScreenControlContext);

  const router = useRouter()
  const { pid } = router.query

  const LinkItems: Array<LinkItemProps> = [
    { name: "Cadastro Aluno", icon: FiHome, route: '/master' },
    // { name: "Cadastro Funcionario", icon: FiTrendingUp, screen: <EmployeeRegister /> },
    // { name: "Cadastro Cursos", icon: FiCompass, screen: <StudantRegister /> },
    // { name: "Favourites", icon: FiStar, screen: <StudantRegister /> },
    // { name: "Settings", icon: FiSettings, screen: <StudantRegister /> },
  ];

  return (
    <Sidebar linkItems={LinkItems}><StudantRegister /></Sidebar>
  );
}
