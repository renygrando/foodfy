const express = require('express')
const routes = express.Router()
const data = require('./data.json')
const recipes = require('./controllers/recipes')

//pagina inicial
routes.get('/', (req, res) => {
    return res.render('index', {
        items: data.recipes
    })
})

//pagina sobre
routes.get('/about', recipes.about)

//pagina de receitas e detalhe de receita
routes.get('/recipes', recipes.recipes)
routes.get("/recipes/detail/:id", recipes.show)

//pagina admin de receitas
routes.get("/admin/recipes", recipes.index)

module.exports = routes