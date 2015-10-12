
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

		document.getElementById('section1').style.width = '100%';
		document.getElementById('fb-page').style.display = 'none';

		var s2 = document.getElementsByClassName("section2");
		var i;
		for (i = 0; i < s2.length; i++) {
			s2[i].style.width = "100%";
			s2[i].style.left = "0";
		}

		document.getElementById('newstable1').style.width = '100%';
		document.getElementById('newstable2').style.width = '100%';

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

			document.getElementById('section1').style.width = '100%';
			document.getElementById('fb-page').style.display = 'none';

			var s2 = document.getElementsByClassName("section2");
			var i;
			for (i = 0; i < s2.length; i++) {
				s2[i].style.width = "100%";
				s2[i].style.left = "0";
			}

			document.getElementById('newstable1').style.width = '100%';
			document.getElementById('newstable2').style.width = '100%';

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

			document.getElementById('section1').style.width = '75%';
			document.getElementById('fb-page').style.display = 'inline-block';

			var s2 = document.getElementsByClassName("section2");
			var i;
			for (i = 0; i < s2.length; i++) {
				s2[i].style.width = "25%";
				s2[i].style.right = "0";
			}

			document.getElementById('newstable1').style.width = '50%';
			document.getElementById('newstable2').style.width = '50%';

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


window.addEventListener("resize", Resize);