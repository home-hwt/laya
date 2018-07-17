/**
* 道具 
*/
module view{
	export class Prop extends BaseSprite{
		private _imageSize:number = 55;
		public type:number = ViewConstant.PROP_SPRITE_TYPE;
		public camp:number = ViewConstant.RED_CAMP;
		public _propType:number= 0;
		constructor(){
			super();
			this.width = this.height = this._imageSize;
		}

		/**
		 * @param url 图片路径
		 */
		public initPropImage(propType:number){
			this._propType = propType;
			this.loadImage("game/sheet" + propType + ".png");
		}

		public removeAdnRecover(){
			this.removeSelf();
		}
	}
}