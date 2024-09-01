export interface PatientData{
  name: string;
  birth: string;
  gender: string;
  cep: string;
  addressNumber: number | null;
}

export interface PatientDiagnosis{
  diagnosis: string;
  diagnosisType: string;
  clinicalSigns: string;
}

export interface Patients extends PatientData, PatientDiagnosis{}
