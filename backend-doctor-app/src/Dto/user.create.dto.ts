export class CreateUserDto {
    constructor(public readonly username: string, public readonly password: string) {}
  
    static from(body: Partial<CreateUserDto>) {
      if (!body.username) {
        throw new Error('Missing property channel')
      }
  
      if (!body.password) {
        throw new Error('Missing property name')
      }
  
      return new CreateUserDto(body.username, body.password)
    }
  }
  