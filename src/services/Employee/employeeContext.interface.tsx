import { ReactNode } from "react";

export interface EmployeeProviderProps {
  children: ReactNode;
}

export interface EmployeeContextProps {
  profile?: ProfileResponseType[];
  getProfileData(): Promise<void>;
}

export interface ProfileResponseType {
  id: string;
  profile: string;
  created_at: string;
  updated_at: string;
}
