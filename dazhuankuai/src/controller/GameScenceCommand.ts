/**
* name 
*/
module controller {
	export class GameScenceCommand extends controller.BaseController {
		constructor() {
			super();
		}

		public static registerCommand(): void {
			ApplicationFacade.getInstance().registerCommand(Constant.SHOW_GAME_SCENCE_PAGE, GameScenceCommand);
			ApplicationFacade.getInstance().registerCommand(Constant.GET_LEVEL_DATA_FINISH, GameScenceCommand);
			ApplicationFacade.getInstance().registerCommand(Constant.GET_LEVEL_DATA, GameScenceCommand);
		}

		public execute(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case Constant.SHOW_GAME_SCENCE_PAGE:
					layer.ScenceManager.getInstance().push(mediator.GameScenceMediator);
					break;
				case Constant.GET_LEVEL_DATA:
					let gameScenceModel:model.GameScenceModel = <model.GameScenceModel>this.facade.retrieveProxy(model.GameScenceModel.NAME);
					gameScenceModel.requestLevelData(notification.getBody());
					break;
				case Constant.GET_LEVEL_DATA_FINISH:
					
					let gameScenceModel1:model.GameScenceModel = <model.GameScenceModel>this.facade.retrieveProxy(model.GameScenceModel.NAME);
					let getData = gameScenceModel1.getData()
					this.sendNotification(Constant.START_LOADING_LEVEL_SCENCE,getData);
					break;
				default:
					break;
			}
		}
	}
}