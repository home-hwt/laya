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
    var TestProxy = /** @class */ (function (_super) {
        __extends(TestProxy, _super);
        function TestProxy() {
            return _super.call(this) || this;
        }
        TestProxy.prototype.onRegister = function () {
        };
        TestProxy.NAME = "TestProxy";
        return TestProxy;
    }(puremvc.Proxy));
    model.TestProxy = TestProxy;
})(model || (model = {}));
//# sourceMappingURL=TestProxy.js.map