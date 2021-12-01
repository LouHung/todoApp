const express = require('express')
const app = express()
const port = 3000
const path = require('path');
var cors = require('cors')
const handlebars = require('express-handlebars');
var morgan = require('morgan')
var bodyParser = require('body-parser')
const db = require('./config/db/configdb')
db.connect()
const route = require('./routes/index')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(__dirname,'/public')
app.use(express.static(path.join(__dirname,'public')))
console.log(__dirname)
app.use(morgan('combined'))
const hbs = handlebars.create({
    extname: '.html',
    
  });
app.engine('html', hbs.engine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname,'view'));



route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})