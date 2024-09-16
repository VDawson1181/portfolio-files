//Win 1MM Tonight V13 - Pkg Desktop JS by VAD - 06/2020


var clockInterval;
var order = ['d','m','h','s'];


document.addEventListener('DOMContentLoaded', WIMMT_Init, false);	

function WIMMT_Init() {
    gsap.registerPlugin(SplitText,CSSRulePlugin,ScrollToPlugin);
    getUserSegmentCode();

    let WIMMT_PackageDiv = document.querySelector("#package-wrap"),
        WIMMT_ContestSec = document.querySelector("#package-contest_section"),
        WIMMT_bigStage = document.querySelector("#package-contest_section .stage--big"),
        WIMMT_bigStageStamp = document.querySelector("#package-contest_section .stage__main .stage__main__hdr"),
        WIMMT_bigStageULines = document.querySelector("#package-contest_section .stage__main .stage__main__underlines .underlines"),
        WIMMT_bigStageHighlights = document.querySelectorAll("#package-contest_section .stage__main .stage__main__handwriting h6 span"),
        WIMMT_ContestBtn = document.querySelector("#package-contest_section .stage__main__Btn"),
        WIMMT_OBSec = document.querySelector("#package-ob_section"),
        WIMMT_OBSec_Stage1 = document.querySelector("#package-ob_section #OB_DirMsg .ob__stage1"),
        WIMMT_OBSec_Stage1_Words = document.querySelector("#package-ob_section .ob__stage1 h6.Current"),
        WIMMT_OBSec_Stage2 = document.querySelector("#package-ob_section #OB_DirMsg .ob__stage2"),
        WIMMT_OBSec_Stage2_Mid = document.querySelector("#package-order_section #package-ob_section #OB_DirMsg .ob__stage2 .ob__stage2__mid"),
        WIMMT_OBSec_Stage2_Mid_List = document.querySelectorAll("#package-order_section #package-ob_section #OB_DirMsg .ob__stage2 .ob__stage2__mid .ob__stage2__mid__wrapper .Current ul li"),
        WIMMT_OrderSec = document.querySelector("#package-order_section"),
        WIMMT_ProdSec = document.querySelector("#package-pkg_section"),
        WIMMT_OBSec_Stage2_Top_UL,
        WIMMT_mobSelector = WIMMT_PackageDiv.classList.contains("mobilePkg");

        function updateSize() {
            // MIC_PackageDiv.textContent = window.innerWidth;

            if (window.innerWidth <= 600) {
                //Screen is 600px or below....
                // <div id="package-wrap" class="mobilePkg"></div>
                WIMMT_PackageDiv.classList.add("mobilePkg");
                // location.reload();
            }else{
                WIMMT_PackageDiv.classList.remove("mobilePkg");
                // location.reload();
                
            }
        }

        updateSize();
        window.addEventListener("resize", updateSize);

        if(!WIMMT_mobSelector){ 
            WIMMT_OBSec_Stage2_Top_UL = document.querySelector("#package-order_section #package-ob_section #OB_DirMsg .ob__stage2 .ob__stage2__top h6.Current u");
        }else{     
            WIMMT_OBSec_Stage2_Top_UL = document.querySelectorAll("#package-order_section #package-ob_section #OB_DirMsg .ob__stage2 .ob__stage2__top h6.Current .ob__S2__Underline");
        }

        // OBvisibility = spectrumContest[0][0].OBvisibility;     	
        // pkgCookie = _packageGetValue("WIMMT_Start");

    //Simple clock - Days/Hours/Minutes/Seconds...
	var now=new Date();//Current Server Date aka Today!
	var then = new Date().setHours(24,0,0,0); //TODAY @ 11:59:59PM!

	console.log("CLOCK NOW: " + now.getTime())
	console.log("CLOCK END: " + then)

	clockInterval = window.setInterval(function(){
		doTheClock(now, then)
	},999); // fire every ~second.
	//Simple clock end

    gsap.set(WIMMT_ContestSec,{display:"block"});

    var contest_BtnPulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.5, repeat: -1})
        contest_BtnPulse.to(WIMMT_ContestBtn,{duration:0.5,scale:1.1,yoyo:true,repeat:3})

    var OB_List_Pulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.5, repeat: -1})
        OB_List_Pulse.to(WIMMT_OBSec_Stage2_Top_UL,{duration:0.25,scale:1.1,yoyo:'true',repeat:1,ease:'none'})
        OB_List_Pulse.to(WIMMT_OBSec_Stage2_Mid_List,{duration:0.25,scale:1.1,stagger:{
            each:1,
            from: 'start',
            yoyo:true,
            ease:'none',
            repeat:3
        }  })


    var contestLoaderAni = new TimelineMax({paused:true, delay:0, yoyo: false, onComplete: function(){ contest_BtnPulse.play(); }});
        contestLoaderAni.add(function(){
            WIMMT_bigStage.classList.add("slide-in-elliptic-top-fwd"); 
        })
        contestLoaderAni.from(WIMMT_bigStageStamp,{duration:0.25,opacity:0,scale:'1.5',rotate:'-3deg',ease:"power3.in"},'+=1.5')
        contestLoaderAni.from(WIMMT_bigStageULines,{duration:0.5,width:'0px',ease:"none"})
        // contestLoaderAni.from(WIMMT_bigStageHighlights,{duration:0.5,width:'0px',ease:"none",stagger:0.5})    
        contestLoaderAni.to(WIMMT_bigStageHighlights,{duration:1,"backgroundPosition":"0 10px"})         
        .play();

        var WIMMT_OB_LetterAnimation = new SplitText(WIMMT_OBSec_Stage1_Words, {type:"words, chars"}), words = WIMMT_OB_LetterAnimation.words;

        var WIMMT_OB_Ani = new TimelineMax({paused: true, onStart:function(){ _packageSetValue("WIMMT_Start",true); clearInterval(clockInterval); console.log("OBAni Started...")},onComplete:function(){ OB_List_Pulse.play(); document.querySelector("#mpWrap").style.display = "block"; } }); 

            WIMMT_OB_Ani.to(WIMMT_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'})
            WIMMT_OB_Ani.to(WIMMT_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'})
            WIMMT_OB_Ani.from(words,{ duration: 0.75, scale:2, opacity:0, stagger:0.5, ease: 'elastic.out' })
            WIMMT_OB_Ani.to(WIMMT_OBSec_Stage1,{duration:0.5,delay:1,opacity:0,display:'none',ease:'none'},"OBtransition")            
            WIMMT_OB_Ani.from(WIMMT_OBSec_Stage2,{duration:0.5,display:'none',opacity:0,ease:'none'})
            // WIMMT_OB_Ani.to(WIMMT_OBSec_Stage2_Top_UL,{duration:0.25,scale:1.1,yoyo:'true',repeat:1,ease:'none'},"+=1.5")
            if(!WIMMT_mobSelector) WIMMT_OB_Ani.from(WIMMT_OBSec_Stage2_Mid,{duration:0.25,display:'none',opacity:0,height:0,ease:'none'})
            WIMMT_OB_Ani.from('#package-order_section #package-ob_section #OB_DirMsg .ob__stage2 .ob__stage2__ftr h6.Current',{duration:1,opacity:0,ease:'none'})
            WIMMT_OB_Ani.to(WIMMT_ProdSec,{duration:0.5,display:'block',opacity:1,ease:'none'})
            // if(!WIMMT_mobSelector){ 
            //     WIMMT_OB_Ani.from("#disclaimersWrap",{duration:0.5,opacity:0,ease:'none'})
            // }else{    
            //     WIMMT_OB_Ani.to(".disclaimer",{duration:0.5,opacity:1,ease:'none'})                
            // }
    // OB Animations End        


    // if (!pkgCookie) {
            //Code that looks at the package's button...
            WIMMT_ContestBtn.addEventListener('click', function actBtn(e){
                e.preventDefault();   
                console.log("Contest button clicked...");
                WIMMT_OB_Ani.play();   
                // if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
                //     //if NOT eligible ... do not show merch
                //     console.log("Merch inel Version...")
                //     _packageFormSubmit();
                // } else {
                //     //HIDE OB when set via admin/xml 
                //     if(typeof OBvisibility !== 'undefined'){
                //         if(OBvisibility == "hideOB"){
                //             console.log("hide OB version")
                //             WIMMT_NoOB.play();
                            
                //         }else{
                //             console.log("normal version")
                //             WIMMT_OB_Ani.play();                  
                //         }
                //     } 
                // }
            });
    // } else {
    //     //Post click -- user already activated - Show everything & mpLoad....
    //     WIMMT_OB_Ani.progress(1);
    // }



    //HIDE OB when set via admin/xml 
    // if(typeof OBvisibility !== 'undefined'){
    //     if(OBvisibility == "hideOB") $("#package-ob_section").css({display: "none"});
    // }
	
	$("#copyright").html(new Date().getFullYear());
};

/*****Clock Functions*****/
function doTheClock(now, then){
    var onCurrDate = now.getTime(); //make it a date obj, then make it seconds	
    var ExpDate=new Date(); //make it a date obj

    gsap.to(".stage__clock__inner",{duration:0.25,opacity:1,ease:'none'})

    ExpDate.setHours(23);
    ExpDate.setMinutes(59);
    ExpDate.setSeconds(59);
    ExpDate = ExpDate.getTime(); //make it a date obj				
    var onSeconds_left = Math.floor(ExpDate - onCurrDate) / 1000;	
    //console.log("Simple Clock: "+onSeconds_left);
    // contest_replayDateVariants("currDate", onCurrDate);

    if(onSeconds_left<=0){
        console.log(onSeconds_left+"- Contest Over");
        $(".stage__clock__inner").css({"opacity":0.65});
        $(".stage__clock__inner .stage__clock__num.days").html(clockPadder(0));
        $(".stage__clock__inner .stage__clock__num.hrs").html(clockPadder(0));
        $(".stage__clock__inner .stage__clock__num.mins").html(clockPadder(0));
        $(".stage__clock__inner .stage__clock__num.sec").html(clockPadder(0));
        window.clearInterval(clockInterval);
        return false;
    }else{
        // clockSideAnimation.play()
        //console.log(onSeconds_left+"- Contest remains");
        // $("#contestContinueButton").css({"display":"none"});

        //console.log("clock " + now.getTime())
        // get total seconds between the times
        if(now<then){
            var delta = Math.abs(then - now) / 1000;

            //Calculate total number of hours
            var totalHrs = Math.floor(delta / 3600);
            // console.log("Total Hrs:"+totalHrs);

            // calculate (and subtract) whole days
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;

            // calculate (and subtract) whole hours
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            // calculate (and subtract) whole minutes
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;

            // what's left is seconds
            var seconds = delta % 60;  // in theory the modulus is not required
            now.setSeconds(now.getSeconds()+1)

            //console.log(days+"/"+hours+"/"+minutes+"/"+seconds)
        }else{
            hours=minutes=seconds=0; //stop at zero
            //window.clearInterval(clockInterval); //stop the interval
        }

        // Hours clock
        $(".stage__clock__inner .stage__clock__num.days").html(clockPadder(0));
        $(".stage__clock__inner .stage__clock__num.hrs").html(clockPadder(0));
        $(".stage__clock__inner .stage__clock__num.mins").html(clockPadder(0));
        $(".stage__clock__inner .stage__clock__num.sec").html(clockPadder(0));

        if(days<1){ 
            document.querySelector(".stage__clock__inner li:nth-of-type(1)").style.display = "none";
            document.querySelector(".stage__clock__inner li:nth-of-type(2)").style.display = "none";
        }else{
            let WIMMT_mobSelector = document.querySelector("#package-wrap").classList.contains("mobilePkg");
            if(WIMMT_mobSelector){ 
                document.querySelector(".stage__clock__inner li:nth-of-type(6)").style.display = "none";
                document.querySelector(".stage__clock__inner li:nth-of-type(7)").style.display = "none";
            }
        }


        

        //spit out the new time - ensure that anything less than 9 is zero padded.
        $(".stage__clock__inner .stage__clock__num.days").html(clockPadder(days));
        $(".stage__clock__inner .stage__clock__num.hrs").html(clockPadder(hours));
        $(".stage__clock__inner .stage__clock__num.mins").html(clockPadder(minutes));
        $(".stage__clock__inner .stage__clock__num.sec").html(clockPadder(seconds));

    }
}

function clockPadder(inNum){
    var newNum = Math.floor(inNum);
    if(newNum<10) newNum="0"+newNum;
    return newNum
}
/*****Clock Functions*****/

function getUserSegmentCode(){
    console.log("get user seg codes")

    let ACV2_Seg_balance = document.querySelectorAll("#OB_DirMsg .balance")
    for(var IARI=0;IARI<ACV2_Seg_balance.length;IARI++){
        ACV2_Seg_balance[IARI].style.display = "block";
        ACV2_Seg_balance[IARI].classList.add("Current");                           
    }

}