//CRIANDO ROTAS PARA CADA RECEITA
const cards = document.querySelectorAll('.recipes');

for (let card of cards) {
    card.addEventListener('click', function () {
        const recipeId = card.getAttribute("id");
        window.location.href = `/recipes/detail/${recipeId}`
    })
}

// BOTÃO MOSTRA-ESCONDE NA PÁGINA DE RECEITAS 
const ingredient = document.querySelectorAll('.recipe_showhide');
const showHide = document.querySelectorAll('.showhide_btn');

for (let i = 0; i < showHide.length; i++) {
    showHide[i].addEventListener('click', function () {
        if (showHide[i].innerHTML == 'ABRIR') {
            ingredient[i].classList.add('active')
            showHide[i].innerHTML = 'FECHAR'
        } else {
            ingredient[i].classList.remove('active')
            showHide[i].innerHTML = 'ABRIR'
        }
    })
}

//MENU COM LINK ATIVO
const currentPage = location.pathname
const menuItems = document.querySelectorAll(".links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("menu-active")
    }
}

