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
var view;
(function (view) {
    var TestViewMedia = /** @class */ (function (_super) {
        __extends(TestViewMedia, _super);
        function TestViewMedia() {
            return _super.call(this, TestViewMedia.NAME, true, true) || this;
        }
        TestViewMedia.prototype.init = function () {
            console.log("init");
            var testUi = new ui.TestUI();
            this.viewComponent = testUi;
        };
        TestViewMedia.prototype.listNotificationInterests = function () {
            console.log("listNotificationInterests");
            return [];
        };
        TestViewMedia.prototype.handleNotification = function (notification) {
            console.log("handleNotification");
        };
        TestViewMedia.prototype.onRemove = function () {
            console.log("onRemove");
            _super.prototype.onRemove.call(this);
        };
        TestViewMedia.NAME = "TestViewMedia";
        return TestViewMedia;
    }(mediator.BaseMediator));
    view.TestViewMedia = TestViewMedia;
})(view || (view = {}));
//# sourceMappingURL=TestViewMedia.js.map