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
var mediator;
(function (mediator) {
    var BaseMediator = mediator.BaseMediator;
    var LoadingMediator = /** @class */ (function (_super) {
        __extends(LoadingMediator, _super);
        function LoadingMediator() {
            return _super.call(this, "LoadingMediator", true) || this;
        }
        LoadingMediator.prototype.initRes = function () {
            this.resUrlArray = [{ url: "res/atlas/template/Progress.atlas", type: Laya.Loader.ATLAS }];
        };
        LoadingMediator.prototype.initView = function () {
            var loadingView = new ui.LoadingUI();
            this.viewComponent = loadingView;
            loadingView.startGameBt.on(Laya.Event.CLICK, this, this.startGame);
        };
        LoadingMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        LoadingMediator.prototype.handleNotification = function (notification) {
        };
        LoadingMediator.prototype.startGame = function () {
            this.sendNotification(Constant.SHOW_GAME_SCENCE_PAGE);
            this.onClose();
        };
        return LoadingMediator;
    }(BaseMediator));
    mediator.LoadingMediator = LoadingMediator;
})(mediator || (mediator = {}));
//# sourceMappingURL=LoadingMediator.js.map