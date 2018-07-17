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
var view;
(function (view) {
    var HeroRole = /** @class */ (function (_super) {
        __extends(HeroRole, _super);
        function HeroRole() {
            var _this = _super.call(this) || this;
            _this._sizeWH = Laya.stage.width / 10;
            _this.type = view.ViewConstant.HERO_ROLE_SPRITE_TYPE;
            _this.camp = view.ViewConstant.BULE_CAMP;
            _this.hp = 3;
            _this.bulletType = 1; //子弹类型  1: 一个子弹，2:2个子弹  3:三个子弹
            _this.graphics.drawRect(0, 0, _this._sizeWH, _this._sizeWH, "#e33030");
            _this.width = _this.height = _this._sizeWH;
            _this.w2 = _this.width / 2;
            _this.maxRightx = _this.stage.width - _this._sizeWH;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, _this, _this.mouseMove);
            return _this;
        }
        HeroRole.prototype.mouseMove = function () {
            var mousex = this.stage.mouseX;
            this.x = mousex - this.w2;
            if (this.x < 0) {
                this.x = 0;
            }
            if (this.x > this.maxRightx) {
                this.x = this.maxRightx;
            }
        };
        HeroRole.prototype.loseHp = function (loseNum) {
            if (loseNum === void 0) { loseNum = 1; }
            this.hp -= loseNum;
            if (this.hp <= 0) {
                this.removeAndRecover();
            }
        };
        HeroRole.prototype.removeAndRecover = function () {
            this.removeSelf();
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.graphics.clear();
        };
        return HeroRole;
    }(view.BaseSprite));
    view.HeroRole = HeroRole;
})(view || (view = {}));
//# sourceMappingURL=HeroRole.js.map