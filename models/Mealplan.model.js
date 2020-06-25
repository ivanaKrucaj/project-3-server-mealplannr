const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
// const UserModel = require('./User.model');
// const RecipeModel = require('./Recipe.model')

let MealplanSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter mealplan title.']
        },
        recipes: [{
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }],
        shoppingList: [{
            title: String,
            quantity_in_grams: String,
            bought: Boolean
        }
        ],
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Mealplan', MealplanSchema);