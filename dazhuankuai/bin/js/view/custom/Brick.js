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
* 砖块
*/
var view;
(function (view) {
    var Brick = /** @class */ (function (_super) {
        __extends(Brick, _super);
        function Brick() {
            var _this = _super.call(this) || this;
            _this.type = view.ViewConstant.BRICK_SPRITE_TYPE;
            _this.camp = view.ViewConstant.RED_CAMP;
            return _this;
        }
        Brick.getInstance = function (textNum, wh, fillColor) {
            var brick = Laya.Pool.getItemByClass(Brick.brickSignStr, Brick);
            brick.drawBrick(textNum, wh, fillColor);
            return brick;
        };
        /**
         * @param wh 宽高大小
         * @param fillColor 填充的颜色
         */
        Brick.prototype.drawBrick = function (textNum, wh, fillColor) {
            this.hp = textNum;
            if (this._sizeWH > 0 && this._sizeWH == wh) {
                console.log("brick reuse");
            }
            else {
                console.log("brick create");
                this._sizeWH = wh;
                this.width = this.height = wh;
                this.graphics.drawRect(0, 0, wh, wh, fillColor);
            }
            this.createOrUpdateText();
        };
        Brick.prototype.createOrUpdateText = function () {
            if (!this.textNumLabel) {
                this.textNumLabel = new Laya.Label();
                this.textNumLabel.fontSize = 30;
                this.textNumLabel.color = "#FFFFFF";
                var textW = this.textNumLabel.width;
                var textH = this.textNumLabel.height;
                this.textNumLabel.anchorX = this.textNumLabel.anchorY = 0.5;
                var posx = this._sizeWH / 2 - textW / 2;
                var posy = this._sizeWH / 2 - textH / 2;
                this.textNumLabel.pos(posx, posy);
                this.addChild(this.textNumLabel);
            }
            //this.textNumLabel.text = this.hp + "";
            this.textNumLabel.changeText(this.hp + "");
        };
        Brick.prototype.loseHp = function (loseNum) {
            if (loseNum === void 0) { loseNum = 1; }
            this.hp -= loseNum;
            this.createOrUpdateText();
            ApplicationFacade.getInstance().sendNotification(Constant.UPDATE_SCORE);
            if (this.hp <= 0) {
                this.removeAdnRecover();
                Laya.SoundManager.stopSound("sound/baozha.wav");
                Laya.SoundManager.playSound("sound/baozha.wav");
            }
        };
        Brick.prototype.removeAdnRecover = function () {
            this.removeSelf();
            Laya.Pool.recover(Brick.brickSignStr, this);
        };
        Brick.brickSignStr = "brick";
        return Brick;
    }(view.BaseSprite));
    view.Brick = Brick;
})(view || (view = {}));
//# sourceMappingURL=Brick.js.map