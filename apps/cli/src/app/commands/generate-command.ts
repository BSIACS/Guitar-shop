import { genSalt, hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { CliCommandInterface } from './cli-command.interface.js';
import { v4 as uuidv4 } from 'uuid';
import { article, description, imgSrc, stringNumber, titles, typeId } from '../../../mock/mock-data';
import { generateRandomValue, getRandomDate, getRandomItem } from '../utils/random'

type Client = typeof PrismaClient.prototype;

const SALT_ROUNDS = 10;
const DEFAULT_USER_NAME = 'admin';
const DEFAULT_USER_EMAIL = 'admin@somemail.com';
const DEFAULT_USER_PASSWORD = 'admin';

const MIN_PRODUCT_PRICE = 100;
const MAX_PRODUCT_PRICE = 1000000;


export default class GenerateCommand implements CliCommandInterface {
  public readonly name;
  public readonly prismaClient: Client;

  constructor() {
    this.name = '--generate';
    this.prismaClient = new PrismaClient();
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [quantity] = parameters;
    const productsQuantity = Number.parseInt(quantity, 10);

    await this.createUser();
    await this.createTypes();
    await this.createProducts(productsQuantity);
  }

  public async createProducts(quantity: number) {
    const products = [];

    for (let i = 0; i < quantity; i++) {
      products.push({
        id: uuidv4(),
        title: getRandomItem(titles),
        description: getRandomItem(description),
        dateAdded: getRandomDate(new Date("2017-01-26"), new Date()),
        imageSrc: getRandomItem(imgSrc),
        typeId: getRandomItem(typeId),
        article: getRandomItem(article),
        stringNumber: getRandomItem(stringNumber),
        price: generateRandomValue(MIN_PRODUCT_PRICE, MAX_PRODUCT_PRICE).toString()
      });
    }

    await this.prismaClient.product.createMany({
      data: products
    });
  }

  public async createUser() {
    const salt = await genSalt(SALT_ROUNDS);

    await this.prismaClient.user.upsert({
      where: {
        email: DEFAULT_USER_EMAIL,
      },
      update: {

      },
      create: {
        id: uuidv4(),
        name: DEFAULT_USER_NAME,
        email: DEFAULT_USER_EMAIL,
        passwordHash: await hash(DEFAULT_USER_PASSWORD, salt),
      },

    });
  }

  public async createTypes() {
    await this.prismaClient.type.createMany({
      data: [
        {
          id: '12a664cb-c8b9-4e44-817b-fa220fb48cf8',
          name: 'electric'
        },
        {
          id: '20670fbe-c926-48e9-ae7e-b8d6b09740dd',
          name: 'acoustic'
        },
        {
          id: 'be66a279-8e7c-497b-8b29-b3107c2387e7',
          name: 'ukulele'
        }
      ],
    });
  }
}
