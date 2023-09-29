
import { PrismaClient } from '@prisma/client';
import { CliCommandInterface } from './cli-command.interface.js';

type Client = typeof PrismaClient.prototype;

export default class GenerateCommand implements CliCommandInterface {
  public readonly name;
  public readonly prismaClient: Client;

  constructor(){
    this.name = '--generate';
    this.prismaClient = new PrismaClient();
  }

  public async execute(...parameters: string[]): Promise<void>{
    const [quantity, filepath, url] = parameters;
    const productsQuantity = Number.parseInt(quantity, 10);
  }

  public async generateProducts(quantity: number){
    console.info('generateProducts function not implemented');
  }
}
