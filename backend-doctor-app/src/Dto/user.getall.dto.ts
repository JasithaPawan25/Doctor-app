
import { IUser } from "../Module/user.module"


export class UserDto {
  constructor(
    public readonly id: string,
    public readonly username: string,
  //  public readonly password: string,
  //  public readonly createdAt: Date
  ) {}

  static from(entity: IUser) {
    return new UserDto(
      entity._id,
      entity.username,
    //  entity.password,
      //entity.createdAt
    )
  }

  static fromMany(users: IUser[]) {
    return users.map((user) => UserDto.from(user))
    
  }
}

