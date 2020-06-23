const express = require('express')
const router = express.Router()

let MealplanModel = require('../models/Mealplan.model')
//checking if user is logged in:
const { isLoggedIn } = require('../helper/auth-helper')

// --------------------------------------------------
// AUTHENTICATED ROUTES:
// --------------------------------------------------

// displaying a shopping list of a specific mealplan:
router.get('/mealplan/:mealplan_id/shopping_list', isLoggedIn, (req, res) => {
    MealplanModel.findById(req.params.mealplan_id)
        .then((shoppingList) => {
            res.status(200).json(shoppingList)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not find shopping list.',
                message: err
            })
        })
})

// update shopping list:
router.put('/mealplan/:mealplan_id/shopping_list', isLoggedIn, (req, res) => {
    MealplanModel.findByIdAndUpdate(req.params.mealplan_id)
        .then((shoppingList) => {
            res.status(200).json(shoppingList)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not update shopping list',
                message: err
            })
        })
})

module.exports = router;