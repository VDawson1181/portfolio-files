//Important Info - 15MM - V1.0 - Desktop Pkg by VAD - 12/2023
// Also checking to see if window.DmaAttributesByGmt != null - VAD  
 
document.addEventListener('DOMContentLoaded', impInfo_Init, false);	

function impInfo_Init(){			
    getUserSegmentCode();

    let ImpInfo_PackageDiv = document.querySelector("#package-wrap"),
        ImpInfo_ContestSec = document.querySelector("#package-contest_section"),
        ImpInfo_ContestSecTriangle = document.querySelector("#package-contest_section #contestTopTriangle"),
        ImpInfo_ContestBdyHdr_SplitText = document.querySelector("#package-contest_section #contestMain h6"),
        ImpInfo_ContestBdyMain_SplitText = document.querySelector("#package-contest_section #contestMain p"),
        ImpInfo_OrderSec = document.querySelector("#package-order_section"),
        ImpInfo_ProdSec = document.querySelector("#package-product_section"),
        ImpInfo_OB_Section = document.querySelector("#package-ob_section"),
        ImpInfo_OB_MainCpy = document.querySelector("#package-ob_section .ob_dir_Msg .Current"),
        ImpInfo_OB_MainCpy_UL = document.querySelectorAll("#package-ob_section .ob_dir_Msg .Current :is(.ob_Underline)"),
        ImpInfo_OB_FtrCpy = document.querySelector("#package-ob_section .ob_dir_Msg .Current h4"),
        ImpInfo_mobSelector = ImpInfo_PackageDiv.classList.contains("mobilePkg"),
        ImpInfo_ConBtn = document.querySelector("#impInfo_Btn");    

    // if(!ImpInfo_mobSelector){ 
    //     console.log("DT")
    // }else{    
    //     console.log("Mob")
    // }

    var ImpInfo_BtnPulse = new TimelineMax({ paused: true, delay:0.5,repeatDelay:1.25, repeat: -1})
        ImpInfo_BtnPulse.to(ImpInfo_ConBtn,{
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

    var ImpInfo_Intro_Ani = new TimelineMax({paused: true, delay:0.5, onComplete:function(){ ImpInfo_BtnPulse.play(); } });
        ImpInfo_Intro_Ani.from(ImpInfo_ContestBdyHdr_SplitText,{duration:0.5,opacity:0,ease:'none'})
        ImpInfo_Intro_Ani.to(ImpInfo_ContestSecTriangle,{duration:0.25,top:0,ease:'none'})
        if(!ImpInfo_mobSelector){ 
            console.log("DT")
            ImpInfo_Intro_Ani.to(ImpInfo_ContestSecTriangle,{duration:0.25,top:'-15px',yoyo:true,repeat:5,ease:'none'},'+=0.5')
        }
        ImpInfo_Intro_Ani.from(ImpInfo_ContestBdyMain_SplitText,{duration:0.5,opacity:0,ease:'none'},'CopyIn+=0.5')
        ImpInfo_Intro_Ani.from(ImpInfo_ConBtn,{duration:0.5,opacity:0,ease:'none'},'CopyIn+=0.5')        

    
    // OB - Animations
    var ImpInfo_OB_ULCopyAni = new SplitText(ImpInfo_OB_MainCpy_UL, {type:"words,chars"}), ImpInfo_chars = ImpInfo_OB_ULCopyAni.chars;

    var ImpInfo_OBAni= new TimelineMax({paused: true, onStart:function(){ ImpInfo_BtnPulse.pause(); } });                
        ImpInfo_OBAni.to("body",{duration:0.5,backgroundImage:'none',backgroundColor:'#00128c',ease:'none'},0)
        ImpInfo_OBAni.to(ImpInfo_ContestSec,{duration:0.5,display:'none',opacity:0,ease:'none'},0)
        ImpInfo_OBAni.to(ImpInfo_OrderSec,{duration:0.5,display:'block',opacity:1,ease:'none'})  
        ImpInfo_OBAni.from(ImpInfo_OB_MainCpy,{duration:0.5,opacity:0,ease:'none'})  
        ImpInfo_OBAni.from(ImpInfo_chars, {duration:0.1, opacity:0, stagger:0.05, ease:"steps("+ImpInfo_chars.length+")"})
        // if(!ImpInfo_mobSelector){ 
        //     console.log("DT")
        //     ImpInfo_OBAni.to(ImpInfo_OB_MainCpy_UL,{duration:0.5,backgroundSize:"100% 3px",stagger:0.5,ease:'none'},"underlineStart")
        // }else{    
        //     console.log("Mob")
        //     ImpInfo_OBAni.to(ImpInfo_OB_MainCpy_UL,{duration:0.5,backgroundSize:"100% 1px",stagger:0.5,ease:'none'},"underlineStart")
        // }
        ImpInfo_OBAni.from(ImpInfo_OB_FtrCpy,{duration:0.5,opacity:0,stagger:0.5,ease:'none'},"underlineStart")  
        ImpInfo_OBAni.add(function(){ 
            // if(window.mpLoad) mpLoad(); 
            document.querySelector("#mpWrap").style.display = "block";
        })

        if(!ImpInfo_mobSelector){ 
            ImpInfo_OBAni.from("#disclaimersWrap",{duration:0.5,opacity:0,ease:'none'})
        }else{    
            ImpInfo_OBAni.from(".disclaimer",{duration:0.5,opacity:0,ease:'none'})                
        }                      
    // OB - Animations

    ImpInfo_Intro_Ani.play();
    
    ImpInfo_ConBtn.addEventListener('click', function actBtn(e){
        e.preventDefault();   
        ImpInfo_OBAni.play();
    });
	
	$("#copyright").html(new Date(SERVER_DATE).getFullYear());

};

function getUserSegmentCode(){
    console.log("get user seg codes")

    let ImpInfo_Seg_balance = document.querySelectorAll(".ob_dir_Msg .balance"),
    ImpInfo_Seg_prospects = document.querySelectorAll(".ob_dir_Msg .prospect"),
    ImpInfo_Seg_Lapsed = document.querySelectorAll(".ob_dir_Msg .lapsed"),
    ImpInfo_Seg_offline = document.querySelectorAll(".ob_dir_Msg .offline"),
    ImpInfo_Seg_preferred = document.querySelectorAll(".ob_dir_Msg .preferred"),
    ImpInfo_Seg_prefPlus = document.querySelectorAll(".ob_dir_Msg .prefPlus"),
    ImpInfo_Seg_prezPref = document.querySelectorAll(".ob_dir_Msg .presPreferred"),
    ImpInfo_Seg_DecelPrezPref = document.querySelectorAll(".ob_dir_Msg .decelPresPreferred");
    
    for(var IARI=0;IARI<ImpInfo_Seg_balance.length;IARI++){
        ImpInfo_Seg_balance[IARI].style.display = "block";
        ImpInfo_Seg_balance[IARI].classList.add("Current");                           
    }

}