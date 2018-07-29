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


$(document).ready(function() {
     setupData();
 });

function setupData(){
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
            $('.carousel-inner').html(response);
            $('.carousel-indicators').html(indicator);
           
        }
    };