
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

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}
function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);

        });
}

$(document).ready(function() {
	$('#logo').each(function() {
			animationHover(this, 'bounce');
		});
		$('.g-signin2').each(function() {
				animationHover(this, 'pulse');
			});
			$('#btnViewDashboard').each(function() {
					animationHover(this, 'pulse');
				});
				$('#imgreload').each(function() {
						animationHover(this, 'pulse');
					});
					$('#gotohome').each(function() {
							animationHover(this, 'pulse');
						});
						$('#profile-img').each(function() {
								animationHover(this, 'rotateIn');
							});

	$.ajax({
	        dataType: "json",
	        url: quoteURL,
	        success: function (data) {

						var quote=data.contents.quotes[0].quote;
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

								var quote=data.contents.quotes[0].quote;
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

										var temperature=data.main.temp;
										temperature = Math.round(temperature) + "&deg;C";
										var description=data.weather[0].description;
										var icon=data.weather[0].icon;
										icon = "http://openweathermap.org/img/w/" + icon + ".png"
										var mintemp=data.main.temp_min;
										var maxtemp=data.main.temp_max;
										mintemp="MIN: " + mintemp+ "&deg;C";
										maxtemp="MAX: " + maxtemp+ "&deg;C";
										var city=data.name;
										var country=data.sys.country;
										var modifiedcity = city + ", " + country;
										$('#temperature').html(temperature);
										$('#description').html(description);
										$('#mintemp').html(mintemp);
										$('#maxtemp').html(maxtemp);
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

    												setupNewsData(data);


    											},
    											error: function (jqXHR) {
    												console.log('News ERROR');
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

        if(length > 0){
            for (var i = 0; i < length; i++) {
              imageURL = newsdata.articles[i].urlToImage;
              console.log('news img url');
              console.log(imageURL);
              if (imageURL == null || imageURL == '') {
                imageURL = 'img\\default_news.jpg';
                console.log('inside null chk');
              }
                if(i==0){
                    response += '<div class="item active"><a href="'+newsdata.articles[i].url+'" target="_blank"><img src="' + imageURL + '"><div class="carousel-caption"><h3>' +  newsdata.articles[i].title + '</h3></div></a></div>';
                }
                else{
                    response += '<div class="item"><a href="'+newsdata.articles[i].url+'" target="_blank"><img src="' + imageURL + '"><div class="carousel-caption"><h3>' +  newsdata.articles[i].title + '</h3></div></a></div>';
                }

                indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
            }

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

				function setupbookData(mybookData){
						createBookArrays(mybookData);
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
									htmlResponse+='<img src="'+imageURL+'" alt=""></a></div>'
									htmlResponse+= '<div class="caption-box">'

									if (bookData[i][j].title.length > 35) {
										htmlResponse+= '<h5>'+bookData[i][j].title.substring(0,35)+'...'+'</h5>'
									}
									else {
										htmlResponse+= '<h5>'+bookData[i][j].title +'</h5>'
									}


									// htmlResponse+= '<h5>'+bookData[i][j].title.substring(0,20)+'...'+'</h5>'
									// htmlResponse+= '<p class="book-subtitle" title="'+bookData[i][j].subtitle+'">'+bookData[i][j].subtitle+'</p>'
                  htmlResponse+= '<div style="text-align: center;"><h2>'+bookData[i][j].price+'</h2></div>'
									htmlResponse+= '<div style="text-align: center;"><a class="btn btn-danger" role="button" href="'+bookData[i][j].url+'">View Details</a></div></div>'
									htmlResponse+= '</li>'
							 }
							 htmlResponse+= '</ul></div>'
						}

						$(".books-section").html(htmlResponse);
				}

				//This function is used to split array to size of 4 to display it in carousel
				function createBookArrays(myBooks){
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
