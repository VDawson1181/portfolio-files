//Piggy Demo
var pigCaptured = 0, timerCount = 10, hpp=1, timedOut = 1000, aniDuration = 5000, timeUp=false;
$(document).ready(function(){	
	startItUp();
});

function startItUp(){	
	$("#playArea #instructionArea div.startButton").css({"cursor":"pointer"}).click(function(){
		$("#playArea #instructionArea").fadeOut("fast", function(){
			//Make glorious pig clones...	
			createAclone();
		
			//Start the countdown...
			countdown(timerCount);
		});
	});		
}

function createAclone(){
	$("<div class='piggyTrooper aniTiming'><p class='piggy aniTiming piggy_rock'></p></div>").appendTo("#playArea #pigPen");
	//$("#playArea #pigPen p.piggy").addClass(""); //Make Piggies sway back & forth...	
		
	//Make clone descend upon the earth to destroy!!!		
	initiateDrop(hpp++);
}


function initiateDrop(hpp){			
	//Create and place clone at random horizontal drop point... The humans will never see them coming.
	var piggyDropPoint = Math.floor((Math.random()*850)+1);	 
	$("#playArea #pigPen div.piggyTrooper:nth-child("+hpp+")").css({"display":"block","cursor":"crosshair","left": piggyDropPoint}).addClass("piggyDrop "+hpp);	
	
	
	if(!timeUp){
		//Make glorious pig clones...	
		setTimeout(createAclone, 500);
	}else{ 
		setTimeout(function(){
			$("#playArea #pigPen div.piggyTrooper").remove();	
		}, aniDuration);
	}
	
	/*setTimeout(function(){
		//cleanUp(hpp);
		//$("#playArea #pigPen div.piggyTrooper."+hpp).remove();
		createAclone();
	}, 500);*/
	
				//When shot.. make pig clone disappear & add them to the tally of the slain.
	$("#playArea #pigPen div.piggyTrooper:nth-child("+hpp+")").click(function(){
		$(this).fadeOut(300);
		//console.log(pigCaptured++);
		pigCaptured++;
		$("#subWrapper h1 span.caught").replaceWith("<span class='caught'>"+pigCaptured+"</span>");
	});
}

function cleanUp(hpp){
	console.log(hpp);
	$("#playArea #pigPen div.piggyTrooper."+hpp).remove();	
}


function countdown(timerCount,startTheInvasion){
	$("#playArea h1").replaceWith("<h1>"+timerCount+"</h1>");
	setTimeout(function(){
		timerCount=timerCount-1;
		if(timerCount<0){
			$("#playArea .timedOverlay").fadeIn("slow");
			timeUp=true;
			$("#playArea .timedOverlay p span").css({"cursor":"pointer"}).click(function(){
				timeUp=false;
				$("#playArea .timedOverlay").fadeOut("slow", function(){
					$("#playArea #instructionArea").fadeIn("fast");
				});				
			});
			//$("#playArea h1").replaceWith("<h1>Game Over</h1>");
			return false;
		}else{
			countdown(timerCount);			
		}
	}, 1000);	
}




