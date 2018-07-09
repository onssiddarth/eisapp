const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://it-ebooks-api.info/v1/search/php%20mysql', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.Books.forEach(books => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = books.Title;
	  
	  const h4 = document.createElement('h4');
	h4.textContent = books.SubTitle;

	  const p = document.createElement('p');
	  if(books.Description!=null&&books.Description!=undefined){
books.Description=books.Description.substring(0,300);
}
      p.textContent = `${books.Description}...`;
		
	  const h3 = document.createElement('h3');
	h3.textContent = books.isbn;
	
      container.appendChild(card);
      card.appendChild(h1);
	  card.appendChild(h4);
      card.appendChild(p);
	  card.appendChild(h3);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();