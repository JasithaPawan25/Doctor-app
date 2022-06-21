

export class CreatePatientDto {
    constructor(
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

        ) {}
  
    static from(body: Partial<CreatePatientDto>) {
      if (!body.patientFname) {
        throw new Error('Missing property channel')
      }
  
      if (!body.patientLName) {
        throw new Error('Missing property name')
      }
      if (!body.dateOfbirth) {
        throw new Error('Missing property name')
      }
      if (!body.gender) {
        throw new Error('Missing property name')
      }
      if (!body.complaint) {
        throw new Error('Missing property name')
      }
      if (!body.bloodPressuer) {
        throw new Error('Missing property name')
      }
      if (!body.pulse) {
        throw new Error('Missing property name')
      }
      if (!body.weight) {
        throw new Error('Missing property name')
      }
      if (!body.illness) {
        throw new Error('Missing property name')
      }
      if (!body.treatment) {
        throw new Error('Missing property name')
      }
  
      return new CreatePatientDto(body.patientFname,
                                 body.patientLName,body.dateOfbirth,
                                 body.gender,body.complaint,
                                 body.bloodPressuer,body.pulse,
                                 body.weight,body.illness,
                                 body.treatment
                                 )
    }
  }