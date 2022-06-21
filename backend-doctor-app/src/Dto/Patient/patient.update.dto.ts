import Patient, { IPatient } from "../../Module/patientinfo.module"


export class UpdatePatientDto {
    constructor(
      public readonly id: string,
    //   public readonly username?: string,
    //   public readonly password?: string
      public readonly  patientFname:string,
      public readonly   patientLName?:string,
      public readonly   dateOfbirth?:string,
      public readonly   gender?:string,
        //medical Record
        public readonly   complaint?:string,
        public readonly   bloodPressuer?:string,
        public readonly   pulse?:string,
        public readonly   weight?:string,
        public readonly   illness?:string,
        public readonly   treatment?:string,
    ) {}
  
    static from(body: Partial<UpdatePatientDto>) {
      if (!body.id) {
        throw new Error('missing id property')
      }
      if (!body.patientFname) {
        throw new Error('missing id property')
      }
  
      if (!body.patientLName) {
        throw new Error('missing id property')
       }
      if (!body.dateOfbirth) {
        throw new Error('missing id property')
      }
      if (!body.gender) {
        throw new Error('missing id property')
      }
      if (!body.complaint) {
        throw new Error('missing id property')
      }
      if (!body.bloodPressuer) {
        throw new Error('missing id property')
      }

      if (!body.pulse) {
        throw new Error('missing id property')
      }
      if (!body.weight) {
        throw new Error('missing id property')
      }
      if (!body.illness) {
        throw new Error('missing id property')
      }
      if (!body.treatment) {
        throw new Error('missing id property')
      }
  
      return new UpdatePatientDto(body.id,
                                    body.patientFname,
                                    body.patientLName,
                                    body.dateOfbirth,body.gender,
                                    body.complaint,body.bloodPressuer,
                                    body.pulse,body.weight,
                                    body.illness,body.treatment
                                    )
    }
  }




 export async function updateOnePatient(payload: Partial<IPatient>) {
  try {
    
  
    const foundSubscriber = await Patient.findOne(
     {"_id":payload._id}
    )

    if (!foundSubscriber) {
      throw new Error('patient does not exist')
    }

    // if (payload.patientFname) {
    //   foundSubscriber.patientFname = payload.patientFname
    // }

    if (payload.patientLName) {
      foundSubscriber.patientLName = payload.patientLName
    }

    if (payload.dateOfbirth) {
        foundSubscriber.dateOfbirth = payload.dateOfbirth
      }

      if (payload.gender) {
        foundSubscriber.gender = payload.gender
      }

      if (payload.complaint) {
        foundSubscriber.complaint = payload.complaint
      }

      if (payload.bloodPressuer) {
        foundSubscriber.bloodPressuer = payload.bloodPressuer
      }

      if (payload.pulse) {
        foundSubscriber.pulse = payload.pulse
      }

      if (payload.weight) {
        foundSubscriber.weight = payload.weight
      }

      if (payload.illness) {
        foundSubscriber.illness = payload.illness
      }

      if (payload.treatment) {
        foundSubscriber.treatment = payload.treatment
      }

    foundSubscriber.save()

  } catch (error) {
    return ('patient does not exist')
  }

     //foundSubscriber;
  }