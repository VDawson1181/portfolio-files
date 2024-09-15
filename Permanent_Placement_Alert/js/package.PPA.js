//Permanent Placement Alert - Contest_Name(15MM_POAL) - V1.3 - Desktop/Mobile Pkg by VAD - 1/2024
$(document).ready(function(){				
	fUpdatePersonalization();
    PPA_getUserSegmentCode();

    let PPA_PackageDiv = document.querySelector("#package-wrap"),
        PPA_ContestSec = document.querySelector("#package-contest_section"),
        PPA_ContestSecMain = document.querySelector("#package-contest_section .package-contest_container"),
        PPA_ContestSec_ListItem_Chevrons = document.querySelectorAll("#package-contest_section .package-contest_container .package-contest_main ul li .listItemMarker"),
        PPA_ContestSec_ListItems = document.querySelectorAll("#package-contest_section .package-contest_container .package-contest_main ul li .listItemCpy p"),
        PPA_ContestSec_ListItem_Ftr = document.querySelectorAll("#package-contest_section .package-contest_container .package-contest_main h5"),
        PPA_ContestSecFtr = document.querySelector("#package-contest_section .contestFtr"),
        PPA_OrderSec = document.querySelector("#package-order_section"),
        PPA_ProdSec = document.querySelector("#package-product_section"),
        PPA_OB_Section = document.querySelector("#package-ob_section"),
        PPA_OB_MainCpy = document.querySelector("#package-ob_section .ob_dir_Msg .Current .ob_main :is(h4)"),
        PPA_OB_Arrows = document.querySelectorAll("#package-ob_section .ob_dir_Msg .Current .ob_main :is(.ob_left_arrow)"),
        PPA_OB_BenefitItems = document.querySelectorAll("#package-ob_section .ob_dir_Msg .Current .ob_main :is(.ob_benefit)"),
        PPA_OB_FtrCpy = document.querySelector("#package-ob_section .ob_dir_Msg .Current .ob_ftr"),
        PPA_OB_ArrowStalk = document.querySelector("#package-ob_section .ob_dir_Msg .Current .ob_arrow"),
        PPA_OB_PointerBase = document.querySelector("#package-ob_section .ob_dir_Msg .Current .ob_ftr .ob_pointer"),
        PPA_mobSelector = PPA_PackageDiv.classList.contains("mobilePkg"),
        PPA_ConBtn = document.querySelectorAll("#package-contest_section .package-contest_container #PPA_Btn"),
        OBvisibility = spectrumContest[0][0].OBvisibility; //HIDE OB when set via admin/xml 


    var PPA_BtnPulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.25, repeat: -1})
        PPA_BtnPulse.to(PPA_ConBtn,{
        keyframes: {
            "0%":{scale:1},
            "10%":{scale:0.91},
            "17%":{scale:0.98},
            "33%":{scale:0.87},
            "45%":{scale:1},            
            easeEach: "power1.inOut"
          },
          ease:'none',
          duration: 2})

          var PPA_Intro_Ani = new TimelineMax({paused: true, delay:0.25, onComplete:function(){ PPA_BtnPulse.play(); } });
              PPA_Intro_Ani.set(PPA_ContestSec,{display:'block',ease:'none'})

            if(!PPA_mobSelector){ 
                console.log("DT")
                PPA_Intro_Ani.from(PPA_ContestSecMain,{duration:0.5,opacity:0,scale:0,ease:'none'})            
            }else{    
                console.log("Mob")
                PPA_Intro_Ani.from(PPA_ContestSecMain,{duration:0.5,opacity:0,ease:'none'})                
            }

            PPA_Intro_Ani.from(PPA_ContestSec_ListItem_Chevrons,{duration:0.25,opacity:0, stagger:'1',ease:'none'},"listAni")
            PPA_Intro_Ani.from(PPA_ContestSec_ListItems,{duration:0.25,opacity:0, stagger:'1',ease:'none'},"listAni+=0.25")
            PPA_Intro_Ani.from([PPA_ContestSec_ListItem_Ftr, PPA_ContestSecFtr],{duration:0.5,opacity:0,stagger:'0.5',ease:'none'},"+=0.25")            
         

    
    // NO OB - Animations
    // var PPA_NoOB= new TimelineMax({paused: true, onStart:function(){ PPA_BtnPulse.pause(); } });      
    var PPA_NoOB= new TimelineMax({paused: true });      
        PPA_NoOB.set(PPA_OB_Section,{display:'none',opacity:0},0)           
        PPA_NoOB.to(PPA_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        PPA_NoOB.to("body",{duration:0.5,backgroundImage:'none',backgroundColor:'#c5d7e1',ease:'none'},0)
        PPA_NoOB.to(PPA_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'},0)                
        PPA_NoOB.set(PPA_ProdSec,{display:'block',opacity:1})
        PPA_NoOB.add(function(){ if(window.mpLoad) mpLoad(); })
        if(!PPA_mobSelector){ 
            PPA_NoOB.to("#disclaimersWrap",{duration:0.5,opacity:1,ease:'none'})
        }else{    
            PPA_NoOB.to(".disclaimer",{duration:0.5,opacity:1,ease:'none'})                
        }
    // NO OB - Animations

    var PPA_OBAni= new TimelineMax({paused: true, onStart:function(){ PPA_BtnPulse.pause() } });                
        PPA_OBAni.to("body",{duration:0.5,backgroundImage:'none',backgroundColor:'#c5d7e1',ease:'none'},0)
        PPA_OBAni.to(PPA_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        PPA_OBAni.to(PPA_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'}) 
        PPA_OBAni.from(PPA_OB_Section,{duration:0.5,opacity:0,scale:0,ease:'none'}) 

        PPA_OBAni.from(PPA_OB_MainCpy,{duration:0.5,opacity:0,ease:'none'},'+=0.25')   
        PPA_OBAni.from(PPA_OB_Arrows,{duration:0.25,opacity:0, stagger:'1',ease:'none'},"OBlistAni")
        PPA_OBAni.from(PPA_OB_BenefitItems,{duration:0.25,opacity:0,width:"550px", stagger:'1',ease:'none'},"OBlistAni+=0.25")
        PPA_OBAni.from(PPA_OB_FtrCpy,{duration:0.5,opacity:0,ease:'none'})   
        PPA_OBAni.from(PPA_OB_ArrowStalk,{duration:0.5,opacity:0,ease:'none'},"ob_Pointer_Ani")    
        PPA_OBAni.from(PPA_OB_PointerBase,{duration:0.5,opacity:0,ease:'none'},"ob_Pointer_Ani")    
        PPA_OBAni.add(function(){ if(window.mpLoad) mpLoad(); })
        if(!PPA_mobSelector){ 
            PPA_OBAni.from("#disclaimersWrap",{duration:0.5,opacity:0,ease:'none'})
        }else{    
            PPA_OBAni.from(".disclaimer",{duration:0.5,opacity:0,ease:'none'})                
        }                      

	//Get the session storage variable... Please make the storage variable name unique for this package.
	pkgCookie = _packageGetValue("PPA_Start");
    
    if (!pkgCookie) {
        PPA_Intro_Ani.play();

        PPA_ConBtn.forEach((element,index) => {
            PPA_ConBtn[index].addEventListener('click', function actBtn(e){
                e.preventDefault();   
    
                //Set the session storage... if necessary
                _packageSetValue("PPA_Start",true)
        
                if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
                    //if NOT eligible ... do not show merch
                    //NO MERCH
                    // console.log("Non EComm Version")
                    _packageFormSubmit();
                } else {                            
                    //HIDE OB when set via admin/xml 
                    if(typeof OBvisibility !== 'undefined'){
                        if(OBvisibility == "hideOB"){
                            // console.log("hide OB version")
                            PPA_NoOB.play();
                            
                        }else{
                            // console.log("normal version")
                            PPA_OBAni.play();
                        }
                    } 
                }
            });
        });
        

    } else {
        //Post click -- user already activated - Show everything & mpLoad....
        PPA_Intro_Ani.progress(1);

        //HIDE OB when set via admin/xml 
        if(typeof OBvisibility !== 'undefined'){
            if(OBvisibility == "hideOB"){
                // console.log("hide OB version")
                PPA_NoOB.progress(1);
                
            }else{
                // console.log("normal version")
                PPA_OBAni.progress(1);
            }
        } 
    }


    if(typeof OBvisibility !== 'undefined'){
        if(OBvisibility == "hideOB") PPA_OB_Section.style.display = "none";
    }
	
	$("#copyright").html(new Date(SERVER_DATE).getFullYear());

});

function PPA_getUserSegmentCode(){
    // console.log("get user seg codes")
    let PPA_Seg_balance = document.querySelectorAll(".ob_dir_Msg .balance"),
        PPA_Seg_prospects = document.querySelectorAll(".ob_dir_Msg .prospect"),
        PPA_Seg_Lapsed = document.querySelectorAll(".ob_dir_Msg .lapsed"),
        PPA_Seg_offline = document.querySelectorAll(".ob_dir_Msg .offline"),
        PPA_Seg_preferred = document.querySelectorAll(".ob_dir_Msg .preferred"),
        PPA_Seg_prefPlus = document.querySelectorAll(".ob_dir_Msg .prefPlus"),
        PPA_Seg_prezPref = document.querySelectorAll(".ob_dir_Msg .presPreferred"),
        PPA_Seg_DecelPrezPref = document.querySelectorAll(".ob_dir_Msg .decelPresPreferred");


    /*Get user type (Buyer/Prospects)*/
    _packageGetUserType().done(function(userType){ 
        console.log("User: "+userType) 
        switch(userType.toString()){
            case "buyer":
                //BUYER
                /*Get User's segment code*/
                _packageGetSegment().done(function(segCode){ 
                switch(segCode.toString()){                            
                    case 'BL':
                    case 'LB':
                        // console.log("lapsed");  
                        for(var IARI=0;IARI<PPA_Seg_Lapsed.length;IARI++){
                            PPA_Seg_Lapsed[IARI].style.display = "block";
                            PPA_Seg_Lapsed[IARI].classList.add("Current");
                        }
                    break;                     
                    case "OFNB":
                        // console.log("offline");        
                        // $('.PPA_OB_DirMsg .offline').css({"display":"block"});  
                        for(var IARI=0;IARI<PPA_Seg_offline.length;IARI++){
                            PPA_Seg_offline[IARI].style.display = "block";
                            PPA_Seg_offline[IARI].classList.add("Current");                         
                        }                          
                    break;  
                    case "BPV2":
                        // console.log("preferred");        
                        // $('.PPA_OB_DirMsg .preferred').css({"display":"block"});    
                        for(var IARI=0;IARI<PPA_Seg_preferred.length;IARI++){
                            PPA_Seg_preferred[IARI].style.display = "block";
                            PPA_Seg_preferred[IARI].classList.add("Current");                          
                        }                        
                    break;         
                    case "BPV3":
                        // console.log("prefPlus");        
                        // $('.PPA_OB_DirMsg .prefPlus').css({"display":"block"});   
                        for(var IARI=0;IARI<PPA_Seg_prefPlus.length;IARI++){
                            PPA_Seg_prefPlus[IARI].style.display = "block";
                            PPA_Seg_prefPlus[IARI].classList.add("Current");                         
                        }                         
                    break;         
                    case "BPP":
                        // console.log("presPref");        
                        // $('.PPA_OB_DirMsg .presPref').css({"display":"block"});       
                        for(var IARI=0;IARI<PPA_Seg_prezPref.length;IARI++){
                            PPA_Seg_prezPref[IARI].style.display = "block";
                            PPA_Seg_prezPref[IARI].classList.add("Current");                          
                        }                     
                    break;  
                    case "BPPN":                                                                              
                        // console.log("decelPresPreferred");              
                        for(var IARI=0;IARI<PPA_Seg_DecelPrezPref.length;IARI++){
                            PPA_Seg_DecelPrezPref[IARI].style.display = "block";
                            PPA_Seg_DecelPrezPref[IARI].classList.add("Current");                          
                        }                     
                    break;                                                                                
                    default:
                        // console.log("Balance User");
                        // $('.PPA_OB_DirMsg .balance').css({"display":"block"});
                        for(var IARI=0;IARI<PPA_Seg_balance.length;IARI++){
                            PPA_Seg_balance[IARI].style.display = "block";
                            PPA_Seg_balance[IARI].classList.add("Current");                           
                        }
                    break;
                }                                                    
                }).fail(function(error){ 
                    console.log("Failed: "+error)    
                    //Failed? Show balance...
                    // $('.PPA_OB_DirMsg .balance').css({"display":"block"});     
                    for(var IARI=0;IARI<PPA_Seg_balance.length;IARI++){
                        PPA_Seg_balance[IARI].style.display = "block";
                        PPA_Seg_balance[IARI].classList.add("Current");
                    }       
                })
                /*Get User's segment code*/
            break;

            default:
                //PROSPECTS
                console.log("Prospect User");                                
                for(var IARI=0;IARI<PPA_Seg_prospects.length;IARI++){
                    PPA_Seg_prospects[IARI].style.display = "block";
                    PPA_Seg_prospects[IARI].classList.add("Current");
                }

            break;      
        }
    }).fail(function(error){ 
        console.log("Failed: "+error)
        // $('.PPA_OB_DirMsg .balance').css({"display":"block"});
        for(var IARI=0;IARI<PPA_Seg_balance.length;IARI++){
            PPA_Seg_balance[IARI].style.display = "block";
            PPA_Seg_balance[IARI].classList.add("Current");
        }
    });
    /*Get user type (Buyer/Prospects)*/
}