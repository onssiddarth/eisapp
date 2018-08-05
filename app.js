// Global Variables
var username = '';
var profilepic = '';

// $(document).ready(̥function () {
//     $('.trigger').click(function () {
//         $('.modal-wrapper').toggleClass('open');
//         $('.page-wrapper').toggleClass('blur');
//         return false;
//     });
// });



    // // initialize and setup facebook js sdk
    // window.fbAsyncInit = function() {
    //     FB.init({
    //       appId      : '441306086335638',
    //       xfbml      : true,
    //       version    : 'v3.0'
    //     });
    //     FB.getLoginStatus(function(response) {
    //         if (response.status === 'connected') {
    //             document.getElementById('status').innerHTML = 'We are connected.';
    //             document.getElementById('login').style.visibility = 'hidden';
    //         } else if (response.status === 'not_authorized') {
    //             document.getElementById('status').innerHTML = 'We are not logged in.'
    //         } else {
    //             document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
    //         }
    //     });
    // };
    // (function(d, s, id){
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) {return;}
    //     js = d.createElement(s); js.id = id;
    //     js.src = "//connect.facebook.net/en_US/sdk.js";
    //     fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));

    // LOGIN WITH FACEBOOK WITH EXTRA PERMISSIONS
    // function fblogin() {
    //   console.log('inside fblogin');
    //     fb.login(function(response) {
    //         console.log('inside fblogin response.');
    //         if (response.status === 'connected') {
    //             console.log('we are connected.');
    //         } else if (response.status === 'not_authorized') {
    //             console.log('we are not logged in.');
    //         } else {
    //             console.log('you are not logged into facebook.');
    //         }
    //     }, {scope: 'email'});
    //
    //     fb.api('/me',
    //     {fields: "id,picture,email,first_name,link,name"},
    //     function(response) {
    //       console.log('api response', response);
    //       $("#fb-profile-picture").append('<img src="' + response.picture.data.url + '"> ');
    //       $("#name").append(response.name);
    //       $("#user-id").append(response.id);
    //     }
    // }

    // // getting basic user info
    // function getInfo() {
    //     // FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
    //     //     document.getElementById('status').innerHTML = response.id;
    //     // });
    //     FB.api('/me',
    //     {fields: "id,picture,email,first_name,link,name"},
    //     function(response) {
    //       console.log('API response', response);
    //       $("#fb-profile-picture").append('<img src="' + response.picture.data.url + '"> ');
    //       $("#name").append(response.name);
    //       $("#user-id").append(response.id);
    //     }
    // );
    // }


    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        username = profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        profilepic = profile.getImageUrl();
        console.log('Email: ' + profile.getEmail());
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //$('.modal-wrapper').toggleClass('open');
        //$('.page-wrapper').toggleClass('blur');
        //document.getElementById("namea").innerHTML = profile.getName();
        //$("#imgid").attr("src", profile.getImageUrl());
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
