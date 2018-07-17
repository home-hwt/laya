/**
* name 
*/
module mediator{
	import BaseMediator = mediator.BaseMediator;
	import INotification = puremvc.INotification;
	export class LoadingMediator extends BaseMediator{
		constructor(){
			super("LoadingMediator",true);
		}

		public initRes(){
			this.resUrlArray = [{url:"res/atlas/template/Progress.atlas",type: Laya.Loader.ATLAS}];
		}

		public initView():void{
			let loadingView:ui.LoadingUI = new ui.LoadingUI();
			this.viewComponent = loadingView;
			loadingView.startGameBt.on(Laya.Event.CLICK,this,this.startGame);
		}

		public listNotificationInterests(): string[]
		{
			return [];
		}

        public handleNotification(notification: INotification): void
		{

		}
        
		private startGame(){
			this.sendNotification(Constant.SHOW_GAME_SCENCE_PAGE);
			this.onClose();
		}
	}
}