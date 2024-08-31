export interface PersonalData {
  name: string;
  phone: number;
  clinic: string;
  crmv: number;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Register extends PersonalData, LoginData {}
