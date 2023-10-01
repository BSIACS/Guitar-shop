import { CliApplication } from './app/cli-application';
import GenerateCommand from './app/commands/generate-command';
import { HelpCliCommand } from './app/commands/help-command';


const cliApp = new CliApplication();

cliApp.registerCommands([new HelpCliCommand(), new GenerateCommand()]);

cliApp.processCommand(process.argv);
