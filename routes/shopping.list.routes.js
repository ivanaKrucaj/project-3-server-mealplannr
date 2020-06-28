const express = require('express')
const router = express.Router()

let MealplanModel = require('../models/Mealplan.model')
//checking if user is logged in:
const { isLoggedIn } = require('../helper/auth-helper')

// --------------------------------------------------
// AUTHENTICATED ROUTES:
// --------------------------------------------------

// displaying a shopping list of a specific mealplan: add isLoggedin    <=========
router.get('/mealplan/:mealplan_id/shopping_list',  (req, res) => {
    MealplanModel.findById(req.params.mealplan_id)
        .then((mealplan) => {
            res.status(200).json(mealplan.shoppingList)
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
    MealplanModel.findByIdAndUpdate({ _id: req.params.mealplan_id }, { shoppingList: req.body.shoppingList }, {new: true})
        .then((mealplan) => {
            res.status(200).json(mealplan)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                error: 'Could not update shopping list',
                message: err
            })
        })
})

module.exports = router;