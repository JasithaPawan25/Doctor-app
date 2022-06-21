import User from "../Module/user.module";
import { Schema, model, connect,ObjectId } from 'mongoose';
import { Request,Response } from "express";
import {get} from "lodash"
import { createPost, getAllUser,findUser, updateUser, deleteUser, findUseri, UserUpdateFunction } from "../Service/user.service";


export let addBook = (req: Request, res: Response) => {
    var book = new User(req.body);
  
    book.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(book);
      }
    });
  };


export async function CreatUserhandler(req:Request,res:Response) {

  const body = req.body;

  const bodyUser = await createPost(body);

  return res.send(bodyUser);
  
}

export async function getUserhandler(req:Request,res:Response){
  const post = await getAllUser({})

  return res.send(post);

}

export async function getOneUserHandler(req:Request,res:Response) {
 
 //const userId = get(req,"user._id")

  const postIdName = get(req, "params.postId");
  const post =  await findUseri({"username":postIdName});

  //{_id : ObjectId("60f532903ded77001064ae92")}

  if(!post)
  {
    return res.sendStatus(404);
  }

  // if (String(post.username) !== userId) {
  //   return res.sendStatus(404);
  // }
  return res.send(post);
  
}

export async function updateUserHandler(req:Request,res:Response) {
  //const {postId}=req.params;
  const postId = get(req, "params.postId");

  const update=req.body;
  const post = await findUser({"username":postId});


  if (!post) {
    return res.sendStatus(404);
  }

  const updatedPost= await updateUser({"username":postId},{update},{new:true})

  return res.send(updatedPost)

  
}

export async function deleteUserHandler(req:Request,res:Response){
 // const {postId}=req.params;
  const postId = get(req, "params.postId");
  const post = await findUser({ "username":postId });

  if (!post) {
    return res.sendStatus(404);
  }

  await deleteUser({"username":postId});

  return res.sendStatus(200);

}

 //UserUpdateFunction
  //

  export async function updatenewhandler(req:Request,res:Response) {
    //const {postId}=req.params;
    try {
      
    
    const postId = get(req, "params.postId");
  
    const update=req.body;
    const post = await findUser({"_id":postId});
  
  
    if (!post) {
      return res.sendStatus(404);
    }
  
    const updatedPost= await UserUpdateFunction({"_id":postId},req.body)

    return res.send("Info Updated")
    //res.status(response.statusCode).json(response)

  } catch (error) {

    return res.send("Error,User cannot find")
      
  }
  
    
  }
