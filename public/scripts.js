const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.quick_recipes');

//mostra e esconde o modal overlay com o conteúdo

for (let card of cards) {
    card.addEventListener('click', function(){

        const imgId = card.getAttribute('id');
        const recipeTitle = card.querySelector('.recipes_title').textContent;
        const recipeAuthor = card.querySelector('.recipes_author').textContent;
        
        modalOverlay.classList.add('active')

        modalOverlay.querySelector(".modal_image_recipes").src = `${imgId}.png`
        modalOverlay.querySelector(".modal_recipes_title").textContent = recipeTitle
        modalOverlay.querySelector(".modal_recipes_author").textContent = recipeAuthor
    })
}

document.querySelector('.close_modal').addEventListener('click', function (){
    modalOverlay.classList.remove('active')
})