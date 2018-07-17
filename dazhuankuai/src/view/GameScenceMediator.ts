/**
* name 
*/
module mediator {
	import BaseMediator = mediator.BaseMediator;
	export class GameScenceMediator extends BaseMediator {
		private mBullet: view.Bullet;
		private gameLayer: Laya.Sprite;//游戏界面
		private bg1Sprite: view.BgSprite;//背景1页面
		private bg2Sprite: view.BgSprite;//背景2页面
		private heroRole: view.HeroRole;//主角色

		private createBrickRote: number = 400;//创建砖块的速率
		private createPropRote: number = 1000;//创建道具的速率

		private scoreLabel: Laya.Label;
		private score: number = 0;//分数

		private colorArray: Array<string> = ["#3d3d31", "#ded432", "#980ddd", "#dd4590", "#2211de"];

		constructor() {
			super("GameScenceMediator");
		}

		public initRes() {
			this.resUrlArray = ["res/atlas/game.atlas"];
		}

		public initView() {
			let gameScenceView: ui.GameScenceUI = new ui.GameScenceUI();
			this.scoreLabel = gameScenceView.scoreLabel;
			this.scoreLabel.text = "0";

			this.bg1Sprite = new view.BgSprite();
			gameScenceView.addChild(this.bg1Sprite);
			this.bg1Sprite.pos(0, -Laya.stage.height);

			this.bg2Sprite = new view.BgSprite();
			gameScenceView.addChild(this.bg2Sprite);

			this.gameLayer = new Laya.Sprite();
			this.gameLayer.width = Laya.stage.width;
			this.gameLayer.height = Laya.stage.height;
			gameScenceView.addChild(this.gameLayer);

			gameScenceView.setChildIndex(this.scoreLabel,gameScenceView.numChildren - 1);
			this.viewComponent = gameScenceView;
		}

		public onRegister(): void {
			super.onRegister();
			this.startGame();
		}

		private startGame() {
			this.gameLayer.off(Laya.Event.CLICK, this, this.gameOver);
			Laya.timer.frameLoop(1, this, this.frameLoop);
			this.score = 0;
			this.scoreLabel.changeText(this.score + "");
			this.createHeroRole();
			this.createBrick();
		}

		private updateScore() {
			this.scoreLabel.changeText(this.score + "");
		}

		private gameOver() {
			this.gameLayer.removeChildren(0, this.gameLayer.numChildren);
			Laya.timer.clearAll(this);
			this.sendNotification(Constant.SHOW_GAME_OVER_PAGE);
			this.gameLayer.once(Laya.Event.CLICK, this, this.gameOver);
		}

		//每帧执行
		private frameLoop() {
			this.checkHit();
			let numChilds = this.gameLayer.numChildren;
			let screenHeight: number = Laya.stage.height;
			for (let index = 0; index < numChilds; index++) {
				let sprite: view.BaseSprite = this.gameLayer.getChildAt(index) as view.BaseSprite;
				if (sprite) {
					if (sprite.type == view.ViewConstant.HERO_ROLE_SPRITE_TYPE) {//主角发射子弹
						if (Laya.timer.currFrame % 50 == 0) {
							this.createBullet();
						}
					} else {
						sprite.y = sprite.y + 2;
						if (sprite.type == view.ViewConstant.BG_SPRITE_TYPE) {//背景精灵
							if (sprite.y >= screenHeight) {
								sprite.y = -screenHeight;
							}
						} else if (sprite.type == view.ViewConstant.BRICK_SPRITE_TYPE) {//砖块精灵
							if (sprite.y > screenHeight + 10) {//移动到屏幕底下
								sprite.removeAdnRecover();
							}
						} else if (sprite.type == view.ViewConstant.BULLET_SPRITE_TYPE) {//子弹类型
							let bulletSprite = sprite as view.Bullet;
							bulletSprite.y -= bulletSprite._speed;
							if (sprite.y < 0) {
								bulletSprite.removeAndRecover();
							}
						}
					}
				}
			}

			if (!this.heroRole || !this.heroRole.visible || this.heroRole.hp <= 0) {
				this.gameOver();
			}

			//创建砖块
			if (Laya.timer.currFrame % this.createBrickRote == 0) {
				this.createBrick()
			}

			if (Laya.timer.currFrame % this.createPropRote == 0) {
				this.createProp();
			}
		}

		//检测击中
		private checkHit() {
			let numChilds: number = this.gameLayer.numChildren;
			for (let index = 0; index < numChilds; index++) {
				let sprite1 = this.gameLayer.getChildAt(index) as view.BaseSprite;
				if (sprite1 && sprite1.visible) {//存在并显示
					for (let j = index + 1; j < numChilds; j++) {
						let sprite2 = this.gameLayer.getChildAt(j) as view.BaseSprite;
						if (sprite2 && sprite2.visible && sprite1.camp != sprite2.camp) {//不同阵营进行碰撞检测
							//两角色中心点的距离
							let sprite1Centerx: number = sprite1.x + sprite1.width / 2;
							let sprite1Centery: number = sprite1.y + sprite1.height / 2;
							let sprite2Centerx: number = sprite2.x + sprite2.width / 2;
							let sprite2Centery: number = sprite2.y + sprite2.height / 2;

							let distanceX: number = Math.abs(sprite1Centerx - sprite2Centerx);
							let distanceY: number = Math.abs(sprite1Centery - sprite2Centery);

							if (distanceX <= (sprite1.width / 2 + sprite2.width / 2)
								&& distanceY <= (sprite1.height / 2 + sprite2.height / 2)) {
								let heroType: number = view.ViewConstant.HERO_ROLE_SPRITE_TYPE;//英雄类型
								let propType: number = view.ViewConstant.PROP_SPRITE_TYPE;//道具类型
								if (sprite1.type == propType || sprite2.type == propType) {//为道具时不参与击中
									if ((sprite1.type == heroType || sprite2.type == heroType)) {//当sprite1 和 sprite2为英雄和道具时
										if (sprite1.type == propType) {
											this.bulletUpLevel(<view.Prop>sprite1);
											sprite1.removeAdnRecover();
										} else {
											this.bulletUpLevel(<view.Prop>sprite2);
											sprite2.removeAdnRecover();
										}
									}
								} else {
									sprite1.loseHp();
									sprite2.loseHp();
								}
							}
						}
					}
				}
			}
		}


		//英雄子弹升级
		private bulletUpLevel(propSprite: view.Prop) {
			this.heroRole.bulletType = propSprite._propType + 1;
			Laya.timer.clear(this, this.destroyProp);
			Laya.timer.frameOnce(1200, this, this.destroyProp);
		}

		//道具效果消失
		private destroyProp() {
			this.heroRole.bulletType = 1;
		}

		//创建主角色
		private createHeroRole() {
			this.heroRole = new view.HeroRole();
			this.heroRole.pos(Laya.stage.width / 2 + this.heroRole.width / 2, Laya.stage.height * 4 / 5);
			this.gameLayer.addChild(this.heroRole);
		}

		//创建子弹
		private createBullet() {
			let bulletType: number = this.heroRole.bulletType;
			let bulletW: number = 16;
			let bulletStartx: number = this.heroRole.x + this.heroRole.width / 2 - (bulletType - 1) * bulletW;
			Laya.SoundManager.playSound("sound/hit.wav");
			for (let index = 0; index < this.heroRole.bulletType; index++) {
				let bullet: view.Bullet = view.Bullet.getInstace();
				bullet.x = bulletStartx + (bulletW * 2) * index;
				bullet.y = this.heroRole.y - this.heroRole.height / 2;
				this.gameLayer.addChild(bullet);
			}
		}

		//创建道具
		private createProp() {
			let prop: view.Prop = new view.Prop();
			let random: number = Math.floor(Math.random() * 3);
			let x = (Laya.stage.width - prop.width) * Math.random();
			prop.pos(x, 150);
			prop.initPropImage(random);
			this.gameLayer.addChild(prop);
		}

		private createBrick() {
			this.sendNotification(Constant.GET_LEVEL_DATA, 1 + Math.floor(this.score / 100));
		}

		public listNotificationInterests(): string[] {
			return [
				Constant.START_LOADING_LEVEL_SCENCE,
				Constant.START_GAME,
				Constant.UPDATE_SCORE,
			];
		}

		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case Constant.START_LOADING_LEVEL_SCENCE:
					this.loadLevelScence(notification.getBody());
					break;
				case Constant.START_GAME:
					this.startGame();
					break;
				case Constant.UPDATE_SCORE:
					this.score++;
					this.updateScore();
					break;
				default:
					break;
			}
		}

		private loadLevelScence(data: Array<number>): void {
			if (data && data.length > 0) {
				let colorLength: number = this.colorArray.length;
				let dataLength: number = data.length;
				let brickSize: number = Laya.stage.width / dataLength;
				for (let index = 0; index < dataLength; index++) {
					let colorStr: string = this.colorArray[Math.floor(Math.random() * colorLength)];
					let num: number = data[index];
					let brick: view.Brick = view.Brick.getInstance(num,brickSize,colorStr);
					//brick.drawBrick(num, brickSize, colorStr);
					brick.pos(index * brickSize, 0);
					this.gameLayer.addChild(brick);
				}
			}
		}
	}
}