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
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            const saveTask = post.save();
            res.json(saveTask)

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
                console.log("Deleted");
            }
        });
        // res.send('deleted')
        
        console.log(id)
    }
}
module.exports = new taskController()