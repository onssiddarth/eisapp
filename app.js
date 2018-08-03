$(document).ready(function () {
    $('.trigger').click(function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur');
        return false;
    });
});

function OnLinkedInFrameworkLoad() {  
        console.log('OnLinkedInFrameworkLoad');
        IN.Event.on(IN, "auth", OnLinkedInAuth);  
    }  
  
    function OnLinkedInAuth() {  
        console.log('OnLinkedInAuth');
        IN.API.Profile("me").result(ShowProfileData);  
    }  
  
    function ShowProfileData(profiles) {  
        console.log('ShowProfileData' + profiles);
        var member = profiles.values[0];  
        var id = member.id;  
        var firstName = member.firstName;  
        var lastName = member.lastName;  
        var photo = member.pictureUrl;  
        var headline = member.headline;  
        //use information captured above  
        var stringToBind = "<p>First Name: " + firstName + " <p/><p> Last Name: " + lastName + "<p/><p>User ID: " + id + " and Head Line Provided: " + headline + "<p/>"  
        document.getElementById('profiles').innerHTML = stringToBind;  
    }  

    // initialize and setup facebook js sdk
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '441306086335638',
          xfbml      : true,
          version    : 'v3.0'
        });
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                document.getElementById('status').innerHTML = 'We are connected.';
                document.getElementById('login').style.visibility = 'hidden';
            } else if (response.status === 'not_authorized') {
                document.getElementById('status').innerHTML = 'We are not logged in.'
            } else {
                document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
            }
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    // login with facebook with extra permissions
    function fblogin() {
        FB.login(function(response) {
            if (response.status === 'connected') {
                console.log('We are connected.');
            } else if (response.status === 'not_authorized') {
                console.log('We are not logged in.');
            } else {
                console.log('You are not logged into Facebook.');
            }
        }, {scope: 'email'});

        FB.api('/me', 
        {fields: "id,picture,email,first_name,link,name"}, 
        function(response) {
          console.log('API response', response);
          $("#fb-profile-picture").append('<img src="' + response.picture.data.url + '"> ');
          $("#name").append(response.name);
          $("#user-id").append(response.id);
        }
    }
    
    // getting basic user info
    function getInfo() {
        // FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
        //     document.getElementById('status').innerHTML = response.id;
        // });
        FB.api('/me', 
        {fields: "id,picture,email,first_name,link,name"}, 
        function(response) {
          console.log('API response', response);
          $("#fb-profile-picture").append('<img src="' + response.picture.data.url + '"> ');
          $("#name").append(response.name);
          $("#user-id").append(response.id);
        }
    );
    }


    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        $('.modal-wrapper').toggleClass('open');
        //$('.page-wrapper').toggleClass('blur');
        document.getElementById("namea").innerHTML = profile.getName();
        $("#imgid").attr("src", profile.getImageUrl());
    }
    function onFailure(error) {
        console.log(error);
    }
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }