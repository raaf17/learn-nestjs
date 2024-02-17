import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializeUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: "Rizal",
      password: "12345"
    },
    {
      username: "Rafi",
      password: "12345"
    },
    {
      username: "Rifai",
      password: "12345"
    },
  ];

  getUsers(){
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUsername(username: string){
    return this.users.find((user) => user.username === username);
  }
}
