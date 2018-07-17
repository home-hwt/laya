/**
* name 
*/
module model{
	export class GameScenceModel extends model.BaseProxy{
		static NAME:string = "GameScenceModel"
		constructor(){
			super(GameScenceModel.NAME);
		}

		public requestLevelData(level:number):void{
			this.setData(DataConfig.getLevelData(level));
			this.sendNotification(Constant.GET_LEVEL_DATA_FINISH);
		}
	}
}