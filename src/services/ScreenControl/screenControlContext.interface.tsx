import { ReactNode } from "react";
import { LinkItemProps } from "../../components";

export interface ScreenControlProviderProps {
  children: ReactNode;
}

export interface ScreenControlContextProps {
  setScreenState(Screen: JSX.Element): void;
  Screen?: JSX.Element;
  LinkItems: LinkItemProps[]
}
