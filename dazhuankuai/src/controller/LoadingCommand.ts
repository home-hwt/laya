/**
* name 
*/
module controller{
	import INotification = puremvc.INotification;
	import ScenceManager = layer.ScenceManager;
	export class LoadingCommand extends controller.BaseController{
		constructor(){
			super();
		}

		public execute(notification: INotification): void
		{
			console.log("loading command");
			let notificationName = notification.getName();
			switch (notificationName) {
				case Constant.SHOW_LOADING_PAGE:
					ScenceManager.getInstance().push(mediator.LoadingMediator);
					break;
			
				default:
					break;
			}
		}

		public static registerCommand():void{
			ApplicationFacade.getInstance().registerCommand(Constant.SHOW_LOADING_PAGE,LoadingCommand);
		}
	}
}