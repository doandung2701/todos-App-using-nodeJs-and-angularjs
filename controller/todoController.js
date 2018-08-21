var Todos = require("../api/models/todoModel");
function getTodos(res) {
    Todos.find(function (err, todos) {
        if (err) {
            res.status(500).json(erro);
        } else {
            res.json(todos);
        }
    })
}
module.exports = function (app) {
    app.get('/api/todos', (req, res) => {
        getTodos(res);
    });
    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) {
                throw err;
            }else{
                 res.json(todo);
            }
        })
    });

    
    app.post('/api/todo',(req, res) => {
        var todo={
            text:req.body.text,
            isDone:req.body.isDone
        };
        Todos.create(todo,function (err,todo) {
            if (err) {
                throw err;
            }else{
                getTodos(res);
            }
        })
    });

    app.put('/api/todo', (req, res) => {
        if (!req.body._id) {
            return res.status(500).send("ID is required");
        }else{
            Todos.update({
                _id:req.body._id    
            },{
                text:req.body.text,
                isDone:req.body.isDone
            },function (err,todo) {
                if (err) {
                    return res.status(500).json(err);
                }else{
                    getTodos(res);
                }
            });
        }
    });

    app.delete('/api/todo/:id', (req, res) => {
        Todos.deleteOne({
           _id:req.params.id 
        },function (err,todo) {
            if (err) {
                return res.status(500).json(err);
            }else{
                getTodos(res);
            }
        })
    });

}