/**
* name 
*/
module view{
	export class HeroRole extends BaseSprite{
		public _sizeWH:number = Laya.stage.width / 10;
		private w2:number;

		public type:number = ViewConstant.HERO_ROLE_SPRITE_TYPE;
		public camp:number = ViewConstant.BULE_CAMP;
		public hp:number = 3;
		private maxRightx:number;

		public bulletType:number = 1;//子弹类型  1: 一个子弹，2:2个子弹  3:三个子弹

		constructor(){
			super();
			this.graphics.drawRect(0,0,this._sizeWH,this._sizeWH,"#e33030");
			this.width = this.height = this._sizeWH;
			this.w2 = this.width / 2;
			this.maxRightx = this.stage.width - this._sizeWH;
			Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove);
		}


		private mouseMove():void{
			let mousex:number = this.stage.mouseX;
			this.x = mousex - this.w2;
			if(this.x < 0){
				this.x = 0;
			}
			if(this.x > this.maxRightx){
				this.x = this.maxRightx;
			}
		}

		public loseHp(loseNum:number = 1){
			this.hp -= loseNum;
			if(this.hp <= 0){
				this.removeAndRecover();
			}
		}

		public removeAndRecover(){
			this.removeSelf();
			Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove);
			this.graphics.clear();

		}
	}
}