import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { SuccessResponse } from 'src/utils/responses/success.response';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findForAuth(email);
    const isValid = await bcrypt.compare(email + password, user.passkey);

    if (user && isValid) {
      const { passkey, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    const userDetails = {
      user: {
        ...user,
      },
      accessToken: this.jwtService.sign(payload, {
        expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRES_IN'),
      }),
    };
    return new SuccessResponse(userDetails);
  }
}
