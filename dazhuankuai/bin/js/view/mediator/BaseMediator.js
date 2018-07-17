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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
* name
*/
var mediator;
(function (mediator) {
    /**
     * push mediator后调用顺序
     * setArgs()
     * init()
     * onRegister();
     *
     * //pop时(关闭)调用
     * onRemove();
     */
    var Sprite = Laya.Sprite;
    var BaseMediator = /** @class */ (function (_super) {
        __extends(BaseMediator, _super);
        //private mIsTouchOusideClose:boolean;//点击遮照关闭
        /**
         *
         * @param mediatorName   注册mediator的唯一名称
         * @param isMask 是否有阴影遮照
         */
        function BaseMediator(mediatorName, isMask, isTouchOusideClose) {
            if (isMask === void 0) { isMask = false; }
            if (isTouchOusideClose === void 0) { isTouchOusideClose = false; }
            var _this = _super.call(this, mediatorName) || this;
            _this.resUrlArray = [];
            _this.mIsMask = isMask;
            if (isMask) {
                _this.mMaskSprite = new Sprite();
                var w = _this.mMaskSprite.width = Laya.stage.width;
                var h = _this.mMaskSprite.height = Laya.stage.height;
                _this.mMaskSprite.graphics.drawRect(0, 0, w, h, "#000000");
                _this.mMaskSprite.alpha = 0.5;
                if (isTouchOusideClose) {
                    _this.mMaskSprite.on(Laya.Event.CLICK, _this, _this.touchOusideClose);
                }
            }
            return _this;
        }
        BaseMediator.prototype.touchOusideClose = function () {
            this.mMaskSprite.off(Laya.Event.CLICK, this, this.touchOusideClose);
            this.onClose();
        };
        //设置参数
        BaseMediator.prototype.setArgs = function (args) {
            this.mArgs = args;
        };
        BaseMediator.prototype.getArgs = function () {
            return this.mArgs;
        };
        BaseMediator.prototype.initRes = function () {
        };
        //初始化View实现 设置viewComponent
        BaseMediator.prototype.initView = function () {
        };
        //子类重写的话必须调用
        BaseMediator.prototype.onRegister = function () {
            console.log("super onRegister");
            if (this.mIsMask && this.mMaskSprite && !this.mMaskSprite.parent) {
                Laya.stage.addChild(this.mMaskSprite);
            }
            if (this.viewComponent) {
                var rootView = this.viewComponent;
                if (!rootView.parent) {
                    rootView.anchorX = 0.5;
                    rootView.anchorY = 0.5;
                    rootView.pos(Laya.stage.width / 2, Laya.stage.height / 2);
                    Laya.stage.addChild(rootView);
                }
            }
        };
        /**
         * 资源加载
         */
        BaseMediator.prototype.asyncLoader = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.resUrlArray.length > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, Utils.asyncLoad(this.resUrlArray)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *  子类必须调用
         */
        BaseMediator.prototype.onRemove = function () {
            this.clearRes();
            if (this.viewComponent) {
                this.viewComponent.removeSelf();
            }
            if (this.mIsMask) {
                if (this.mMaskSprite) {
                    this.mMaskSprite.removeSelf();
                }
            }
        };
        //关闭界面调用
        BaseMediator.prototype.onClose = function () {
            layer.ScenceManager.getInstance().popMediator(this);
        };
        BaseMediator.prototype.clearRes = function () {
            for (var index = 0; index < this.resUrlArray.length; index++) {
                var element = this.resUrlArray[index];
                if (element.url) {
                    Laya.loader.clearTextureRes(element.url);
                }
                else {
                    Laya.loader.clearTextureRes(element);
                }
            }
            this.resUrlArray = null;
        };
        return BaseMediator;
    }(puremvc.Mediator));
    mediator.BaseMediator = BaseMediator;
})(mediator || (mediator = {}));
//# sourceMappingURL=BaseMediator.js.map