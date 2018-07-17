// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        //消除矢量绘制的锯齿，但会增加性能消耗
        //Laya.Config.isAntialias=true;
        Laya.init(480, 800, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER; //水平居中
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE; //垂直居中
        //设置适配模式
        Laya.stage.scaleMode = "noborder";
        //设置横竖屏
        //Laya.stage.screenMode = "horizontal";
        Laya.stage.bgColor = "#ffffff";
        Laya.Stat.show();
        //设置资源管理
        // Laya.ResourceVersion.enable("manifest.json",Laya.Handler.create(this,()=>{
        //     this.loadResource();
        // }));
        this.loadResource();
    }
    GameMain.prototype.loadResource = function () {
        var _this = this;
        Laya.loader.load([
            { url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS }
        ], Laya.Handler.create(this, function () {
            _this.startUp();
        }), null, Laya.Loader.ATLAS);
    };
    GameMain.prototype.startUp = function () {
        ApplicationFacade.getInstance().startUp();
        ApplicationFacade.getInstance().sendNotification(Constant.SHOW_GAME_SCENCE_PAGE);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map