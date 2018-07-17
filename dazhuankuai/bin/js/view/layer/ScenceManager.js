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
var layer;
(function (layer) {
    var ScenceManager = /** @class */ (function () {
        function ScenceManager() {
            /** 以先进后出的顺序保存*/
            this.mUiMediatorArray = new Array();
        }
        ScenceManager.getInstance = function () {
            if (ScenceManager.INSTANCE == null) {
                ScenceManager.INSTANCE = new ScenceManager();
            }
            return ScenceManager.INSTANCE;
        };
        ScenceManager.prototype.push = function (nameClassDefName, args) {
            return __awaiter(this, void 0, void 0, function () {
                var mediator;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            mediator = ApplicationFacade.getInstance().retrieveMediator(nameClassDefName.mediatorName);
                            if (mediator) {
                                this.popMediator(mediator);
                            }
                            mediator = new nameClassDefName();
                            mediator.setArgs(args);
                            mediator.initRes();
                            return [4 /*yield*/, mediator.asyncLoader()];
                        case 1:
                            _a.sent();
                            mediator.initView();
                            this.registerMediator(mediator);
                            return [2 /*return*/];
                    }
                });
            });
        };
        //关闭显示顶层
        ScenceManager.prototype.pop = function () {
            if (this.mUiMediatorArray.length > 0) {
                var mediator_1 = this.mUiMediatorArray.pop();
                if (mediator_1) {
                    this.removeMediator(mediator_1);
                }
            }
        };
        //关闭mediator层
        ScenceManager.prototype.popMediator = function (mediator) {
            if (this.mUiMediatorArray.length > 0) {
                var indexOf = this.mUiMediatorArray.lastIndexOf(mediator);
                if (indexOf > 0) {
                    this.mUiMediatorArray.splice(indexOf, 1); //删除indexOf位置索引对象
                }
            }
            this.removeMediator(mediator);
        };
        ScenceManager.prototype.registerMediator = function (mediator) {
            if (mediator) {
                this.mUiMediatorArray.push(mediator);
                ApplicationFacade.getInstance().registerMediator(mediator);
            }
        };
        ScenceManager.prototype.removeMediator = function (mediator) {
            if (mediator) {
                ApplicationFacade.getInstance().removeMediator(mediator.mediatorName);
            }
        };
        return ScenceManager;
    }());
    layer.ScenceManager = ScenceManager;
})(layer || (layer = {}));
//# sourceMappingURL=ScenceManager.js.map