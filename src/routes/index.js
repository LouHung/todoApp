const db = require('../config/db/configdb')
const task = require('../routes/task')
const render = require('../routes/render')
function route(app){
      
    app.use('/',task)
    // app.use('/',render)
}


module.exports = route 