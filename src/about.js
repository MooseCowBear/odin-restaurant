export function aboutSetUp() {
  const contentDiv = document.getElementById('content');
  navComponent(contentDiv);
  aboutComponent(contentDiv);

  function navComponent() {
    const tabs = document.createElement('nav');
    const tabOptions = ["About", "Menu", "Contact"];
    
    for (const elem of tabOptions) {
      const btn = document.createElement('button');
      btn.textContent = elem;
      btn.classList.add("tab");
      tabs.appendChild(btn);
    }
    contentDiv.appendChild(tabs);
  }

  function aboutComponent() {
    const component = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Toast.';
  
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add("card");
    aboutDiv.innerHTML = `<p>Here at Toast we love many things, but mostly, <span>we love carbs. </span>
                        Try our curated selection, baked fresh daily!</p>`;
  
    component.appendChild(title);
    component.appendChild(aboutDiv);
  
    contentDiv.appendChild(component);
  }
}