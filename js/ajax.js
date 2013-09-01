var subscribe = function()
{
	var inputEmail = $('#subscriberEmail').val();
    var isValid = true;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(inputEmail)){
        isValid = false;
        $("#display").show(function() {
			$(this).text("Enter valid email!");
		});
		setTimeout("$('#display').empty(); ", 6000);
    }
    if(isValid){
        var params = {
            'action'    : 'Subscribe',
            'email'     : inputEmail
        };
        $.ajax({
            type: "POST",
            url: "php/mainHandler.php",
            data: params,
            success: function(response){
            	$('#subscriberEmail').val('');
				$("#display").show(function() {
					var responseObj = jQuery.parseJSON(response);
					if(responseObj.ResponseData) {
						$(this).html(responseObj.ResponseData);
					}
				});
				setTimeout("$('#display').empty(); ", 6000); 
				ResetInput();   
				displayHints();
            }
        });
    }
};