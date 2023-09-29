import { CliCommandInterface } from './cli-command.interface.js';


export class HelpCliCommand implements CliCommandInterface {
  public readonly name: string;

  constructor() {
    this.name = '--help';
  }

  public async execute(): Promise<void> {
    console.info(`
      Программа для подготовки данных для REST API сервера.

      Команды:
          --help:                                               # печатает этот текст
          --generator <n> <connection string>                   # генерирует произвольное количество тестовых данных
    `);
  }

}
