//mongodb://localhost:27017
import config from '../Config/config';
import * as mongoose from 'mongoose';
import bcrypt from 'bcrypt';



export interface IUser extends mongoose.Document {
    username:string;
    password:string;
}

export const UserSchema = new mongoose.Schema({
    
    username:{type:String,required:true},
    password:{type:String,required:true}
})

UserSchema.pre("save",async function (next){
    let user =this as IUser;

      // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(config.saltWorkFactor);

  const hash = await bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  //if (Error) { return next(new Error("something went wrong")) }
  return next(null);

});

const User = mongoose.model<IUser>("User",UserSchema);
export default User;

