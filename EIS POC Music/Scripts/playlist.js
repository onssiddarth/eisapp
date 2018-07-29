var playlistJSON = {
    "tracks": [
        {
            "name": "In My Feelings",
            "artist": "Drake",
            "previewURL":"http://listen.vo.llnwd.net/g3/9/8/1/0/7/1422970189.mp3"
        },
        {
            "name": "Back Broke",
            "artist": "Q-Money",
            "previewURL":"http://listen.vo.llnwd.net/g3/3/6/1/3/3/1364233163.mp3"
        },
        {
            "name": "I Like It",
            "artist": "Cardi B",
            "previewURL":"http://listen.vo.llnwd.net/g3/4/7/5/9/1/1402419574.mp3"
        },
        {
            "name": "In My Feelings",
            "artist": "Drake",
            "previewURL":"http://listen.vo.llnwd.net/g3/9/8/1/0/7/1422970189.mp3"
        },
        {
            "name": "Back Broke",
            "artist": "Q-Money",
            "previewURL":"http://listen.vo.llnwd.net/g3/3/6/1/3/3/1364233163.mp3"
        },
        {
            "name": "I Like It",
            "artist": "Cardi B",
            "previewURL":"http://listen.vo.llnwd.net/g3/4/7/5/9/1/1402419574.mp3"
        }
       
    ]
}


$(document).ready(function() {
     setupData();
 });

function setupData(){
    var response = '',
    indicator = '';
    var responseTemplate="";
    responseTemplate+="<table class=\"table table-striped\">";
    responseTemplate+="<thead><th><b>Track</b></th><th><b>Atrist</b></th><th><b>Play</b></th></thead>";

    var dataTemplate="<tr><td>##TRACKNAME##</td><td>##ARTISTNAME##</td><td><a href=\"##PREVIEWURL##\" target=\"_blank\"><img class=\"dashboard-music-play\" src=\"Images\\musicplay.png\"/></a></td></tr>";
    var musicList="";
    var length = playlistJSON.tracks.length;
        if(length > 0){
            for (var i = 0; i < length; i++) {
                musicList+=dataTemplate.replace("##TRACKNAME##",playlistJSON.tracks[i].name)
                                        .replace("##ARTISTNAME##",playlistJSON.tracks[i].artist)
                                        .replace("##PREVIEWURL##",playlistJSON.tracks[i].previewURL);

            }
            responseTemplate+="<tbody>"+musicList+"</tbody></table>";
            $(".table-responsive").html(responseTemplate);

        }
    };