//Uncut Checks - Contest_Name(2_5MM_2_5kAWFL) - Pkg JS by VAD - 03/2024
document.addEventListener('DOMContentLoaded', UC_Init, false);	

function UC_Init(){						
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

        pkg_Contest_sect = document.querySelector("#package-contest_section"),
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
        UC_ProdSec = document.querySelector("#package-product_section");


        function updateSize() {
            // MIC_PackageDiv.textContent = window.innerWidth;

            if (window.innerWidth <= 600) {
                //Screen is 600px or below....
                // <div id="package-wrap" class="mobilePkg"></div>
                UC_PackageDiv.classList.add("mobilePkg");
                // location.reload();
            }else{
                UC_PackageDiv.classList.remove("mobilePkg");
                // location.reload();
                
            }
        }

        updateSize();
        window.addEventListener("resize", updateSize);

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
        UC_OBAni.add(function(){ document.querySelector("#mpWrap").style.display = "block"; })
        if(!UC_mobSelector){ 
            UC_OBAni.from("#disclaimersWrap",{duration:0.5,opacity:0,ease:'none'})
        }else{    
            UC_OBAni.from(".disclaimer",{duration:0.5,opacity:0,ease:'none'})                
        }           
    // OB - Animations

    // Play the intro animation
    UC_IntroAni.play();

    //Code that looks at ALL of the package's buttons...
    pkg_ActNowBtn.forEach((element,index) => {
        pkg_ActNowBtn[index].addEventListener('click', function actBtn(e){
            e.preventDefault();   
            UC_OBAni.play();
        });
    });
    //Code that looks at the package's button...
	
	$("#copyright").html(new Date().getFullYear());

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
    console.log("get user seg codes")

    let UC_Seg_balance = document.querySelectorAll(".ob_dir_Msg .balance");
    for(var IARI=0;IARI<UC_Seg_balance.length;IARI++){
        UC_Seg_balance[IARI].style.display = "block";
        UC_Seg_balance[IARI].classList.add("Current");                           
    }

}
