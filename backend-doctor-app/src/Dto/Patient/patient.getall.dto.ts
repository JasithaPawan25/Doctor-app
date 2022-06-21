import { IPatient } from "../../Module/patientinfo.module"


export class PatientDto {
    constructor(
      public readonly id: string,
      public readonly docId: string,
     //   /*user:IUser["_id"];
//   docId:string;
      public readonly  patientFname:string,
      public readonly   patientLName:string,
      public readonly   dateOfbirth:string,
      public readonly   gender:string,
        //medical Record
        public readonly   complaint:string,
        public readonly   bloodPressuer:string,
        public readonly   pulse:string,
        public readonly   weight:string,
        public readonly   illness:string,
        public readonly   treatment:string,
//   createdAt: Date;
//   updatedAt: Date;*/
    ) {}
  
    static from(entity: IPatient) {
      return new PatientDto(
        entity._id,
        entity.docId,
        entity.patientFname,
        entity.patientLName,
        entity.dateOfbirth,
        entity.gender,
        entity.complaint,
        entity.bloodPressuer,
        entity.pulse,
        entity.weight,
        entity.illness,
        entity.treatment


      )
    }
  
    static fromMany(patients:IPatient []) {
      return patients.map((patient) => PatientDto.from(patient))
      
    }
  }