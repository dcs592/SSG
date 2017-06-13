
widthcheck = 0;

function expandMenu() {
	document.getElementById("expand").style.display = 'none';
	var menu = document.getElementsByClassName("full");
	document.getElementById('circle').style.marginTop = '265px';
		var i;
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "block";
	}
}


$(document).ready(function() {

	var w = window.innerWidth;

	if (w < 925) {
		widthcheck = 1;
		document.getElementById("circle").style.marginLeft = 'auto';
		document.getElementById("circle").style.marginRight = 'auto';
		document.getElementById("circle").style.position = 'relative';
		document.getElementById('circle').style.marginTop = '70px';

		document.getElementById('upperleft').style.width = '90%';
		document.getElementById('upperleft').style.marginLeft = '5%';
		document.getElementById('upperright').style.width = '90%';
		document.getElementById('upperright').style.marginLeft = '5%';
		document.getElementById('upperright').style.cssFloat = 'left';
		document.getElementById('bottomright').style.width = '90%';
		document.getElementById('bottomright').style.marginLeft = '5%';
		document.getElementById('bottomright').style.cssFloat = 'left';
		document.getElementById('bottomleft').style.width = '90%';
		document.getElementById('bottomleft').style.marginLeft = '5%';

		document.getElementById('upperright').style.marginTop = '20px';
		document.getElementById('upperleft').style.marginTop = '20px';
		document.getElementById('bottomright').style.marginTop = '20px';
		document.getElementById('bottomleft').style.marginTop = '20px';

		document.getElementById("menu").style.position = "absolute";

		document.getElementById('section1').style.width = '90%';

		document.getElementById("footercontact").style.display = 'none';
		document.getElementById("footerlist1").style.display = 'none';
		document.getElementById("footerlist2").style.display = 'none';


		var fb = document.getElementsByClassName("fb-page");
		var i;
		for (i = 0; i < fb.length; i++) {
			fb[i].style.width = "90%";
			fb[i].style.marginLeft = "auto";
			fb[i].style.marginRight = "auto";
		}

		var s2 = document.getElementsByClassName("section2");
		var i;
		for (i = 0; i < s2.length; i++) {
			s2[i].style.width = "90%";
			s2[i].style.marginLeft= "0%";
		}

		document.getElementById("gad").style.fontSize = "large";
		document.getElementById("gad").style.paddingLeft = "10px";
		document.getElementById("gimage").style.display = "none";

		document.getElementById("media").style.display = "block";
		document.getElementById("media").style.marginTop = "100px";

		var icons = document.getElementsByTagName("td");
		icons[0].style.padding ="10px 10px 10px 10px";
		icons[0].style.display = "inline-block";
		icons[1].style.padding ="10px 10px 10px 10px";
		icons[1].style.display = "inline-block";
		icons[2].style.padding ="10px 10px 10px 10px";
		icons[2].style.display = "inline-block";
		icons[3].style.padding ="5px 0px 5px 10px";
		icons[3].style.display = "inline-block";
		icons[4].style.padding ="5px 0px 5px 15px";
		icons[4].style.display = "inline-block";
		icons[5].style.padding ="5px 0px 5px 15px";
		icons[5].style.display = "inline-block";

		document.getElementById("newcd").style.width = "80%";
		document.getElementById("newcd").style.marginTop = "100px";


		document.getElementById('expand').style.display = 'inline-block';
		var menu = document.getElementsByClassName("full");
		var i;
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "none";
		}
	}
	else {
		widthcheck = 0;
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<925) {
    	if (widthcheck==0) {
			document.getElementById("circle").style.marginLeft = 'auto';
			document.getElementById("circle").style.marginRight = 'auto';
			document.getElementById("circle").style.position = 'relative';
			document.getElementById('circle').style.marginTop = '70px';

			document.getElementById('upperleft').style.width = '90%';
			document.getElementById('upperleft').style.marginLeft = '5%';
			document.getElementById('upperright').style.width = '90%';
			document.getElementById('upperright').style.marginLeft = '5%';
			document.getElementById('upperright').style.cssFloat = 'left';
			document.getElementById('bottomright').style.width = '90%';
			document.getElementById('bottomright').style.marginLeft = '5%';
			document.getElementById('bottomright').style.cssFloat = 'left';
			document.getElementById('bottomleft').style.width = '90%';
			document.getElementById('bottomleft').style.marginLeft = '5%';

			document.getElementById('upperright').style.marginTop = '20px';
			document.getElementById('upperleft').style.marginTop = '20px';
			document.getElementById('bottomright').style.marginTop = '20px';
			document.getElementById('bottomleft').style.marginTop = '20px';

			document.getElementById("menu").style.position = "absolute";

			document.getElementById('section1').style.width = '90%';

			document.getElementById("footercontact").style.display = 'none';
			document.getElementById("footerlist1").style.display = 'none';
			document.getElementById("footerlist2").style.display = 'none';

			var fb = document.getElementsByClassName("fb-page");
			var i;
			for (i = 0; i < fb.length; i++) {
				fb[i].style.width = "90%";
				fb[i].style.marginLeft = "0%";
			}

			document.getElementById("gad").style.fontSize = "large";
			document.getElementById("gad").style.paddingLeft = "10px";
			document.getElementById("gimage").style.display = "none";

			var s2 = document.getElementsByClassName("section2");
			var i;
			for (i = 0; i < s2.length; i++) {
				s2[i].style.width = "90%";
				s2[i].style.marginLeft = "0%";
			}

			document.getElementById("media").style.display = "block";
			document.getElementById("media").style.marginTop = "50px";

			var icons = document.getElementsByTagName("td");
			icons[0].style.padding ="10px 10px 10px 10px";
			icons[0].style.display = "inline-block";
			icons[1].style.padding ="10px 10px 10px 10px";
			icons[1].style.display = "inline-block";
			icons[2].style.padding ="10px 10px 10px 10px";
			icons[2].style.display = "inline-block";
			icons[3].style.padding ="5px 0px 5px 10px";
			icons[3].style.display = "inline-block";
			icons[4].style.padding ="5px 0px 5px 15px";
			icons[4].style.display = "inline-block";
			icons[5].style.padding ="5px 0px 5px 15px";
			icons[5].style.display = "inline-block";

			document.getElementById("newcd").style.width = "80%";
			document.getElementById("newcd").style.marginTop = "100px";

			document.getElementById('expand').style.display = 'inline-block';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "none";
			}
		}
		widthcheck = 1;
    }
    else {
    	if (widthcheck==1) {
			document.getElementById("circle").style.marginLeft = '35%';
			document.getElementById("circle").style.position = 'absolute';
			document.getElementById('circle').style.marginTop = '150px';

			document.getElementById('upperleft').style.width = '35%';
			document.getElementById('upperleft').style.marginLeft = '8%';
			document.getElementById('upperright').style.width = '35%';
			document.getElementById('upperright').style.cssFloat = 'right';
			document.getElementById('upperright').style.marginRight = '8%';
			document.getElementById('bottomright').style.width = '35%';
			document.getElementById('bottomright').style.cssFloat = 'right';
			document.getElementById('bottomright').style.marginRight = '8%';
			document.getElementById('bottomleft').style.width = '35%';
			document.getElementById('bottomleft').style.marginLeft = '8%';

			document.getElementById('upperright').style.marginTop = '6%';
			document.getElementById('upperleft').style.marginTop = '6%';
			document.getElementById('bottomright').style.marginTop = '6%';
			document.getElementById('bottomleft').style.marginTop = '6%';

			document.getElementById("menu").style.position = "fixed";

			document.getElementById('section1').style.width = '28%';

			document.getElementById("footercontact").style.display = 'block';
			document.getElementById("footerlist1").style.display = 'block';
			document.getElementById("footerlist2").style.display = 'block';

			var fb = document.getElementsByClassName("fb-page");
			var i;
			for (i = 0; i < fb.length; i++) {
				fb[i].style.width = "28%";
				fb[i].style.marginLeft = "7%";
			}

			document.getElementById("gad").style.fontSize = "x-large";
			document.getElementById("gad").style.paddingLeft = "350px";
			document.getElementById("gimage").style.display = "block";

			document.getElementById("newcd").style.width = "60%";
			document.getElementById("newcd").style.marginTop = "100px";

			var s2 = document.getElementsByClassName("section2");
			var i;
			for (i = 0; i < s2.length; i++) {
				s2[i].style.width = "28%";
				s2[i].style.marginLeft = "7%";
			}

			document.getElementById("media").style.display = "table";
			document.getElementById("media").style.marginTop = "0";

			var icons = document.getElementsByTagName("td");
			icons[0].style.padding ="25px 25px 25px 25px";
			icons[0].style.display = "table-cell";
			icons[1].style.padding ="25px 25px 25px 25px";
			icons[1].style.display = "table-cell";
			icons[2].style.padding ="25px 25px 25px 25px";
			icons[2].style.display = "table-cell";
			icons[3].style.padding ="25px 25px 25px 25px";
			icons[3].style.display = "table-cell";
			icons[4].style.padding ="25px 25px 25px 15px";
			icons[4].style.display = "table-cell";
			icons[5].style.padding ="25px 25px 25px 15px";
			icons[5].style.display = "table-cell";

			document.getElementById("footercontact").display = 'none';

			document.getElementById('expand').style.display = 'none';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "inline-block";
			}
		}
		widthcheck = 0;
    }
}

function initQuoteCarousel() {

    var $quotesWrapper = $(".cust-quotes");
    var $quotes = $quotesWrapper.find("blockquote");

    if (!$quotes.length) {
        return;
    }

    var selectNextQuote = function () {
        // keep move first quote in dom to the end to make continous
        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

        setTimeout(selectNextQuote, $quote.data("timeout"));
    };

    setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

}

$(function () {
    initQuoteCarousel();
});


window.addEventListener("resize", Resize);