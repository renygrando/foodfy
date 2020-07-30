const fs = require('fs')
const data = require('../data.json')

exports.about = (req, res) => {
    return res.render('about')
}
//pagina do quadro de receitas e detalhe de receitas
exports.recipes = (req, res) => {
    return res.render('recipes', {items: data.recipes})
}

exports.show = (req, res) => {
    const id = req.params.id;
    const recipe = data.recipes.find((recipe) => {
        return recipe.id == id
    })
        
    if (!recipe){
        return res.send('Receita não encontrada')
    }
    return res.render('recipe-detail', {item: recipe})

}
//pagina do admin de receitas
exports.index = (req, res) => {
    return res.render("admin/recipes/index", {items: data.recipes})
}

exports.edit = (req, res) => {
    return res.send("oi")
}
