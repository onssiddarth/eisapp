
var quoteURL = "https://quotes.rest/qod.json?category=inspire";
var jokeURL = "https://quotes.rest/qod.json?category=funny";
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&appid=500ef551d7a3ac2e64edfe842b5b5b47&units=metric";
var newsURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ab77f5a4b3a4b8d84a514670a69d286";
var booksURL = "https://api.itbook.store/1.0/new";
var musicURL = "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";


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
						// $('#quote_img').attr('src',data.contents.quotes[0].background);
            $('#quote_img').attr('src','img\\quote-bck2.png');
						$('.quoteAuthor').append(data.contents.quotes[0].author);
						$('#quoteLink').attr('href',data.contents.quotes[0].permalink);


						 // localStorage.setItem("quote_img", data.contents.quotes[0].background);
						 localStorage.setItem("quoteAuthor", data.contents.quotes[0].author);
						 localStorage.setItem("quoteLink", data.contents.quotes[0].permalink);
	        },
	        error: function (jqXHR) {
						console.log('Quote ERROR');
	            console.log(jqXHR);
              var quotestored = localStorage.getItem("quote");
              var quoteauthorstored = localStorage.getItem("quoteAuthor");
              var quotelinkstored = localStorage.getItem("quoteLink");
              $('#quote_img').attr('src','img\\quote-bck2.png');
              if (quotestored != null && quotestored != '') {
                $('.quote').append(quotestored);
              }
              else {
                $('.quote').append('If you dream it, you can do it.');
              }
              if (quotelinkstored != null && quotelinkstored != '') {
                $('#quoteLink').append(quotelinkstored);
              }
              else {
                $('#quoteLink').append('https://theysaidso.com/');
              }
              if (quoteauthorstored != null && quoteauthorstored != '') {
                $('.quoteAuthor').append(quoteauthorstored);
              }
              else {
                $('.quoteAuthor').append('Walt Disney');
              }
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
						    // $('#joke_img').attr('src',data.contents.quotes[0].background);
                $('#jokeLink').attr('href',data.contents.quotes[0].permalink);
						    $('#joke_img').attr('src','img\\laugh1.jpg');

					       localStorage.setItem("joke", data.contents.quotes[0].quote);
								 localStorage.setItem("jokeAuthor", data.contents.quotes[0].author);
								 localStorage.setItem("jokeLink", data.contents.quotes[0].permalink);
								 localStorage.setItem("joke_img", data.contents.quotes[0].background);
			        },
			        error: function (jqXHR) {
								console.log('Joke ERROR');
			            console.log(jqXHR);

                  var quotestored = localStorage.getItem("joke");
                  var quoteauthorstored = localStorage.getItem("jokeAuthor");
                  var quotelinkstored = localStorage.getItem("jokeLink");
                  $('#joke_img').attr('src','img\\laugh1.jpg');
                  if (quotestored != null && quotestored != '') {
                    $('.joke').append(quotestored);
                  }
                  else {
                    $('.joke').append('I love my six pack so much, I protect is with a layer of fat.');
                  }
                  if (quotelinkstored != null && quotelinkstored != '') {
                    $('#jokeLink').append(quotelinkstored);
                  }
                  else {
                    $('#jokeLink').append('https://theysaidso.com/');
                  }
                  if (quoteauthorstored != null && quoteauthorstored != '') {
                    $('.jokeAuthor').append(quoteauthorstored);
                  }
                  else {
                    $('.jokeAuthor').append('Anonymous');
                  }
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
                  $.ajax({
    											dataType: "json",
    											url: newsURL,
    											success: function (data) {

    												console.log(data);
    												setupNewsData(data);


    											},
    											error: function (jqXHR) {
    												console.log('Music ERROR');
    													console.log(jqXHR);
    											}
    									});
                      $.ajax({
        											dataType: "json",
        											url: booksURL,
        											success: function (data) {

        												console.log(data);
        												setupbookData(data);


        											},
        											error: function (jqXHR) {
        												console.log('Books ERROR');
        													console.log(jqXHR);
        											}
        									});
     // setupNewsData();
		 //setupMusicData();
		 // setupbookData();

		 $("#create").click(function() {
		   $(this).before("<textarea></textarea>");
		 });

 });

function setupNewsData(newsdata){
    var response = '',
    indicator = '';
    var imageURL = '';
    var length = newsdata.articles.length;
    console.log('length');
    console.log(length);
        if(length > 0){
            for (var i = 0; i < length; i++) {
              imageURL = newsdata.articles[i].urlToImage;
              if (imageURL == null || imageURL == '') {
                imageURL = 'img\\default_news.jpg';
              }
                if(i==0){
                    response += '<div class="item active"><a href="'+newsdata.articles[i].url+'" target="_blank"><img src="' + imageURL + '"><div class="carousel-caption"><h3>' +  newsdata.articles[i].title + '</h3></div></a></div>';
                }
                else{
                    response += '<div class="item"><a href="'+newsdata.articles[i].url+'" target="_blank"><img src="' + imageURL + '"><div class="carousel-caption"><h3>' +  newsdata.articles[i].title + '</h3></div></a></div>';
                }

                indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
            }
            console.log('news response');
            console.log(response);
            $('.news-section').html(response);
            $('.news-indicators').html(indicator);

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

				function setupbookData(bookData){
						createBookArrays();
						var htmlResponse='';
            var imageURL = '';

						for(var i=0;i<bookData.length;i++){

							if(i==0){
									htmlResponse+='<div class="item active"><ul class="thumbnails">'
							}
							else{
									htmlResponse+='<div class="item"><ul class="thumbnails">'
							}
							 for(var j=0;j<bookData[i].length;j++){
                 imageURL = bookData[i][j].image;
                 if (imageURL == null || imageURL == '') {
                   imageURL = 'img\\noimage.jpg';
                 }
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
