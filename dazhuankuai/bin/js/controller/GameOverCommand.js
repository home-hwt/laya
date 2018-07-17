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
    var GameOverCommand = /** @class */ (function (_super) {
        __extends(GameOverCommand, _super);
        function GameOverCommand() {
            return _super.call(this) || this;
        }
        GameOverCommand.registerCommand = function () {
            ApplicationFacade.getInstance().registerCommand(Constant.SHOW_GAME_OVER_PAGE, GameOverCommand);
        };
        GameOverCommand.prototype.execute = function (notification) {
            console.log("GameOverCommand" + notification.getName());
            switch (notification.getName()) {
                case Constant.SHOW_GAME_OVER_PAGE:
                    layer.ScenceManager.getInstance().push(mediator.GameOverMediator);
                    break;
                default:
                    break;
            }
        };
        return GameOverCommand;
    }(controller.BaseController));
    controller.GameOverCommand = GameOverCommand;
})(controller || (controller = {}));
//# sourceMappingURL=GameOverCommand.js.map