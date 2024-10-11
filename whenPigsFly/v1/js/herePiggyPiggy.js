//Piggy Demo
var pigCaptured = 0, cloneCount = 17, timerCount = 10;
$(document).ready(function(){	
	$("#playArea #pigPen p.piggy").addClass("piggy_rock"); //Make Piggies sway back & forth...
	//Make glorious pig clones...	
	for(var pureClones=1; pureClones<=cloneCount; pureClones++){		
		//$( "#playArea #pigPen div.piggyTrooper:nth-child(1)" ).css({"-webkit-animation-delay":pureClones+"s","-moz-animation-delay":pureClones+"s","-ms-animation-delay":pureClones+"s","-o-animation-delay":pureClones+"s","animation-delay":pureClones+"s"}).clone().appendTo("#playArea #pigPen");
		$( "#playArea #pigPen div.piggyTrooper:nth-child(1)").clone().appendTo("#playArea #pigPen");
	}
		
	//Depending on how many glorious clones there are... make them descend upon the earth to destroy!!!		
	var piggies = $("#pigPen").children().length;
	for(var hpp=1; hpp<=piggies; hpp++){		
		initDropPoint(hpp);
	}
	
	//Start the countdown...
	countdown(timerCount);
	/*for(var timerCount=10; timerCount>=0; timerCount--){
			
	}*/
	
	//When shot.. make pig clone disappear & add them to the tally of the slain.
	$("#playArea #pigPen div.piggyTrooper").click(function(){
		$(this).fadeOut(50);
		//console.log(pigCaptured++);
		pigCaptured++;
		$("#subWrapper h1 span.caught").replaceWith("<span class='caught'>"+pigCaptured+"</span>");
	});
	
});


var timedOut = 1000, aniDuration = 3500;
function initDropPoint(hpp){
		var piggyDropPoint = Math.floor((Math.random()*850)+1);	 //Create a random horizontal drop point... That way the humans won't see them coming.
		//$("#playArea #pigPen div.piggyTrooper:nth-child("+hpp+")").css({"cursor":"crosshair","top":"520px","left": piggyDropPoint}).click(function(){
		//Add some style to the clone, and then drop it...			
		$("#playArea #pigPen div.piggyTrooper:nth-child("+hpp+")").css({"display":"block","cursor":"crosshair","left": piggyDropPoint}).addClass("piggyDrop");	
		
		/*Drop time calc: Animation takes 3.5 seconds to complete... multiply the animation duration (give or take .5 seconds) 
		by the number of the current clone, and then add the animation duration to calculate the drop time... after timing out for that period, remove the 
		drop class, timeout by another second, and then inititate another drop.*/
		setTimeout(function(){
			$("#playArea #pigPen div.piggyTrooper:nth-child("+hpp+")").css({"display":"block"}).removeClass("piggyDrop");
			setTimeout(function(){initDropPoint(hpp)}, timedOut);
		}, ((timedOut*hpp)+aniDuration));
}

function countdown(timerCount){
	$("#playArea h1").replaceWith("<h1>"+timerCount+"</h1>");
	setTimeout(function(){
		timerCount=timerCount-1;
		if(timerCount<0){
			$("#playArea .timedOverlay").fadeIn("slow");
			//$("#playArea h1").replaceWith("<h1>Game Over</h1>");
			return false;
		}else{
			countdown(timerCount);			
		}
	}, 1000);	
}




