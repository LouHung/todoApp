const db = require('../config/db/configdb')
const task = require('../routes/task')
const render = require('../routes/render')
function route(app){
    // app.get('/', (req, res) => {
    //     res.send('Hello World!')
    //   })
      
    app.use('/api',task)
    app.use('/',render)
}


module.exports = route 