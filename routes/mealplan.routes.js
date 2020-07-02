const express = require('express');
const router = express.Router();

let MealplanModel = require('../models/Mealplan.model');
//checking if user is logged in:
const {isLoggedIn} = require('../helper/auth-helper');

// --------------------------------------------------
// AUTHENTICATED ROUTES:
// --------------------------------------------------

// lists all mealplans created by user:
router.get('/mealplans', isLoggedIn, (req, res) => {
    MealplanModel.find().populate('recipes')
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
    MealplanModel.findById(req.params.mealplan_id).populate('recipes')
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
    const {title, recipes} = req.body;
    const recipeIds = recipes.map((recipe) => {
        return recipe._id
    })

    // calculating repeating shopping list items:
    const ingredients = recipes.map((recipe) => {
        return recipe.ingredients
    }).flat()

    const shoppingList = ingredients.reduce((acc, ingredient) => {
        if (ingredient.id in ingredient){
            acc[ingredient.id] = {
                id: ingredient.id,
                quantity: acc[ingredient.id].quantity + ingredient.quantity_in_grams,
                title: ingredient.title,
                bought: false
            }
        } else {
            acc[ingredient.id] = {
                id: ingredient.id,
                quantity: ingredient.quantity_in_grams,
                title: ingredient.title,
                bought: false
            }
        }
        
        return acc

    }, {})

    MealplanModel.create({title: title,  recipes: recipeIds, shoppingList: Object.values(shoppingList)})
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

// updates a specific mealplan:                                 <=== backlog
// router.patch('/mealplan/:mealplan_id', isLoggedIn, (req, res) => {
//     MealplanModel.findByIdAndUpdate(req.params.mealplan_id)
//         .then((mealplan) => {
//             res.status(201).json(mealplan)
//         })
//         .catch((err) => {
//             res.status(500).json({
//                 error: 'Could not find and update mealplan.',
//                 message: err
//             })
//         })
// })


module.exports = router;

