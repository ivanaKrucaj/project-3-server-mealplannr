const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

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
            quantity: String,
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