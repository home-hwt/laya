/**
* name 
*/
module controller{
	export class StartUpCommand extends puremvc.MacroCommand{//多command
		constructor(){
			super();
		}
		
		public initializeMacroCommand():void{
			this.addSubCommand(InitController);
			this.addSubCommand(InitModelCommand);
			this.addSubCommand(InitViewCommand);
		}
	}
}