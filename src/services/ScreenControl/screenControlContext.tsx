import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { LinkItemProps } from "../../components";
import {
  ScreenControlContextProps,
  ScreenControlProviderProps
} from "./screenControlContext.interface";

export const ScreenControlContext = createContext({} as ScreenControlContextProps);

export function ScreenControlProvider({ children }: ScreenControlProviderProps) {
  const router = useRouter();
  const [Screen, setScreen] = useState<JSX.Element>();


  function setScreenState(screen: JSX.Element): void {
    setScreen(screen);
  }

  const LinkItems: Array<LinkItemProps> = [
    { name: "Estudantes", icon: FiHome, route: '/master/estudante' },
    { name: "Funcionarios", icon: FiTrendingUp, route: '/master/funcionario' },
  ];

  return (
    <ScreenControlContext.Provider
      value={{
        Screen,
        setScreenState,
        LinkItems
      }}
    >
      {children}
    </ScreenControlContext.Provider>
  );
}
