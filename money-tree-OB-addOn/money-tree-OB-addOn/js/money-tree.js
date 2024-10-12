/* Money Tree Device - balance v1.2 */
$(document).ready(function(){
	if(!$("body.eo").length){//not EO? read data, change display, bind clicks as needed
		var deviceIdentifier = "#money-tree-OB-addOn",
		addOnDevice = deviceSettings.GetDeviceByElementId(deviceIdentifier);	
		addOnDevice.eoClass = "addOnDevice MT_Label_Blank"; //set classname for EO form label	
		deviceSettings.Save(); // always SAVE
		
		//This code is going to attach the src of the devicePixel class to a variable, and then leave just the path...		
		var deviceSrcMain = AddOnGetUrl($('.devicePixel').attr("src")).replace('images/devicePixel.gif','');
		
		//Money Tree Click
		$(deviceIdentifier+" .mt-tree-element").css({"cursor":"pointer"}).click(function(){	
			$(this).css({"cursor":"default"}).unbind( "click" );
			$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching").fadeOut("fast", function(){
				$(deviceIdentifier+" .mt-sign-element").removeClass("raiseTheSign");
				$(deviceIdentifier+", "+deviceIdentifier+" .mt-tree-element").removeClass("mt-wobble");
				setTimeout(function(){
					$(deviceIdentifier+", "+deviceIdentifier+" .mt-tree-element").addClass("mt-wobble");
					 deviceActivate(deviceIdentifier,addOnDevice);							
				}, 500);									
			});
		});	
		
		//Savings Tree Click		
		$(deviceIdentifier+" .mt-sav-tree-element").css({"cursor":"pointer"}).click(function(){	
			$(this).css({"cursor":"default"}).unbind( "click" );
			$(deviceIdentifier+" .mt-sav-sign-element").removeClass("raiseTheSign");
			$(deviceIdentifier+", "+deviceIdentifier+" .mt-sav-tree-element").removeClass("mt-wobble");
			setTimeout(function(){
				$(deviceIdentifier+", "+deviceIdentifier+" .mt-sav-tree-element").addClass("mt-wobble");
				setNameVal("savPlayed","MT","1");
				 savingsAnimate(deviceIdentifier);							
			}, 500);									
		}); 		
		
		if($(".spectrumLightbox_content2 "+deviceIdentifier).length){
			$(deviceIdentifier+" .pkg_closeButton").css({"display":"block","cursor":"pointer"}).click(function(){
				lightboxHide();				
			});						
		};
				
		var savingsCookie = getNameVal("savPlayed","MT");		
		
		/*if (addOnDevice.isActionTaken) {
			if(!savingsCookie){
				//Contest has been played already...		
				$(deviceIdentifier+" .mt-tree-element").css({"cursor":"default"}).unbind( "click" );	
				var savedContestChoice = addOnDevice.conCopy;							
				$(deviceIdentifier+" .mt-result-element span.winAmt").replaceWith("<span class='winAmt'>$"+savedContestChoice+"</span>");
				$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching").replaceWith("<p class='mt-sign-coaching pzAmount'>$"+savedContestChoice+"</p>");							
				$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching, "+deviceIdentifier+" .mt-dir-msg").css({"display":"none"});
				$(deviceIdentifier+" .mt-result-element").fadeIn("slow").css({"cursor":"pointer"}).click(function(){
					startSaveTree(deviceIdentifier);
				});	
			}else{
				//Savings & Contest has been played already...	
				$(deviceIdentifier+" .mt-sav-tree-element").css({"cursor":"default"}).unbind( "click" );
				$(deviceIdentifier+" .mt-result-element").css({"display":"block"}).addClass("fadeOutLeftBig");
				$(deviceIdentifier+" .mt-hdr-element p.mt-hdr-game-name, "+deviceIdentifier+" .mt-hdr-element .mt-hdr-gwy").css({"display":"none"});
				$(deviceIdentifier+" .playArea li.mtMoney, "+deviceIdentifier+" .mt-tree-element, "+deviceIdentifier+" ul.playArea").css({"display":"none"});				
				$(deviceIdentifier+" .mt-sign-element").css({"bottom":"-350px"});
				$(deviceIdentifier+" .mt-hdr-element p.mt-hdr-savings-name, "+deviceIdentifier+" .mt-sav-tree-element, "+deviceIdentifier+" .mt-sav-result-element").css({"display":"block"});							
				savingsAnimate(deviceIdentifier);
				deviceFinished(deviceIdentifier);
			}
			
		} else {*/
			//NO action taken yet...			
			setTimeout(function(){
				$(deviceIdentifier+" .mt-sign-element").delay(1200).addClass("raiseTheSign");
				setTimeout(function(){						
					$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching").fadeIn("slow", function(){});
				}, 1500);
			}, 1500);
		//}		
	}
});


//EXample of a fuinction that updates the device & device-cookie so that "state" is remembered.
function deviceActivate(deviceIdentifier,addOnDevice) {
	var deviceRandom=Math.floor(Math.random()*10)+1;
	// 40/20/20/10/10 split
	
	switch(parseInt(deviceRandom)) {
		case 1:
		case 2:		
		case 3:		
		case 4:
			//40% 550,000.00
			var devConChoice = 0;
			var devConCopy = "550,000.00";
			break;			
		case 5:		
		case 6:
			//20% 455,000.00
			var devConChoice = 1;
			var devConCopy = "455,000.00";			
			break;			
		case 7:			
		case 8:
			//20% 330,000.00
			var devConChoice = 2;
			var devConCopy = "330,000.00";			
			break;
		case 9:
			//10% 245,000.00
			var devConChoice = 3;
			var devConCopy = "245,000.00";			
			break;			
		case 10:
			//10% 110,000.00
			var devConChoice = 4;
			var devConCopy = "110,000.00";			
			break;			
	}
	
	$(deviceIdentifier+" .mt-result-element span.winAmt").replaceWith("<span class='winAmt'>$"+devConCopy+"</span>");
	$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching").replaceWith("<p class='mt-sign-coaching pzAmount'>$"+devConCopy+"</p>");	
	
	//Activate Contest
	deviceSettings.ActvateContestByElementId(deviceIdentifier, deviceSettings.GetDeviceByElementId(deviceIdentifier).Contests[devConChoice].Tag);	
	//Saving my choices by extending the addOnDevice object 
	addOnDevice.conCopy = devConCopy; //Hold my contest choice....		
	addOnDevice.eoClass = "addOnDevice MT_Label_"+devConChoice; //set classname for EO form label
	addOnDevice.strRequiredMessage="Your contest stamp has not been transferred! Find your missing stamp within this Notice and transfer as directed to claim your prize eligibility!";	
	deviceSettings.Save();	
	
	deviceAnimate(deviceIdentifier);	
}


function deviceAnimate(deviceIdentifier){
	var moneyAmt = 1;
	for(;moneyAmt<=20;moneyAmt++){
		//Create and place clone at random horizontal drop point... The humans will never see them coming.
		var piggyDropPoint = Math.floor((Math.random()*630)+1);		
		var moneyDelay = parseFloat((Math.random()*3).toFixed(1));	
		$("<li class='mtMoney bill-"+moneyAmt+" aniTiming'><p class='mtBill aniTiming_1s money_rock'></p></li>").appendTo(deviceIdentifier+" .playArea");
		$(deviceIdentifier+" .playArea li.bill-"+moneyAmt).css({"left": piggyDropPoint}).addClass("piggyDrop");
		$(deviceIdentifier+" .mt-dir-msg").removeClass("bounceInDown").addClass("bounceOutUp");	
		setTimeout(function(){			
			$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching").fadeIn("fast");
			$(deviceIdentifier+" .playArea li p.mtBill").removeClass("money_rock");
			setTimeout(function(){			
				$(deviceIdentifier+" .mt-sign-element p.mt-sign-coaching").fadeOut("fast",function(){										
					$(deviceIdentifier+" .mt-result-element").fadeIn("slow").css({"cursor":"pointer"}).click(function(){
						startSaveTree(deviceIdentifier);
					});								
				});
			},3500);
		},3500);
	}	
}

function savingsAnimate(deviceIdentifier){
	var savAmt = 1;
	for(;savAmt<=5;savAmt++){
		//Create and place clone at random horizontal drop point... The humans will never see them coming.
		var piggyDropPoint = Math.floor((Math.random()*630)+1);		
		var moneyDelay = parseFloat((Math.random()*3).toFixed(1));	
		$("<li class='mtLeaf leaf-"+savAmt+" aniTiming'><p class='mtLeaf aniTiming_1s money_rock'></p></li>").appendTo(deviceIdentifier+" .sav-playArea");
						
		if(savAmt==2){
			$("<li class='mtBoot aniTiming'><p class='mtBoot aniTiming_1s'></p></li>").appendTo(deviceIdentifier+" .sav-playArea");			
			$(deviceIdentifier+" .sav-playArea li.mtBoot").addClass("bootDrop");			
		}
		if(savAmt==4){
			$("<li class='mtGift aniTiming'><p class='mtGift aniTiming_1s'></p></li>").appendTo(deviceIdentifier+" .sav-playArea");	
			$(deviceIdentifier+" .sav-playArea li.mtGift").addClass("giftDrop");
		}		
		
		$(deviceIdentifier+" .sav-playArea li.leaf-"+savAmt).css({"left": piggyDropPoint}).addClass("piggyDrop");
		setTimeout(function(){			
			$(deviceIdentifier+" .sav-playArea li p.mtLeaf").removeClass("money_rock");
			$(deviceIdentifier+" .mt-sav-result-element").fadeIn("slow");	
			deviceFinished(deviceIdentifier);					
		},2500);
	}	
}

function startSaveTree(deviceIdentifier){
		$(deviceIdentifier+" .mt-hdr-element p.mt-hdr-game-name, "+deviceIdentifier+" .mt-hdr-element .mt-hdr-gwy").fadeOut("fast");
		$(deviceIdentifier+" .mt-tree-element").removeClass("mt-wobble").addClass("fadeOutLeftBig");
		$(deviceIdentifier+" .playArea li.mtMoney, "+deviceIdentifier+" .mt-result-element, "+deviceIdentifier+" ul.playArea").addClass("fadeOutLeftBig");

		$(".no-cssanimations "+deviceIdentifier+" .mt-tree-element, .no-cssanimations "+deviceIdentifier+" .playArea li.mtMoney, .no-cssanimations "+deviceIdentifier+" .mt-result-element, .no-cssanimations "+deviceIdentifier+" ul.playArea").fadeOut("fast");
		$(".no-cssanimations "+deviceIdentifier+" .mt-sav-result-element").css({"top":"271px"});
		
		$(deviceIdentifier+" .mt-sign-element").css({"bottom":"-350px"});		
		$(deviceIdentifier+" .mt-hdr-element p.mt-hdr-savings-name, "+deviceIdentifier+" .mt-sav-tree-element").css({"display":"block"}).addClass("fadeInRightBig");				
		$(deviceIdentifier+" .mt-sav-sign-element").delay(1200).addClass("raiseTheSign");
		setTimeout(function(){						
			$(deviceIdentifier+" .mt-sav-sign-element p.mt-sign-coaching").fadeIn("slow", function(){});
		}, 1500);	
}

//Reveal lightbox / Midpage / Bonus Template continue button after you play
function deviceFinished(deviceId){	
	if($("body.midpage").length) $("#midpageFooter p").show("slow");
				
	if($(".spectrumLightbox_content2 "+deviceId).length){
		$(".mt-outer-stuff .pkg_closeButton").css({"display":"block"});						
	};
	
	isDeviceInLightbox(".mt-outer-stuff");
	
	if($("#bp-btnWrap").length){
		setTimeout(function(){
			showProducts();
		}, 2000);
	}
	
	return false;
}

function lightboxHide(){
	onLoadLightbox_Hide();
	return false;	
}	

function AddOnGetUrl(input)
{
 // remove quotes and wrapping url()
 return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
}