import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { LinkItemProps } from "../../components";
import { StudantRegister } from "../../components/Pages";
import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import { ScreenControlContext } from "../../services";

export default function Dashboard() {
  const { Screen } = useContext(ScreenControlContext);

  const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, screen: <StudantRegister /> },
    { name: "Trending", icon: FiTrendingUp, screen: <StudantRegister /> },
    { name: "Explore", icon: FiCompass, screen: <StudantRegister /> },
    { name: "Favourites", icon: FiStar, screen: <StudantRegister /> },
    { name: "Settings", icon: FiSettings, screen: <StudantRegister /> },
  ];

  return (
    <Sidebar linkItems={LinkItems}>{Screen ? React.cloneElement(Screen): ''}</Sidebar>
  );
}
