/**
* name 
*/
module controller{
	import INotification = puremvc.INotification;
	export class InitController extends puremvc.SimpleCommand{
		constructor(){
			super();
		}

		public execute(notification: INotification): void
		{
			LoadingCommand.registerCommand();
			GameScenceCommand.registerCommand();
			GameOverCommand.registerCommand();
		}
	}
}