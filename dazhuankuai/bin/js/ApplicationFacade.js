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
var ApplicationFacade = /** @class */ (function (_super) {
    __extends(ApplicationFacade, _super);
    function ApplicationFacade() {
        return _super.call(this) || this;
    }
    ApplicationFacade.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ApplicationFacade();
        }
        return (this.instance);
    };
    ApplicationFacade.prototype.initializeController = function () {
        _super.prototype.initializeController.call(this);
        this.registerCommand(Constant.START_UP, controller.StartUpCommand);
    };
    /**
     * 启动PureMvc 在应用程序中调用此方法，并传递应用程序本身的引用
     */
    ApplicationFacade.prototype.startUp = function () {
        console.log("start up");
        this.sendNotification(Constant.START_UP);
        this.removeCommand(Constant.START_UP);
    };
    return ApplicationFacade;
}(puremvc.Facade));
//# sourceMappingURL=ApplicationFacade.js.map