// Dynamic Content variables and sample values
Enabler.setProfileId(10566924);
var devDynamicContent = {};

devDynamicContent.Flux_SLC_LEX = [{}];
devDynamicContent.Flux_SLC_LEX[0]._id = 0;
devDynamicContent.Flux_SLC_LEX[0].Id = 1;
devDynamicContent.Flux_SLC_LEX[0].Report_Label = "1__LEX d\u00EEner de 5 \u00E0 7";
devDynamicContent.Flux_SLC_LEX[0].Mag_type = "";
devDynamicContent.Flux_SLC_LEX[0].Message = "LEX d\u00EEner de 5 \u00E0 7";
devDynamicContent.Flux_SLC_LEX[0].Wording_1 = "Visio<br\/>de 5 \u00E0 7 ";
devDynamicContent.Flux_SLC_LEX[0].Wording_2_optionnel_ = "et d\u00EEner improvis\u00E9 en t\u00EAte \u00E0 t\u00EAte ?";
devDynamicContent.Flux_SLC_LEX[0].URL_img1_300x250_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img1_300x250_.Url = "https://s0.2mdn.net/creatives/assets/3832058/300x250_LEX_Visio5a7_ecran1-2.jpg";
devDynamicContent.Flux_SLC_LEX[0].URL_img1_300x600_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img1_300x600_.Url = "https://s0.2mdn.net/creatives/assets/3832058/300x600_LEX_Visio5a7_ecran1-2.jpg";
devDynamicContent.Flux_SLC_LEX[0].URL_img1_728x90_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img1_728x90_.Url = "https://s0.2mdn.net/creatives/assets/3832058/728x90_LEX_Visio5a7_ecran1-2.jpg";
devDynamicContent.Flux_SLC_LEX[0].Txt_Logo1 = "Livraison Express";
devDynamicContent.Flux_SLC_LEX[0].Wording_3 = "Faites-vous livrer en 1h.";
devDynamicContent.Flux_SLC_LEX[0].URL_img2_300x250_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img2_300x250_.Url = "https://s0.2mdn.net/creatives/assets/3832058/300x250_LEX_Visio5a7_ecran1-2.jpg";
devDynamicContent.Flux_SLC_LEX[0].URL_img2_300x600_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img2_300x600_.Url = "https://s0.2mdn.net/creatives/assets/3832058/300x600_LEX_Visio5a7_ecran1-2.jpg";
devDynamicContent.Flux_SLC_LEX[0].URL_img2_728x90_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img2_728x90_.Url = "https://s0.2mdn.net/creatives/assets/3832058/728x90_LEX_Visio5a7_ecran1-2.jpg";
devDynamicContent.Flux_SLC_LEX[0].Txt_Logo2 = "Livraison Express";
devDynamicContent.Flux_SLC_LEX[0].ML_wording_optionnel_ = "";
devDynamicContent.Flux_SLC_LEX[0].Wording_4 = "Nos services s\'adaptent.";
devDynamicContent.Flux_SLC_LEX[0].URL_img3_300x250_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img3_300x250_.Url = "https://s0.2mdn.net/creatives/assets/3832058/300x250_LEX_Visio5a7_ecran3.jpg";
devDynamicContent.Flux_SLC_LEX[0].URL_img3_300x600_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img3_300x600_.Url = "https://s0.2mdn.net/creatives/assets/3832058/300x600_LEX_Visio5a7_ecran3.jpg";
devDynamicContent.Flux_SLC_LEX[0].URL_img3_728x90_ = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img3_728x90_.Url = "https://s0.2mdn.net/creatives/assets/3832058/728x90_LEX_Visio5a7_ecran3.jpg";
devDynamicContent.Flux_SLC_LEX[0].Txt_Logo3 = "Vos modes de vie changent.";
devDynamicContent.Flux_SLC_LEX[0].ML = "";
devDynamicContent.Flux_SLC_LEX[0].ML_wording_optionnel__2 = "";
devDynamicContent.Flux_SLC_LEX[0].Wording_5 = "";
devDynamicContent.Flux_SLC_LEX[0].URL_img4_300x250_ = "";
devDynamicContent.Flux_SLC_LEX[0].URL_img4_300x600_ = "";
devDynamicContent.Flux_SLC_LEX[0].URL_img4_728x90_ = "";
devDynamicContent.Flux_SLC_LEX[0].Txt_Logo4 = "";
devDynamicContent.Flux_SLC_LEX[0].CTA = "J\'EN PROFITE ";
devDynamicContent.Flux_SLC_LEX[0].URL_img_picto = {};
devDynamicContent.Flux_SLC_LEX[0].URL_img_picto.Url = "https://s0.2mdn.net/creatives/assets/3832058/picto_3.png";
devDynamicContent.Flux_SLC_LEX[0].Wording = "Nous continuons \u00E0 prendre soin de vous.";
devDynamicContent.Flux_SLC_LEX[0].Couleur_bg = "#aa7f73";
devDynamicContent.Flux_SLC_LEX[0].URL_redirec = {};
devDynamicContent.Flux_SLC_LEX[0].URL_redirec.Url = "https://www.carrefour.fr/";
Enabler.setDevDynamicContent(devDynamicContent);


// a toujours mettre
window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}

function enablerInitHandler() {
	var txtlogo1 = dynamicContent.Flux_SLC_LEX[0].Txt_Logo1;
    var txtlogo2 = dynamicContent.Flux_SLC_LEX[0].Txt_Logo2;
    var txtlogo3 = dynamicContent.Flux_SLC_LEX[0].Txt_Logo3;
    var txtlogo4 = dynamicContent.Flux_SLC_LEX[0].Txt_Logo4;
    txtlogo1 = txtlogo1.replace('<br/>',' ');
    txtlogo2 = txtlogo2.replace('<br/>',' ');
    txtlogo3 = txtlogo3.replace('<br/>',' ');
    txtlogo4 = txtlogo4.replace('<br/>',' ');
	document.querySelector(".part-left .case1").innerHTML = txtlogo1;
    document.querySelector(".part-left .case2").innerHTML = txtlogo2;
    document.querySelector(".part-left .case3").innerHTML = txtlogo3;
    document.querySelector(".part-left .case4").innerHTML = txtlogo4;

    if (dynamicContent.Flux_SLC_LEX[0].Txt_Logo2 !== "") {
        $div = ".case2";
        $class = ".case1";
        setTimeout(function() {caseIn($div);}, 5700);
        setTimeout(function() {caseOut($class);}, 5700);
        if (dynamicContent.Flux_SLC_LEX[0].Txt_Logo3 !== "") {
            $div2 = ".case3";
            $class2 = ".case1, .case2";
            setTimeout(function() {caseIn($div2);}, 8000);
            setTimeout(function() {caseOut($class2);}, 8000);
            if (dynamicContent.Flux_SLC_LEX[0].Txt_Logo4 !== "") {
                $div3 = ".case4";
                $class3 = ".case1, .case2, .case3";
                setTimeout(function() {caseIn($div3);}, 11000);
                setTimeout(function() {caseOut($class3);}, 11000);
            }
        }
    } 
    if (dynamicContent.Flux_SLC_LEX[0].Txt_Logo3 !== "") {
        $div2 = ".case3";
        $class2 = ".case1, .case2";
        setTimeout(function() {caseIn($div2);}, 8000);
        setTimeout(function() {caseOut($class2);}, 8000);
        if (dynamicContent.Flux_SLC_LEX[0].Txt_Logo4 !== "") {
            $div3 = ".case4";
            $class3 = ".case1, .case2, .case3";
            setTimeout(function() {caseIn($div3);}, 11000);
            setTimeout(function() {caseOut($class3);}, 11000);
        }
    }
    if (dynamicContent.Flux_SLC_LEX[0].Txt_Logo4 !== "") {
        $div3 = ".case4";
        $class3 = ".case1, .case2, .case3";
        setTimeout(function() {caseIn($div3);}, 11000);
        setTimeout(function() {caseOut($class3);}, 11000);
	}
	

	document.querySelector(".part-left img").src = dynamicContent.Flux_SLC_LEX[0].URL_img1_728x90_.Url;
    if (dynamicContent.Flux_SLC_LEX[0].URL_img2_728x90_.Url !== "") {
        setTimeout(function() {document.querySelector(".part-left img").src = dynamicContent.Flux_SLC_LEX[0].URL_img2_728x90_.Url;}, 6000);
    }
    if (dynamicContent.Flux_SLC_LEX[0].URL_img3_728x90_.Url !== "") {
        setTimeout(function() {document.querySelector(".part-left img").src = dynamicContent.Flux_SLC_LEX[0].URL_img3_728x90_.Url;}, 8000);
    }
    if (dynamicContent.Flux_SLC_LEX[0].URL_img4_728x90_ !== "") {
        setTimeout(function() {document.querySelector(".part-left img").src = dynamicContent.Flux_SLC_LEX[0].URL_img4_728x90_;}, 11000);
	}
	
	document.querySelector(".part-right .step2 .serv1").innerHTML = dynamicContent.Flux_SLC_LEX[0].Wording_1.replaceAll('<br/>', ' ');;
    document.querySelector(".part-right .step2 .serv2").innerHTML = dynamicContent.Flux_SLC_LEX[0].Wording_2_optionnel_;
    if (dynamicContent.Flux_SLC_LEX[0].Wording_1.length > 38) {
        $(".step2").css ({
            "font-size" : "12px"
        })
    }
    if (dynamicContent.Flux_SLC_LEX[0].Wording_2_optionnel_ !== "") {
        $(".serv2").css ({
            "display" : "block"
        })
    }

    if (dynamicContent.Flux_SLC_LEX[0].ML_wording_optionnel_ !== "") {
        $(".step2bis").css ({
            "height" : "70px"
        })
    }
    if (dynamicContent.Flux_SLC_LEX[0].ML_wording_optionnel__2 !== "") {
        $(".step3 .claim").css ({
            "height" : "70px"
        })
        $(".serv4").css ({
            "text-align" : "left"
        })
    }

	document.querySelector(".part-right .step2bis .serv3").innerHTML = dynamicContent.Flux_SLC_LEX[0].Wording_3;
    document.querySelector(".part-right .modalites2").innerHTML = dynamicContent.Flux_SLC_LEX[0].ML_wording_optionnel_;

    document.querySelector(".part-right .step3 .serv4").innerHTML = dynamicContent.Flux_SLC_LEX[0].Wording_4;
    document.querySelector(".part-right .step3 .modalites").innerHTML = dynamicContent.Flux_SLC_LEX[0].ML_wording_optionnel__2;

	document.querySelector(".part-right .step4 .claim2-right").innerHTML = dynamicContent.Flux_SLC_LEX[0].Wording_5;
    if (dynamicContent.Flux_SLC_LEX[0].Wording_5 !== "") {
        $(".anim .part-right").css ({
            "animation-duration" : "15s"
        })
        $(".step5, .connectout").css ({
            "animation-delay" : "15s"
        })
        $div4 = ".step4"
        setTimeout(function() {caseIn($div4);}, 11000);
        setTimeout(function() {caseOut($div4);}, 14000);
        $(".case4").css ({
        	"display" : "block"
        })
    }

    document.querySelector(".part-right .step5 .cta").innerHTML = dynamicContent.Flux_SLC_LEX[0].CTA;
    document.querySelector(".part-right .step5 img").src = dynamicContent.Flux_SLC_LEX[0].URL_img_picto.Url;

    $(".part-right").css ({
        "background-color" : dynamicContent.Flux_SLC_LEX[0].Couleur_bg
    })
    document.querySelector(".ad").addEventListener('click', redirection);
    function redirection() {
    Enabler.exitOverride("yourExitID", dynamicContent.Flux_SLC_LEX[0].URL_redirec.Url);
    }

	var maxLoop = 3
	var timeBetweenTwoloops = 17500
	var idElement = 'banner'


	var loopIndex = 0
	function loop() {
		var banner = document.getElementById(idElement), newone = banner.cloneNode(true);
		banner.parentNode.replaceChild(newone, banner);

		if (loopIndex < (maxLoop - 1)) {
			setTimeout(function () {
				loop();
			}, timeBetweenTwoloops)
			loopIndex++
		}
	}

	window.onload = function() {
		setTimeout(function () {
			loop();
		}, timeBetweenTwoloops)
	};
	function caseIn ($div) {
		$($div).css ({
			"animation-name" : "fadeIn",
			"animation-duration": "0.5s",
			"animation-fill-mode" : "forwards"
		})
	}
	function caseOut ($class) {
		$($class).css ({
			"animation-name" : "fadeOut",
			"animation-duration": "0.5s",
			"animation-fill-mode" : "forwards"
		})
	}
}