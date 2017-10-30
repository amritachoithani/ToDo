//This requires mongoose to create the schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//This is the schema for the exam
var UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: Number, required: true, unique:true },
    password: {type: String, required: true},
    dateRegistered: {type: Date, default: Date.now},
    status: { type: Boolean, default: true}
});

//This statement allows the database to be exported
module.exports = mongoose.model('test', UserSchema);
