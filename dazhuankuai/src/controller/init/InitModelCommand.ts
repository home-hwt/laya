/**
* name 
*/
module controller {
	import INotification = puremvc.INotification;
	export class InitModelCommand extends puremvc.SimpleCommand {
		constructor() {
			super();
		}

		public execute(notification: INotification): void {
			this.facade.registerProxy(new model.GameScenceModel());
		}
	}
}