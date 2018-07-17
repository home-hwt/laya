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
    var InitController = /** @class */ (function (_super) {
        __extends(InitController, _super);
        function InitController() {
            return _super.call(this) || this;
        }
        InitController.prototype.execute = function (notification) {
            controller.LoadingCommand.registerCommand();
            controller.GameScenceCommand.registerCommand();
            controller.GameOverCommand.registerCommand();
        };
        return InitController;
    }(puremvc.SimpleCommand));
    controller.InitController = InitController;
})(controller || (controller = {}));
//# sourceMappingURL=InitController.js.map