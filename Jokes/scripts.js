const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'http://quotes.rest/qod.json?category=funny', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  
  if (request.status >= 1 && request.status < 400) {
	  console.log('inside');
	  console.log(data.contents.quotes);
   	  data.contents.quotes.forEach(jokes => {
		console.log('jokes inside');
	  const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = jokes.quote;
console.log(jokes.quote);
      const p = document.createElement('p');
	  
    if(jokes.author!=null&&jokes.author!=undefined){
		console.log('author inside');
jokes.author=jokes.author.substring(0,300);
}
      p.textContent = `${jokes.author}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textauthor = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();