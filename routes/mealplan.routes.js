const express = require('express')
const router = express.Router()

let MealplanModel = require('../models/Mealplan.model')
//checking if user is logged in:
const {isLoggedIn} = require('../helper/auth-helper')

// --------------------------------------------------
// AUTHENTICATED ROUTES:
// --------------------------------------------------

// lists all mealplans created by user:
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

// finds specific mealplan:
router.get('/mealplan/:mealplan_id', isLoggedIn, (req, res) => {
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

// creates/posts mealplan:
router.post('/mealplan', isLoggedIn, (req, res) => {
    const {title, fromDate, toDate, recipes, shoppingList} = req.body;
    MealplanModel.create({title: name, from_date: fromDate, to_date: toDate, recipes: recipes, shoppingList: shoppingList})
        .then((mealplan) => {
            res.status(201).json(mealplan)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not create mealplan.',
                message: err
            })
        })
})

// deletes mealplan
router.delete('/mealplan/:mealplan_id', isLoggedIn, (req, res) => {
    MealplanModel.findByIdAndDelete(req.params.mealplan_id)
        .then((mealplan) => {
            res.status(200).json(mealplan)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not delete mealplan.',
                message: err
            })
        })
})

// updates a specific mealplan:
router.patch('/mealplan/:mealplan_id', isLoggedIn, (req, res) => {
    MealplanModel.findByIdAndUpdate(req.params.mealplan_id)
        .then((mealplan) => {
            res.status(201).json(mealplan)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not find and update mealplan.',
                message: err
            })
        })
})


module.exports = router;

