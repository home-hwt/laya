/**
* name
*/
var view;
(function (view) {
    var ViewConstant = /** @class */ (function () {
        function ViewConstant() {
        }
        ViewConstant.BRICK_SPRITE_TYPE = 1; //砖块类型
        ViewConstant.BG_SPRITE_TYPE = 2; //背景类型
        ViewConstant.HERO_ROLE_SPRITE_TYPE = 3; //主角类型
        ViewConstant.BULLET_SPRITE_TYPE = 4; //子弹类型
        ViewConstant.PROP_SPRITE_TYPE = 5; //道具类型
        ViewConstant.RED_CAMP = 1;
        ViewConstant.BULE_CAMP = 2;
        return ViewConstant;
    }());
    view.ViewConstant = ViewConstant;
})(view || (view = {}));
//# sourceMappingURL=ViewConstant.js.map