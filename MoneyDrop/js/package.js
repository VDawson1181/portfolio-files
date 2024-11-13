//Money Drop V1.2.1 - By VD & NT
var pigCaptured = 0, timerCount = 10, hpp=1, timedOut = 1000, aniDuration = 5000, contestPlayed=false, timeUp=false;
$(document).ready(function(){							
	// fInitContestChoice(".contestArea");		
	
	$(".contestArea .gameHdrArea, .contestArea .playArea, .contestArea .piggyScoreBoard").clone().appendTo( ".savingsArea" );
	$(".savingsArea .instructionArea p.instTopLine").replaceWith("<p class='instTopLine'><span class='replay replay_fname'>Johnnyextraman</span>,</p>");
	$(".savingsArea .instructionArea p.instBotLine").replaceWith("<p class='instBotLine'>Incredible savings have been approved!</p>");
	$(".savingsArea .instructionArea div h1").replaceWith("<h1>How it works:</h1>");
	$(".savingsArea .instructionArea div ul li.howToPlayFirst").replaceWith("<li class='howToPlayFirst'>1) Have fun capturing<br/> these PCH crates: <p class='pigEx aniTiming piggy_rock'></p> </li>");
	$(".savingsArea .instructionArea div ul li.howToPlaySecond").replaceWith("<li class='howToPlaySecond'>2) Play now to reveal the savings approved for this notice! </li>");	
	$(".savingsArea .instructionArea div ul li.howToPlayThird").css({"display":"none"});

	//Initial play..				
	LoadTheGame(".contestArea");

	$("#copyright").html(new Date().getFullYear());		
});

function LoadTheGame(gameClass){	
	$(gameClass+" .playArea .instructionArea").fadeIn("fast", function(){
		$(gameClass+" .playArea .instructionArea div.startButton").css({"cursor":"pointer"}).click(function(){
			$(gameClass+" .playArea .instructionArea").fadeOut("fast", function(){
				$(gameClass+" .preStartScreen .planeFlyer").css({"top":"-20px","left":"810px"});
				var startCountdown = 3;
				preStartCountdown(gameClass,startCountdown);
			});
		});				
	});		
}


function preStartCountdown(gameClass,startCountdown){
	$(gameClass+" .preStartScreen .planePreStart").replaceWith("<p class='planePreStart'>"+(startCountdown--)+"</span>");
	setTimeout(function(){		
		if(startCountdown>0) preStartCountdown(gameClass,startCountdown);
		else{ 
			$(gameClass+" .preStartScreen .planePreStart").fadeOut("fast",function(){
				//Make glorious pig clones...	
				createAclone(gameClass);			
				//Start the countdown...
				countdown(gameClass, timerCount);
			});
		}
	},1000);
}

var counterTimeout;
function countdown(gameClass,timerCount){
	if (typeof counterTimeout != 'undefined') window.clearTimeout(counterTimeout);
	//console.log(timerCount);
	$(gameClass+" .piggyScoreBoard p.piggyTime span.timer").replaceWith("<span class='timer'>"+timerCount+"</span>");
	
	counterTimeout = window.setTimeout(function(){
		timerCount=timerCount-1;
		if(timerCount<0){
			timeUp=true;
			finalTally = parseInt($(gameClass+" .piggyScoreBoard p.piggyCaught span.caught").html());	
			
			// var contestTrigger = PathContests.IsGroupActivated(1);
									
			//Replay...
			$(gameClass+" .playArea .postPlayArea div ul li span.playReset").css({"cursor":"pointer"}).click(function(){
				$(gameClass+" .playArea .postPlayArea").fadeOut("fast", function(){	
					$(gameClass+" .playArea .postPlayArea div ul li.howToPlayFirst").css({"display":"none"});						
					timeUp=false;
					hpp=1;
					timerCount=10;
					pigCaptured = 0;
					// PathContests.DeactivateGroup(1);
					// PathContests.Save(); // always save!*/	
					$(gameClass+" .piggyScoreBoard p.piggyCaught span.caught").replaceWith("<span class='caught'>0</span>");
					$(gameClass+" .playArea .postPlayArea div ul li span.sentenceStructure").replaceWith("<span class='sentenceStructure'>Continue</span>");
					
					$(gameClass+" .pigPen").replaceWith("<div class='pigPen'></div>");
					//Make glorious clones...	
					createAclone(gameClass);			
					//Start the countdown...
					countdown(gameClass, timerCount);
				});		
			});
			
			postPlayCreator(gameClass, finalTally);
			$(gameClass+" .playArea .postPlayArea").fadeIn("fast");

			return false;
		}else{
			countdown(gameClass, timerCount);			
		}
	}, 1000);	
}

var piggyInterval;
function createAclone(gameClass){
	if (typeof piggyInterval != 'undefined') window.clearTimeout(piggyInterval);

	$("<div class='piggyTrooper aniTiming'><p class='piggy aniTiming piggy_rock'></p></div>").appendTo(gameClass+" .playArea .pigPen");
		
	//Make clone descend upon the earth to destroy!!!	
	piggyInterval = window.setTimeout(function(){	
		initiateDrop(gameClass, hpp++);
	}, 200);
}

function initiateDrop(gameClass, hpp){			
	//Create and place clone at random horizontal drop point... The humans will never see them coming.
	var piggyWidth = $(".pigPen").width();
	// var piggyDropPoint = Math.floor((Math.random()*650)+1);	 
		
	
	if(window.innerWidth<=650){
		console.log("Smaller")
		var piggyDropPoint = Math.floor((Math.random()*300)+1);
		var piggyScaleValue = [0.9,0.3,0.6,0.5,0.7];
	}else{
		console.log("Larger")
		var piggyDropPoint = Math.floor((Math.random()*650)+1);
		var piggyScaleValue = [0.5,0.6,0.8,1,1.1];
	}
	var piggyScaleRandom = Math.floor((Math.random()*5)+1);		
	
	if( $(".no-csstransforms3d").length > 0){
		//Animations for browsers that don't support transforms...
		$(gameClass+" .playArea .pigPen div.piggyTrooper:nth-child("+hpp+")").css({"display":"block", "cursor":"crosshair","left": piggyDropPoint}).addClass("piggyDrop "+hpp).animate({top: "575px"}, 2500);
	}else{
		$(gameClass+" .playArea .pigPen div.piggyTrooper:nth-child("+hpp+")").css({"display":"block", "transform":"scale("+piggyScaleValue[piggyScaleRandom]+")", "cursor":"crosshair","left": piggyDropPoint}).addClass("piggyDrop "+hpp);	
	}
	
	if((!timeUp)&&(hpp<16)){
		//Make glorious pig clones...
		setTimeout(function(){			
			createAclone(gameClass);
		}, 250);
	}
	
	//When shot.. make pig clone disappear & add them to the tally of the slain.
	$(gameClass+" .playArea .pigPen div.piggyTrooper:nth-child("+hpp+")").click(function(){
		if( $(".no-csstransforms3d").length > 0){
			//Animations for browsers that don't support transforms...
			$(gameClass+" .playArea .pigPen div.piggyTrooper:nth-child("+hpp+")").css({"display":"none"});
		}else{
			$(this).fadeOut(0);
		}
		
		//console.log(pigCaptured++);
		pigCaptured++;
		$(gameClass+" .piggyScoreBoard p.piggyCaught span.caught").replaceWith("<span class='caught'>"+pigCaptured+"</span>");
	});
}

function cleanUp(hpp){
	//console.log(hpp);
	$(".playArea .pigPen div.piggyTrooper."+hpp).remove();	
}

var winCopyTop,	winTopCopy,	winAmount;
function postPlayCreator(gameClass, finalTally){
	
	switch(parseInt(finalTally)) {
		case 1:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";
			winAmount = "60,000";
			break;
		case 2:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "70,000";
			break;			
		case 3:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "80,000";
			break;			
		case 4:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "90,000";
			break;			
		case 5:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "100,000";
			break;			
		case 6:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "110,000";
			break;			
		case 7:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "120,000";
			break;			
		case 8:
			winTopCopy = "Pretty Good";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "130,000";
			break;
		case 9:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "140,000";
			break;			
		case 10:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "150,000";
			break;			
		case 11:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "160,000";
			break;			
		case 12:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "170,000";
			break;			
		case 13:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "180,000";
			break;			
		case 14:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "190,000";
			break;			
		case 15:
			winTopCopy = "Fantasic Play";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "200,000";
			break;			
		case 16:
			winTopCopy = "Best Score";
			winMidCopy = "You Captured <span class='bundleAmt'>"+finalTally+"</span> Bundles And Revealed:";				
			winAmount = "330,000";
			break;						
		default:			
			winTopCopy = "Not bad";
			winMidCopy = "You didn't capture any bundles, but you did reveal:";				
			winAmount = "50,000";
			break;			
		} 

	//post instruction copy changes...
	$(".contestArea .playArea .postPlayArea div p.instTopLine").replaceWith("<p class='instTopLine'>"+winTopCopy+", <span class='replay replay_fname'>Johnnyextraman</span>.</p>");
	$(".contestArea .playArea .postPlayArea div p.instMidLine").replaceWith("<p class='instMidLine'>"+winMidCopy+"</p>");
	$(".contestArea .playArea .postPlayArea span.prizeAmt").replaceWith("<span class='prizeAmt'>$"+winAmount+"</span>");	
	
	if(finalTally>5) $(".contestArea .playArea .postPlayArea div p.bonusGwyAmt span").replaceWith("<span class='replay replay_giveawayNumber_2_2'>3456</span>");	
		
	if(finalTally>0){
		$(".contestArea .playArea .postPlayArea div ul li.howToPlayFirst").css({"display":"none"});	
		$(".contestArea .playArea .postPlayArea div ul li span.sentenceStructure").replaceWith("<span class='sentenceStructure'>Continue</span>");				
		savingsCreator();
	}

	if(gameClass == ".savingsArea"){
		console.log(gameClass+" Game Done....")
		loadProducts();
	}
}

function postSavPlayCreator(scrollSwitcher, saveTally){	
	if(parseInt(saveTally)>0){
		winTopCopy = "Great Move";
		winMidCopy = "You captured <span class='bundleAmt'>"+saveTally+"</span> PCH delivery crates. Plus, you've revealed:";						
	}else{
		winTopCopy = "Nice Try";
		winMidCopy = "You played PCH Savings Drop and revealed:";				
	}

	//post instruction copy changes...
	$(".savingsArea .playArea .postPlayArea div p.instTopLine").replaceWith("<p class='instTopLine'>"+winTopCopy+", <span class='replay replay_fname'>Johnnyextraman</span>.</p>");
	$(".savingsArea .playArea .postPlayArea div p.instMidLine").replaceWith("<p class='instMidLine'>"+winMidCopy+"</p>");
	// fUpdatePersonalization();
	
	// pkgActivate(scrollSwitcher);
}

function savingsCreator(){
	/*Create savings game*/
	$(".contestArea .playArea .postPlayArea div.savingsButton").css({"cursor":"pointer"}).click(function(){	
		$(this).fadeOut("fast", function(){
			timeUp=false;
			hpp=1;
			timerCount=10;
			pigCaptured = 0;
			$(".savingsArea .piggyScoreBoard p.piggyCaught span.caught").replaceWith("<span class='caught'>0</span>");
			$(".savingsArea .playArea .postPlayArea div ul li span.sentenceStructure").replaceWith("<span class='sentenceStructure'>Continue</span>");
			
			//post instruction copy changes...
			$(".savingsArea .playArea .postPlayArea div p.instTopLine").replaceWith("<p class='instTopLine'>Nice Try, <span class='replay replay_fname'>Johnnyextraman</span>.</p>");
			$(".savingsArea .playArea .postPlayArea div p.instMidLine").replaceWith("<p class='instMidLine'>You Played PCH Savings Drop And Revealed:</p>");
			$(".savingsArea .playArea .postPlayArea div ul").replaceWith("<ul><li>Take advantage of these incredible savings!</li><li>Place an order today!</li></ul>");
			$(".savingsArea .playArea .postPlayArea p.lrgTxt").replaceWith("<p class='instBotLine lrgTxt'><span class='subTxt'>UP TO</span><span class='prizeAmt'>80% OFF</span></p>");	
			$(".savingsArea .playArea .postPlayArea p.smTxt").replaceWith("<p class='instBotLine smTxt'>Savings Approved Throughout!</p>");
			$(".savingsArea .playArea .postPlayArea div.savingsButton").css({"display":"none"});	  		
			// fUpdatePersonalization();	

			$(".savingsArea").slideDown("fast", function(){	
				$(".contestArea").fadeOut("fast", function(){
					// doTheScroll(".savingsArea",25,1000);		
					LoadTheGame(".savingsArea");
				});			
			});
		});
	});		
}

function loadProducts(){
    document.querySelector("#mpWrap").style.display = "block";
}

function doTheScroll(scrollVar,easeVar,timeVar) {
    if($.browser.safari || $.browser.chrome) bodyelem = $("body");
    else bodyelem = $("html,body");	 
    bodyelem.animate({ scrollTop: jQuery(scrollVar).offset().top-easeVar}, timeVar);	 
 	return false;
}
