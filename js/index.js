
var quoteURL = "http://quotes.rest/qod.json?category=inspire";
var jokeURL = "http://quotes.rest/qod.json?category=funny";
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&appid=500ef551d7a3ac2e64edfe842b5b5b47&units=metric";
var newsdata = {
    "items": [
        {
            "src": "https://fortunedotcom.files.wordpress.com/2017/03/uber.jpg",
            "title": "Uber Drivers Are Employees, New York Unemployment Insurance Board Rules",
            "link":"http://fortune.com/2018/07/21/uber-drivers-employees-new-york-unemployment"
        },
        {
            "src": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/07/03/105308904-1530621057871rts1ub4e.1910x1000.jpg",
            "title": "Elon Musk denies early orders being canceled for Model 3 – but new demand may be slipping anyway",
            "link":"https://www.cnbc.com/2018/07/21/new-demand-may-be-slipping-for-tesla-model-3-early-orders.html"
        },
        {
            "src": "https://www.gannett-cdn.com/-mm-/03e10f2abf2315b6ee2c0f9305e723ddb26d14d0/c=0-827-2646-2322/local/-/media/2018/07/20/Phoenix/Phoenix/636676480004632022-hilde.jpg?width=3200&height=1680&fit=crop",
            "title": "CVS fires pharmacist who denied hormone prescription to transgender woman",
            "link": "http://rssfeeds.usatoday.com/~/559970626/0/usatoday-newstopstories~CVS-fires-pharmacist-who-denied-hormone-prescription-to-transgender-woman/"
        },
        {
            "src": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F488600%2Flogo-on-sign.jpg&h=630&w=1200&op=resize",
            "title": "What Is Netflix, Inc.'s Competitive Advantage?",
            "link":"https://www.fool.com/investing/2018/07/21/what-is-netflix-incs-competitive-advantage.aspx"
        },
        {
            "src": "https://s2.reutersmedia.net/resources/r/?m=02&d=20180720&t=2&i=1285284753&w=1200&r=LYNXMPEE6J1CH",
            "title": "Bayer to phase out Essure birth control device in US",
            "link":"https://www.reuters.com/article/us-bayer-essure/bayer-to-phase-out-essure-birth-control-device-in-u-s-idUSKBN1KA2A1"
        },
        {
            "src": "https://techcrunch.com/wp-content/uploads/2018/04/facebook-free-the-social-graph.png?w=753",
            "title": "Facebook suspends analytics firm Crimson Hexagon over data use concerns",
            "link":"https://techcrunch.com/2018/07/20/facebook-suspends-analytics-firm-crimson-hexagon-over-data-use-concerns/"
        }
    ]
}

var musicURL = "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";

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
var slidesize = 2;
var username = '';
var profilepic = '';

$(document).ready(function() {

//$('#btnViewDashboard').hide();
// $(function() {  $("#popModal").modal('show');
// // Set a timeout to hide the element again
// setTimeout(function(){
//     $("#popModal").modal('hide');
// }, 3000);
// });

  // function onSignIn(googleUser) {
  //     var profile = googleUser.getBasicProfile();
  //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //     console.log('Name: ' + profile.getName());
  //     username = profile.getName();
  //     console.log('Image URL: ' + profile.getImageUrl());
  //     profilepic = profile.getImageUrl();
  //     console.log('Email: ' + profile.getEmail());
  //     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  //     console.log('Image URL: ' + profile.getImageUrl());
  //     console.log('Email: ' + profile.getEmail());
  //     //$('.modal-wrapper').toggleClass('open');
  //     //$('.page-wrapper').toggleClass('blur');
  //     //document.getElementById("namea").innerHTML = profile.getName();
  //     //$("#imgid").attr("src", profile.getImageUrl());
  //     //alert('hi');
  //     //$('#btnViewDashboard').show();
  // }
  // function onFailure(error) {
  //     console.log(error);
  // }
  // function signOut() {
  //     var auth2 = gapi.auth2.getAuthInstance();
  //     auth2.signOut().then(function () {
  //         console.log('User signed out.');
  //     });
  // }

	$.ajax({
	        dataType: "json",
	        url: quoteURL,
	        success: function (data) {

						console.log(data);
						var quote=data.contents.quotes[0].quote;
						console.log(quote);
						localStorage.setItem("quote", quote);
						quote = "\"" + quote + "\"";
						$('.quote').append(quote);
						$('#quote_img').attr('src',data.contents.quotes[0].background);
						$('.quoteAuthor').append(data.contents.quotes[0].author);
						$('#quoteLink').attr('href',data.contents.quotes[0].permalink);


						 localStorage.setItem("quote_img", data.contents.quotes[0].background);
						 localStorage.setItem("quoteAuthor", data.contents.quotes[0].author);
						 localStorage.setItem("quoteLink", data.contents.quotes[0].permalink);
	        },
	        error: function (jqXHR) {
						console.log('Quote ERROR');
	            console.log(jqXHR);
	        }
	    });

			$.ajax({
			        dataType: "json",
			        url: jokeURL,
			        success: function (data) {

								console.log(data);
								var quote=data.contents.quotes[0].quote;
								console.log(quote);
								$('.joke').append(data.contents.quotes[0].quote);
								$('.jokeAuthor').append(data.contents.quotes[0].author);
						    $('#jokeLink').attr('href',data.contents.quotes[0].permalink);
						    $('#joke_img').attr('src',data.contents.quotes[0].background);

					       localStorage.setItem("joke", data.contents.quotes[0].quote);
								 localStorage.setItem("jokeAuthor", data.contents.quotes[0].author);
								 localStorage.setItem("jokeLink", data.contents.quotes[0].permalink);
								 localStorage.setItem("joke_img", data.contents.quotes[0].background);
			        },
			        error: function (jqXHR) {
								console.log('Joke ERROR');
			            console.log(jqXHR);
			        }
			    });
					$.ajax({
									dataType: "json",
									url: weatherURL,
									success: function (data) {

										console.log(data);
										var temperature=data.main.temp;
										console.log(temperature);
										temperature = Math.round(temperature) + "&deg;C";
										var description=data.weather[0].description;
										var icon=data.weather[0].icon;
										icon = "http://openweathermap.org/img/w/" + icon + ".png"
										var city=data.name;
										var country=data.sys.country;
										console.log(temperature);
										console.log(description);
										console.log(icon);
										console.log(city);
										console.log(country);
                    console.log(username);
                    console.log(profilepic);
										var modifiedcity = city + ", " + country;
										$('#temperature').html(temperature);
										$('#description').html(description);
										$('#weather_img').attr('src',icon);
										$('#citycountry').html(modifiedcity);


									},
									error: function (jqXHR) {
										console.log('Weather ERROR');
											console.log(jqXHR);
									}
							});
							$.ajax({
											dataType: "json",
											url: musicURL,
											success: function (data) {

												console.log(data);
												setupMusicData(data);


											},
											error: function (jqXHR) {
												console.log('Music ERROR');
													console.log(jqXHR);
											}
									});
     setupNewsData();
		 //setupMusicData();
		 setupbookData();

		 $("#create").click(function() {
		   $(this).before("<textarea></textarea>");
		 });

 });

function setupNewsData(){
    var response = '',
    indicator = '';
    var length = newsdata.items.length;
        if(length > 0){
            for (var i = 0; i < length; i++) {
                if(i==0){
                    response += '<div class="item active"><a href="'+newsdata.items[i].link+'" target="_blank"><img src="' + newsdata.items[i].src + '"><div class="carousel-caption"><h3>' +  newsdata.items[i].title + '</h3></div></a></div>';
                }
                else{
                    response += '<div class="item"><a href="'+newsdata.items[i].link+'" target="_blank"><img src="' + newsdata.items[i].src + '"><div class="carousel-caption"><h3>' +  newsdata.items[i].title + '</h3></div></a></div>';
                }

                indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
            }
            $('.news-section').html(response);
            $('.carousel-indicators').html(indicator);

        }
    };
		function setupMusicData(playlistJSON){
		    var response = '',
		    indicator = '';
		    var responseTemplate="";
		    responseTemplate+="<table class=\"table table-striped\">";
		    responseTemplate+="<thead><th><b>Track</b></th><th><b>Atrist</b></th><th><b>Play</b></th></thead>";

		    var dataTemplate="<tr><td>##TRACKNAME##</td><td>##ARTISTNAME##</td><td><a href=\"##PREVIEWURL##\" target=\"_blank\"><img class=\"dashboard-music-play\" src=\"img\\musicplay.png\"/></a></td></tr>";
		    var musicList="";
		    var length = playlistJSON.tracks.length;
		        if(length > 0){
		            for (var i = 0; i < length; i++) {
		                musicList+=dataTemplate.replace("##TRACKNAME##",playlistJSON.tracks[i].name)
		                                        .replace("##ARTISTNAME##",playlistJSON.tracks[i].artistName)
		                                        .replace("##PREVIEWURL##",playlistJSON.tracks[i].previewURL);

		            }
		            responseTemplate+="<tbody>"+musicList+"</tbody></table>";
		            $(".table-responsive").html(responseTemplate);

		        }
		    };

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
									htmlResponse+='<li class="col-md-6"><div class="thumbnail">';
									htmlResponse+='<a href="'+bookData[i][j].url+'" target="_blank">'
									htmlResponse+='<img src="'+bookData[i][j].image+'" alt=""></a></div>'
									htmlResponse+= '<div class="caption-box">'

									if (bookData[i][j].title.length > 20) {
										htmlResponse+= '<h5>'+bookData[i][j].title.substring(0,20)+'...'+'</h5>'
									}
									else {
										htmlResponse+= '<h5>'+bookData[i][j].title +'</h5>'
									}


									// htmlResponse+= '<h5>'+bookData[i][j].title.substring(0,20)+'...'+'</h5>'
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

$(function(){
	var widgets = $('.widgets-js .widget');
	var widgetsCount = widgets.length;
	var windowWidth = 0;
	var mediaQueryColumn = 1280;
  var columns = 3;

  var columnsInit = (function(){
    var html = '';
    for (var i = 0; i < columns; i++) {
      html += '<div class="widget-col widget-col-' + i + '"></div>';
    }
    $('.widgets-js').append(html);
  })();

	var packWidgets = function() {
		var columnTemp = 0;
    columns = 1 + (windowWidth > mediaQueryColumn);

		for (var i=0; i < widgetsCount; i++) {
			var $self = widgets.filter('[data-order='+i+']');

			if ($self.css('display') != 'none') {
				$self.appendTo('.widget-col-'+columnTemp);
				columnTemp == columns ? columnTemp = 0 : columnTemp++;
			}
		}
	};

	$(window).resize(function(){
		windowWidth = window.innerWidth;
		packWidgets();
	});
	$(window).resize();

	$('.widget-header').on('click', '.widget-close', function(event){
		event.preventDefault();

		var $self = $(this);

		$self.closest('.widget').hide();
		packWidgets();
	});

	$('.widgetsReload').on('click', function(event){
		event.preventDefault();

		widgets.show();
		packWidgets();
	});


  $(".widget-col").sortable({
    connectWith: ".widget-col",
    handle: ".widget-move",
    revert: "invalid",
    stop: function(event, ui) {
      var item = ui.item;
      var parent = item.closest(".widget-col");
      var orderOld = item.data("order");
      var order = parent.index() + (item.index() * (columns + 1));

      if (orderOld < order) {
        for (var i = orderOld, $self; i < widgetsCount; i++) {
          $self = widgets.filter('[data-order='+(i+1)+']');
          $self.attr("data-order", i);
        }
        for (var i = widgetsCount, $self; i >= order; i--) {
          $self = widgets.filter('[data-order='+i+']');
          $self.attr("data-order", $self.data("order") + 1);
        }
        item.attr("data-order",order);
      }

      packWidgets();
    }
  });

});
