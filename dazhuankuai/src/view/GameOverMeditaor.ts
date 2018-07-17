/**
* name 
*/
module mediator{
	export class GameOverMediator extends mediator.BaseMediator {
		constructor(){
			super("GameOverMeditor");
		}

		public initRes(){
			this.resUrlArray = [
				{url:"res/atlas/template/Warn.atlas",type:Laya.Loader.ATLAS}
			]
		}

		public initView(){
			let gameOverUi = new ui.GameOverUI();
			gameOverUi.cancelBt.on(Laya.Event.CLICK,this,this.cancel);
			gameOverUi.continueBt.on(Laya.Event.CLICK,this,this.continueGame);
			
			this.viewComponent = gameOverUi;
		}

		public cancel(){
			layer.ScenceManager.getInstance().popMediator(this);
		}

		public continueGame(){
			layer.ScenceManager.getInstance().popMediator(this);
			this.sendNotification(Constant.START_GAME);
		}
	}
}