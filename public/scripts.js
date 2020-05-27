// const modalOverlay = document.querySelector('.modal_overlay');
// const cards = document.querySelectorAll('.quick_recipes');

// //mostra e esconde o modal overlay com o conteúdo

// for (let card of cards) {
//     card.addEventListener('click', function(){

//         const imgId = card.getAttribute('id');
//         const recipeTitle = card.querySelector('.recipes_title').textContent;
//         const recipeAuthor = card.querySelector('.recipes_author').textContent;
        
//         modalOverlay.classList.add('active')

//         modalOverlay.querySelector(".modal_image_recipes").src = `${imgId}.png`
//         modalOverlay.querySelector(".modal_recipes_title").textContent = recipeTitle
//         modalOverlay.querySelector(".modal_recipes_author").textContent = recipeAuthor
//     })
// }

// document.querySelector('.close_modal').addEventListener('click', function (){
//     modalOverlay.classList.remove('active')
// })

const cards = document.querySelectorAll('.quick_recipes');

for (let card of cards) {
    card.addEventListener('click', function(){
        const recipeId = card.getAttribute("id");
        window.location.href = `/recipe-detail/${recipeId}`
    })
}

// const hide = document.querySelector('.hide-btn');
// const visibility = true;

// function showHide() {
//     if (visibility) {
//         document.getElementById('recipe_showhide').style.display = 'none'
//         visibility = false;
//     } else {
//         document.getElementById('recipe_showhide').style.display = 'block'
//         visibility = true;
//     }
// } 

// function showHide(id) {
//     if (document.getElementById(id).style.display == 'block'){
//         document.getElementById(id).style.display = 'none'
//     } else {
//         document.getElementById(id).style.display = 'block'
//     }
// }
// document.querySelector('.hide-btn').addEventListener('click', showHide('recipe_showhide'))

const ingredient = document.querySelector('.recipe_showhide');
const showHide = document.querySelector('.showhide_btn');

showHide.addEventListener('click', function() {
    if (showHide.innerHTML == 'Esconder') {
        ingredient.classList.add('active')
        showHide.innerHTML = 'Mostrar'
    } else {
        ingredient.classList.remove('active')
        showHide.innerHTML = 'Esconder'
    }
})