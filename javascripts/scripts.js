const menuButtons = document.querySelectorAll('.menu-btn');
const mobileNavigation = document.querySelector('header nav');
const signinButton = document.querySelector('#signin-button');

menuButtons.forEach(button => button.addEventListener('click', function(event) {
  console.log('Clicked: ', event.target);
  signinButton.classList.remove('button', 'white-button');
  mobileNavigation.classList.toggle('hide');
}))




// Tabs

class Tab {
  constructor(tab) {
    this.tab = tab;
    this.category = this.tab.dataset.category;

    if (this.category === 'all') {
      this.boxes = document.querySelectorAll('.box');
    } else {
      this.boxes = document.querySelectorAll(`.box[data-category="${this.category}"]`);
    }

    this.boxes = Array.from(this.boxes).map(box => new Box(box));
    this.tab.addEventListener('click', (event) => {
      event.preventDefault();
      this.selectTab();
    });
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.display = 'none');
    this.tab.classList.add('active-tab');
    this.boxes.forEach(box => box.selectBox());
  }
}

class Box {
  constructor(box) {
    this.box = box;
  }

  selectBox() {
    this.box.style.display = 'flex';
  }
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new Tab(tab));

