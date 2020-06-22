const mongoose = require('mongoose')

let MealplanSchema = new mongoose.Schema(
    {
   recipe: {
       type: String
   }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Mealplan', MealplanSchema);