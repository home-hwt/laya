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
var model;
(function (model) {
    var GameScenceModel = /** @class */ (function (_super) {
        __extends(GameScenceModel, _super);
        function GameScenceModel() {
            return _super.call(this, GameScenceModel.NAME) || this;
        }
        GameScenceModel.prototype.requestLevelData = function (level) {
            this.setData(DataConfig.getLevelData(level));
            this.sendNotification(Constant.GET_LEVEL_DATA_FINISH);
        };
        GameScenceModel.NAME = "GameScenceModel";
        return GameScenceModel;
    }(model.BaseProxy));
    model.GameScenceModel = GameScenceModel;
})(model || (model = {}));
//# sourceMappingURL=GameScenceModel.js.map