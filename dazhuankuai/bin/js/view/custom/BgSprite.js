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
    var BgSprite = /** @class */ (function (_super) {
        __extends(BgSprite, _super);
        function BgSprite() {
            var _this = _super.call(this) || this;
            _this.type = view.ViewConstant.BG_SPRITE_TYPE;
            var bgColor = "#f4e1e1";
            _this.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, bgColor);
            return _this;
        }
        return BgSprite;
    }(view.BaseSprite));
    view.BgSprite = BgSprite;
})(view || (view = {}));
//# sourceMappingURL=BgSprite.js.map