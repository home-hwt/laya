/*
* name;
*/
import Handler = Laya.Handler;
class Utils {

    /**
    * 异步加载
    * @param    url  要加载的单个资源地址或资源信息数组。比如：简单数组：["a.png","b.png"]；复杂数组[{url:"a.png",type:Loader.IMAGE,size:100,priority:1},{url:"b.json",type:Loader.JSON,size:50,priority:1}]。
    * @param    progress  加载进度
    * @param    type		资源类型。比如：Loader.IMAGE。
	* @param	priority	(default = 1)加载的优先级，优先级高的优先加载。有0-4共5个优先级，0最高，4最低。
	* @param	cache		是否缓存加载结果。
	* @param	group		分组，方便对资源进行管理。
	* @param    ignoreCache	是否忽略缓存，强制重新加载。
    */
    public static async asyncLoad(url: any, progress?: Handler, type?: string, priority?: number,
        cache?: boolean, group?: string, ignoreCache?: boolean): Promise<any> {
        let result: Promise<any> = new Promise((resolve, reject) => {
            Laya.loader.load(url, Handler.create(this, () => {
                resolve();
            }), progress, type, priority, cache, group, ignoreCache);
        });
        return result;
    }
}