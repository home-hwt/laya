
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameOverUI extends View {
		public cancelBt:Laya.Button;
		public continueBt:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":250,"x":20,"width":440,"skin":"template/Warn/alert_dialog.png","height":249}},{"type":"Button","props":{"y":410,"x":20,"width":220,"var":"cancelBt","stateNum":2,"skin":"template/Warn/btn_alert dialogLeftButton.png","labelSize":28,"labelColors":"#3476CA,#E2E6E5,#E2E6E5","label":"Cancel","height":89}},{"type":"Button","props":{"y":410,"x":240,"width":220,"var":"continueBt","stateNum":2,"skin":"template/Warn/btn_alert dialogRightButton.png","labelSize":28,"labelColors":"#3476CA,#E2E6E5,#E2E6E5","label":"Continue","height":89}},{"type":"Label","props":{"y":265,"x":50,"width":380,"text":"游戏结束请再接再厉","skin":"template/Warn/label.png","height":136,"fontSize":28,"color":"#030406","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}

module ui {
    export class GameScenceUI extends View {
		public scoreLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":3,"width":480,"height":800},"child":[{"type":"Label","props":{"y":40,"x":0,"width":480,"var":"scoreLabel","valign":"middle","text":"label","height":50,"fontSize":30,"color":"#010101","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameScenceUI.uiView);

        }

    }
}

module ui {
    export class LoadingUI extends View {
		public progressText:Laya.Label;
		public progressBar:Laya.ProgressBar;
		public startGameBt:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":230,"x":32,"width":343,"skin":"template/Progress/loading bar_icloud.png","height":88}},{"type":"Label","props":{"y":275,"x":54,"width":165,"var":"progressText","text":"加载进度","skin":"template/Progress/label.png","height":26,"fontSize":20,"align":"center"}},{"type":"ProgressBar","props":{"y":258,"x":54,"width":300,"visible":true,"var":"progressBar","value":0.6,"skin":"template/Progress/Loading_bar_icloud.png","sizeGrid":"0,6,0,6","height":6}},{"type":"Button","props":{"y":363,"x":129,"width":100,"var":"startGameBt","label":"开始游戏","height":30}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingUI.uiView);

        }

    }
}

module ui {
    export class TestUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":480,"height":800},"child":[{"type":"View","props":{"y":0,"x":0,"width":400,"pivotY":-5,"height":600},"child":[{"type":"Label","props":{"y":144,"x":238,"width":25.353515625,"text":"xsfdsffs","height":12}},{"type":"Tab","props":{"y":219,"x":29,"width":340,"selectedIndex":2,"height":101},"child":[{"type":"Button","props":{"y":0,"x":0,"width":127,"skin":"template/ButtonTab/btn_LargeTabButton_Left.png","name":"item0","labelSize":36,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"Button","height":84}},{"type":"Button","props":{"y":0,"x":127,"width":119,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"item1","labelSize":36,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"Button","height":84}},{"type":"Button","props":{"y":0,"x":245,"width":118,"skin":"template/ButtonTab/btn_LargeTabButton_Right.png","name":"item2","labelSize":36,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"Button","height":84}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TestUI.uiView);

        }

    }
}
