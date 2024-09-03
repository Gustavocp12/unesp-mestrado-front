export interface PatientData{
  name: string;
  birth: string;
  gender: number | null;
  cep: string;
  addressNumber: number | null;
}

export interface PatientDiagnosis{
  diagnosis: number | null;
  diagnosisType: number | null;
  clinicalSigns: string;
}

export interface Patients extends PatientData, PatientDiagnosis{}
