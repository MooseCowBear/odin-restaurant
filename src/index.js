import './style.css';
import { aboutComponent } from './about.js';
import { menuComponent } from './menu.js';
import { contactComponent } from './contact.js';

console.log("The file has been bundled!");

function navComponent(parent) {
  const tabs = document.createElement('nav');
  const tabOptions = ["About", "Menu", "Contact"];
  
  for (const elem of tabOptions) {
    const btn = document.createElement('button');
    btn.setAttribute('id', elem.toLowerCase());
    btn.textContent = elem;
    btn.classList.add("tab");
    tabs.appendChild(btn);
  }
  parent.appendChild(tabs);
}

//need event listener for about, menu, contact buttons
//onclick needs to remove the present "content-component"
//then draw a new one.

(function (){
  //start out by drawing the nav bar, and the default component which is about.
  const contentDiv = document.getElementById('content');

  const Handler = {
    aboutComponent,
    menuComponent,
    contactComponent
  };

  navComponent(contentDiv);
  aboutComponent(contentDiv);

  //add event listener to the nav bar
  const navigation = document.querySelector('nav');
  navigation.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
      console.log("a button was clicked", event.target.textContent.toLowerCase());

      updateUI(`${event.target.textContent.toLowerCase()}Component`);
    }
  });

  function updateUI(funcName) {
    console.log("calling update ui with ", funcName);
    const toRemove = document.querySelector('.content-component');
    toRemove.remove();

    Handler[funcName](contentDiv);
  }
})();