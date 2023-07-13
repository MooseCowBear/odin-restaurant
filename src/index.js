console.log("The file has been bundled!");

function component() {
  const contentDiv = document.getElementById('content');
  const title = document.createElement('h1');

  title.textContent = 'Welcome to Toast.';

  const aboutDiv = document.createElement('div');
  aboutDiv.innerHTML = `<p>Here at Toast we love many things, but mostly, <span>we love carbs. </span>
                      Try our curated selection, baked fresh daily!</p>`;

  contentDiv.appendChild(title);
  contentDiv.appendChild(aboutDiv);
}

component();