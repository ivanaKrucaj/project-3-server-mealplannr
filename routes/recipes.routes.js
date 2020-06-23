const express = require('express')
const router = express.Router()

let RecipeModel = require('../models/Recipe.model')
//checking if user is logged in:
const {isLoggedIn} = require('../helper/auth-helper')

// --------------------------------------------------
// PUBLIC ROUTES:
// --------------------------------------------------

// displaying all recipes ('/home'):
router.get('/recipes', (req, res) => {
    RecipeModel.find()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).json({
                error: 'Could not find recipes.',
                message: err
            })
        })
})

// displaying recipe details:
router.get('/recipe/:recipe_id', (req, res) => {
    RecipeModel.findById(req.params.recipe_id)
        .then((recipe) => {
            res.status(200).json(recipe)
        })
        .catch((err) => {
            res.status(500).json({
                error: "Could not find recipe.",
                message: err
            })
        })
})

// ----------------------------------------------------
// AUTHENTICATED ROUTES:
// ----------------------------------------------------

// create recipe and post into db: add isLoggedIn
router.post('/recipe',  (req, res) => {
    const {title, description, image, steps, ingredients, number_of_portions, type} = req.body;
    console.log(req.body)
    RecipeModel.create({title: title, description: description, image: image, steps: steps, ingredients: [], type: type, number_of_portions: number_of_portions})
        .then((recipe) => {
            res.status(201).json(recipe)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                error: "Could not post recipe.",
                message: err
            })
        })
})

// update recipe:
router.put('/recipe/:recipe_id', isLoggedIn ,(req, res) => {
    const {title, description, image, steps, ingredients, number_of_portions, type} = req.body
    RecipeModel.findByIdAndUpdate({_id: req.params.recipe_id}, {title: title, description: description, image: image, steps: steps, ingredients: [], type: type, number_of_portions: number_of_portions}, {new: true})
        .then((recipe) => {
            res.status(200).json(recipe)
        })
        .catch((err) => {
            res.status(500).json({
                error: "Could not update recipe.",
                message: err
            })
        })
})

// delete recipe from db:
router.delete('/recipe/:recipe_id', isLoggedIn, (req, res) => {
    RecipeModel.findByIdAndDelete(req.params.recipe_id)
        .then((recipe) => {
            res.status(200).json(recipe)
        })
        .catch((err) => {
            res.status(500).json({
                error: "Could not delete recipe.",
                message: err
            })
        })
})

module.exports = router;






