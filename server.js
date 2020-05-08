// Criando as váriaveis para setar as dependências
const express = require('express')
const nunjucks = require('nunjucks')

//Chamando a função para utilizar no projeto
const server = express()

//Setando a view engine (motor de view) que vou utilizar, qual arquivo vou renderizar
server.set('view engine', 'html')

//informando onde o servidor vai pegar os arquivos estáticos como CSS e Script
server.use(express.static('public'))

//Configurando o caminho das paginas que vou renderizar e qual opção, nesse caso estou usando o express passando a variável server.
nunjucks.configure('views', {
    express: server
})

//Renderizando a página index na rota principal
server.get('/', function(req, res) {
    return res.render('index')
})

//Mostrando que o servidor está funcionando
server.listen(5000, function() {
    console.log ('server is running')
})