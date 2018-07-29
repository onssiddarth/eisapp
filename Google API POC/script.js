$(document).ready(function() {
    // $.ajax({
    //     url: "http://quotes.rest/qod.json?category=inspire"
    // }).then(function(data) {
    //    $('.quote').append(data.contents.quotes[0].quote);
    //    $('.quoteAuthor').append(data.contents.quotes[0].author);
    //    $('.quoteTitle').append(data.contents.quotes[0].title);
    //    $('#quoteLink').attr('href',data.contents.quotes[0].permalink);
    //    $('#quote_img').attr('src',data.contents.quotes[0].background);
    // });

    // $.ajax({
    //     url: "http://quotes.rest/qod.json?category=funny"
    // }).then(function(data) {
    //    $('.joke').append(data.contents.quotes[0].quote);
    //    $('.jokeAuthor').append(data.contents.quotes[0].author);
    //    $('#jokeLink').attr('href',data.contents.quotes[0].permalink);
    //    $('#joke_img').attr('src',data.contents.quotes[0].background);
    // });
    
    // $.ajax({
    //     url: "https://newsapi.org/v2/top-headlines?country=ie&apiKey=0ab77f5a4b3a4b8d84a514670a69d286"
    // }).then(function(data) {
    //     data.articles.forEach(news => {
      
    //         const h1 = document.createElement('a');
    //         h1.textContent = news.title;
    //         h1.setAttribute('href', news.url);

    //         //const img = document.createElement('img');
    //         //img.setAttribute('src', news.urlToImage);

    //         $('#news').append(h1);
    //         $('#news').append('<br>');
    //         //newsDiv.appendChild(img);
    //       });
    // });

    // $.ajax({
    //     url: "https://www.quora.com/api/logged_in_user?fields=inbox%2Cnotifs",
    //     dataType: "json",
    //     success: function(result){
    //         console.log("success");
    //         console.log(result);
            
    //     },
    //     error: function(e){
    //         console.log("errorrr");
    //         console.log(e);
    //     }
    // })

    $.get("https://www.quora.com/api/logged_in_user?fields=inbox%2Cnotifs", function(data) {
    console.log("insideeee");
    //var temp = $(data);
    console.log(data);
});

    // $.ajax({
    //     url: "https://api.itbook.store/1.0/new"
    // }).then(function(data) {
    //     data.books.forEach(book => {  
    //     console.log('inside it books');
    //     const p1 = document.createElement('p');
    //     p1.textContent = book.title;
    //     console.log(book.title);

    //     const a = document.createElement('a');
    //     a.textContent = "View Details";
    //     a.setAttribute('href', book.url);
    //     console.log(book.url);

    //     const img = document.createElement('img');
    //     img.setAttribute('src', book.image);
    //     //$('#book_img').attr('src',book.image);

    //     $('#books').append(img);
    //     $('#books').append(p1);
    //     $('#books').append(a);
    //     $('#books').append('<br>');
    //     //newsDiv.appendChild(img);
    //     console.log('done it books');
    // });
    //});

});