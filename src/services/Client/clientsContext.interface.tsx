import { ReactNode } from "react";

export interface InterProviderProps {
  children: ReactNode;
}

export interface UserData{
  token: string,
  profile: string,
  name: string
}

export interface InterClientContext {
  login(login: string, password: string): Promise<void>;
  userData: UserData
}
