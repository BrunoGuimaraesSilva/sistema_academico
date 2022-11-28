import { ReactNode } from "react";

export interface InterProviderProps {
  children: ReactNode;
}


export interface User {
  profile: string;
  name: string;
}
export interface Discipline {
  discipline_name: string;
}
export interface UserData {
  access_token: string;
  user_data: User;
  disciplines: Discipline[];
  token_type: string;
  expires_in: number;
}

export interface InterClientContext {
  login(login: string, password: string): Promise<void>;
  userData?: UserData
}
