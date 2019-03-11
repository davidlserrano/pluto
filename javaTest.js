var counter = 0;


var timer = $('#counter');

function timeIt () {
		counter++;
		timer.html(counter);
	}
setInterval(timeIt, 1000);




function repeat(){
	$('.rocket').css('margin-left','14%');
	$('.rocket').animate({
		left: "59%"
	}, 20000, function(){
		$('.rocket').repeat();
	
	}
	);	
}
						 
setInterval(repeat, 1000);
