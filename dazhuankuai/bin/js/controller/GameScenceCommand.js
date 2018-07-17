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
var controller;
(function (controller) {
    var GameScenceCommand = /** @class */ (function (_super) {
        __extends(GameScenceCommand, _super);
        function GameScenceCommand() {
            return _super.call(this) || this;
        }
        GameScenceCommand.registerCommand = function () {
            ApplicationFacade.getInstance().registerCommand(Constant.SHOW_GAME_SCENCE_PAGE, GameScenceCommand);
            ApplicationFacade.getInstance().registerCommand(Constant.GET_LEVEL_DATA_FINISH, GameScenceCommand);
            ApplicationFacade.getInstance().registerCommand(Constant.GET_LEVEL_DATA, GameScenceCommand);
        };
        GameScenceCommand.prototype.execute = function (notification) {
            switch (notification.getName()) {
                case Constant.SHOW_GAME_SCENCE_PAGE:
                    layer.ScenceManager.getInstance().push(mediator.GameScenceMediator);
                    break;
                case Constant.GET_LEVEL_DATA:
                    var gameScenceModel = this.facade.retrieveProxy(model.GameScenceModel.NAME);
                    gameScenceModel.requestLevelData(notification.getBody());
                    break;
                case Constant.GET_LEVEL_DATA_FINISH:
                    var gameScenceModel1 = this.facade.retrieveProxy(model.GameScenceModel.NAME);
                    var getData = gameScenceModel1.getData();
                    this.sendNotification(Constant.START_LOADING_LEVEL_SCENCE, getData);
                    break;
                default:
                    break;
            }
        };
        return GameScenceCommand;
    }(controller.BaseController));
    controller.GameScenceCommand = GameScenceCommand;
})(controller || (controller = {}));
//# sourceMappingURL=GameScenceCommand.js.map