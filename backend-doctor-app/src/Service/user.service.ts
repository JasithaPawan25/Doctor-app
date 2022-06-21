import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery,ObjectId } from "mongoose";
import { UserDto } from "../Dto/user.getall.dto";
import { CreateUserDto } from "../Dto/user.create.dto";
import { GetOneUserDto, updateOne, UpdateSubscriberDto, UserFindDto } from "../Dto/user.getone.dto";
import User from "../Module/user.module";
import  { IUser } from "../Module/user.module";



export async function createPost(input: CreateUserDto) {
    try {

        const createdUser = await User.create(input);
        //  return User.create(input);
       return CreateUserDto.from(createdUser);
      //  return User.create(input);
        
    } catch (error) {

        return ("Please Check the Username And Password & Try agin...")
        
    }

}

export function findUser(query:FilterQuery<IUser>, options: QueryOptions = { lean: true }){
   
 
   // const getoneuser = await User.find({where :{username:nameid}})
    return User.findOne(query,{},options);

}

export async function findUseri(getOneUserDto:GetOneUserDto){
  

try {

    const foundUser = await User.findOne({username:getOneUserDto.username})
  
      if (!foundUser) {
        throw new Error('No user found with the given id')
      }
  
      return UserFindDto.from(foundUser)

    } catch (error) {
        return ("No user found with the given name")
    }

}

export async function getAllUser(query:FilterQuery<IUser>){
    // const queries= await SubscribersRepositoryz(); //User.find();
  //  return UserDto.fromMany(queries)

  const getall = await User.find();
  return UserDto.fromMany(getall)

 //   return User.find(query).lean();

}

export function updateUser(
    query:FilterQuery<IUser>,
    update: UpdateQuery<IUser>,
    options:QueryOptions
){
    // return User.findOneAndUpdate(query,update,options)
    return User.findOneAndUpdate(query,update,options)

}

export function deleteUser(query:FilterQuery<IUser>){
    return User.deleteOne(query)
}




export async function UserUpdateFunction( query:FilterQuery<IUser>,input: UpdateSubscriberDto) {
    try {

        const findlastuser= await User.findOne().where({"_id":query})
       // foundSubscriber
   //    const woe = updateOne({_id:query})
       if(!findlastuser)
       {
        return ("Not a valid user")
       // throw new Error;
       }

     const finduserupdate = updateOne({
            _id: input.id,
            password: input.password,
            username: input.username,
          })

          return finduserupdate;

       
        
    } catch (error) {

        return ("Please Check the Username And Password & Try agin...")
        
    }

}