const carousel = document.querySelector('.carousel');


const openCarousel = function() {
  carousel.classList.remove('hide');
}

const moreButtons = document.querySelectorAll('.more');
moreButtons.forEach(button => button.addEventListener('click', openCarousel));
