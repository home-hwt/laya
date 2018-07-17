/**
* name 
*/
module mediator {
	/**
	 * push mediator后调用顺序
	 * setArgs()
	 * init()
	 * onRegister();
	 * 
	 * //pop时(关闭)调用
	 * onRemove();
	 */

	import Sprite = Laya.Sprite;
	import View = Laya.View;
	export class BaseMediator extends puremvc.Mediator {
		public resUrlArray: Array<any> = [];
		private mArgs:any;

		//遮照层
		private mMaskSprite:Sprite;
		private mIsMask:boolean;//是否遮照
		//private mIsTouchOusideClose:boolean;//点击遮照关闭

		/**
		 * 
		 * @param mediatorName   注册mediator的唯一名称
		 * @param isMask 是否有阴影遮照
		 */
		constructor(mediatorName:string,isMask:boolean = false,isTouchOusideClose:boolean = false) {
			super(mediatorName);
			this.mIsMask = isMask;
			
			if(isMask){
				this.mMaskSprite = new Sprite();
				let w = this.mMaskSprite.width = Laya.stage.width;
				let h = this.mMaskSprite.height = Laya.stage.height;
				this.mMaskSprite.graphics.drawRect(0,0,w,h,"#000000");
				this.mMaskSprite.alpha = 0.5;
				if(isTouchOusideClose){
					this.mMaskSprite.on(Laya.Event.CLICK,this,this.touchOusideClose);
				}
			}
		}

		private touchOusideClose(){
			this.mMaskSprite.off(Laya.Event.CLICK,this,this.touchOusideClose);
			this.onClose();
		}

		//设置参数
		public setArgs(args:any){
			this.mArgs = args;
		}

		public getArgs():any{
			return this.mArgs;
		}

		public initRes(){
		}

		//初始化View实现 设置viewComponent
		public initView(){
		}

		//子类重写的话必须调用
		public onRegister(): void {
			console.log("super onRegister");
			
			if(this.mIsMask && this.mMaskSprite && !this.mMaskSprite.parent){
				Laya.stage.addChild(this.mMaskSprite);
			}

			if(this.viewComponent){
				let rootView:View = <View>this.viewComponent;
				if(!rootView.parent){//未添加
					rootView.anchorX = 0.5;
					rootView.anchorY = 0.5;
					rootView.pos(Laya.stage.width / 2, Laya.stage.height / 2)
					Laya.stage.addChild(rootView);
				}
			}
		}
	
		/**
		 * 资源加载
		 */
		public async asyncLoader() {
			if(this.resUrlArray.length > 0){
				await Utils.asyncLoad(this.resUrlArray);
			}
		}

		/**
		 *  子类必须调用
		 */
		public onRemove(): void {
			this.clearRes();
			if (this.viewComponent) {
				this.viewComponent.removeSelf();
			}

			if(this.mIsMask){
				if(this.mMaskSprite){
					this.mMaskSprite.removeSelf();
				}
			}
		}

		//关闭界面调用
		public onClose():void{
			layer.ScenceManager.getInstance().popMediator(this);
		}

		private clearRes() {
			for (var index = 0; index < this.resUrlArray.length; index++) {
				let element = this.resUrlArray[index];
				if (element.url) {
					Laya.loader.clearTextureRes(element.url);
				} else {
					Laya.loader.clearTextureRes(element);
				}
			}
			this.resUrlArray = null;
		}
	}
}