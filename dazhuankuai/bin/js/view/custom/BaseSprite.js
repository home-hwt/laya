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
* 游戏精灵基础类
*/
var view;
(function (view) {
    var BaseSprite = /** @class */ (function (_super) {
        __extends(BaseSprite, _super);
        function BaseSprite() {
            var _this = _super.call(this) || this;
            _this.type = 0;
            _this.camp = view.ViewConstant.RED_CAMP; //阵营
            _this.hp = 0;
            return _this;
        }
        //掉血
        BaseSprite.prototype.loseHp = function (loseNum) {
            if (loseNum === void 0) { loseNum = 1; }
        };
        //移除回收
        BaseSprite.prototype.removeAdnRecover = function () {
        };
        return BaseSprite;
    }(Laya.Sprite));
    view.BaseSprite = BaseSprite;
})(view || (view = {}));
//# sourceMappingURL=BaseSprite.js.map