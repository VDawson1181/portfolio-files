//Uncut Checks - Contest_Name(2_5MM_2_5kAWFL) - Pkg JS by VAD - 03/2024
document.addEventListener('DOMContentLoaded', UC_Init, false);	

function UC_Init(){						
	fUpdatePersonalization();
    UC_GetUserSegmentCode();


    		//Randomly display coupons...
            
		// var couponSet=$("#package-contest_section main .checksContainer div").toArray();

        // let couponSet = document.querySelectorAll("#package-contest_section main .checksContainer div"),
        // couponSetArr = Object.values(couponSet);
		// couponSetArr.sort(function(){return 0.5-Math.random()});
        // console.log(couponSetArr);


    // Intro Animation
    let UC_PackageDiv = document.querySelector("#package-wrap"),
        UC_mobSelector = UC_PackageDiv.classList.contains("mobilePkg");

        let coupon_counter = 1, coupon_number;
        let OB_coupon_counter = 1, OB_coupon_number;

        // if(!UC_mobSelector){ 
        //     coupon_number = 8;
        // }else{            
        //     coupon_number = 3;
        // }

        // var OB_coupon_number = 12, OB_coupon_counter = 1;
        
        !UC_mobSelector ? coupon_number = 8 : coupon_number = 5;
        !UC_mobSelector ? OB_coupon_number = 12 : OB_coupon_number = 8;
        
    createCoupons(coupon_number,coupon_counter);
    createBenefitCoupons(OB_coupon_number, OB_coupon_counter);
    
    
    let pkg_Contest_sect = document.querySelector("#package-contest_section"),
        pkg_ActNowBtn = document.querySelectorAll("#package-contest_section .actNowBtn"),
        // pkg_Contest_MainCpy = new SplitText("#package-contest_section main h6",{type:"words,lines"}),
        pkg_Contest_MainCpy = document.querySelectorAll("#package-contest_section main .contestMainText h6"),
        pkg_Contest_normalCheck = document.querySelectorAll("#package-contest_section main .checksContainer .check"),
        pkg_Contest_upfrontCheck = document.querySelectorAll("#package-contest_section main .checksContainer .upfront"),        
        pkg_Contest_Footer_Cpy_Mobile = document.querySelectorAll("#package-contest_section footer h6"),        
        UC_OrderSec = document.querySelector("#package-order_section"),
        UC_OBSec = document.querySelector("#package-ob_section"),
        UC_OBSec_CurrHdr_P = document.querySelector("#package-ob_section .Current .ob_Hdr p"),
        // UC_OBSec_Main = document.querySelector("#package-ob_section .Current .ob_Main"),
        UC_OB_BenefitCard = document.querySelectorAll("#package-ob_section .Current .mainFeatureRepeat .benefitCard"),        
        UC_OB_MainCpy = document.querySelectorAll("#package-ob_section .Current .ob_Main .mainFeatureTxt p"),
        UC_OB_Footer_Cpy = document.querySelectorAll("#package-ob_section .Current .ob_Main .ob_Ftr"),
        UC_ProdSec = document.querySelector("#package-product_section"),
        OBvisibility = spectrumContest[0][0].OBvisibility,  //HIDE OB when set via admin/xml 
        pkgCookie = _packageGetValue("UC_Start");  //Get the session storage variable... Please make the storage variable name unique for this package.


    // Button Pulse Animation
    let UC_BtnPulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.25, repeat: -1})
        UC_BtnPulse.to(pkg_ActNowBtn,{
        keyframes: {
            "0%":{scale:1},
            "10%":{scale:0.91},
            "17%":{scale:0.98},
            "33%":{scale:0.87},
            "45%":{scale:1},            
            easeEach: "power1.inOut"
        },
        ease:'none',
        duration: 2});

    // console.log(pkg_Contest_MainCpy);
    
    let UC_IntroAni = new TimelineMax({paused: true, delay: 0.5, smoothChildTiming: true, onComplete:function(){ console.log("inital ani done"); UC_BtnPulse.play(); } });
        UC_IntroAni.to(pkg_Contest_sect,{duration:0.5,opacity:1,display:"block",ease:"none"})
        UC_IntroAni.to([pkg_Contest_upfrontCheck,pkg_Contest_normalCheck],{duration:0.25, opacity:1,left:"0px",stagger:{each:0.1,from:"start",grid:"auto",ease:"none"}})
        UC_IntroAni.to(pkg_Contest_MainCpy,{duraton: 0.5, opacity:1,stagger:{each:0.2,from:"start",grid:"auto",ease:"none"}})
        if(!UC_mobSelector){ 
            // console.log("Desktop Version")
            UC_IntroAni.from([pkg_Contest_Footer_Cpy_Mobile,pkg_ActNowBtn],{duration:0.5,opacity:0,ease:"none"})
        }else{            
            // console.log("Mobile Version")             
            let pkg_Contest_Footer_Cpy = document.querySelectorAll("#package-contest_section footer p");
            UC_IntroAni.from([pkg_Contest_Footer_Cpy_Mobile,pkg_ActNowBtn,pkg_Contest_Footer_Cpy],{duration:0.5,opacity:0,ease:"none"})
        }
        
        

    // OB - Animations

    //Ternary operator to check if the package is mobile or desktop -- then set the colorElement accordingly.
    let colorElement;
        !UC_mobSelector ? colorElement = "body" : colorElement = UC_PackageDiv;

    let UC_OBAni= new TimelineMax({paused: true, onStart:function(){  UC_BtnPulse.pause(); _packageSetValue("UC_Start",true); } });
        UC_OBAni.to(colorElement,{duration:0.5,backgroundImage:'none',backgroundColor:'#005826',ease:'none'},0)
        UC_OBAni.to(pkg_Contest_sect,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        UC_OBAni.to(UC_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'}) 
        UC_OBAni.from(UC_OBSec_CurrHdr_P,{duration:0.5,x:'-50px',opacity:'0',ease:'none'}) 
        UC_OBAni.from(UC_OB_BenefitCard,{duration:0.25, opacity:0,left:"-500px",stagger:{each:0.1,from:"start",grid:"auto",ease:"none"}})        
        UC_OBAni.from(UC_OB_MainCpy,{opacity:0,x:'-50px',stagger:{each:0.2,from:"start",grid:"auto",ease:"none"}})
        UC_OBAni.from(UC_OB_Footer_Cpy,{duration:0.5,opacity:'0',bottom:'472px',ease:'none'}) 
        UC_OBAni.add(function(){ if(window.mpLoad) mpLoad(); })
        if(!UC_mobSelector){ 
            UC_OBAni.from("#disclaimersWrap",{duration:0.5,opacity:0,ease:'none'})
        }else{    
            UC_OBAni.from(".disclaimer",{duration:0.5,opacity:0,ease:'none'})                
        }           
    // OB - Animations

    // NO OB - Animations
    let UC_NoOB= new TimelineMax({paused: true, onStart:function(){ UC_BtnPulse.pause(); _packageSetValue("UC_Start",true); } });      
        UC_NoOB.to(colorElement,{duration:0.5,backgroundImage:'none',backgroundColor:'#005826',ease:'none'},0)
        UC_NoOB.set(UC_OBSec,{display:'none',opacity:0},0)           
        UC_NoOB.to(pkg_Contest_sect,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        UC_NoOB.to(UC_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'},0)                
        UC_NoOB.set([UC_ProdSec,"#multipageWrap"],{display:'block',opacity:1})
        UC_NoOB.add(function(){ if(window.mpLoad) mpLoad(); })
        if(!UC_mobSelector){ 
            UC_NoOB.to("#disclaimersWrap",{duration:0.5,opacity:1,ease:'none'})
        }else{    
            UC_NoOB.to(".disclaimer",{duration:0.5,opacity:1,ease:'none'})                
        }
    // NO OB - Animations


    if (!pkgCookie) {
        // Play the intro animation
        UC_IntroAni.play();

        //Code that looks at ALL of the package's buttons...
        pkg_ActNowBtn.forEach((element,index) => {
            pkg_ActNowBtn[index].addEventListener('click', function actBtn(e){
                e.preventDefault();   

                if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
                    //if NOT eligible ... do not show merch
                    // console.log("Non EComm Version")
                    _packageFormSubmit();
                } else {                            
                    //HIDE OB when set via admin/xml 
                    if(typeof OBvisibility !== 'undefined'){
                        if(OBvisibility == "hideOB"){
                            UC_NoOB.play();                            
                        }else{
                            UC_OBAni.play();
                        }
                    } 
                }
            });
        });
        //Code that looks at the package's button...
        
    } else {
        //Post click -- user already activated - Show everything & mpLoad....
        console.log("Reloaded Page... Show everything & mpLoad....")
        UC_IntroAni.progress(1);

        if(typeof OBvisibility !== 'undefined'){
            if(OBvisibility == "hideOB"){
                UC_NoOB.progress(1);
            }else{
                UC_OBAni.progress(1);
            }
        } 
    }

    //HIDE OB when set via admin/xml 
    if(typeof OBvisibility !== 'undefined'){
        if(OBvisibility == "hideOB") UC_OBSec.style.display = "none";
    }
	
	$("#copyright").html(new Date(SERVER_DATE).getFullYear());

};

// Show 9 coupons.... Clone 7 regular checks, and display the 1 upfront check in the 2nd position. 

function createCoupons(coupon_number,coupon_counter){

    if(coupon_counter < coupon_number){
        var contest_elem = document.querySelector('.checksContainer div:nth-child('+coupon_counter+')');
        contest_elem.style.order = coupon_counter;

        // Create a copy of it
        var contest_clone = contest_elem.cloneNode(true);

        // Update the ID and add a class
        contest_clone.id = 'check'+coupon_counter;

        // Inject it into the DOM
        contest_elem.after(contest_clone);


        coupon_counter++;
		
		createCoupons(coupon_number,coupon_counter);
		
	}else{
        const LastElem = document.querySelector('.checksContainer .upfront');
        // Update the ID and add a class
        LastElem.id = 'check'+(coupon_number+1);
		return false;
	}

}

// Show 9 coupons.... Clone 7 regular checks, and display the 1 upfront check in the 2nd position. 
// var OB_coupon_number = 12, OB_coupon_counter = 1;
function createBenefitCoupons(OB_coupon_number, OB_coupon_counter){

    // Get the element
    if(OB_coupon_counter < OB_coupon_number){
        var OB_elem = document.querySelector('.Current .mainFeatureRepeat li:nth-child('+OB_coupon_counter+')');
        OB_elem.style.order = OB_coupon_counter;

        // Create a copy of it
        var OB_clone = OB_elem.cloneNode(true);

        // Update the ID and add a class
        OB_clone.id = 'benefitCoupon'+OB_coupon_counter;

        // Inject it into the DOM
        OB_elem.after(OB_clone);

        OB_coupon_counter++;		
		createBenefitCoupons(OB_coupon_number, OB_coupon_counter);
	}

}


function UC_GetUserSegmentCode(){

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
                            for(var UCI=0;UCI<ImpInfo_Seg_Lapsed.length;UCI++){
                                ImpInfo_Seg_Lapsed[UCI].style.display = "block";
                                ImpInfo_Seg_Lapsed[UCI].classList.add("Current");
                            }
                        break;                     
                        case "OFNB":
                            console.log("offline");        
                            for(var UCI=0;UCI<ImpInfo_Seg_offline.length;UCI++){
                                ImpInfo_Seg_offline[UCI].style.display = "block";
                                ImpInfo_Seg_offline[UCI].classList.add("Current");                         
                            }                          
                        break;  
                        case "BPV2":
                            console.log("preferred");        
                            for(var UCI=0;UCI<ImpInfo_Seg_preferred.length;UCI++){
                                ImpInfo_Seg_preferred[UCI].style.display = "block";
                                ImpInfo_Seg_preferred[UCI].classList.add("Current");                          
                            }                        
                        break;         
                        case "BPV3":
                            console.log("prefPlus");        
                            for(var UCI=0;UCI<ImpInfo_Seg_prefPlus.length;UCI++){
                                ImpInfo_Seg_prefPlus[UCI].style.display = "block";
                                ImpInfo_Seg_prefPlus[UCI].classList.add("Current");                         
                            }                         
                        break;         
                        case "BPP":
                            console.log("presPref");        
                            for(var UCI=0;UCI<ImpInfo_Seg_prezPref.length;UCI++){
                                ImpInfo_Seg_prezPref[UCI].style.display = "block";
                                ImpInfo_Seg_prezPref[UCI].classList.add("Current");                          
                            }                     
                        break;  
                        case "BPPN":                                                                              
                            console.log("decelPresPreferred");              
                            for(var UCI=0;UCI<ImpInfo_Seg_DecelPrezPref.length;UCI++){
                                ImpInfo_Seg_DecelPrezPref[UCI].style.display = "block";
                                ImpInfo_Seg_DecelPrezPref[UCI].classList.add("Current");                          
                            }                     
                        break;                                                                                
                        default:
                            console.log("Balance User");
                            for(var UCI=0;UCI<ImpInfo_Seg_balance.length;UCI++){
                                ImpInfo_Seg_balance[UCI].style.display = "block";
                                ImpInfo_Seg_balance[UCI].classList.add("Current");                           
                            }
                        break;
                    }                                                    
                }).fail(function(error){ 
                    console.log("Failed: "+error)    
                    //Failed? Show balance... 
                    for(var UCI=0;UCI<ImpInfo_Seg_balance.length;UCI++){
                        ImpInfo_Seg_balance[UCI].style.display = "block";
                        ImpInfo_Seg_balance[UCI].classList.add("Current");
                    }       
                })
                /*Get User's segment code*/
            break;

            default:
                //PROSPECTS
                console.log("Prospect User");                                
                for(var UCI=0;UCI<ImpInfo_Seg_prospects.length;UCI++){
                    ImpInfo_Seg_prospects[UCI].style.display = "block";
                    ImpInfo_Seg_prospects[UCI].classList.add("Current");
                }
            break;      
        }
    }).fail(function(error){ 
        console.log("Failed: "+error)
        for(var UCI=0;UCI<ImpInfo_Seg_balance.length;UCI++){
            ImpInfo_Seg_balance[UCI].style.display = "block";
            ImpInfo_Seg_balance[UCI].classList.add("Current");
        }
    });
    /*Get user type (Buyer/Prospects)*/
}
