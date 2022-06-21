import * as mongoose from 'mongoose';
import { IUser } from './user.module';

export interface IPatient extends mongoose.Document {
    user:IUser["_id"];
    docId:string;
    patientFname:string;
    patientLName:string;
    dateOfbirth:string;
    gender:string;
    //medical Record
    complaint:string;
    bloodPressuer:string;
    pulse:string;
    weight:string;
    illness:string;
    treatment:string;
    createdAt: Date;
    updatedAt: Date;
}

export const PatientSchema = new mongoose.Schema({
    
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    docId:{type:String,default:true},
    patientFname:{type:String,required:true},
    patientLName:{type:String,required:true},
    dateOfbirth:{type:String,required:true},
    gender:{type:String,required:true},
    //medical info
    complaint:{type:String,required:true},
    bloodPressuer:{type:String,required:true},
    pulse:{type:String,required:true},
    weight:{type:String,required:true},
    illness:{type:String,required:true},
    treatment:{type:String,required:true},
},
    { timestamps: true }

)

const Patient =mongoose.model<IPatient>("Patient",PatientSchema)

export default Patient;

