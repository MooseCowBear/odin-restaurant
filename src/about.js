export function aboutComponent(parent) {
  const component = document.createElement('div');
  component.classList.add('content-component');

  const title = document.createElement('h1');
  title.textContent = 'Welcome to Toast.';

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('card');
  aboutDiv.innerHTML = `<p>Here at Toast we love many things, but mostly, <span>we love carbs. </span></p>
                      <p>Try our curated selection, baked fresh daily!</p>`;

  component.appendChild(title);
  component.appendChild(aboutDiv);

  parent.appendChild(component);
}