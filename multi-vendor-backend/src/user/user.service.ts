import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.schema';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>,private authService:AuthService) {}
  async create(createUserDto: CreateUserDto) {
    const finOneUSer = await this.userModel.findOne({email:createUserDto.email});
    if(finOneUSer){
      throw new Error('User already exists');
    }



    if(createUserDto.password.length < 6){
      throw new Error('Password should be 6 characters');
    }

  
    const hash =  await bcrypt.hashSync(createUserDto.password, 10);
    createUserDto.password = hash;
    const createdUser = await this.userModel.create(createUserDto);

     if(! createdUser){
      throw new Error('User not created');
     }
     return createdUser
 
   
  }
  // have to update here like maybe save the refresh token in the radish or db for fast access . also we have to make sure like about
  // security of the refresh token
  // we can also use type sens maybe in the future
  // we don't need seo fo user so we we will carry by user id rather than slugify we will slugify other thing
  async login(email:string,password:string){
    const user = await this.userModel.findOne({email:email});
    if(!user){
      throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      throw new Error('Password is incorrect');
    }
    const payload ={
      email:user.email,
      role:user.role,
      name:user.name
    }
    const token = await this.authService.authToken(payload);
    return {
      userName:user.name,
      email:user.email,
      token
    };



  }
  findAll() {
    this.logger.log('findAll');
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

 async update( updateUserDto: UpdateUserDto) {
 
   const updated =  this.userModel.findOneAndUpdate({_id:updateUserDto.id},updateUserDto,{new:true});
   if(!updated){
    throw new Error('User not updated');
   }
   return updated


  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
