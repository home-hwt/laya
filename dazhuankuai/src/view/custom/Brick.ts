/**
* 砖块 
*/
module view {
	export class Brick extends view.BaseSprite {
		public type: number = ViewConstant.BRICK_SPRITE_TYPE;
		public camp: number = ViewConstant.RED_CAMP;

		private textNumLabel: Laya.Label;
		private _sizeWH: number;

		private static brickSignStr: string = "brick";

		constructor() {
			super();
		}

		public static getInstance(textNum: number, wh: number, fillColor: string): Brick {
			let brick = Laya.Pool.getItemByClass(Brick.brickSignStr, Brick);
			brick.drawBrick(textNum, wh, fillColor);
			return brick;
		}

		/**
		 * @param wh 宽高大小
		 * @param fillColor 填充的颜色 
		 */
		private drawBrick(textNum: number, wh: number, fillColor: string) {
			this.hp = textNum;
			if (this._sizeWH > 0 && this._sizeWH == wh) {//存在不重新创建
				console.log("brick reuse");
				
			} else {
				console.log("brick create");
				this._sizeWH = wh;
				this.width = this.height = wh;
				this.graphics.drawRect(0, 0, wh, wh, fillColor);
			}
			this.createOrUpdateText();
		}

		private createOrUpdateText() {
			if (!this.textNumLabel) {
				this.textNumLabel = new Laya.Label();
				this.textNumLabel.fontSize = 30;
				this.textNumLabel.color = "#FFFFFF";
				let textW = this.textNumLabel.width;
				let textH = this.textNumLabel.height;
				this.textNumLabel.anchorX = this.textNumLabel.anchorY = 0.5;
				let posx: number = this._sizeWH / 2 - textW / 2;
				let posy: number = this._sizeWH / 2 - textH / 2;
				this.textNumLabel.pos(posx, posy);
				this.addChild(this.textNumLabel);
			}
			//this.textNumLabel.text = this.hp + "";
			this.textNumLabel.changeText(this.hp+"");
		}

		public loseHp(loseNum: number = 1) {
			this.hp -= loseNum;
			this.createOrUpdateText();
			ApplicationFacade.getInstance().sendNotification(Constant.UPDATE_SCORE);
			if (this.hp <= 0) {
				this.removeAdnRecover();
				Laya.SoundManager.stopSound("sound/baozha.wav");
				Laya.SoundManager.playSound("sound/baozha.wav");
			}
		}

		public removeAdnRecover() {
			this.removeSelf();
			Laya.Pool.recover(Brick.brickSignStr, this);
		}
	}
}