//2.4.1 -2.4.2c
//Import modules
const mongoose = require('mongoose');
//Objects
const Schema = mongoose.Schema;
//Schemas
var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
 }, {
    timestamps: true
 });
// 
const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema]
},{
   timestamps: true
});
var Dishes = mongoose.model('Dish', dishSchema);
//Exports
module.exports = Dishes;