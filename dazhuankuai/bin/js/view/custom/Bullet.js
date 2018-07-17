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
* 子弹实体类
*/
var view;
(function (view) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            var _this = _super.call(this) || this;
            _this.type = view.ViewConstant.BULLET_SPRITE_TYPE;
            _this._speed = 4; //子弹默认速度
            _this.hp = 1;
            _this.camp = view.ViewConstant.BULE_CAMP;
            _this.init();
            return _this;
        }
        Bullet.getInstace = function () {
            return Laya.Pool.getItemByClass(Bullet.bulletSignStr, Bullet);
        };
        Bullet.prototype.init = function (radius) {
            if (radius === void 0) { radius = 8; }
            this.graphics.clear();
            this.width = this.height = radius * 2;
            this.graphics.drawCircle(radius / 2, radius / 2, radius, "#d24b4b");
            ;
        };
        Bullet.prototype.setSpeed = function (speed) {
            this._speed = speed;
        };
        Bullet.prototype.loseHp = function (loseNum) {
            if (loseNum === void 0) { loseNum = 1; }
            this.hp -= loseNum;
            if (this.hp <= 0) {
                this.removeAndRecover();
            }
        };
        Bullet.prototype.removeAndRecover = function () {
            this.removeSelf();
            Laya.Pool.recover(Bullet.bulletSignStr, this);
        };
        Bullet.bulletSignStr = "bullet";
        return Bullet;
    }(view.BaseSprite));
    view.Bullet = Bullet;
})(view || (view = {}));
//# sourceMappingURL=Bullet.js.map