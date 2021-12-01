const model = require('../model/model')
// const dirPath = path.join(__dirname);
// const path = require('path');
class renderController{
    get(req, res,next){
           
            res.render('index')
      
    }
    // post(req, res, next){
    //     const post = new model(req.body);
    //     console.log(1111111)
    //     try{
    //         const saveTask = post.save();
    //         res.json(saveTask)

    //     } catch (err){
    //         res.json({message:err})
    //     }
    // }
    // delete(req, res, next) {
    //     res.send('deleted')
    // }
   
}
module.exports = new renderController()