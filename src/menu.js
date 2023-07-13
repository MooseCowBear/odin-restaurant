export function menuComponent(parent) {
  const items = [
    {name: "The Rebel", descript: "Thick cut slice of farmer's white. Served butter side down. ", price: "$8"},
    {name: "The Hippie", descript: "A chunk of seedy whole wheat ripped straight from the loaf. ", price: "$8"},
    {name: "The Yuppie", descript: "Artisonal sourdough with hand-churned, free-range butter and ligonberry spread.", price: "$10"},
    {name: "The Hardcore", descript: "Your choice of bread toasted on our highest setting for three times longer than any toaster should run.", price: "$8"},
    {name: "The Do-Gooder", descript: "2 slices of your choice. One to give, one to take.", price: "$12"},
    {name: "The Millennial", descript: "Topped with sliced avocado because why not? You'll never afford that house anyway.", price: "$15"},
  ];

  const component = document.createElement('div');
  component.classList.add('content-component');

  const title = document.createElement('h1');
  title.textContent = 'Menu.';

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('card');

  for (const item of items) {
    const itemDiv = document.createElement('div');

    const header = document.createElement('div');

    const name = document.createElement('h2');
    name.textContent = item.name;

    const price = document.createElement('p');
    price.textContent = item.price;

    header.appendChild(name);
    header.appendChild(price);

    const descript = document.createElement('p');
    descript.textContent = item.descript;

    itemDiv.appendChild(header);
    itemDiv.appendChild(descript);

    menuDiv.appendChild(itemDiv);
  }

  component.appendChild(title);
  component.appendChild(menuDiv);

  parent.appendChild(component);
}