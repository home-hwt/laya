/**
* name 
*/
module controller {
	import INotification = puremvc.INotification;
	export class InitViewCommand extends puremvc.SimpleCommand {
		constructor() {
			super();
		}

		public execute(notification: INotification): void {
			//this.facade.registerMediator(new view.TestViewMedia());
		}
	}
}