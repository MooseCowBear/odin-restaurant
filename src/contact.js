export function contactComponent(parent) {
  const component = document.createElement('div');
  component.classList.add('content-component');

  const title = document.createElement('h1');
  title.textContent = 'Contact.';

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('card');

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('contact-section');
  hoursDiv.innerHTML = `<h2>Hours.</h2>
                        <p>Mon 7 - 2</p>
                        <p>Tues 7 - 2</p>
                        <p>Wed 7 - 2</p>
                        <p>Thurs 7 - 2</p>
                        <p>Fri 7 - 2</p>
                        <p>Sat 10 - 6</p>
                        <p>Sun 10 - 6</p>`

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('contact-section');
  addressDiv.innerHTML = `<h2>Visit.</h2>
                          <p>1234 Somewhere Ln.</p>
                          <p>Flatbush, NY</p>`;

  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('contact-section');
  phoneDiv.innerHTML = `<h2>Call.</h2>
                        <p>555-555-5555</p>`;

  const emailDiv = document.createElement('div');
  emailDiv.classList.add('contact-section');
  emailDiv.innerHTML = `<h2>Write.</h2>
                        <p>whatsbetterthan@toast.com</p>`;

  contactDiv.appendChild(hoursDiv);
  contactDiv.appendChild(addressDiv);
  contactDiv.appendChild(phoneDiv);
  contactDiv.appendChild(emailDiv);

  component.appendChild(title);
  component.appendChild(contactDiv);

  parent.appendChild(component);
}