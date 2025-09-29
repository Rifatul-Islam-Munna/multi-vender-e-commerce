import { Injectable, Logger } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private jwtService: JwtService,private configService: ConfigService) {}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  authToken (payload: any) {
    this.logger.debug(`payload: ${JSON.stringify(payload)}`);
    const accessToken = this.jwtService.sign(payload,{secret:this.configService.get('JWT_SECRET_ACCESS_TOKEN'),expiresIn:this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')});
    const RefreshToken = this.jwtService.sign(payload,{secret:this.configService.get('JWT_SECRET_REFRESH_TOKEN'),expiresIn:this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')});
    return {accessToken,RefreshToken};


  }
}
