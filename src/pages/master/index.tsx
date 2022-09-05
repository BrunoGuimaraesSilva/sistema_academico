import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { LinkItemProps } from "../../components";
import { CadastroAluno } from "../../components/Pages";
import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import { ScreenControlContext } from "../../services";

export default function Dashboard() {
  const { Screen } = useContext(ScreenControlContext);

  const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, screen: <CadastroAluno /> },
    { name: "Trending", icon: FiTrendingUp, screen: <CadastroAluno /> },
    { name: "Explore", icon: FiCompass, screen: <CadastroAluno /> },
    { name: "Favourites", icon: FiStar, screen: <CadastroAluno /> },
    { name: "Settings", icon: FiSettings, screen: <CadastroAluno /> },
  ];

  return (
    <Sidebar linkItems={LinkItems}>{Screen ? React.cloneElement(Screen): ''}</Sidebar>
  );
}
