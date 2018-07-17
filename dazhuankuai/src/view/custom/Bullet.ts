/**
* 子弹实体类 
*/
module view {
	export class Bullet extends BaseSprite {
		public type: number = ViewConstant.BULLET_SPRITE_TYPE;
		public _speed: number = 4;//子弹默认速度
		public hp: number = 1;
		public camp:number = view.ViewConstant.BULE_CAMP;


		private static bulletSignStr: string = "bullet";
		 
		constructor() {
			super();
			this.init();
		}

		public static getInstace():Bullet{
			return Laya.Pool.getItemByClass(Bullet.bulletSignStr,Bullet);
		}

		private init(radius: number = 8): void {
			this.graphics.clear();
			this.width = this.height = radius * 2;
			this.graphics.drawCircle(radius / 2, radius / 2, radius, "#d24b4b");;
		}

		public setSpeed(speed: number) {
			this._speed = speed;
		}

		public loseHp(loseNum: number = 1) {
			this.hp -= loseNum;
			if (this.hp <= 0) {
				this.removeAndRecover();
			}
		}

		public removeAndRecover() {
			this.removeSelf();
			Laya.Pool.recover(Bullet.bulletSignStr, this);
		}
	}
}