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
* 道具
*/
var view;
(function (view) {
    var Prop = /** @class */ (function (_super) {
        __extends(Prop, _super);
        function Prop() {
            var _this = _super.call(this) || this;
            _this._imageSize = 55;
            _this.type = view.ViewConstant.PROP_SPRITE_TYPE;
            _this.camp = view.ViewConstant.RED_CAMP;
            _this._propType = 0;
            _this.width = _this.height = _this._imageSize;
            return _this;
        }
        /**
         * @param url 图片路径
         */
        Prop.prototype.initPropImage = function (propType) {
            this._propType = propType;
            this.loadImage("game/sheet" + propType + ".png");
        };
        Prop.prototype.removeAdnRecover = function () {
            this.removeSelf();
        };
        return Prop;
    }(view.BaseSprite));
    view.Prop = Prop;
})(view || (view = {}));
//# sourceMappingURL=Prop.js.map