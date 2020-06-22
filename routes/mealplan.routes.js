const express = require('express')
const router = express.Router()

let MealplanModel = require('../models/Mealplan.model')
//checking if user is logged in:
const {isLoggedIn} = require('../helper/auth-helper')

// --------------------------------------------------
// AUTHENTICATED ROUTES:
// --------------------------------------------------
router.get('/mealplans', isLoggedIn, (req, res) => {
    MealplanModel.find()
        .then((mealplans) => {
            res.status(200).json(mealplans)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not find mealplans.',
                message: err
            })
        })
})

router.get('/mealplan/mealplan_id', isLoggedIn, (req, res) => {
    MealplanModel.findById(req.params.mealplan_id)
        .then((mealplan) => {
            res.status(200).json(mealplan)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not find mealplan.',
                message: err
            })
        })
})

module.exports = router;

// router.post('/mealplan')

// router.delete('/mealplan/mealplan_id')

// router.patch('/mealplan/mealplan_id')
