var strdust = 990;
var home = 0;

var timer = $('#strdust');

function timeIt () {
	if(strdust == 999) {
		strdust = 0; 
	} else {
		strdust++;
		timer.html(strdust);
	}
}
setInterval(timeIt, 1000);


function repeat(){
	$('.rocket').css('margin-left','14%');
	$('.rocket').animate({
		left: "4%"
	}, 30000, function(){
		$('.rocket').repeat();
	}
	);	
}
						 
setInterval(repeat, 1000);

/*
$('#home').on('click', function(){
	if (home != 0) {
		$('#bottle').slideToggle(200);
		$('.map').slideToggle(200);
		home = 0;
	}
});

$('#mapButton').on('click', function(){
	home++;
	$('.map').slideToggle(200);
	$('#bottle').slideToggle(200);
});
*/

$(this).on('click', function(){
	if (this == $('#home')) {
		$('#bottle').slideToggle(200);
		$('.map').slideToggle(200);
	} else if (this == $('#mapButton')){
		$('#bottle').slideToggle(200);
		$('.map').slideToggle(200);
	} 

}