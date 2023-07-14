import './style.css';
import { aboutComponent } from './about.js';
import { menuComponent } from './menu.js';
import { contactComponent } from './contact.js';
import { navComponent } from './nav.js'

(function (){
  //start out by drawing the nav bar, and the default component which is about.
  const contentDiv = document.getElementById('content');

  navComponent(contentDiv);
  aboutComponent(contentDiv);

  //add event listener to the nav bar
  const navigation = document.querySelector('nav');
  navigation.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
      updateUI(`${event.target.textContent.toLowerCase()}Component`);
    }
  });

  function updateUI(funcName) {
    const Handler = {
      aboutComponent,
      menuComponent,
      contactComponent
    };

    const toRemove = document.querySelector('.content-component');
    toRemove.remove();

    Handler[funcName](contentDiv);
  }
})();