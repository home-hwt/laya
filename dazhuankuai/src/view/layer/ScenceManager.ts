/**
* name 
*/
module layer {
	import BaseMediator = mediator.BaseMediator;
	import Sprite = Laya.Sprite;
	import Event = Laya.Event;
	export class ScenceManager {
		private static INSTANCE: ScenceManager;

		/** 以先进后出的顺序保存*/
		private mUiMediatorArray: Array<BaseMediator> = new Array<BaseMediator>();
		//private mUiMediatorMap = {};

		private mMaskSprite: Sprite;

		private constructor() {
		}

		public static getInstance(): ScenceManager {
			if (ScenceManager.INSTANCE == null) {
				ScenceManager.INSTANCE = new ScenceManager();
			}
			return ScenceManager.INSTANCE;
		}

		public async push(nameClassDefName: any, args?: any) {
			let mediator = <BaseMediator>ApplicationFacade.getInstance().retrieveMediator(nameClassDefName.mediatorName);
			if (mediator) {//已注册先清理
				this.popMediator(mediator);
			}
			mediator = new nameClassDefName();
			mediator.setArgs(args);
			mediator.initRes();
			await mediator.asyncLoader();
			mediator.initView();
			this.registerMediator(mediator);

		}

		//关闭显示顶层
		public pop() {
			if (this.mUiMediatorArray.length > 0) {
				let mediator: BaseMediator = this.mUiMediatorArray.pop();
				if (mediator) {
					this.removeMediator(mediator);
				}
			}
		}
		//关闭mediator层
		public popMediator(mediator: BaseMediator) {
			if (this.mUiMediatorArray.length > 0) {
				let indexOf: number = this.mUiMediatorArray.lastIndexOf(mediator);
				if (indexOf > 0) {
					this.mUiMediatorArray.splice(indexOf, 1);//删除indexOf位置索引对象
				}
			}
			this.removeMediator(mediator);
		}

		private registerMediator(mediator: BaseMediator) {
			if (mediator) {
				this.mUiMediatorArray.push(mediator);
				ApplicationFacade.getInstance().registerMediator(mediator);
			}
		}

		private removeMediator(mediator: BaseMediator) {
			if (mediator) {
				ApplicationFacade.getInstance().removeMediator(mediator.mediatorName);
			}
		}
	}
}