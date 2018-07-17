/*
* name;
*/
class DataConfig {
    private constructor() {
    }

    public static getLevelData(level: number): Array<number> {
        console.log("level:" + level);
        let screenWidth = Laya.stage.width;
        let screenHeight = Laya.stage.height;
        //let numRow:number = 100 + level * 10;//一百行
        let numCol: number = 5//4 + level ;//一行五个
        let numBrick: number = 5 * level;//砖块中最大数量
        let dataArray = [];
        // for (let index = 0; index < numRow; index++) {
        let dataRow1 = [];
        for (let j = 0; j < numCol; j++) {
            let randomNum: number = Math.ceil(Math.random() * numBrick);
            dataRow1.push(randomNum);
        }
        // dataArray.push(dataRow1);
        // }
        return dataRow1;
    }
}