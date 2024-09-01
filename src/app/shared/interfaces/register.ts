export interface PersonalData {
  name: string;
  phone: number | null;
  clinic: string;
  crmv: number | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Register extends PersonalData, LoginData {}
