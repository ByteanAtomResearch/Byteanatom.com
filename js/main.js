function signinCallback(authResult) {
  if (authResult['access_token']) {
    // Successfully authorized
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
    document.getElementById('infotext').setAttribute('style','display:none');
  } else if (authResult['error']) {
    // There was an error.
    // Possible error codes:
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    // console.log('There was an error: ' + authResult['error']);
    document.getElementById('infotext').setAttribute('style','display:inline');
  }
}

//To do: Take two more Glass-centric pictures
$(document).ready(function(){
						   
	$(window).load(function(){
    	$('.doc-loader').fadeOut('slow');
	});
		   
	$('.body_wrapper').bgStretcher({
		images: ['images/sample-1.jpg', 'images/sample-2.jpg', 'images/sample-3.jpg'],
		imageWidth: 1680, 
		imageHeight: 1260, 
		slideDirection: 'N',
		slideShowSpeed: 1500,
		transitionEffect: 'fade',
		sequenceMode: 'normal',
		buttonPrev: '#prev',
		buttonNext: '#next',
		pagination: '#nav',
		anchoring: 'left center',
		anchoringImg: 'left center'
	});
	displayHints();
	initialize();
	height_bottom();
});

//Disregard: no longer being used, we'll stick with gleening data from G+/FB instead
var displayHints = function()
{
    $('#subscriberEmail').attachHint('Enter your email to sign up');
};

$(window).resize(function() {
	height_bottom();
});
