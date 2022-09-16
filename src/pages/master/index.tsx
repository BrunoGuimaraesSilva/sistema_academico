import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { LinkItemProps } from "../../components";
import { StudantRegister,EmployeeRegister } from "components/Pages";
import React, { useContext } from "react";
import Sidebar from "components/Sidebar/sidebar";
import { ScreenControlContext } from "services";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { Screen } = useContext(ScreenControlContext);

  const router = useRouter()
  const { pid } = router.query

  const LinkItems: Array<LinkItemProps> = [
    { name: "Cadastro Aluno", icon: FiHome, route:'/master'  },
    // { name: "Cadastro Funcionario", icon: FiTrendingUp, screen: <EmployeeRegister /> },
    // { name: "Cadastro Cursos", icon: FiCompass, screen: <StudantRegister /> },
    // { name: "Favourites", icon: FiStar, screen: <StudantRegister /> },
    // { name: "Settings", icon: FiSettings, screen: <StudantRegister /> },
  ];

  return (
    <Sidebar linkItems={LinkItems}><StudantRegister /></Sidebar>
  );
}
