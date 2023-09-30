import { CliApplication } from './app/cli-application';
import GenerateCommand from './app/commands/generate-command';
import { HelpCliCommand } from './app/commands/help-command';

console.log('Hello World');

const cliApp = new CliApplication();

cliApp.registerCommands([new HelpCliCommand(), new GenerateCommand()]);

cliApp.processCommand(process.argv);

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

