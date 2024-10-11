//PKG_Name - Contest_Name(5KAWFL) - V1.0 - PKG Mobile JS by Dev_Name - ??/2019

$(document).ready(function(){				
	fUpdatePersonalization();

	//Get the session storage variable... Please make the storage variable name unique for this package.
	pkgCookie = _packageGetValue("packageName_Start");

	if (!SpectrumPackageFacade.UserInfo.IsUserMerchEligible()) {
        //if NOT eligible ... do not show merch
        //NO MERCH
        $(".contestOnlySubmitButton").css("display", "block");
    } else {
        if (!pkgCookie) {
            //Set the session storage... if necessary
            //_packageSetValue("packageName_Start",true)
        } else {
            //Post click -- user already activated - Show everything & mpLoad....
            //if(window.mpLoad) mpLoad();
        }
    }

    //HIDE OB when set via admin/xml 
    var OBvisibility = spectrumContest[0][0].OBvisibility
    if(typeof OBvisibility !== 'undefined'){
        if(OBvisibility == "hideOB") $("#ob_section").css({display: "none"});
    }
	
	$("#copyright").html(new Date(SERVER_DATE).getFullYear());
	 		
});