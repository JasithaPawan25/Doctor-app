import {Router} from 'express';
import { createPatienthandler, getAllPatienthandler, getOnePatientHandler, getPatientHistoryFinderhandler, getPatientHistoryFinderhandlerr, getUpdateSearchPatient, updatePatientHandler, updatePatientnewhandler } from '../Controller/patientinfo.controller';
import authMiddleware from '../Middleware/auth';


const routes =Router();

routes
    .route("/patient")
    .post(authMiddleware,createPatienthandler);

    //patientId
routes
    .route("/patientupdate/:patientId")
    .put(authMiddleware,updatePatientHandler);

    //getAllPatienthandler
routes
    .route("/patientall")
    .get(getAllPatienthandler);

    //getOnePatientHandler

routes
    .route("/patientone/:patientId")
    .get(getOnePatientHandler);   
    
    //getPatientHistoryFinderhandler

routes
    .route("/patienthistory/:patienthistoryname")
    .get(getPatientHistoryFinderhandler); 


    routes
    .route("/patienthistoryz/:patienthistoryname")
    .get(getPatientHistoryFinderhandlerr);   
    
    //getUpdateSearchPatient

    routes
    .route("/patientupdatesearch/:id")
    .get(getUpdateSearchPatient);  

    //updatePatientnewhandler

    routes
    .route("/patient/update/:patientId")
    .put(updatePatientnewhandler);





export {routes as patientRoutes }      