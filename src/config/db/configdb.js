const mongoose = require('mongoose')

async function connect(){
    try{
     await mongoose.connect('mongodb://localhost:27017/todoapp',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('db connect successful')
    } catch (error) { 
        console.log('connect failed')
    } 
}

module.exports = {connect}
// async function connect(){
//     try{
//         await mongoose.connect('mongodb://localhost:27017/todoapp',{
//             useNewUrlParser: true,
//             useUnifiedTopology:true,
//         })
//         console.log('connect success')
//     } catch(error){
//         console.log('connect fail')

//     }
// }