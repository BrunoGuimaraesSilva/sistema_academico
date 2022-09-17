import { LinkItemProps } from "../../components";

export interface ScreenControlProviderProps {
  children: JSX.Element;
}

export interface ScreenControlContextProps {
  setScreenState(Screen: JSX.Element): void;
  Screen?: JSX.Element;
  LinkItems: LinkItemProps[];
}
