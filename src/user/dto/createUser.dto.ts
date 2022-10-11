import Role from "./role.enum";

export class CreateUserDto {
    email: string;
    password: string;
    role: Role;
  }
   
export default CreateUserDto;