
var randomResult;
var lost;
var won;
var previous= 0;


randomResult = Math.floor(Math.random() * 99) + 20; 

$("#result").html('Random Result: ' + randomResult);

for(var i=0; i<4; i++){

	var random = Math.floor(Math.random()*11) + 1;
	console.log(random);

	var crystal = $("<div>");
		crystal.attr({
			"class":'crystal',
			"data-random": random
		});

		crystal.html(random);

	$(".crystals").append(crystal);
		
}


$(".crystal").on('click', function() {

	var num = parseInt($(this).attr('data-random'));
	previous += num;

	console.log(previous);

	if(previous > randomResult){
		console.log("You lost!");

	}
	else if(previous === randomResult){
	console.log("You win!");
	}
});