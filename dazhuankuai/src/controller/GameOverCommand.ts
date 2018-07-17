/**
* name 
*/
module controller{
	export class GameOverCommand extends controller.BaseController{
		constructor(){
			super();
		}

		public static registerCommand(){
			ApplicationFacade.getInstance().registerCommand(Constant.SHOW_GAME_OVER_PAGE,GameOverCommand);
		}

		public execute(notification: puremvc.INotification): void
		{
			console.log("GameOverCommand" + notification.getName());
			
			switch (notification.getName()) {
				case Constant.SHOW_GAME_OVER_PAGE:
					layer.ScenceManager.getInstance().push(mediator.GameOverMediator);
					break;			
				default:
					break;
			}
		}
	}
}