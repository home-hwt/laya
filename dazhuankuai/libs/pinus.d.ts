declare class pinus
	{
        public static init(params: any, cb:Function): void;
        public  static request(route:string,msg:any,cb:Function): void;
        public  static notify(route:string,msg:any): void;
        public  static on(route:string,cb:Function): void;
        public  static disconnect(): void;
    }
declare var exports: any
	

