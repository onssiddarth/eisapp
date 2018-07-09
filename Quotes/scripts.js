const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://talaikis.com/api/quotes/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(news => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h4 = document.createElement('h4');
      h4.textContent = news.quote;

      const p = document.createElement('p');
      news.author = news.author.substring(0, 300);
      p.textContent = `${news.author}...`;

      container.appendChild(card);
      card.appendChild(h4);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();