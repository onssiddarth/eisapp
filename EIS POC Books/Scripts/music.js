var myBooks = {
    "books": [
    {
    "title": "Design Patterns and Best Practices in Java",
    "subtitle": "A comprehensive guide to building smart and reusable code in Java",
    "isbn13": "9781786463593",
    "price": "$35.99",
    "image": "https://itbook.store/img/books/9781786463593.png",
    "url": "https://itbook.store/books/9781786463593"
    },
    {
    "title": "Mastering The Faster Web with PHP, MySQL, and JavaScript",
    "subtitle": "Develop state-of-the-art web applications using the latest web technologies",
    "isbn13": "9781788392211",
    "price": "$31.99",
    "image": "https://itbook.store/img/books/9781788392211.png",
    "url": "https://itbook.store/books/9781788392211"
    },
    {
    "title": "Puppet 5 Cookbook, 4th Edition",
    "subtitle": "Jump start your Puppet 5.x deployment using engaging and practical recipes",
    "isbn13": "9781788622448",
    "price": "$35.99",
    "image": "https://itbook.store/img/books/9781788622448.png",
    "url": "https://itbook.store/books/9781788622448"
    },
    {
    "title": "C++ Reactive Programming",
    "subtitle": "Design concurrent and asynchronous applications using the RxCpp library and Modern C++17",
    "isbn13": "9781788629775",
    "price": "$35.99",
    "image": "https://itbook.store/img/books/9781788629775.png",
    "url": "https://itbook.store/books/9781788629775"
    },
    {
    "title": "Angular 6 by Example, 3rd Edition",
    "subtitle": "Get up and running with Angular by building modern real-world web apps",
    "isbn13": "9781788835176",
    "price": "$35.99",
    "image": "https://itbook.store/img/books/9781788835176.png",
    "url": "https://itbook.store/books/9781788835176"
    },
    {
    "title": "Big Data Architect's Handbook",
    "subtitle": "A guide to building proficiency in tools and systems used by leading big data experts",
    "isbn13": "9781788835824",
    "price": "$54.99",
    "image": "https://itbook.store/img/books/9781788835824.png",
    "url": "https://itbook.store/books/9781788835824"
    },
    {
    "title": "Machine Learning with Core ML",
    "subtitle": "An iOS developer's guide to implementing machine learning in mobile apps",
    "isbn13": "9781788838290",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781788838290.png",
    "url": "https://itbook.store/books/9781788838290"
    },
    {
    "title": "Hands-On High Performance with Spring 5",
    "subtitle": "Techniques for scaling and optimizing Spring and Spring Boot applications",
    "isbn13": "9781788838382",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781788838382.png",
    "url": "https://itbook.store/books/9781788838382"
    },
    {
    "title": "Hands-On Cybersecurity with Blockchain",
    "subtitle": "Implement DDoS protection, PKI-based identity, 2FA, and DNS security using Blockchain",
    "isbn13": "9781788990189",
    "price": "$35.99",
    "image": "https://itbook.store/img/books/9781788990189.png",
    "url": "https://itbook.store/books/9781788990189"
    },
    {
    "title": "Learn Python Programming, 2nd Edition",
    "subtitle": "A beginner's guide to learning the fundamentals of Python language to write efficient, high-quality code",
    "isbn13": "9781788996662",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781788996662.png",
    "url": "https://itbook.store/books/9781788996662"
    }
    
    ]
}
var bookData = []; 
var slidesize = 4;

$(document).ready(function() {
    $('.carousel').carousel({
    })
    setupbookData();
  });

  //Ajax function to set data
  function setupbookData(){
      createBookArrays();
      var htmlResponse='';
    
      for(var i=0;i<bookData.length;i++){
        if(i==0){
            htmlResponse+='<div class="item active"><ul class="thumbnails">'
        }
        else{
            htmlResponse+='<div class="item"><ul class="thumbnails">'
        }
         for(var j=0;j<bookData[i].length;j++){
            htmlResponse+='<li class="col-sm-3"><div class="thumbnail">';
            htmlResponse+='<a href="'+bookData[i][j].url+'" target="_blank">'
            htmlResponse+='<img src="'+bookData[i][j].image+'" alt=""></a></div>'
            htmlResponse+= '<div class="caption-box">'
            htmlResponse+= '<h4>'+bookData[i][j].title+'</h4>'
            htmlResponse+= '<p class="book-subtitle" title="'+bookData[i][j].subtitle+'">'+bookData[i][j].subtitle+'</p>'
            htmlResponse+= '<a class="btn btn-success btn-mini" href="'+bookData[i][j].url+'">View Details</a></div>'
            htmlResponse+= '</li>'
         }
         htmlResponse+= '</ul></div>'
      }
      $(".books-section").html(htmlResponse);
  }

  //This function is used to split array to size of 4 to display it in carousel 
  function createBookArrays(){ 
    var bookObjectArray = myBooks.books;
    for (var i=0; i<bookObjectArray.length; i+=slidesize) {
         bookData.push(bookObjectArray.slice(i,i+slidesize));
    }
  }