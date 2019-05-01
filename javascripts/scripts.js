const menuButtons = document.querySelectorAll('.menu-btn');
const mobileNavigation = document.querySelector('header nav');
const signinButton = document.querySelector('#signin-button');

menuButtons.forEach(button => button.addEventListener('click', function(event) {
  console.log('Clicked: ', event.target);
  signinButton.classList.remove('button', 'white-button');
  mobileNavigation.classList.toggle('hide');
}))


