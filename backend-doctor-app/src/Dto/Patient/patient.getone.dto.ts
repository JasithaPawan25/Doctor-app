import { IPatient } from "../../Module/patientinfo.module"

export class GetOnePatientDto {
    constructor(public readonly patientFname: string) {}
  
    static from(body: Partial<GetOnePatientDto>) {
  
    //   return new GetOneSubscriberDto(
    //     body.id,
    //     body.username,
    //   //  entity.password,
    //     //entity.createdAt
    //   )
    // }
  
      if (!body.patientFname) {
        throw new Error('missing id property')
      }
      if (!body.patientFname) {
        throw new Error('missing id property')
      }
      //static from()
  
      return new GetOnePatientDto(body.patientFname)
    }
  }
  
  
  export class PatientFindDto {
    constructor(
    //  public readonly id: string,
 
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
    //  public readonly createdAt: Date
    ) {}
  
    static from(entity: IPatient) {
      return new PatientFindDto(
      //  entity._id,
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
  
    // static fromMany(users: IUser[]) {
    //   return users.map((user) => UserDto.from(user))
    // }
  }