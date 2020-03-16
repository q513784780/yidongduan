var Mock=require("mockjs");

// 设置请求的地址 方式 数据
// Mock.mock("/xiaoming/xiaohome","get",require("./data/guangbo.json"))
// 设置电影的模拟数据请求地址
Mock.mock("/hot","get",require("./data/tu.json"));




// 内容
Mock.mock("/neirong","get",require("./data/neirong.json"));



// 分类
Mock.mock("/fenlei","get",require("./data/fenlei.json"));
Mock.mock("/xiangxi","get",require("./data/xiangxi.json"));
