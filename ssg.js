
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

	if (w < 900) {
		widthcheck = 1;
		document.getElementById("circle").style.marginLeft = 'auto';
		document.getElementById("circle").style.marginRight = 'auto';
		document.getElementById("circle").style.position = 'relative';
		document.getElementById('circle').style.marginTop = '60px';


		document.getElementById("menu").style.position = "absolute";

		document.getElementById("pageBody").style.width = '800px';

		document.getElementById("main").style.marginLeft = '0px';
		document.getElementById("main").style.width = '500px';
		document.getElementById("fb").style.height = "346px";

/*
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
*/


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
    if (w<900) {
    	if (widthcheck==0) {
			document.getElementById("circle").style.marginLeft = 'auto';
			document.getElementById("circle").style.marginRight = 'auto';
			document.getElementById("circle").style.position = 'relative';
			document.getElementById('circle').style.marginTop = '0px';

			document.getElementById("menu").style.position = "absolute";

			document.getElementById("pageBody").style.width = '800px';

/*
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
*/

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

			document.getElementById("menu").style.position = "fixed";

			document.getElementById("pageBody").style.width = '1100px';
/*
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
*/

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