const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    image: {
        type: String, 
    },
    description: {
        type: String, 
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String, 
        required: true,
    },
    quantity: {
        type: Number, 
        default: 0,
    },
}, { timestamps: true });

const FoodModel = mongoose.model('food', foodSchema);

module.exports = FoodModel;
