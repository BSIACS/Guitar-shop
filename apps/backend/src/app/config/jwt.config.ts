import { JwtModuleOptions } from '@nestjs/jwt';


export async function getJwtConfig(): Promise<JwtModuleOptions> {
  console.log(process.env.JWT_EXPIRES_IN);

  return {
    secret: 'secret',
    signOptions: { expiresIn: '60s', algorithm: 'HS256' }
  }
}
