const express = require('express')
const routes = express.Router()
const data = require('./data.json')

routes.get('/', function(req, res) {
    return res.render('index', {items: data.recipes})
})
routes.get('/recipes', function(req, res) {
    return res.render('recipes', {items: data.recipes})
})
routes.get('/about', function(req, res) {
    return res.render('about')
})
routes.get("/recipe-detail/:id", function (req, res) {
    const id = req.params.id;
    const recipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })
        
    if (!recipe){
        return res.send('Receita não encontrada')
    }
    return res.render('recipe-detail', {item: recipe})

  })
  
  module.exports = routes