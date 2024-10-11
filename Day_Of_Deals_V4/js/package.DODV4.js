//Day of deals V4 - 15KAWFL - Pkg Desktop JS by VAD - 03/2022




document.addEventListener('DOMContentLoaded', DODV4_Init, false);	
function DODV4_Init(){			
    gsap.registerPlugin(CSSRulePlugin,ScrollToPlugin);

    let DODV4_PackageDiv = document.querySelector("#package-wrap"),
        DODV4_ConBtnContainer = document.querySelectorAll('#package-contest_section .sumButtonSection'),
        DODV4_ConBtn = document.querySelector('#package-contest_section .sumButtonSection .package-ConBtn'),
        DODV4_ContestSec = document.querySelector("#package-contest_section"),
        DODV4_UpgradeStamp1 = document.querySelector("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(1) .conStamp"),
        DODV4_UpgradeStamp2 = document.querySelector("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(2) .conStamp"),
        DODV4_UpgradeStamp3 = document.querySelector("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(3) .conStamp"),
        DODV4_ProdSec = document.querySelector("#package-product_section"),
        DODV4_OBSec = document.querySelector("#package-ob_section"),
        DODV4_OrderSec = document.querySelector("#package-order_section");


        function updateSize() {
            // MIC_PackageDiv.textContent = window.innerWidth;

            if (window.innerWidth <= 600) {
                //Screen is 600px or below....
                // <div id="package-wrap" class="mobilePkg"></div>
                DODV4_PackageDiv.classList.add("mobilePkg");
                // location.reload();
            }else{
                DODV4_PackageDiv.classList.remove("mobilePkg");
                // location.reload();
                
            }
        }

        updateSize();
        window.addEventListener("resize", updateSize);


    let DODV4_mobSelector = DODV4_PackageDiv.classList.contains("mobilePkg");

let DODV4_ContestCrossoutTop = CSSRulePlugin.getRule('#package-contest_section .contest_Sec_Contests .contest .conCrossout h6:before'),
    DODV4_ContestCrossoutBot = CSSRulePlugin.getRule('#package-contest_section .contest_Sec_Contests .contest .conCrossout h6:after');
	// fUpdatePersonalization();
    getUserSegmentCode();

    var DODV4_BtnPulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.5, repeat: -1})
        DODV4_BtnPulse.to(DODV4_ConBtn,{duration:0.5,scale:1.1,yoyo:true,repeat:1})

    var DODV4_InitAni = new TimelineMax({paused:true, delay:1, onComplete:function(){DODV4_BtnPulse.play()} }); 

    if(!DODV4_mobSelector){
        console.log("desktop")
        var crossOutWidth = "397px", DODV4_delay = "0.5";
    }else{
        console.log("mobile")
        var crossOutWidth = "220px", DODV4_delay = "1";
    }



        
    //Contest 1 animation 
    DODV4_InitAni.from(DODV4_UpgradeStamp1,{duration:0.5,opacity:0,scale:4,ease:'none'})
    DODV4_InitAni.to(DODV4_UpgradeStamp1,{duration:0.75,filter:'grayscale(0%)'})
    DODV4_InitAni.to([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{duration:0.25,width:crossOutWidth,stagger:0.5})
    DODV4_InitAni.to(".contest:nth-of-type(1) .conCrossout",{duration:0.5,opacity:0})
    DODV4_InitAni.set([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{width:'0px'})
    DODV4_InitAni.to("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(1) h6.conHdr",{duration:0.5,opacity:1})
    DODV4_InitAni.to([".contest_Sec_Contests .contest",".contest_Sec_Contests .summary"],{duration:1,delay:DODV4_delay,left:'-25%',ease:'bounce.out'},"contestTransition")
    DODV4_InitAni.from(".contest:nth-of-type(2)",{duration:1,opacity:0},"contestTransition")

    //Contest 2 animation         
    DODV4_InitAni.from(DODV4_UpgradeStamp2,{duration:0.5,opacity:0,scale:4,ease:'none'})
    DODV4_InitAni.from(DODV4_ConBtnContainer,{duration:0.5,opacity:0,ease:'none' })
    DODV4_InitAni.to(DODV4_UpgradeStamp2,{duration:0.75,filter:'grayscale(0%)'})
    DODV4_InitAni.to([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{duration:0.25,width:crossOutWidth,stagger:0.5})
    DODV4_InitAni.to(".contest:nth-of-type(2) .conCrossout",{duration:0.5,opacity:0})
    DODV4_InitAni.set([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{width:'0px'})
    DODV4_InitAni.to("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(2) h6.conHdr",{duration:0.5,opacity:1})
    DODV4_InitAni.to([".contest_Sec_Contests .contest",".contest_Sec_Contests .summary"],{duration:1,delay:DODV4_delay,left:'-50%',ease:'bounce.out'},"contestTransition2")
    DODV4_InitAni.from(".contest:nth-of-type(3)",{duration:1,opacity:0},"contestTransition2")
    
    //Contest 3 animation 
    DODV4_InitAni.from(DODV4_UpgradeStamp3,{duration:0.5,opacity:0,scale:4,ease:'none'})
    DODV4_InitAni.to(DODV4_UpgradeStamp3,{duration:0.75,filter:'grayscale(0%)'})
    DODV4_InitAni.to([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{duration:0.25,width:crossOutWidth,stagger:0.5})
    DODV4_InitAni.to(".contest:nth-of-type(3) .conCrossout",{duration:0.5,opacity:0})
    DODV4_InitAni.set([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{width:'0px'})
    DODV4_InitAni.to("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(3) h6.conHdr",{duration:0.5,opacity:1})
    DODV4_InitAni.to([".contest_Sec_Contests .contest",".contest_Sec_Contests .summary"],{duration:DODV4_delay,left:'-75%',ease:'bounce.out'},"contestTransition3")        
    DODV4_InitAni.from(".contest_Sec_Contests .summary .sumContest",{duration:1,opacity:0,left:'940px',stagger:1.5,ease:'bounce.out'},"contestTransition3")
    DODV4_InitAni.to(".contest_Sec_Contests .summary .sumContest .summaryContest h6",{duration:0.25,delay:1.25,scale:1.1,stagger:{ each:1.5,repeat:1,yoyo:true} },"contestTransition3")
    
    // }else{
    //     console.log("mobile")

    //     //Contest 1 animation 
    //     DODV4_InitAni.from(DODV4_UpgradeStamp1,{duration:0.5,opacity:0,scale:4,ease:'none'})
    //     DODV4_InitAni.to(DODV4_UpgradeStamp1,{duration:0.75,filter:'grayscale(0%)'})
    //     DODV4_InitAni.to([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{duration:0.25,width:'220px',stagger:0.5})
    //     DODV4_InitAni.to(".contest:nth-of-type(1) .conCrossout",{duration:0.5,opacity:0})
    //     DODV4_InitAni.set([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{width:'0px'})
    //     DODV4_InitAni.to("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(1) h6.conHdr",{duration:0.5,opacity:1})
    //     DODV4_InitAni.to([".contest_Sec_Contests .contest",".contest_Sec_Contests .summary"],{duration:1,left:'-25%',ease:'bounce.out'},"contestTransition")
    //     DODV4_InitAni.from(".contest:nth-of-type(2)",{duration:1,opacity:0},"contestTransition")

    //     //Contest 2 animation         
    //     DODV4_InitAni.from(DODV4_UpgradeStamp2,{duration:0.5,opacity:0,scale:4,ease:'none'})
    //     DODV4_InitAni.from(DODV4_ConBtnContainer,{duration:0.5,opacity:0,ease:'none' })
    //     DODV4_InitAni.to(DODV4_UpgradeStamp2,{duration:0.75,filter:'grayscale(0%)'})
    //     DODV4_InitAni.to([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{duration:0.25,width:'220px',stagger:0.5})
    //     DODV4_InitAni.to(".contest:nth-of-type(2) .conCrossout",{duration:0.5,opacity:0})
    //     DODV4_InitAni.set([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{width:'0px'})
    //     DODV4_InitAni.to("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(2) h6.conHdr",{duration:0.5,opacity:1})
    //     DODV4_InitAni.to([".contest_Sec_Contests .contest",".contest_Sec_Contests .summary"],{duration:1,left:'-50%',ease:'bounce.out'},"contestTransition2")
    //     DODV4_InitAni.from(".contest:nth-of-type(3)",{duration:1,opacity:0},"contestTransition2")

    //      //Contest 3 animation 
    //      DODV4_InitAni.from(DODV4_UpgradeStamp3,{duration:0.5,opacity:0,scale:4,ease:'none'})
    //      DODV4_InitAni.to(DODV4_UpgradeStamp3,{duration:0.75,filter:'grayscale(0%)'})
    //      DODV4_InitAni.to([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{duration:0.25,width:'220px',stagger:0.5})
    //      DODV4_InitAni.to(".contest:nth-of-type(3) .conCrossout",{duration:0.5,opacity:0})
    //      DODV4_InitAni.set([DODV4_ContestCrossoutTop,DODV4_ContestCrossoutBot],{width:'0px'})
    //      DODV4_InitAni.to("#package-contest_section .contest_Sec_Contests .contest:nth-of-type(3) h6.conHdr",{duration:0.5,opacity:1})
    //      DODV4_InitAni.to([".contest_Sec_Contests .contest",".contest_Sec_Contests .summary"],{duration:1,left:'-75%',ease:'bounce.out'},"contestTransition3")        
    //      DODV4_InitAni.from(".contest_Sec_Contests .summary .sumContest",{duration:1,opacity:0,left:'940px',stagger:1.5,ease:'bounce.out'},"contestTransition3")
    //      DODV4_InitAni.to(".contest_Sec_Contests .summary .sumContest .summaryContest h6",{duration:0.25,delay:1.25,scale:1.1,stagger:{ each:1.5,repeat:1,yoyo:true} },"contestTransition3")
    // }
        
        // NO OB - Animations
        var DODV4_NoOB = new TimelineMax({paused: true, onStart:function(){ _packageSetValue("DODV4_Start",true); console.log("OBAni NoOB Started...")},onComplete:function(){ loadProducts(); } });                 
            DODV4_NoOB.to(DODV4_ContestSec,{duration:0.5,display:'none',opacity:0,easing:'none'})
            DODV4_NoOB.to(DODV4_OrderSec,{duration:0.5,display:'block',opacity:1,easing:'none'})
        // NO OB - Animations

        // OB - Animations
        var DODV4_OB_Ani = new TimelineMax({paused: true, onStart:function(){ _packageSetValue("DODV4_Start",true); console.log("OBAni OB Started...")},onComplete:function(){ loadProducts();  } });                 
            DODV4_OB_Ani.to(DODV4_ContestSec,{duration:0.25,display:'none',opacity:0,easing:'none'})
            DODV4_OB_Ani.to(DODV4_OrderSec,{duration:0.25,display:'block',opacity:1,easing:'none'},"orderTransition")
            DODV4_OB_Ani.to('body',{duration:0.25,backgroundColor:'#b72875',easing:'none'},"orderTransition")
            DODV4_OB_Ani.from('#package-ob_section .ob_inner .ob_inner_hdr',{duration:0.5,left:'950px',opacity:0,easing:'none'})
            DODV4_OB_Ani.from('#package-ob_section .ob_inner_main_hdr h6',{duration:0.5,left:'-100px',delay:0.25,opacity:0,easing:'none'},)
            DODV4_OB_Ani.from('#package-ob_section .ob_inner_main_hdr .ob_inner_main_hdr_copy',{duration:0.5,delay:0.25,right:'-674px',opacity:0,easing:'none'})
            DODV4_OB_Ani.from('#package-ob_section .ob_inner_main_rewards li.active',{duration:0.5,delay:0.25,scale:0,easing:'none',stagger:0.75})
            DODV4_OB_Ani.from('#package-ob_section .ob_inner_dir_Msg',{duration:0.5,delay:0.25,top:'75px',opacity:0,easing:'none'})
        // OB - Animations

	//Get the session storage variable... Please make the storage variable name unique for this package.
	// let pkgCookie = _packageGetValue("DODV4_Start"),
    //     OBvisibility = spectrumContest[0][0].OBvisibility;
        
    //     if(typeof OBvisibility !== 'undefined'){
    //         if(OBvisibility == "hideOB") DODV4_OBSec.style.display = "none";
    //     }

    //     if (!pkgCookie) {
            console.log("onFirstLoad...");
            DODV4_InitAni.play();

            //Code that looks at the package's button...
            DODV4_ConBtn.addEventListener('click', function actBtn(e){
                e.preventDefault();   
                console.log("Contest button clicked...");
                DODV4_OB_Ani.play();  

                // if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
                //     //if NOT eligible ... do not show merch
                //     console.log("Merch inel Version...")
                //     _packageFormSubmit();
                // }else{
                //     //HIDE OB when set via admin/xml 
                //     if(typeof OBvisibility !== 'undefined'){
                //         if(OBvisibility == "hideOB"){
                //             console.log("hide OB version")
                //             DODV4_NoOB.play();
                            
                //         }else{
                //             console.log("normal version")
                //             DODV4_OB_Ani.play();                    
                //         }
                //     } 
                // }

                               
            });
            //Code that looks at the package's button...
        // } else {
        //     console.log("on Re-Load...");
        //     if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
        //         //if NOT eligible ... do not show merch
        //         console.log("Merch inel Version...")
        //         _packageFormSubmit();
        //     }else{
        //         //HIDE OB when set via admin/xml 
        //         if(typeof OBvisibility !== 'undefined'){
        //             if(OBvisibility == "hideOB"){
        //                 console.log("hide OB version")
        //                 DODV4_NoOB.play();
                        
        //             }else{
        //                 console.log("normal version")
        //                 DODV4_OB_Ani.play();                    
        //             }
        //         } 
        //     }
        // }

    //Day of deals expiration date....
    // contest_replayDateVariants("dodExpDt", spectrumContest[0][0].DODExpDate);

	$("#copyright").html(new Date().getFullYear());
};

function loadProducts(){

    document.querySelector("#mpWrap").style.display = "block";
}

function getUserSegmentCode(){
    console.log("get user seg codes")

    let ACV2_Seg_balance = document.querySelectorAll(".ob_inner_dir_Msg .balance")
    for(var IARI=0;IARI<ACV2_Seg_balance.length;IARI++){
        ACV2_Seg_balance[IARI].style.display = "block";
        ACV2_Seg_balance[IARI].classList.add("Current");                           
    }

}

// function getUserSegmentCode(){
//     console.log("get user seg codes")

//     let DODV4_DirMsg = document.querySelectorAll(".DODV4_OB_DirMsg"), 
//     DODV4_Seg_balance = document.querySelectorAll(".ob_inner_dir_Msg .balance"),
//     DODV4_Seg_prospects = document.querySelectorAll(".ob_inner_dir_Msg .prospect"),
//     DODV4_Seg_Lapsed = document.querySelectorAll(".ob_inner_dir_Msg .lapsed"),
//     DODV4_Seg_offline = document.querySelectorAll(".ob_inner_dir_Msg .offline"),
//     DODV4_Seg_preferred = document.querySelectorAll(".ob_inner_dir_Msg .preferred"),
//     DODV4_Seg_prefPlus = document.querySelectorAll(".ob_inner_dir_Msg .prefPlus"),
//     DODV4_Seg_prezPref = document.querySelectorAll(".ob_inner_dir_Msg .presPreferred"),     
//     DODV4_OB_BuyerReward = document.querySelector("#package-order_section .ob_inner_main_rewards li:nth-of-type(3)"),
//     DODV4_OB_ProspectReward = document.querySelector("#package-order_section .ob_inner_main_rewards li:nth-of-type(4)");

//     /*Get user type (Buyer/Prospects)*/
//     _packageGetUserType().done(function(userType){ 
//         console.log("User: "+userType) 
//         switch(userType.toString()){
//             case "buyer":
//                 //BUYER
//                 /*Get User's segment code*/
//                 _packageGetSegment().done(function(segCode){ 
//                 switch(segCode.toString()){                            
//                     case 'BL':
//                     case 'LB':
//                         // console.log("lapsed");  
//                         for(var IARI=0;IARI<DODV4_Seg_Lapsed.length;IARI++){
//                             DODV4_Seg_Lapsed[IARI].style.display = "block";
//                             DODV4_Seg_Lapsed[IARI].classList.add("Current");
//                         }
//                     break;                     
//                     case "OFNB":
//                         // console.log("offline");        
//                         // $('.DODV4_OB_DirMsg .offline').css({"display":"block"});  
//                         for(var IARI=0;IARI<DODV4_Seg_offline.length;IARI++){
//                             DODV4_Seg_offline[IARI].style.display = "block";
//                             DODV4_Seg_offline[IARI].classList.add("Current");                         
//                         }                          
//                     break;  
//                     case "BPV2":
//                         // console.log("preferred");        
//                         // $('.DODV4_OB_DirMsg .preferred').css({"display":"block"});    
//                         for(var IARI=0;IARI<DODV4_Seg_preferred.length;IARI++){
//                             DODV4_Seg_preferred[IARI].style.display = "block";
//                             DODV4_Seg_preferred[IARI].classList.add("Current");                          
//                         }                        
//                     break;         
//                     case "BPV3":
//                         // console.log("prefPlus");        
//                         // $('.DODV4_OB_DirMsg .prefPlus').css({"display":"block"});   
//                         for(var IARI=0;IARI<DODV4_Seg_prefPlus.length;IARI++){
//                             DODV4_Seg_prefPlus[IARI].style.display = "block";
//                             DODV4_Seg_prefPlus[IARI].classList.add("Current");                         
//                         }                         
//                     break;         
//                     case "BPP":
//                         // console.log("presPref");        
//                         // $('.DODV4_OB_DirMsg .presPref').css({"display":"block"});       
//                         for(var IARI=0;IARI<DODV4_Seg_prezPref.length;IARI++){
//                             DODV4_Seg_prezPref[IARI].style.display = "block";
//                             DODV4_Seg_prezPref[IARI].classList.add("Current");                          
//                         }                     
//                     break;                                                                                
//                     default:
//                         // console.log("Balance User");
//                         // $('.DODV4_OB_DirMsg .balance').css({"display":"block"});
//                         for(var IARI=0;IARI<DODV4_Seg_balance.length;IARI++){
//                             DODV4_Seg_balance[IARI].style.display = "block";
//                             DODV4_Seg_balance[IARI].classList.add("Current");                           
//                         }
//                     break;
//                 }                                                    
//                 }).fail(function(error){ 
//                     console.log("Failed: "+error)    
//                     //Failed? Show balance...
//                     // $('.DODV4_OB_DirMsg .balance').css({"display":"block"});     
//                     for(var IARI=0;IARI<DODV4_Seg_balance.length;IARI++){
//                         DODV4_Seg_balance[IARI].style.display = "block";
//                         DODV4_Seg_balance[IARI].classList.add("Current");
//                     }       
//                 })
//                 /*Get User's segment code*/
//             break;

//             default:
//                 //PROSPECTS
//                 console.log("Prospect User");
//                 // $('.DODV4_OB_DirMsg .prospect').css({"display":"block"});  
//                 DODV4_OB_BuyerReward.style.display = "none";
//                 DODV4_OB_BuyerReward.classList.remove("active");
//                 DODV4_OB_ProspectReward.style.display = "block";
//                 DODV4_OB_ProspectReward.classList.add("active");
                
//                 for(var IARI=0;IARI<DODV4_Seg_prospects.length;IARI++){
//                     DODV4_Seg_prospects[IARI].style.display = "block";
//                     DODV4_Seg_prospects[IARI].classList.add("Current");
//                 }

//             break;      
//         }
//     }).fail(function(error){ 
//         console.log("Failed: "+error)
//         // $('.DODV4_OB_DirMsg .balance').css({"display":"block"});
//         for(var IARI=0;IARI<DODV4_Seg_balance.length;IARI++){
//             DODV4_Seg_balance[IARI].style.display = "block";
//             DODV4_Seg_balance[IARI].classList.add("Current");
//         }
//     });
//     /*Get user type (Buyer/Prospects)*/
//}

