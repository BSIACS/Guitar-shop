import { IsEmail, IsString } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../../constants/validation-messages';

export class CreateUserDto{
  @IsString()
  public name: string;

  @IsEmail({}, {message: AUTH_USER_EMAIL_NOT_VALID})
  public email: string;

  @IsString()
  public password: string;
}
