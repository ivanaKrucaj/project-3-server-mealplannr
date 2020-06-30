const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
const UserModel = require('./User.model')

let RecipeSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, 'Please enter recipe title.']
    },
    image: {
        type: String,
        required: [true, 'Please upload image.']
    },
    steps: {
        type: String,
        required: [true, 'Please enter recipe steps.']
    },
    ingredientText: {
        type: String,
        required: [true, 'Please enter recipe ingredients.']
    },
    ingredients: [{
                id: String,
                quantity: Number,
                quantity_unit: String,
                quantity_in_grams: Number,
                title: String,
                calories: Number,
                carbs: Number,
                fat: Number,
                protein: Number
    },
        {required: [true, 'Please enter ingredients.']
    }
],
    number_of_portions: {
        type: Number,
        required: [true, 'Please enter number of portions.']
    },
    type: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        required: [true, 'Please enter type.']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Recipe', RecipeSchema);