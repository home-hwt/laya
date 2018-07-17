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
    var GameOverMediator = /** @class */ (function (_super) {
        __extends(GameOverMediator, _super);
        function GameOverMediator() {
            return _super.call(this, "GameOverMeditor") || this;
        }
        GameOverMediator.prototype.initRes = function () {
            this.resUrlArray = [
                { url: "res/atlas/template/Warn.atlas", type: Laya.Loader.ATLAS }
            ];
        };
        GameOverMediator.prototype.initView = function () {
            var gameOverUi = new ui.GameOverUI();
            gameOverUi.cancelBt.on(Laya.Event.CLICK, this, this.cancel);
            gameOverUi.continueBt.on(Laya.Event.CLICK, this, this.continueGame);
            this.viewComponent = gameOverUi;
        };
        GameOverMediator.prototype.cancel = function () {
            layer.ScenceManager.getInstance().popMediator(this);
        };
        GameOverMediator.prototype.continueGame = function () {
            layer.ScenceManager.getInstance().popMediator(this);
            this.sendNotification(Constant.START_GAME);
        };
        return GameOverMediator;
    }(mediator.BaseMediator));
    mediator.GameOverMediator = GameOverMediator;
})(mediator || (mediator = {}));
//# sourceMappingURL=GameOverMeditaor.js.map