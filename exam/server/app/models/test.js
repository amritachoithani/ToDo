var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: {type: String, required: true},
    dateRegistered: {type: Date, default: Date.now},
    status: { type: Boolean, default: true}
});

module.exports = mongoose.model('testing', MySchema);
