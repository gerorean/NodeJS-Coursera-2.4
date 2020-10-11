//2.4.1
//Import modules
const mongoose = require('mongoose');
//Objects
const Schema = mongoose.Schema;
const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
   timestamps: true
});
var Dishes = mongoose.model('Dish', dishSchema);
//Exports
module.exports = Dishes;
