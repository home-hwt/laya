var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var mediator;
(function (mediator) {
    var BaseMediator = mediator.BaseMediator;
    var GameScenceMediator = /** @class */ (function (_super) {
        __extends(GameScenceMediator, _super);
        function GameScenceMediator() {
            var _this = _super.call(this, "GameScenceMediator") || this;
            _this.createBrickRote = 400; //创建砖块的速率
            _this.createPropRote = 1000; //创建道具的速率
            _this.score = 0; //分数
            _this.colorArray = ["#3d3d31", "#ded432", "#980ddd", "#dd4590", "#2211de"];
            return _this;
        }
        GameScenceMediator.prototype.initRes = function () {
            this.resUrlArray = ["res/atlas/game.atlas"];
        };
        GameScenceMediator.prototype.initView = function () {
            var gameScenceView = new ui.GameScenceUI();
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
            gameScenceView.setChildIndex(this.scoreLabel, gameScenceView.numChildren - 1);
            this.viewComponent = gameScenceView;
        };
        GameScenceMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.startGame();
        };
        GameScenceMediator.prototype.startGame = function () {
            this.gameLayer.off(Laya.Event.CLICK, this, this.gameOver);
            Laya.timer.frameLoop(1, this, this.frameLoop);
            this.score = 0;
            this.scoreLabel.changeText(this.score + "");
            this.createHeroRole();
            this.createBrick();
        };
        GameScenceMediator.prototype.updateScore = function () {
            this.scoreLabel.changeText(this.score + "");
        };
        GameScenceMediator.prototype.gameOver = function () {
            this.gameLayer.removeChildren(0, this.gameLayer.numChildren);
            Laya.timer.clearAll(this);
            this.sendNotification(Constant.SHOW_GAME_OVER_PAGE);
            this.gameLayer.once(Laya.Event.CLICK, this, this.gameOver);
        };
        //每帧执行
        GameScenceMediator.prototype.frameLoop = function () {
            this.checkHit();
            var numChilds = this.gameLayer.numChildren;
            var screenHeight = Laya.stage.height;
            for (var index = 0; index < numChilds; index++) {
                var sprite = this.gameLayer.getChildAt(index);
                if (sprite) {
                    if (sprite.type == view.ViewConstant.HERO_ROLE_SPRITE_TYPE) {
                        if (Laya.timer.currFrame % 50 == 0) {
                            this.createBullet();
                        }
                    }
                    else {
                        sprite.y = sprite.y + 2;
                        if (sprite.type == view.ViewConstant.BG_SPRITE_TYPE) {
                            if (sprite.y >= screenHeight) {
                                sprite.y = -screenHeight;
                            }
                        }
                        else if (sprite.type == view.ViewConstant.BRICK_SPRITE_TYPE) {
                            if (sprite.y > screenHeight + 10) {
                                sprite.removeAdnRecover();
                            }
                        }
                        else if (sprite.type == view.ViewConstant.BULLET_SPRITE_TYPE) {
                            var bulletSprite = sprite;
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
                this.createBrick();
            }
            if (Laya.timer.currFrame % this.createPropRote == 0) {
                this.createProp();
            }
        };
        //检测击中
        GameScenceMediator.prototype.checkHit = function () {
            var numChilds = this.gameLayer.numChildren;
            for (var index = 0; index < numChilds; index++) {
                var sprite1 = this.gameLayer.getChildAt(index);
                if (sprite1 && sprite1.visible) {
                    for (var j = index + 1; j < numChilds; j++) {
                        var sprite2 = this.gameLayer.getChildAt(j);
                        if (sprite2 && sprite2.visible && sprite1.camp != sprite2.camp) {
                            //两角色中心点的距离
                            var sprite1Centerx = sprite1.x + sprite1.width / 2;
                            var sprite1Centery = sprite1.y + sprite1.height / 2;
                            var sprite2Centerx = sprite2.x + sprite2.width / 2;
                            var sprite2Centery = sprite2.y + sprite2.height / 2;
                            var distanceX = Math.abs(sprite1Centerx - sprite2Centerx);
                            var distanceY = Math.abs(sprite1Centery - sprite2Centery);
                            if (distanceX <= (sprite1.width / 2 + sprite2.width / 2)
                                && distanceY <= (sprite1.height / 2 + sprite2.height / 2)) {
                                var heroType = view.ViewConstant.HERO_ROLE_SPRITE_TYPE; //英雄类型
                                var propType = view.ViewConstant.PROP_SPRITE_TYPE; //道具类型
                                if (sprite1.type == propType || sprite2.type == propType) {
                                    if ((sprite1.type == heroType || sprite2.type == heroType)) {
                                        if (sprite1.type == propType) {
                                            this.bulletUpLevel(sprite1);
                                            sprite1.removeAdnRecover();
                                        }
                                        else {
                                            this.bulletUpLevel(sprite2);
                                            sprite2.removeAdnRecover();
                                        }
                                    }
                                }
                                else {
                                    sprite1.loseHp();
                                    sprite2.loseHp();
                                }
                            }
                        }
                    }
                }
            }
        };
        //英雄子弹升级
        GameScenceMediator.prototype.bulletUpLevel = function (propSprite) {
            this.heroRole.bulletType = propSprite._propType + 1;
            Laya.timer.clear(this, this.destroyProp);
            Laya.timer.frameOnce(1200, this, this.destroyProp);
        };
        //道具效果消失
        GameScenceMediator.prototype.destroyProp = function () {
            this.heroRole.bulletType = 1;
        };
        //创建主角色
        GameScenceMediator.prototype.createHeroRole = function () {
            this.heroRole = new view.HeroRole();
            this.heroRole.pos(Laya.stage.width / 2 + this.heroRole.width / 2, Laya.stage.height * 4 / 5);
            this.gameLayer.addChild(this.heroRole);
        };
        //创建子弹
        GameScenceMediator.prototype.createBullet = function () {
            var bulletType = this.heroRole.bulletType;
            var bulletW = 16;
            var bulletStartx = this.heroRole.x + this.heroRole.width / 2 - (bulletType - 1) * bulletW;
            Laya.SoundManager.playSound("sound/hit.wav");
            for (var index = 0; index < this.heroRole.bulletType; index++) {
                var bullet = view.Bullet.getInstace();
                bullet.x = bulletStartx + (bulletW * 2) * index;
                bullet.y = this.heroRole.y - this.heroRole.height / 2;
                this.gameLayer.addChild(bullet);
            }
        };
        //创建道具
        GameScenceMediator.prototype.createProp = function () {
            var prop = new view.Prop();
            var random = Math.floor(Math.random() * 3);
            var x = (Laya.stage.width - prop.width) * Math.random();
            prop.pos(x, 150);
            prop.initPropImage(random);
            this.gameLayer.addChild(prop);
        };
        GameScenceMediator.prototype.createBrick = function () {
            this.sendNotification(Constant.GET_LEVEL_DATA, 1 + Math.floor(this.score / 100));
        };
        GameScenceMediator.prototype.listNotificationInterests = function () {
            return [
                Constant.START_LOADING_LEVEL_SCENCE,
                Constant.START_GAME,
                Constant.UPDATE_SCORE,
            ];
        };
        GameScenceMediator.prototype.handleNotification = function (notification) {
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
        };
        GameScenceMediator.prototype.loadLevelScence = function (data) {
            if (data && data.length > 0) {
                var colorLength = this.colorArray.length;
                var dataLength = data.length;
                var brickSize = Laya.stage.width / dataLength;
                for (var index = 0; index < dataLength; index++) {
                    var colorStr = this.colorArray[Math.floor(Math.random() * colorLength)];
                    var num = data[index];
                    var brick = view.Brick.getInstance(num, brickSize, colorStr);
                    //brick.drawBrick(num, brickSize, colorStr);
                    brick.pos(index * brickSize, 0);
                    this.gameLayer.addChild(brick);
                }
            }
        };
        return GameScenceMediator;
    }(BaseMediator));
    mediator.GameScenceMediator = GameScenceMediator;
})(mediator || (mediator = {}));
//# sourceMappingURL=GameScenceMediator.js.map