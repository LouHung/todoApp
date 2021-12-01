const model = require('../model/model')
// const dirPath = path.join(__dirname);
// const path = require('path');
class taskController{
    get(req, res,next){
            model.find({},function(err,tasks){
                res.json(tasks) 
            },
            );
      
    }
    post(req, res, next){
        const post = new model(req.body);
        try{
            const saveTask = post.save();
            setTimeout(() =>{
                model.find({},function(err,tasks){
                    res.json(tasks) 
            },1000)
            },
            );

        } catch (err){
            res.json({message:err})
        }
    }
    delete(req, res, next) {
        let id = req.body.idTask
        // model.deleteOne({ _id: id })
        model.findOneAndRemove({_id: id}, function(err,data)
        {
            if(!err){
                console.log(id);
            }
            setTimeout(() =>{
                model.find({},function(err,tasks){
                    res.json(tasks) 
            },1000)
            },
            );
        });
        // res.send('deleted')
        
        // console.log(id)
    }
    deleteAll(req, res, next){
        console.log('deleteAlllllll')
        model.remove({},function(err,tasks){
            // res.json(tasks)
            setTimeout(() =>{
                model.find({},function(err,tasks){
                    res.json(tasks) 
            },1000)
            },
            );
        }
        )
        
    };
    update(req, res, next) {
        let id = req.body.id
        let contentTask = req.body.task
        console.log(id,contentTask)
        let cond={_id:id}
        model.findOneAndUpdate(cond,{task:contentTask},function(err,data){

            if(!err){
                console.log('update successfull')
                setTimeout(() =>{
                    model.find({},function(err,tasks){
                        res.json(tasks) 
                },1000)
                },
                );
            }
        })
        // res.send('deleted')
        
        // console.log(id)
    }
}
module.exports = new taskController()