import { ReactNode } from "react";

export interface InterProviderProps {
  children: ReactNode;
}

export interface InterClientContext {
  login(login: string, password: string): Promise<any>;
}
