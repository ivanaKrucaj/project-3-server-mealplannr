const mongoose = require('mongoose')

let RecipeSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, 'Please enter recipe title.']
    },
    description: {
        type: String,
        required: [true, 'Please enter recipe description.']
    },
    image: {
        
    },
    steps: {
        type: String,
        required: [true, 'Please enter recipe steps.']
    },
    ingredients: {
        type: String,
        required: [true, 'Please enter ingredients.']
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Recipe', RecipeSchema);