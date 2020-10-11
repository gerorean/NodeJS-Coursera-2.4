//2.4.1 -2.4.2 -2.4.2b -2.4.2c
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
    Dishes.create({
        name: 'Uthapizza',
        description: 'Test'
    })
    .then((dish) => {
        console.log(dish);
        //Find
        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated test'}
        },{
            new: true
        })
        .exec(); 
    })
    .then((dish) => {
        console.log(dish);
        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });
        return dish.save();
    })
    .then((dish) => {
        console.log(dish);
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