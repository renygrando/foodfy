// Criando as váriaveis para setar as dependências
const express = require('express')
const nunjucks = require('nunjucks')

//Chamando a função para utilizar no projeto
const server = express()
const recipes = require('./data-recipes')

//Setando a view engine (motor de view) que vou utilizar, qual arquivo vou renderizar
server.set('view engine', 'njk')

//informando onde o servidor vai pegar os arquivos estáticos como CSS e Script
server.use(express.static('public'))
server.use(express.static('assets'))

//Configurando o caminho das paginas que vou renderizar e qual opção, nesse caso estou usando o express passando a variável server.
nunjucks.configure('views', {
    express: server,
    autoescape:false,
    noCache: true
})
//Renderizando a página index na rota principal e outras paginas do site
server.get('/', function(req, res) {
    return res.render('index', {items: recipes})
})
server.get('/recipes', function(req, res) {
    return res.render('recipes', {items: recipes})
})
server.get('/about', function(req, res) {
    return res.render('about')
})
server.get("/recipe-detail/:id", function (req, res) {
    const id = req.params.id;
    const recipe = recipes.find(function(recipe){
        return recipe.id == id
    })
        
    if (!recipe){
        return res.send('Receita não encontrada')
    }
    return res.render('recipe-detail', {item: recipe})

  })
//Mostrando que o servidor está rodando
server.listen(5000, function() {
    console.log ('server is running')
})