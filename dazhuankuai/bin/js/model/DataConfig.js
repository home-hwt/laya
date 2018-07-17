/*
* name;
*/
var DataConfig = /** @class */ (function () {
    function DataConfig() {
    }
    DataConfig.getLevelData = function (level) {
        console.log("level:" + level);
        var screenWidth = Laya.stage.width;
        var screenHeight = Laya.stage.height;
        //let numRow:number = 100 + level * 10;//一百行
        var numCol = 5; //4 + level ;//一行五个
        var numBrick = 5 * level; //砖块中最大数量
        var dataArray = [];
        // for (let index = 0; index < numRow; index++) {
        var dataRow1 = [];
        for (var j = 0; j < numCol; j++) {
            var randomNum = Math.ceil(Math.random() * numBrick);
            dataRow1.push(randomNum);
        }
        // dataArray.push(dataRow1);
        // }
        return dataRow1;
    };
    return DataConfig;
}());
//# sourceMappingURL=DataConfig.js.map