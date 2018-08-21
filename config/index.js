var  config=require("./config.json");
module.exports={
    getDbConnectionString:function () {
        return `mongodb://${config.username}:${config.password}@ds227352.mlab.com:27352/node-todos`;
    }
}