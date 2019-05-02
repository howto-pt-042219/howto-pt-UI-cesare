class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    //this.slides = document.querySelectorAll('.slide');
    this.slides = [];
    document.querySelectorAll('.slide').forEach(slide => {
      this.slides.push(new Slide(slide));
    });
  }
}

class Slide {
  constructor(slideElement) {
    this.slideElement = slideElement;
    this.slideElement.classList.add('slide-hide');
    this.name = this.slideElement.dataset.name;
  }
}

const carousel = new Carousel(document.querySelector('.carousel'));

const openCarousel = function(event) {
  event.preventDefault();
  name = event.target.dataset.name;
  slide = carousel.slides.find(function(slide) {
    return slide.name === name;
  })

  carousel.carouselElement.classList.remove('hide');
  carousel.slides.forEach(slide => slide.slideElement.classList.add('slide-hide'));
  slide.slideElement.classList.remove('slide-hide');
}

const moreButtons = document.querySelectorAll('.more');
moreButtons.forEach(button => button.addEventListener('click', openCarousel));
