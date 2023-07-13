export function aboutComponent(parent) {
  const component = document.createElement('div');
  component.classList.add('content-component');

  const title = document.createElement('h1');
  title.textContent = 'Welcome to Toast.';

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('card', 'about');
  aboutDiv.innerHTML = `<p>Here at Toast we love many things: lazy mornings, 
                      dark roast coffee, great books, adventures, towering mountains.
                      But most of all, <span>we love carbs</span> 
                      , and we want you to love them too. That's why everything we bake 
                      is with wheat sourced from the very best fields that the world has ever known. 
                      Try our curated selection today!</p>`;

  component.appendChild(title);
  component.appendChild(aboutDiv);

  parent.appendChild(component);
}