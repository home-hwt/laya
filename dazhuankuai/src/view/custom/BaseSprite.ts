/**
* 游戏精灵基础类 
*/
module view{
	export class BaseSprite extends Laya.Sprite{
		public type:number = 0;
		public camp:number = ViewConstant.RED_CAMP;//阵营
		public hp:number = 0;
		constructor(){
			super();
		}

		//掉血
		public loseHp(loseNum:number = 1){
		}

		//移除回收
		public removeAdnRecover(){
			
		}
	}
}