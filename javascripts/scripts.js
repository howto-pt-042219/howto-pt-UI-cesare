const menuButtons = document.querySelectorAll('.menu-btn');
const mobileNavigation = document.querySelector('nav.full');
const signinButton = document.querySelector('#signin-button');
const mobileStyles = "display: flex; flex-direction: column; margin-top: 0; height: initial; border-top: 1px solid white";

menuButtons.forEach(button => button.addEventListener('click', function(event) {
  console.log('Clicked: ', event.target);


  if (mobileNavigation.style.display === 'block') {
    mobileNavigation.style.display = 'none';
  } else {
    signinButton.classList.remove('button', 'white-button');

    mobileNavigation.style.cssText = mobileStyles;



//    mobileNavigation.style.display = 'flex';
//    mobileNavigation.classList.add('mobile-open');
//    mobileNavigation.style.flexDirection = 'column';
  }
}))



// elt.style.cssText = "color: blue; border: 1px solid black"; 
