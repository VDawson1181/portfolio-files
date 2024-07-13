/*
20180713 added overrides for NPN and disclaimers (lead gen 2.0 review support)
20181213 - added "Disable caching of AJAX responses", markm
20190123 - updates for aghtd support - markm 
20190313 - make mpLoad "work" - markm
20190509 - add mpload check for #mpWrap and try again as it wasnt always showing "products" for return scenario, markm
20190806.1 - add segment dropdown, markm
20191031 - Added Credit Card & Merch Inelligible support - VAD
20191101 - add merch ineligable & credit card controls to template, val
20200120.1 - add hideOB support in nav, markm
20200430 - Remove OneTime Lapsed in segment Nav, VAD
20200831 - added REG and ability to hide nav and testing strSrc var, markm
20200916.1 - add WOM optins, markm
20210209.1 - fix promotional optins, markm
*/

console.log("LOAD loadPreviews.js Local")

// var strSrc = "//cdn-imageconv.pchassets.com/spectrum/packageReview/"; //PROD
var strSrc = "js/"; //PROD
//var strSrc = "//creativedept.classic.pchad.com/Libraries/Packages/Spectrum/_global/prod/packagereview/" //testing

// $.ajaxSetup ({
// 	// Disable caching of AJAX responses
// 	cache: false
// });
 

$("#uniNav1 preview").load(strSrc + "preview_content.txt #uni_header", function(){

    var hide=false;
    if (typeof window.hideTemplate != "undefined"){
        hide = hideTemplate
    }

    if(!hide){
        if (typeof window.templateSegs == "undefined"){
            window.templateSegs=[];
            window.templateSegs.push(["0","prospect"]);
            window.templateSegs.push(["1","buyer balance"]);      
            window.templateSegs.push(["OFNB","Offline"]);
            window.templateSegs.push(["LB,BL","Lapsed"]);      
            window.templateSegs.push(["BPV2","Preferred"]);
            window.templateSegs.push(["BPV3","Preferred Plus"]);
            window.templateSegs.push(["BPP","Presidential Preferred"]);
            window.templateSegs.push(["BPPN","Decelarating Pres. Preferred"]);
            // window.templateSegs.push(["BLV2","OneTime Lapsed"]);
        }

        var strHTML = "<div id='templateSchmemlate' style='margin: 0 auto;text-align:center;color:#ddd;font-size:20px;'>"
        strHTML += "Hide OB? <input type='checkbox' id='template-data-hideOB'></input>&nbsp;&nbsp;"
        strHTML += "Credit Card? <input type='checkbox' id='template-data-creditcard'></input>&nbsp;&nbsp;"
        strHTML += "Merch Ineligible? <input type='checkbox' id='template-data-merchineligible'></input>&nbsp;&nbsp;"
        strHTML += "<select style='font-size:20px;' id='template-data-segments'>"
        for(var iii=0;iii<window.templateSegs.length; iii++){
            strTempOption = window.templateSegs[iii][1]
            if(window.templateSegs[iii][0]!= "0" && window.templateSegs[iii][0]!= "1") strTempOption+=" (" + window.templateSegs[iii][0] + ")"
            strHTML += "<option value='"+window.templateSegs[iii][0]+"'>"+strTempOption+"</option>"
        }
        strHTML += "</select>&nbsp;&nbsp;&nbsp;"
        strHTML += "<input type='button' value='GO' id='gogogo' style='font-size:20px;'></input>&nbsp;&nbsp;"
        strHTML += "<input type='button' id='templateReset' value='Reset' onclick='tempalteReset()' style='font-size:20px;'></input>"
        strHTML += "</div>"

        $("#uni_header .unrecognized-bar .content").html(strHTML);



        // templateSegment="0"; //default (prospect)
        // if(getURLValue("score")){
        //     console.log("TEMPLATE: HAS SCORE")
        //     if(getURLValue("seg")){
        //         console.log("TEMPLATE: HAS SEG")
        //         templateSegment = getURLValue("seg")
        //     }else{
        //         templateSegment = "1"; //balance
        //     }
        // }
        // $("#template-data-segments").val(templateSegment)

        // /*Credit card Check*/
        // if(getURLValue("creditcard")){
        //     $('#template-data-creditcard').attr( "checked", true );
        // }else{
        //     $('#template-data-creditcard').attr( "checked", false );
        // }

        // /* merch ineligable check */
        // if(getURLValue("merch") == "false"){
        //     $('#template-data-merchineligible').attr( "checked", true );
        // }else{        
        //     $('#template-data-merchineligible').attr( "checked", false );
        // }
        
        // //HIDE OB CHECK
        // if(getURLValue("OBvisibility")=="hideOB"){
        //     $('#template-data-hideOB').attr( "checked", true );
        // }else{
        //     $('#template-data-hideOB').attr( "checked", false );
        // }

        //HIDE OB - since HideOB and Merch Inelligable wont show the seg OB its unnessary and therfore disabled.
        /*
        $("#template-data-hideOB").on("change", function(){
            if($("#template-data-hideOB").is(":checked")){
                $("#template-data-segments").prop("disabled","disabled")
            }else{
                $("#template-data-segments").prop("disabled","")
            }
        })
        */

        document.getElementById("gogogo").addEventListener("click", getTemplateUrl); 
    }

});

$("#spctrmOffer1 preview").load(strSrc + "preview_content.txt #preview_spctrmOffer1");

// if(getURLValue("leadgen")){
// 	$("#spctrmCopy1 preview").load(strSrc + "preview_content.txt #preview_spctrmCopy1_leadgen");
// }else{
// 	$("#spctrmCopy1 preview").load(strSrc + "preview_content.txt #preview_spctrmCopy1");
// }

// if(getURLValue("leadgen")){
// 	$("#spctrmCopy2 preview").load(strSrc+"preview_content.txt #preview_spctrmCopy2_leadgen");
// }else{
//     //LITE DISCLAIMER (FOR REG)
//     if($("#spctrmCopy2 .preview_disclaimer_lite").length === 0){
//         $("#spctrmCopy2 preview").load(strSrc+"preview_content.txt #preview_spctrmCopy2");
//     }else{
//         $("#spctrmCopy2 .preview_disclaimer_lite").load(strSrc+"preview_content.txt #preview_disclaimer_lite");        
//     }
// }

//REG HIDDEN
// $("#registration .registration_preview_text").load(strSrc+"preview_content.txt #preview_registration_hidden", function() { fUpdatePersonalization() });

//REG STANDARD
$("#spctrmReg .registration_preview_standard").load(strSrc+"preview_content.txt #preview_registration_standard", function(){
    $("#ZI").click(function(){
        $(".rf-hidden").css({display:"block"})
    })

});

//REG SMALL
$("#spctrmReg .registration_preview_small").load(strSrc+"preview_content.txt #preview_registration_small");

//OPTINS
// console.log("OPTIN",$("#optinWrap .preview_optins_promotional").length)
// if($("#optinWrap .preview_optins_promotional").length > 0){
//     $("#optinWrap preview").load(strSrc+"preview_content.txt #preview_optins_promotional");
// }else if($("#optinWrap .peview_optins_WOM").length > 0){
//     $("#optinWrap preview").load(strSrc+"preview_content.txt #preview_optins_reg_WOM");
// }else{
//     $("#optinWrap preview").load(strSrc+"preview_content.txt #preview_optins_reg");
// }

function mpLoad(){
	if($("#mpWrap").length){
		$("#mpWrap").css({display: "block"});
	}else{
		console.log("FAKE MPLOAD cannot find #mpWrap. Trying again...")
		window.setTimeout(function(){
			mpLoad()
		},444)
	}
}

function tempalteReset(){
    sessionStorage.clear(); 
    document.location = document.location;
}

function getTemplateUrl(){  
    //REMOVE items cntrolled by NAV but keep anything else.

	var currQS = document.location.search
	if(currQS != ""){
        //if its not empty then remove the known things we control - keep anythign thats outside the temaplte.
		currQS = currQS.replace("?","")
        currQS = currQS.replace("score="+getURLValue("score"),"")
        currQS = currQS.replace("&seg="+getURLValue("seg"),"")     
        currQS = currQS.replace("&creditcard=true","")
        currQS = currQS.replace("&merch=false","") 
        currQS = currQS.replace("&OBvisibility=hideOB","")

        //append a "&" only if its still not cleared out
        if(currQS != "") currQS = "&" + currQS
	}
	
	var reloadUrl = "//" + document.location.host + document.location.pathname + "?"
    	
    if($("#template-data-segments").val()!="0"){
        //NOT PROSPECT
        reloadUrl += "score=Group1"
        if($("#template-data-segments").val()!="1"){
            //NOT BALANCE
            reloadUrl += "&seg="+$("#template-data-segments").val()
        }
    }

    if(($('#template-data-creditcard').is(":checked"))){ 
        currQS += "&creditcard=true";
    }

    if(($('#template-data-merchineligible').is(":checked"))){ 
        currQS += "&merch=false";
    }
    
    //HIDE OB
    if($("#template-data-hideOB").is(":checked")){
        reloadUrl += "&OBvisibility=hideOB"; //standard
    }

	reloadUrl += currQS;

	//console.log(reloadUrl,currQS)
	document.location = reloadUrl
}