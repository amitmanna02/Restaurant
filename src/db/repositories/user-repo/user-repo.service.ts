import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/db/models/user.model';
import { createUserDto } from 'src/user/Dtos/createUser.dto';

@Injectable()
export class UserRepoService {
    constructor(@InjectModel(User) private userModel : typeof User){}

    async register( createRegisterDto : createUserDto)
    {
        const res = {
            firstName : createRegisterDto.firstName,
            lastName :createRegisterDto.lastName,
            email : createRegisterDto.email,
            password:createRegisterDto.password,
            passwordSalt: createRegisterDto.passwordSalt
        }
        return this.userModel.create(res);
    }
    async findByEmail(email : string)
    {
        return this.userModel.findOne({
            where: {
                email,
            }
        })
    }
}
