// Make It Count - Contest_Name(15MM_POAL) - Pkg JS by VAD - 02/2024
document.addEventListener('DOMContentLoaded', MIC_Init, false);	

function MIC_Init(){						
	fUpdatePersonalization();
    MIC_GetUserSegmentCode();

    let MIC_PackageDiv = document.querySelector("#package-wrap"),
        MIC_ContestSec = document.querySelector("#package-contest_section"),              
        MIC_ContestCopy = document.querySelector("#package-contestCopy"),              
        MIC_ContestCopy_H6 = document.querySelectorAll("#package-contestCopy h6"),              
        MIC_ContestCopy_p = document.querySelector("#package-contestCopy p"),              
        MIC_ContestCopy_SpecBox = document.querySelectorAll("#package-contestCopy .MIC_Special_Box"),              
        MIC_ContestCopy_SpecBox_H5 = document.querySelectorAll("#package-contestCopy .MIC_Special_Box h5"),              
        MIC_ContestFtr = document.querySelector("#package-contestFtr"),              
        MIC_ContestFtr_H6 = document.querySelector("#package-contestFtr h6"),              
        MIC_ContestArrow_Left = document.querySelector("#arrowLeft"),              
        MIC_ContestArrow_Right = document.querySelector("#arrowRight"),              
        MIC_ConBtn = document.querySelectorAll("#MIC_Button"),   
        MIC_OrderSec = document.querySelector("#package-order_section"),
        MIC_OBSec = document.querySelector("#package-ob_section"),
        MIC_OBSec_CurrHdr = document.querySelector("#package-ob_section .Current .ob_Hdr"),
        MIC_OBSec_CurrHdr_H6 = document.querySelector("#package-ob_section .Current .ob_Hdr h6"),
        MIC_OBSec_CurrHdr_P = document.querySelector("#package-ob_section .Current .ob_Hdr p"),
        MIC_OBSec_Main = document.querySelector("#package-ob_section .Current .ob_Main"),
        MIC_OBSec_Main_LI = document.querySelectorAll("#package-ob_section .Current .ob_Main ul li"),
        MIC_OBSec_FooterCpy = document.querySelector("#package-ob_section .Current .ob_Main .obFooterCpy"),            
        
        MIC_ProdSec = document.querySelector("#package-product_section"),
        MIC_mobSelector = MIC_PackageDiv.classList.contains("mobilePkg"),
        OBvisibility = spectrumContest[0][0].OBvisibility,  //HIDE OB when set via admin/xml 
        pkgCookie = _packageGetValue("MIC_Start");  //Get the session storage variable... Please make the storage variable name unique for this package.

        // if(!MIC_mobSelector){ 
        //     console.log("Desktop Version")
        // }else{            
        //     console.log("Mobile Version")             
        // }

    // Button Pulse Animation
    var MIC_BtnPulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.25, repeat: -1})
        MIC_BtnPulse.to(MIC_ConBtn,{
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
    
    // Intro Animation
    var MIC_IntroAni= new TimelineMax({paused: true, delay:0.5, onComplete:function(){ MIC_BtnPulse.play(); } });    
        MIC_IntroAni.to(MIC_ContestSec,{display:'block',opacity:1},0)                   
        
        if(!MIC_mobSelector){ 
            console.log("Desktop Only");
            MIC_IntroAni.from(MIC_ContestCopy,{duration:0.5,height:'0',ease:'none'},"stage1+=0.5")
            MIC_IntroAni.from('#HowieImg',{duration:0.5,opacity:'0',left:'-500px',ease:'none'},"stage1+=0.5")
            MIC_IntroAni.from('#DanielleImg',{duration:0.5,opacity:'0',right:'-500px',ease:'none'},"stage1+=0.5")
        }
        MIC_IntroAni.from(MIC_ContestCopy_H6,{duration:0.5,stagger: 2, opacity:'0',ease:'none'},"stage2")
        MIC_IntroAni.from(MIC_ContestCopy_p,{duration:0.5, opacity:'0',ease:'none'},"stage2+=2")
        MIC_IntroAni.from(MIC_ContestCopy_SpecBox,{duration:0.5,width:'55px',stagger: 2, opacity:'0',ease:'none'},"stage2+=0.5")
        MIC_IntroAni.from(MIC_ContestCopy_SpecBox_H5,{duration:0.5,opacity:'0',stagger: 2,ease:'none'},"stage2+=1")
        MIC_IntroAni.to(MIC_ContestCopy_SpecBox_H5,{duration:0.5,backgroundSize:'100% 100%',stagger: 2,ease:'none'},"stage2+=1.5")
        MIC_IntroAni.from(MIC_ContestFtr,{duration:0.5,opacity:'0',ease:'none'},"stage3")
        if(!MIC_mobSelector){ 
            console.log("Desktop Only");
            MIC_IntroAni.to(MIC_ContestFtr_H6,{duration:0.5,backgroundSize:'100% 100%',ease:'none'},"stage3+=0.5")    
            MIC_IntroAni.from([MIC_ContestArrow_Left,MIC_ContestArrow_Right],{duration:0.5,height:'0',ease:'none'},"stage2")
            MIC_IntroAni.from([MIC_ContestArrow_Left,MIC_ContestArrow_Right],{duration:0.5,width:'3px',ease:'none'},"stage2")
            MIC_IntroAni.from(MIC_ConBtn,{duration:0.5,opacity:'0',ease:'none'},"stage2+=0.75")
        }else{
            MIC_IntroAni.from(MIC_ConBtn,{duration:0.5,opacity:'0',ease:'none'},"stage3")
            MIC_IntroAni.to(MIC_ContestFtr_H6,{duration:0.5,backgroundSize:'100% 65%',ease:'none'},"stage3+=0.5")    
        }
        

    // OB - Animations
    var MIC_OBAni= new TimelineMax({paused: true, onStart:function(){  MIC_BtnPulse.pause(); _packageSetValue("MIC_Start",true); } });
    
    if(!MIC_mobSelector){ 
        console.log("Desktop Version")
        MIC_OBAni.to("body",{duration:0.5,backgroundImage:'none',backgroundColor:'#fff98e',ease:'none'},0)
    }else{            
        console.log("Mobile Version")             
        MIC_OBAni.to(MIC_PackageDiv,{duration:0.5,backgroundImage:'none',backgroundColor:'#fff98e',ease:'none'},0)
    }
        MIC_OBAni.to(MIC_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        MIC_OBAni.to(MIC_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'}) 
        MIC_OBAni.from(MIC_OBSec_CurrHdr,{duration:0.5,top:'-750px',ease:'none'}) 
        MIC_OBAni.from(MIC_OBSec_CurrHdr_H6,{duration:0.5,scale:'0',rotate:'0deg',ease:'bounce.out'}) 
        MIC_OBAni.from(MIC_OBSec_CurrHdr_P,{duration:0.5,opacity:'0',ease:'none'}) 
        MIC_OBAni.from(MIC_OBSec_Main,{duration:0.5,top:'-750px',ease:'none'},'+=0.5')
        MIC_OBAni.from(MIC_OBSec_Main_LI,{duration:0.5,scale:'0',ease:'bounce.out',stagger:0.5})
        MIC_OBAni.from(MIC_OBSec_FooterCpy,{duration:0.5,opacity:'0',ease:'none'})
        MIC_OBAni.add(function(){ if(window.mpLoad) mpLoad(); })
        if(!MIC_mobSelector){ 
            MIC_OBAni.from("#disclaimersWrap",{duration:0.5,opacity:0,ease:'none'})
        }else{    
            MIC_OBAni.from(".disclaimer",{duration:0.5,opacity:0,ease:'none'})                
        }           
    // OB - Animations

    // NO OB - Animations
    var MIC_NoOB= new TimelineMax({paused: true, onStart:function(){ MIC_BtnPulse.pause(); _packageSetValue("MIC_Start",true); } });      
        MIC_NoOB.set(MIC_OBSec,{display:'none',opacity:0},0)           
        MIC_NoOB.to(MIC_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        MIC_NoOB.to(MIC_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'},0)                
        MIC_NoOB.set([MIC_ProdSec,"#multipageWrap"],{display:'block',opacity:1})
        MIC_NoOB.add(function(){ if(window.mpLoad) mpLoad(); })
        if(!MIC_mobSelector){ 
            MIC_NoOB.to("#disclaimersWrap",{duration:0.5,opacity:1,ease:'none'})
        }else{    
            MIC_NoOB.to(".disclaimer",{duration:0.5,opacity:1,ease:'none'})                
        }
    // NO OB - Animations


    if (!pkgCookie) {
        // Play the intro animation
        MIC_IntroAni.play();

        //Code that looks at ALL of the package's buttons...
        MIC_ConBtn.forEach((element,index) => {
            MIC_ConBtn[index].addEventListener('click', function actBtn(e){
                e.preventDefault();   

                if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
                    //if NOT eligible ... do not show merch
                    // console.log("Non EComm Version")
                    _packageFormSubmit();
                } else {                            
                    //HIDE OB when set via admin/xml 
                    if(typeof OBvisibility !== 'undefined'){
                        if(OBvisibility == "hideOB"){
                            MIC_NoOB.play();                            
                        }else{
                            MIC_OBAni.play();
                        }
                    } 
                }
            });
        });
        //Code that looks at the package's button...
        
    } else {
        //Post click -- user already activated - Show everything & mpLoad....
        console.log("Reloaded Page... Show everything & mpLoad....")
        MIC_IntroAni.progress(1);

        if(typeof OBvisibility !== 'undefined'){
            if(OBvisibility == "hideOB"){
                MIC_NoOB.progress(1);
            }else{
                MIC_OBAni.progress(1);
            }
        } 
    }

    //HIDE OB when set via admin/xml 
    if(typeof OBvisibility !== 'undefined'){
        // if(OBvisibility == "hideOB") $("#package-ob_section").css({display: "none"});
        if(OBvisibility == "hideOB") MIC_OBSec.style.display = "none";
    }
	
	$("#copyright").html(new Date(SERVER_DATE).getFullYear());

};


function MIC_GetUserSegmentCode(){

    let ImpInfo_Seg_balance = document.querySelectorAll(".ob_dir_Msg .balance"),
        ImpInfo_Seg_prospects = document.querySelectorAll(".ob_dir_Msg .prospect"),
        ImpInfo_Seg_Lapsed = document.querySelectorAll(".ob_dir_Msg .lapsed"),
        ImpInfo_Seg_offline = document.querySelectorAll(".ob_dir_Msg .offline"),
        ImpInfo_Seg_preferred = document.querySelectorAll(".ob_dir_Msg .preferred"),
        ImpInfo_Seg_prefPlus = document.querySelectorAll(".ob_dir_Msg .prefPlus"),
        ImpInfo_Seg_prezPref = document.querySelectorAll(".ob_dir_Msg .presPreferred"),
        ImpInfo_Seg_DecelPrezPref = document.querySelectorAll(".ob_dir_Msg .decelPresPreferred");
    
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
                            console.log("lapsed");  
                            for(var IARI=0;IARI<ImpInfo_Seg_Lapsed.length;IARI++){
                                ImpInfo_Seg_Lapsed[IARI].style.display = "block";
                                ImpInfo_Seg_Lapsed[IARI].classList.add("Current");
                            }
                        break;                     
                        case "OFNB":
                            console.log("offline");        
                            for(var IARI=0;IARI<ImpInfo_Seg_offline.length;IARI++){
                                ImpInfo_Seg_offline[IARI].style.display = "block";
                                ImpInfo_Seg_offline[IARI].classList.add("Current");                         
                            }                          
                        break;  
                        case "BPV2":
                            console.log("preferred");        
                            for(var IARI=0;IARI<ImpInfo_Seg_preferred.length;IARI++){
                                ImpInfo_Seg_preferred[IARI].style.display = "block";
                                ImpInfo_Seg_preferred[IARI].classList.add("Current");                          
                            }                        
                        break;         
                        case "BPV3":
                            console.log("prefPlus");        
                            for(var IARI=0;IARI<ImpInfo_Seg_prefPlus.length;IARI++){
                                ImpInfo_Seg_prefPlus[IARI].style.display = "block";
                                ImpInfo_Seg_prefPlus[IARI].classList.add("Current");                         
                            }                         
                        break;         
                        case "BPP":
                            console.log("presPref");        
                            for(var IARI=0;IARI<ImpInfo_Seg_prezPref.length;IARI++){
                                ImpInfo_Seg_prezPref[IARI].style.display = "block";
                                ImpInfo_Seg_prezPref[IARI].classList.add("Current");                          
                            }                     
                        break;  
                        case "BPPN":                                                                              
                            console.log("decelPresPreferred");              
                            for(var IARI=0;IARI<ImpInfo_Seg_DecelPrezPref.length;IARI++){
                                ImpInfo_Seg_DecelPrezPref[IARI].style.display = "block";
                                ImpInfo_Seg_DecelPrezPref[IARI].classList.add("Current");                          
                            }                     
                        break;                                                                                
                        default:
                            console.log("Balance User");
                            for(var IARI=0;IARI<ImpInfo_Seg_balance.length;IARI++){
                                ImpInfo_Seg_balance[IARI].style.display = "block";
                                ImpInfo_Seg_balance[IARI].classList.add("Current");                           
                            }
                        break;
                    }                                                    
                }).fail(function(error){ 
                    console.log("Failed: "+error)    
                    //Failed? Show balance... 
                    for(var IARI=0;IARI<ImpInfo_Seg_balance.length;IARI++){
                        ImpInfo_Seg_balance[IARI].style.display = "block";
                        ImpInfo_Seg_balance[IARI].classList.add("Current");
                    }       
                })
                /*Get User's segment code*/
            break;

            default:
                //PROSPECTS
                console.log("Prospect User");                                
                for(var IARI=0;IARI<ImpInfo_Seg_prospects.length;IARI++){
                    ImpInfo_Seg_prospects[IARI].style.display = "block";
                    ImpInfo_Seg_prospects[IARI].classList.add("Current");
                }
            break;      
        }
    }).fail(function(error){ 
        console.log("Failed: "+error)
        for(var IARI=0;IARI<ImpInfo_Seg_balance.length;IARI++){
            ImpInfo_Seg_balance[IARI].style.display = "block";
            ImpInfo_Seg_balance[IARI].classList.add("Current");
        }
    });
    /*Get user type (Buyer/Prospects)*/
}