import { DocumentDefinition, FilterQuery, IndexOptions, QueryOptions, UpdateQuery } from "mongoose";
import { CreatePatientDto } from "../Dto/Patient/patient.create.dto";
import { PatientDto } from "../Dto/Patient/patient.getall.dto";
import { GetOnePatientDto, PatientFindDto } from "../Dto/Patient/patient.getone.dto";
import { updateOnePatient, UpdatePatientDto } from "../Dto/Patient/patient.update.dto";
//import { GetOneSubscriberDto } from "../Dto/patientinfo.dto";
import Patient, { IPatient } from "../Module/patientinfo.module";

export async function createPatient(input:CreatePatientDto){
   // return Patient.create(input);

   try {

    const createdPatient = await Patient.create(input);
    //  return User.create(input);
   return CreatePatientDto.from(createdPatient);
  //  return User.create(input);
    
} catch (error) {

    return ("Please Check the input fields & Try agin...")
    
}
}

export function findPatient(query:FilterQuery<IPatient>, options: QueryOptions = { lean: true }){
   
 
    // const getoneuser = await User.find({where :{username:nameid}})
     return Patient.findOne(query,{},options);
 
 }



export function updatePatient(
    query:FilterQuery<IPatient>,
    update:UpdateQuery<IPatient>,
    options:QueryOptions
)
{
    return Patient.findOneAndUpdate(query,update,options)
}



export function deletePatient(query:FilterQuery<IPatient>){
    return Patient.deleteOne(query)
}



 
 export  function getAllPatient(query:FilterQuery<IPatient>){

     return Patient.find(query).lean();
    //  const getallpatient = await Patient.find().sort({patientFname:"asc"});
    //  //.sort({"patientFname":'asc'})
    //  return PatientDto.fromMany(getallpatient)
 
 }

 export async function getAllPatienti(query:FilterQuery<IPatient>){

    // return Patient.find(query).lean();
    try {
        const getallpatient = await Patient.find().sort({patientFname:"asc"});
        //.sort({"patientFname":'asc'})
        return PatientDto.fromMany(getallpatient)
        
    } catch (error) {
        return ("Error in Getting Data")
    }
     
 
 }


 export async function getHitstoryPatient(id:string){
    try {

        const getallpatients = await Patient.find().where({ $or: [ { "patientFname": id },
        { "patientLName": id },
        { "dateOfbirth": id },
        { "gender": id }] })
       .sort({patientFname:"asc"});
        //.sort({"patientFname":'asc'})
        return PatientDto.fromMany(getallpatients)

        
    } catch (error) {
        return ("error in Geting Data")
        
    }
 }

 export async function updatePatientSearch(id:GetOnePatientDto){
    try {

        const foundPatient = await Patient.findOne({patientFname:id.patientFname})
      
          if (!foundPatient) {
            throw new Error('No user found with the given id')
          }
        //  return foundPatient
      
          return PatientFindDto.from(foundPatient) //getOnePatientDto:GetOnePatientDto,
    
        } catch (error) {
            return ("No user found with the given name")
        }
 }


 export async function PatientUpdateFunction( query:FilterQuery<IPatient>,input: UpdatePatientDto) {
    try {

        const findlastpatient= await Patient.findOne().where({"_id":query})
       // foundSubscriber
   //    const woe = updateOne({_id:query})
       if(!findlastpatient)
       {
        return ("Not a valid user")
       // throw new Error;
       }

     const finduserupdate = updateOnePatient({
            _id: input.id,
          //  patientFname:input.patientFname,
          //  patientLName:input.patientLName,
         //   dateOfbirth: input.dateOfbirth,
          //  gender: input.gender,
            complaint :input.complaint,
            bloodPressuer: input.bloodPressuer,
            pulse: input.pulse,
            weight: input.weight,
            illness: input.illness,
            treatment: input.treatment
          })

          return finduserupdate;

       
        
    } catch (error) {

        return ("Please Check the Input Fields & Try agin...")
        
    }

}

