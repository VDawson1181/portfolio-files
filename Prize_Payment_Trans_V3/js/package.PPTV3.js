//Prize Payment Transaction V3 - Contest_Name(5KAWF) - V1.1 - Desktop/Mobile Pkg by VAD - 04/2021
document.addEventListener('DOMContentLoaded', PPTV3_Init, false);	

function PPTV3_Init() {
    gsap.registerPlugin(CSSRulePlugin,ScrollToPlugin);
    getUserSegmentCode();

    let PPTV3_PackageDiv = document.querySelector("#package-wrap"),
        PPTV3_ContestSec = document.querySelector("#package-contest_section"),
        PPTV3_ContestModal = document.querySelector("#package-contest_section .PPTV3_Modal"),
        PPTV3_ContestBtn = document.querySelector("#package-contest_section .PPTV3_Btn"),
        PPTV3_ContestHdr = document.querySelector("#package-contest_section .PPTV3_Header"),
        PPTV3_ContestFtr = document.querySelector("#package-contest_section .PPTV3_Ftr"),
        PPTV3_ContestHdrInner = document.querySelector("#package-contest_section .PPTV3_Header > div"),
        PPTV3_ContestHdrPointer = CSSRulePlugin.getRule("#package-contest_section .PPTV3_Header:after"),
        PPTV3_ContestHdrArrow = document.querySelector("#package-contest_section .PPTV3_Header > div .PPTV3_Arrow"),
        PPTV3_Contest_PinkSlip = document.querySelector("#package-contest_section .PPTV3_Body"),
        PPTV3_Contest_RedCircle = document.querySelector("#package-contest_section .PPTV3_PinkSlip .PPTV3_RedCircle"),
        PPTV3_Contest_RedCircleCpy = document.querySelector("#package-contest_section .PPTV3_PinkSlip .PPTV3_Address h6"),
        PPTV3_Contest_EntryAck = document.querySelector("#package-contest_section .PPTV3_Body .PPTV3_PinkSlip .PPTV3_EntrantAck"),
        PPTV3_OBSec = document.querySelector("#package-ob_section"),
        PPTV3_OB_PinkSlip = document.querySelector("#package-ob_section .PPTV3_OB_PinkSlip"),
        PPTV3_OrderSec = document.querySelector("#package-order_section"),
        PPTV3_ProdSec = document.querySelector("#package-product_section");
        // OBvisibility = spectrumContest[0][0].OBvisibility,
	    // pkgCookie = _packageGetValue("PPTV3_Start");  //Get the session storage variable... Please make the storage variable name unique for this package.
        
        function updateSize() {
            // MIC_PackageDiv.textContent = window.innerWidth;
            
            if (window.innerWidth <= 600) {
                //Screen is 600px or below....
                // <div id="package-wrap" class="mobilePkg"></div>
                PPTV3_PackageDiv.classList.add("mobilePkg");
                // location.reload();
            }else{
                PPTV3_PackageDiv.classList.remove("mobilePkg");
                // location.reload();
                
            }
        }

        updateSize();
        window.addEventListener("resize", updateSize);

    let    PPTV3_mobSelector = PPTV3_PackageDiv.classList.contains("mobilePkg");

    var PPTV3_ButtonShake = new TimelineMax({ paused: true, repeat:6, repeatDelay: 1})
        PPTV3_ButtonShake.to(PPTV3_ContestBtn,{duration:0.08, left: '-10px', repeat: 3, yoyo: true, ease:'none'}) 
        PPTV3_ButtonShake.to(PPTV3_ContestBtn,{duration:0.08, left: '10px', repeat: 3, yoyo: true, ease:'none'}) 
    
    var PPTV3_SignedBox = new TimelineMax({ paused: true, repeat:6, repeatDelay: 1})
        PPTV3_SignedBox.from(".PPTV3_EntrantAck",{duration:0.16, opacity:0, repeat: 4, yoyo: true, ease:'none'}) 

    var PPTV3_OB_PulseTxt = new TimelineMax({ paused: true, repeat:3, repeatDelay: 1})
        PPTV3_OB_PulseTxt.to(".Current .PPTV3_OB_PS_Hdr h6",{duration:0.16, scale:1.1, repeat: 3, yoyo: true, ease:'none'})        

        if(!PPTV3_mobSelector){        
            console.log("DT");         
            var PPTV3_IntroAni = new TimelineMax({paused: true,delay: 0.5,onComplete:function(){ PPTV3_ButtonShake.play(); PPTV3_SignedBox.play(); }});     
            PPTV3_IntroAni.to(PPTV3_ContestSec,{duration:0.5,display:'block',opacity:1,ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_ContestHdr,{duration:0.5,scale:0,top:"-150px",ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_ContestHdrInner,{duration:0.5,opacity:0,ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_Contest_PinkSlip,{duration:0.5,scale:0,top:'0px',ease:'none'})        
            PPTV3_IntroAni.set(PPTV3_Contest_PinkSlip,{zIndex:'55',ease:'none'})        
            PPTV3_IntroAni.from([PPTV3_ContestBtn,PPTV3_ContestFtr],{opacity:'0',ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_ContestHdrPointer,{duration:0.5, cssRule:{scale:0},ease:'none'})
            PPTV3_IntroAni.from(PPTV3_ContestHdrArrow,{duration:0.5,height:0,ease:'none'})
            PPTV3_IntroAni.from([PPTV3_Contest_RedCircle,PPTV3_Contest_RedCircleCpy],{duration:0.5,opacity:'0',ease:'none'})  

            // OB - Animations
            var PPTV3_OB_Ani = new TimelineMax({paused: true, onStart:function(){ console.log("OBAni Started...")},onComplete:function(){ loadProducts(); } });                  
            PPTV3_OB_Ani.to(PPTV3_ContestBtn,{duration:0.5,opacity:0,ease:'none'})
            PPTV3_OB_Ani.to(PPTV3_ContestModal,{duration:1.25,scale:1,ease:'elastic.out'})
            PPTV3_OB_Ani.from(".PPTV3_Modal_UL",{duration:0.5,width:0,ease:'none'},"+=0.5")             
            PPTV3_OB_Ani.to(PPTV3_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},"+=3")
            PPTV3_OB_Ani.to(PPTV3_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'})
            PPTV3_OB_Ani.from(PPTV3_OB_PinkSlip,{duration:0.5,scale:0,top:'0px',ease:'none'})        
            PPTV3_OB_Ani.to(PPTV3_ProdSec,{duration:0.5,opacity:1,ease:'none'})        
            PPTV3_OB_Ani.from(".Current .PPTV3_OB_PS_Ftr-Highlight",{duration:0.5,width:0,ease:'none'}) 
            // OB - Animations
        }else{
            console.log("mobile");
            var PPTV3_IntroAni = new TimelineMax({paused: true,delay: 0.5,onComplete:function(){ PPTV3_ButtonShake.play(); }});  
            PPTV3_IntroAni.to(PPTV3_ContestSec,{duration:0.5,display:'block',opacity:1,ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_ContestHdr,{duration:0.5,scale:0,top:"0px",ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_ContestHdrInner,{duration:0.5,opacity:0,ease:'none'})        
            PPTV3_IntroAni.to(PPTV3_ContestHdr,{duration:0.5,height:0,ease:'none'},"PPTV3_PSAni+=5")        
            PPTV3_IntroAni.from(PPTV3_Contest_PinkSlip,{duration:0.5,scale:0,top:'-520px',ease:'none'},"PPTV3_PSAni+=5")        
            PPTV3_IntroAni.set(PPTV3_Contest_PinkSlip,{zIndex:'55',ease:'none'})        
            PPTV3_IntroAni.from([PPTV3_ContestBtn,PPTV3_ContestFtr],{opacity:'0',ease:'none'})        
            PPTV3_IntroAni.from(PPTV3_ContestHdrArrow,{duration:0.5,height:0,ease:'none'})
            PPTV3_IntroAni.from([PPTV3_Contest_RedCircle,PPTV3_Contest_RedCircleCpy],{duration:0.5,opacity:'0',ease:'none'})  

            // OB - Animations            
            var PPTV3_OB_Ani = new TimelineMax({paused: true, onStart:function(){ console.log("OBAni Started...")},onComplete:function(){ PPTV3_OB_PulseTxt.play(); loadProducts(); } });                  
            PPTV3_OB_Ani.to(PPTV3_ContestBtn,{duration:0.5,opacity:0,ease:'none'})
            PPTV3_OB_Ani.to(PPTV3_ContestModal,{duration:1.25,scale:1,ease:'elastic.out'}) 
            PPTV3_OB_Ani.from(".PPTV3_Modal_UL",{duration:0.5,width:0,ease:'none'},"+=0.5")             
            PPTV3_OB_Ani.to(PPTV3_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},"+=3")
            PPTV3_OB_Ani.to(PPTV3_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'})
            PPTV3_OB_Ani.from(PPTV3_OB_PinkSlip,{duration:0.5,scale:0,top:'0px',ease:'none'})        
            PPTV3_OB_Ani.to(PPTV3_ProdSec,{duration:0.5,opacity:1,ease:'none'})        
            // if (!pkgCookie) { PPTV3_OB_Ani.to(window, {duration: 0.5, scrollTo: {y: ".PPTV3_OB_Header", offsetY: 50}}) }
            PPTV3_OB_Ani.from(".Current .PPTV3_OB_PS_Ftr-Highlight",{duration:0.5,width:0,ease:'none'})        
            // OB - Animations
        }  

    // NO OB - Animations
    var PPTV3_NoOB = new TimelineMax({paused: true, onStart:function(){ console.log("OBAni NoOB Started...")},onComplete:function(){ loadProducts(); } });                 
        PPTV3_NoOB.to(PPTV3_ContestBtn,{duration:0.5,opacity:0,ease:'none'})
        PPTV3_NoOB.to(PPTV3_ContestModal,{duration:1.25,scale:1,ease:'elastic.out'})
        PPTV3_NoOB.to(PPTV3_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},"+=3")
        PPTV3_NoOB.to(PPTV3_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'})
        PPTV3_NoOB.to(PPTV3_ProdSec,{duration:0.5,opacity:1,ease:'none'}) 
    // NO OB - Animations
    // Merch Inel - Animations
    var PPTV3_MerchInel = new TimelineMax({paused: true, onStart:function(){ console.log("Merch Inel Started...")} });                 
        PPTV3_MerchInel.to(PPTV3_ContestBtn,{duration:0.5,opacity:0,ease:'none'})
        PPTV3_MerchInel.to(PPTV3_ContestModal,{duration:1.25,scale:1,ease:'elastic.out'})
        // PPTV3_MerchInel.call(_packageFormSubmit,null,"+=3")
    // Merch Inel - Animations

    

    // if (!pkgCookie) {
        //Set the session storage... if necessary
        //_packageSetValue("PPTV3_Start",true)
        PPTV3_IntroAni.play();

        //Code that looks at the package's button...
        PPTV3_ContestBtn.addEventListener('click', function actBtn(e){
            e.preventDefault();   
            console.log("Contest button clicked...");
            PPTV3_OB_Ani.play(); 

            // if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
            //     //if NOT eligible ... do not show merch
            //     console.log("Merch inel Version...")

            //         PPTV3_MerchInel.play();
            // }else{
            //     //HIDE OB when set via admin/xml 
            //     if(typeof OBvisibility !== 'undefined'){
            //         if(OBvisibility == "hideOB"){
            //             console.log("hide OB version")
            //             PPTV3_NoOB.play();
                        
            //         }else{
            //             console.log("normal version")
            //             PPTV3_OB_Ani.play();                    
            //         }
            //     } 
            // }
        });

        PPTV3_Contest_EntryAck.addEventListener('click', function actBtn(e){
            e.preventDefault();   
            console.log("Contest button clicked...");
            PPTV3_OB_Ani.play(); 

            // if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
            //     //if NOT eligible ... do not show merch
            //     console.log("Merch inel Version...")

            //         PPTV3_MerchInel.play();
            // }else{
            //     //HIDE OB when set via admin/xml 
            //     if(typeof OBvisibility !== 'undefined'){
            //         if(OBvisibility == "hideOB"){
            //             console.log("hide OB version")
            //             PPTV3_NoOB.play();
                        
            //         }else{
            //             console.log("normal version")
            //             PPTV3_OB_Ani.play();                    
            //         }
            //     } 
            // }
        });
    // } else {
    //     //Post click -- user already activated - Show everything & mpLoad....
    //     console.log("reload")

    //     //HIDE OB when set via admin/xml 
    //     if(typeof OBvisibility !== 'undefined'){
    //         if(OBvisibility == "hideOB"){
    //             console.log("hide OB version")
    //             PPTV3_NoOB.progress(1);
                
    //         }else{
    //             console.log("normal version")
    //             PPTV3_OB_Ani.progress(1);                    
    //         }
    //     }
    // }


    //HIDE OB when set via admin/xml 
    // if(typeof OBvisibility !== 'undefined'){
    //     if(OBvisibility == "hideOB") $("#package-ob_section").css({display: "none"});
    // }
	
	$("#copyright").html(new Date().getFullYear());

};


function loadProducts(){
    document.querySelector("#mpWrap").style.display = "block";
}

function getUserSegmentCode(){
    console.log("get user seg codes")

    let DODV4_Seg_balance = document.querySelectorAll(".PPTV3_OB_dir_Msg .balance")
    for(var IARI=0;IARI<DODV4_Seg_balance.length;IARI++){
        DODV4_Seg_balance[IARI].style.display = "block";
        DODV4_Seg_balance[IARI].classList.add("Current");                           
    }

}

// function getUserSegmentCode(){
//     console.log("get user seg codes")

//     let DODV4_DirMsg = document.querySelectorAll(".PPPTV3_OB_dir_Msg"), 
//     DODV4_Seg_balance = document.querySelectorAll(".PPTV3_OB_dir_Msg .balance"),
//     DODV4_Seg_prospects = document.querySelectorAll(".PPTV3_OB_dir_Msg .prospect"),
//     DODV4_Seg_Lapsed = document.querySelectorAll(".PPTV3_OB_dir_Msg .lapsed"),
//     DODV4_Seg_offline = document.querySelectorAll(".PPTV3_OB_dir_Msg .offline"),
//     DODV4_Seg_preferred = document.querySelectorAll(".PPTV3_OB_dir_Msg .preferred"),
//     DODV4_Seg_prefPlus = document.querySelectorAll(".PPTV3_OB_dir_Msg .prefPlus"),
//     DODV4_Seg_prezPref = document.querySelectorAll(".PPTV3_OB_dir_Msg .presPreferred");

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
//                 // DODV4_OB_BuyerReward.style.display = "none";
//                 // DODV4_OB_BuyerReward.classList.remove("active");
//                 // DODV4_OB_ProspectReward.style.display = "block";
//                 // DODV4_OB_ProspectReward.classList.add("active");
                
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
// }