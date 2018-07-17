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
    var ScenceManager = layer.ScenceManager;
    var LoadingCommand = /** @class */ (function (_super) {
        __extends(LoadingCommand, _super);
        function LoadingCommand() {
            return _super.call(this) || this;
        }
        LoadingCommand.prototype.execute = function (notification) {
            console.log("loading command");
            var notificationName = notification.getName();
            switch (notificationName) {
                case Constant.SHOW_LOADING_PAGE:
                    ScenceManager.getInstance().push(mediator.LoadingMediator);
                    break;
                default:
                    break;
            }
        };
        LoadingCommand.registerCommand = function () {
            ApplicationFacade.getInstance().registerCommand(Constant.SHOW_LOADING_PAGE, LoadingCommand);
        };
        return LoadingCommand;
    }(controller.BaseController));
    controller.LoadingCommand = LoadingCommand;
})(controller || (controller = {}));
//# sourceMappingURL=LoadingCommand.js.map