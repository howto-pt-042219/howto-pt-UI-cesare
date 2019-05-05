class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
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

const modal = new Modal(document.querySelector('.modal'));
const overlay = document.querySelector('.overlay');

const openModal = function(event) {
  event.preventDefault();
  name = event.target.dataset.name;
  slide = modal.slides.find(function(slide) {
    return slide.name === name;
  })

  overlay.classList.remove('hide');
  modal.modalElement.classList.remove('hide');
  modal.slides.forEach(slide => slide.slideElement.classList.add('slide-hide'));
  slide.slideElement.classList.remove('slide-hide');
}

const closeModal = function(event) {
  event.preventDefault();
  overlay.classList.add('hide');
  modal.modalElement.classList.add('hide');
}

const moreButtons = document.querySelectorAll('.more');
moreButtons.forEach(button => button.addEventListener('click', openModal));

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);
