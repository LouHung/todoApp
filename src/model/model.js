const mongoose = require('mongoose');

// const { Schema } = mongoose;
const Schema = mongoose.Schema;


const modelTask = new Schema({
    task: { type:String},
    deletedAt: { type: Boolean },
},{
    timestamps:true
})

module.exports = mongoose.model('listtodo',modelTask)