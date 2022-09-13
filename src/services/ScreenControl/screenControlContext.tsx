import { createContext, useState } from "react";
import {
  ScreenControlContextProps,
  ScreenControlProviderProps,
} from "./screenControlContext.interface";
import { useRouter } from "next/router";

export const ScreenControlContext = createContext({} as ScreenControlContextProps);

export function ScreenControlProvider({ children }: ScreenControlProviderProps) {
  const router = useRouter();
  const [Screen, setScreen] = useState<JSX.Element>();


  function setScreenState(screen: JSX.Element):void {
    setScreen(screen);
  }
  return (
    <ScreenControlContext.Provider
      value={{
        Screen,
        setScreenState
      }}
    >
      {children}
    </ScreenControlContext.Provider>
  );
}
