import { ReactNode } from "react";

export interface ScreenControlProviderProps {
  children: ReactNode;
}

export interface ScreenControlContextProps {
  setScreenState(Screen: JSX.Element): void;
  Screen?: JSX.Element;
}
