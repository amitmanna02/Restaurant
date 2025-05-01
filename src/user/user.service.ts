import { Injectable } from '@nestjs/common';
import { UserRepoService } from 'src/db/repositories/user-repo/user-repo.service';

@Injectable()
export class UserService {
  constructor(private userRepoService: UserRepoService) {}
  async register(createUserRegisterDto) {
    return this.userRepoService.register(createUserRegisterDto);
  }
  async logIn(emailId: string, pwd: string) {
    const verifyUser = await this.userRepoService.findByEmail(emailId);
    if (verifyUser?.email == emailId) {
      if (verifyUser.password == pwd) {
        console.log('Login successful.');
      } else console.log('Wrong password.');
    } else {
      console.log('Wrong Username.');
    }
  }
}
