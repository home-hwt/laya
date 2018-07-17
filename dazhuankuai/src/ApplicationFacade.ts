class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade {
    public constructor() {
        super();
    }

    public static getInstance(): ApplicationFacade {
        if (this.instance == null) {
            this.instance = new ApplicationFacade();
        }
        return <ApplicationFacade><any>(this.instance);
    }

    public initializeController(): void {
        super.initializeController();
        this.registerCommand(Constant.START_UP, controller.StartUpCommand);
    }

    /**
     * 启动PureMvc 在应用程序中调用此方法，并传递应用程序本身的引用
     */
    public startUp(): void {
        console.log("start up");
        this.sendNotification(Constant.START_UP);
        this.removeCommand(Constant.START_UP);
    }
}