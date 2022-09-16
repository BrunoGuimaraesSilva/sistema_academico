import { createContext, useState } from "react";
import {
  ScreenControlContextProps,
  ScreenControlProviderProps,
} from "./screenControlContext.interface";
import { useRouter } from "next/router";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { LinkItemProps } from "../../components";

export const ScreenControlContext = createContext({} as ScreenControlContextProps);

export function ScreenControlProvider({ children }: ScreenControlProviderProps) {
  const router = useRouter();
  const [Screen, setScreen] = useState<JSX.Element>();


  function setScreenState(screen: JSX.Element):void {
    setScreen(screen);
  }

  const LinkItems: Array<LinkItemProps> = [
    { name: "Cadastro Aluno", icon: FiHome, route:'/master/estudante' },
    { name: "Funcionario", icon: FiTrendingUp, route:'/master/funcionario'},
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
