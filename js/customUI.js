function height_bottom(){
	height_of_body = $(window).height();
	height_of_wrapper_main = $(".wrapper_main").outerHeight();
	width_of_body = $(window).width();
	
	if (width_of_body < 790) {
		height_of_bottom = (height_of_body - height_of_wrapper_main - 12);
	}
	else
	{
		height_of_bottom = (height_of_body - height_of_wrapper_main - 50);
	}
	$(".bottom").css({"min-height":height_of_bottom});
};

var initialize = function()
{
    var params = {
        'action'    : 'Initialize'
    };
    $.ajax({
        type: "POST",
        url: "php/mainHandler.php",
        data: params,
        success: function(response){
            if(response){
                var responseObj = jQuery.parseJSON(response);
                if(responseObj.ResponseData)
                {
                    if(responseObj.ResponseData.Start_Date)
                    {
                        setInterval(function(){
                            var countDownObj = calculateTimeDifference(responseObj.ResponseData.Start_Date);
                            if(countDownObj){
                                $('#days').text(countDownObj.Days);
                                $('#hours').text(countDownObj.Hours);
                                $('#minutes').text(countDownObj.Minutes);
                                $('#seconds').text(countDownObj.Seconds);
                            }
                        }, 1000);
                    }
                }
            }
        }
    });
};

var calculateTimeDifference = function(startDate) {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var days = 0;

    var currentDate = new Date();
    startDate = new Date(startDate);
    
    var timeCounter = startDate - currentDate;
    if (isNaN(timeCounter))
    {
        return NaN;
    }
    else
    {
        days = Math.floor(timeCounter / day);
        timeCounter = timeCounter % day;

        hours = Math.floor(timeCounter / hour);
        timeCounter = timeCounter % hour;

        minutes = Math.floor(timeCounter / minute);
        timeCounter = timeCounter % minute;
        
        seconds = Math.floor(timeCounter / second);
    }

    var tDiffObj = {
        "Days" : days,
        "Hours" : hours,
        "Minutes" : minutes,
        "Seconds" : seconds
    };

    return tDiffObj;
};
