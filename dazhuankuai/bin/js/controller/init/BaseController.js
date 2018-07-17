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
    var BaseController = /** @class */ (function (_super) {
        __extends(BaseController, _super);
        function BaseController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseController.registerCommand = function () { };
        return BaseController;
    }(puremvc.SimpleCommand));
    controller.BaseController = BaseController;
})(controller || (controller = {}));
//# sourceMappingURL=BaseController.js.map