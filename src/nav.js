export function navComponent(parent) {
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