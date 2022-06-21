import User from "../Module/user.module";
import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";
import { findUser, findUseri } from "../Service/user.service";
import dotenv from 'dotenv';
dotenv.config();

export async function loginUserhandler(req:Request,res:Response) {
  //  const username =req.body;
    const { uname, password } = req.body;
   // const userLogin = await User.findOne({uname});
    const userLogin = await findUser({"username":uname});

    if(!userLogin) {
        return res.sendStatus(404);
    }

    const validPassword = await bcrypt.compare(password,userLogin.password);

    if(!uname || !password) {
        return res.status(400).json({ message: "Unable to create user" });
    }
    

    // if(user.upassword !== (upassword))
    // {

    if(!validPassword) {
        return res.status(401).json({ message: "Unable to login"});
    }

    const token = jwt.sign({ 
            id: userLogin._id, 
            name: userLogin.username, 
            password: userLogin.password, 
           // type: user.type
        }, 
            process.env.JWT_SECRET as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN as string
            }
        );
            
    return res.json({user:userLogin._id,name:userLogin.username,token});
}


//export default new loginUserhandler();



