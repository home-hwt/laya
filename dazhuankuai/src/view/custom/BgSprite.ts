/**
* name 
*/
module view{
	export class BgSprite extends view.BaseSprite{
		public type:number = ViewConstant.BG_SPRITE_TYPE;
		constructor(){
			super();	
			let bgColor:string = "#f4e1e1";
			this.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,bgColor);
		}
	}
}