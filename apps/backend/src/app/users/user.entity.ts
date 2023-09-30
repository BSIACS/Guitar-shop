import {genSalt, hash, compare} from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


const SALT_ROUNDS = 10;

export class UserEntity{
  private id: string;
  private name: string;
  private email: string;
  private passwordHash: string;


  constructor(name: string, email: string, passwordHash: string){
    this.fillEntity(name, email, passwordHash);
  }

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      passwordHash: this.passwordHash
    };
  }

  public fillEntity(name: string, email: string, passwordHash: string){
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
