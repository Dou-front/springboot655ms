const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot655ms/",
            name: "springboot655ms",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot655ms/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线旅游信息管理系统"
        } 
    }
}
export default base
