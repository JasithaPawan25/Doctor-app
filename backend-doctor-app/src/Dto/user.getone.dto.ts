import { FilterQuery } from "mongoose"
import User, { IUser } from "../Module/user.module"

export class GetOneUserDto {
    constructor(public readonly username: string) {}
  
    static from(body: Partial<GetOneUserDto>) {
  
    //   return new GetOneSubscriberDto(
    //     body.id,
    //     body.username,
    //   //  entity.password,
    //     //entity.createdAt
    //   )
    // }
  
      if (!body.username) {
        throw new Error('missing id property')
      }
      if (!body.username) {
        throw new Error('missing id property')
      }
      //static from()
  
      return new GetOneUserDto(body.username)
    }
  }
  
  
  export class UserFindDto {
    constructor(
    //  public readonly id: string,
      public readonly username: string,
      public readonly password: string,
    //  public readonly createdAt: Date
    ) {}
  
    static from(entity: IUser) {
      return new UserFindDto(
      //  entity._id,
        entity.username,
        entity.password,
        //entity.createdAt
      )
    }
  
    // static fromMany(users: IUser[]) {
    //   return users.map((user) => UserDto.from(user))
    // }
  }


  export class UpdateSubscriberDto {
    constructor(
      public readonly id: string,
      public readonly username?: string,
      public readonly password?: string
    ) {}
  
    static from(body: Partial<UpdateSubscriberDto>) {
      if (!body.id) {
        throw new Error('missing id property')
      }
      if (!body.username) {
        throw new Error('missing id property')
      }
  
      if (!body.password) {
        throw new Error('missing id property')
      }
  
      return new UpdateSubscriberDto(body.id,body.username,body.password)
    }
  }




 export async function updateOne(payload: Partial<IUser>) {
  try {
    
  
    const foundSubscriber = await User.findOne(
     {"_id":payload._id}
    )

    if (!foundSubscriber) {
      throw new Error('subscriber does not exist')
    }

    if (payload.username) {
      foundSubscriber.username = payload.username
    }

    if (payload.password) {
      foundSubscriber.password = payload.password
    }

    foundSubscriber.save()

  } catch (error) {
    return ('user does not exist')
  }

     //foundSubscriber;
  }