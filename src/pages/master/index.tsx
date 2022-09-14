import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { LinkItemProps } from "../../components";
import { StudantRegister,EmployeeRegister } from "../../components/Pages";
import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import { ScreenControlContext } from "../../services";

export default function Dashboard() {
  const { Screen } = useContext(ScreenControlContext);

  const LinkItems: Array<LinkItemProps> = [
    { name: "Cadastro Aluno", icon: FiHome, screen: <StudantRegister /> },
    { name: "Cadastro Funcionario", icon: FiTrendingUp, screen: <EmployeeRegister /> },
    { name: "Cadastro Cursos", icon: FiCompass, screen: <StudantRegister /> },
    { name: "Favourites", icon: FiStar, screen: <StudantRegister /> },
    { name: "Settings", icon: FiSettings, screen: <StudantRegister /> },
  ];

  return (
    <Sidebar linkItems={LinkItems}>{Screen ? React.cloneElement(Screen): ''}</Sidebar>
  );
}
