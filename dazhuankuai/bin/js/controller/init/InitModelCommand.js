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
    var InitModelCommand = /** @class */ (function (_super) {
        __extends(InitModelCommand, _super);
        function InitModelCommand() {
            return _super.call(this) || this;
        }
        InitModelCommand.prototype.execute = function (notification) {
            this.facade.registerProxy(new model.GameScenceModel());
        };
        return InitModelCommand;
    }(puremvc.SimpleCommand));
    controller.InitModelCommand = InitModelCommand;
})(controller || (controller = {}));
//# sourceMappingURL=InitModelCommand.js.map