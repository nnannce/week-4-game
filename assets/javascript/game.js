
var randomResult;
var loss = 0;
var won = 0;
var previous= 0;


var resetStart = function() {

$(".crystals").empty();

var images = [
	'assets/images/amethyst.jpg',
	'assets/images/diamond.jpg',
	'assets/images/sapphire.jpg',
	'assets/images/topaz.jpg',
]

randomResult = Math.floor(Math.random() * 99) + 20; 

$("#result").html('--> ' + randomResult);

for(var i=0; i<4; i++){

	var random = Math.floor(Math.random()*11) + 1;
	

	var crystal = $("<div>");
		crystal.attr({
			"class":'crystal',
			"data-random": random
		});

	crystal.css({
		"background-image":"url('" + images[i]+ "')",
		"background-size":"cover"
	});

		

	$(".crystals").append(crystal);
		
}

$("#previous").html("Total Score:" + previous);}

resetStart();



$(document).on('click', ".crystal", function() {

	var num = parseInt($(this).attr('data-random'));
	previous += num;

$("#previous").html("Total Score:" + previous);

	console.log(previous);

	if(previous > randomResult){
		loss++;
		$("#loss").html("Losses:  " + loss);

		previous = 0;

		resetStart();

	}
	else if(previous === randomResult){
		won++;
		$("#win").html("Wins:  " + won);
		previous = 0;
		resetStart();
	}
});