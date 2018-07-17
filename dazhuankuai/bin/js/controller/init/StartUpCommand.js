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
    var StartUpCommand = /** @class */ (function (_super) {
        __extends(StartUpCommand, _super);
        function StartUpCommand() {
            return _super.call(this) || this;
        }
        StartUpCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(controller.InitController);
            this.addSubCommand(controller.InitModelCommand);
            this.addSubCommand(controller.InitViewCommand);
        };
        return StartUpCommand;
    }(puremvc.MacroCommand));
    controller.StartUpCommand = StartUpCommand;
})(controller || (controller = {}));
//# sourceMappingURL=StartUpCommand.js.map