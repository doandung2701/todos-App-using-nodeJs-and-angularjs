var Todos=require("../api/models/todoModel");
module.exports=function (app) {
    app.get('/api/setupTodos', (req, res) => {
        var seedTodos=[
              {
                  text:"Học Node.js",
                  isDone:false
              } ,
              {
                  text:"Học Angular.js",
                  isDone:false
              } ,
              {
                  text:"Viết ứng dụng hoàn chỉnh",
                  isDone:false
              }

        ];
        Todos.create(seedTodos,function (error,result) {
            res.send(result);
        })
    }); 
}