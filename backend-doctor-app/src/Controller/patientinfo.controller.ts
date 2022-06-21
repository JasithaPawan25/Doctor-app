import {Response,Request} from 'express';
import { createPatient, deletePatient, findPatient, getAllPatient, getAllPatienti, getHitstoryPatient, PatientUpdateFunction, updatePatient, updatePatientSearch } from '../Service/patientinfo.service';
import {get, map, orderBy} from 'lodash';
import jwt_decode from 'jwt-decode';
import  jwt from 'jsonwebtoken';
import Patient from '../Module/patientinfo.module';
//import { GetOneSubscriberDto } from '../Dto/patientinfo.dto';

export async function createPatienthandler(req:Request,res:Response) {
    const UserId= get(req,"user._id");
    
    const token =req.headers.authorization!;
    const tokenDecode:any =jwt_decode(token);

    const body = req.body;

    const patient = await createPatient({...body,user:UserId,docId:tokenDecode.id});
    return res.send(patient);
}

export async function updatePatientHandler(req:Request,res:Response) {
    const patientId= get(req,"params.patientId");
    const UserId= get(req,"user._id");

    const updatePatientinfo=req.body;

    const findPatientinfo= await findPatient({"patientFname":patientId});

    if (!findPatientinfo) {
        return res.sendStatus(404);
      }
    
   

      const updatedPatient = await updatePatient({"patientFname":patientId},{$set:updatePatientinfo},{new:true});

      return res.send(updatedPatient);

}


export async function deletePatientHandler(req:Request,res:Response){
  
     const patientinfoId = get(req, "params.patientId");
     const findPatientinfo = await findPatient({ "patientFname":patientinfoId });
   
     if (!findPatientinfo) {
       return res.sendStatus(404);
     }
   
     await deletePatient({"patientFname":patientinfoId});
   
     return res.sendStatus(200);
   
   }


export async function getOnePatientHandler(req:Request,res:Response) {
     const patientIdName = get(req, "params.patientId");
     const patientInfo =  await findPatient({"patientFname":patientIdName});
   
  
   
     if(!patientInfo)
     {
       return res.sendStatus(404);
     }
   
  
     return res.send(patientInfo);    
   }


   export async function getAllPatienthandler(req:Request,res:Response){

    try {
      const patientinfo = await getAllPatienti({})
    
  
       return res.send(patientinfo);
    } catch (error) {
      return res.sendStatus(404).json("Error")
    }
  
  
  }


  export async function getPatientHistoryFinderhandler(req:Request,res:Response){
    const patientHistory = get(req, "params.patienthistoryname");

    try {
      
    

    const patientinfoz = await getAllPatient({})
    .where({ $or: [ { "patientFname": patientHistory },
     { "patientLName": patientHistory },
     { "dateOfbirth": patientHistory },
     { "gender": patientHistory },
     { "complaint": patientHistory },
     { "bloodPressuer": patientHistory },
     { "pulse": patientHistory },
     { "weight": patientHistory },
     { "illness": patientHistory },
     { "treatment": patientHistory },


    //  { "createdAt": patientHistory },
    //  { "updatedAt": patientHistory },

    
    ] });

    if(!patientinfoz)
    {
      return new Error ("Patient Not Found"); 
      //res.sendStatus(404);
    }


        
    return res.send(patientinfoz);

  } catch (error) {
    return res.sendStatus(404);
      
  }
  
  }

 // getHitstoryPatient

 export async function getPatientHistoryFinderhandlerr(req:Request,res:Response){
  const patientHistory = get(req, "params.patienthistoryname");

  try {
    
  

  const patientinfoz = await getHitstoryPatient(patientHistory)
 


  //  { "createdAt": patientHistory },
  //  { "updatedAt": patientHistory },



  if(!patientinfoz)
  {
    return new Error ("Patient Not Found"); 
    //res.sendStatus(404);
  }


      
  return res.send(patientinfoz);

} catch (error) {
  return res.sendStatus(404);
    
}

}
   
   //updatePatientSearch

   export async function getUpdateSearchPatient(req:Request,res:Response){
    const id = get(req, "params.id");
  
    try {
      
    
  
    const patientinfoz = await updatePatientSearch({patientFname:id})
   
  
  
    //  { "createdAt": patientHistory },
    //  { "updatedAt": patientHistory },
  
  
  
    if(!patientinfoz)
    {
      return new Error ("Patient Not Found"); 
      //res.sendStatus(404);
    }
  
  
        
    return res.send(patientinfoz);
  
  } catch (error) {
    return res.sendStatus(404);
      
  }
  
  }


  export async function updatePatientnewhandler(req:Request,res:Response) {
    //const {postId}=req.params;
    try {
      
    
    const postId = get(req, "params.patientId");
  
    const update=req.body;
    const post = await findPatient({"_id":postId});
  
  
    if (!post) {
      return res.sendStatus(404);
    }
  
    const updatedPost= await PatientUpdateFunction({"_id":postId},req.body)

    return res.send("Info Updated")
    //res.status(response.statusCode).json(response)

  } catch (error) {

    return res.send("Error,User cannot find")
      
  }
  
    
  }
