import {Router} from 'express'
import { addBook, CreatUserhandler,deleteUserHandler,getOneUserHandler, getUserhandler, updatenewhandler, updateUserHandler, } from '../Controller/user.controller';
import { loginUserhandler } from '../Controller/login.controller';
import authMiddleware from '../Middleware/auth';

const routes =Router();

routes
    .route("/book")
    .post(addBook);

routes
    .route("/createuser")
    .post(CreatUserhandler); 
    
routes
    .route("/getuser")
    .get(getUserhandler);

routes
    .route("/getoneuser/:postId")
    .get(getOneUserHandler);  

  

routes
    .route("/userupdate/:postId")
    .put(updateUserHandler); 
    
    //updatenewhandler
    routes
    .route("/userupdateii/:postId")
    .put(updatenewhandler); 

routes
    .route("/userdelete/:postId")
    .delete(deleteUserHandler);   
    
routes
    .route("/loginuser")
    .post(loginUserhandler);     

export {routes as userRoutes }  



