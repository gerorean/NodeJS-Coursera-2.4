//2.4.1
//Modules
const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
//Constants
const url = 'mongodb://localhost:27017/conFusion';
//Objects
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log('Connected correctly to server');
    //New
    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });
    //Save
    newDish.save()
        .then((dish) => {
            console.log(dish);
            //Find
            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);
            //Remove
            return Dishes.remove({});
        })
        .then(() => {
            //Close
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});