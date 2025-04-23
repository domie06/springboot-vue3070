const base = {
    get() {
        return {
            url : "http://localhost:8080/dianshangjiaoliu/",
            name: "dianshangjiaoliu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianshangjiaoliu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "直播电商交流平台"
        } 
    }
}
export default base
