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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameOverUI = /** @class */ (function (_super) {
        __extends(GameOverUI, _super);
        function GameOverUI() {
            return _super.call(this) || this;
        }
        GameOverUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameOverUI.uiView);
        };
        GameOverUI.uiView = { "type": "View", "props": { "width": 480, "height": 800 }, "child": [{ "type": "Image", "props": { "y": 250, "x": 20, "width": 440, "skin": "template/Warn/alert_dialog.png", "height": 249 } }, { "type": "Button", "props": { "y": 410, "x": 20, "width": 220, "var": "cancelBt", "stateNum": 2, "skin": "template/Warn/btn_alert dialogLeftButton.png", "labelSize": 28, "labelColors": "#3476CA,#E2E6E5,#E2E6E5", "label": "Cancel", "height": 89 } }, { "type": "Button", "props": { "y": 410, "x": 240, "width": 220, "var": "continueBt", "stateNum": 2, "skin": "template/Warn/btn_alert dialogRightButton.png", "labelSize": 28, "labelColors": "#3476CA,#E2E6E5,#E2E6E5", "label": "Continue", "height": 89 } }, { "type": "Label", "props": { "y": 265, "x": 50, "width": 380, "text": "游戏结束请再接再厉", "skin": "template/Warn/label.png", "height": 136, "fontSize": 28, "color": "#030406", "align": "center" } }] };
        return GameOverUI;
    }(View));
    ui.GameOverUI = GameOverUI;
})(ui || (ui = {}));
(function (ui) {
    var GameScenceUI = /** @class */ (function (_super) {
        __extends(GameScenceUI, _super);
        function GameScenceUI() {
            return _super.call(this) || this;
        }
        GameScenceUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameScenceUI.uiView);
        };
        GameScenceUI.uiView = { "type": "View", "props": { "y": 0, "x": 3, "width": 480, "height": 800 }, "child": [{ "type": "Label", "props": { "y": 40, "x": 0, "width": 480, "var": "scoreLabel", "valign": "middle", "text": "label", "height": 50, "fontSize": 30, "color": "#010101", "bold": true, "align": "center" } }] };
        return GameScenceUI;
    }(View));
    ui.GameScenceUI = GameScenceUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingUI = /** @class */ (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingUI.uiView);
        };
        LoadingUI.uiView = { "type": "View", "props": { "width": 480, "height": 800 }, "child": [{ "type": "Image", "props": { "y": 230, "x": 32, "width": 343, "skin": "template/Progress/loading bar_icloud.png", "height": 88 } }, { "type": "Label", "props": { "y": 275, "x": 54, "width": 165, "var": "progressText", "text": "加载进度", "skin": "template/Progress/label.png", "height": 26, "fontSize": 20, "align": "center" } }, { "type": "ProgressBar", "props": { "y": 258, "x": 54, "width": 300, "visible": true, "var": "progressBar", "value": 0.6, "skin": "template/Progress/Loading_bar_icloud.png", "sizeGrid": "0,6,0,6", "height": 6 } }, { "type": "Button", "props": { "y": 363, "x": 129, "width": 100, "var": "startGameBt", "label": "开始游戏", "height": 30 } }] };
        return LoadingUI;
    }(View));
    ui.LoadingUI = LoadingUI;
})(ui || (ui = {}));
(function (ui) {
    var TestUI = /** @class */ (function (_super) {
        __extends(TestUI, _super);
        function TestUI() {
            return _super.call(this) || this;
        }
        TestUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TestUI.uiView);
        };
        TestUI.uiView = { "type": "View", "props": { "width": 480, "height": 800 }, "child": [{ "type": "View", "props": { "y": 0, "x": 0, "width": 400, "pivotY": -5, "height": 600 }, "child": [{ "type": "Label", "props": { "y": 144, "x": 238, "width": 25.353515625, "text": "xsfdsffs", "height": 12 } }, { "type": "Tab", "props": { "y": 219, "x": 29, "width": 340, "selectedIndex": 2, "height": 101 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 127, "skin": "template/ButtonTab/btn_LargeTabButton_Left.png", "name": "item0", "labelSize": 36, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "Button", "height": 84 } }, { "type": "Button", "props": { "y": 0, "x": 127, "width": 119, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "item1", "labelSize": 36, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "Button", "height": 84 } }, { "type": "Button", "props": { "y": 0, "x": 245, "width": 118, "skin": "template/ButtonTab/btn_LargeTabButton_Right.png", "name": "item2", "labelSize": 36, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "Button", "height": 84 } }] }] }] };
        return TestUI;
    }(View));
    ui.TestUI = TestUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map