
widthcheck = 0;

function expandMenu() {
	document.getElementById("expand").style.display = 'none';
	var menu = document.getElementsByClassName("full");
	var i;
	for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "block";
	}
}

$(document).ready(function() {

	var w = window.innerWidth;

	if (w < 925) {
		widthcheck = 1;

		document.getElementById('newsimage').style.maxWidth = '1000px';

		document.getElementById('expand').style.display = 'inline-block';
		var menu = document.getElementsByClassName("full");
		var i;
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "none";
		}

		var images = document.getElementsByClassName("image");
		var i;
		for (i = 0; i < images.length; i++) {
			images[i].style.width = "90%";
		}

		var d1 = document.getElementsByClassName("description2");
		var i;
		for (i = 0; i < d1.length; i++) {
			d1[i].style.fontSize = "medium";
			d1[i].style.width = "90%";
			d1[i].style.cssFloat = "left";
			d1[i].style.marginLeft = "5%";
		}

		var d2 = document.getElementsByClassName("description3");
		var i;
		for (i = 0; i < d2.length; i++) {
			d2[i].style.fontSize = "medium";
			d2[i].style.width = "90%";
		}

		var d3 = document.getElementsByClassName("descimage2");
		var i;
		for (i = 0; i < d3.length; i++) {
			d3[i].style.width = "90%";
			d3[i].style.cssFloat = "left";
			d3[i].style.marginLeft = "5%";
			d3[i].style.marginTop = "0";
		}

		var d4 = document.getElementsByClassName("descimage3");
		var i;
		for (i = 0; i < d4.length; i++) {
			d4[i].style.width = "90%";
			d4[i].style.cssFloat = "left";
			d4[i].style.marginLeft = "5%";
			d4[i].style.marginTop = "0";
		}

		document.getElementById("footercontact").style.display = 'none';
		document.getElementById("footerlist1").style.display = 'none';
		document.getElementById("footerlist2").style.display = 'none';
	}
	else {
		widthcheck = 0;
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<925) {
    	if (widthcheck==0) {

    		document.getElementById('newsimage').style.maxWidth = '1000px';

			document.getElementById('expand').style.display = 'inline-block';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "none";
			}

			var images = document.getElementsByClassName("image");
			var i;
			for (i = 0; i < images.length; i++) {
				images[i].style.width = "90%";
			}

			var d1 = document.getElementsByClassName("description2");
			var i;
			for (i = 0; i < d1.length; i++) {
				d1[i].style.fontSize = "medium";
				d1[i].style.width = "90%";
				d1[i].style.cssFloat = "left";
				d1[i].style.marginLeft = "5%";
			}

			var d2 = document.getElementsByClassName("description3");
			var i;
			for (i = 0; i < d2.length; i++) {
				d2[i].style.fontSize = "medium";
				d2[i].style.width = "90%";
			}

			var d3 = document.getElementsByClassName("descimage2");
			var i;
			for (i = 0; i < d3.length; i++) {
				d3[i].style.width = "90%";
				d3[i].style.cssFloat = "left";
				d3[i].style.marginLeft = "5%";
				d3[i].style.marginTop = "0";
			}

			var d4 = document.getElementsByClassName("descimage3");
			var i;
			for (i = 0; i < d4.length; i++) {
				d4[i].style.width = "90%";
				d4[i].style.marginTop = "0";
			}

			document.getElementById("footercontact").style.display = 'none';
			document.getElementById("footerlist1").style.display = 'none';
			document.getElementById("footerlist2").style.display = 'none';

		}
		widthcheck = 1;
    }
    else {
    	if (widthcheck==1) {

    		document.getElementById('newsimage').style.maxWidth = '500px';

			document.getElementById('expand').style.display = 'none';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "inline-block";
			}

			var images = document.getElementsByClassName("image");
			var i;
			for (i = 0; i < images.length; i++) {
				images[i].style.width = "25%";
			}

			var d1 = document.getElementsByClassName("description2");
			var i;
			for (i = 0; i < d1.length; i++) {
				d1[i].style.fontSize = "large";
				d1[i].style.width = "73%";
				d1[i].style.cssFloat = "right";
				d1[i].style.marginLeft = "2%";
			}

			var d2 = document.getElementsByClassName("description3");
			var i;
			for (i = 0; i < d2.length; i++) {
				d2[i].style.fontSize = "large";
				d2[i].style.width = "73%";
			}

			var d3 = document.getElementsByClassName("descimage2");
			var i;
			for (i = 0; i < d3.length; i++) {
				d3[i].style.width = "15%";
				d3[i].style.marginTop = "-85px";
				d3[i].style.marginLeft = "5%";
			}

			var d4 = document.getElementsByClassName("descimage3");
			var i;
			for (i = 0; i < d4.length; i++) {
				d4[i].style.width = "15%";
				d4[i].style.cssFloat = "right";
				d4[i].style.marginTop = "-85px";
				d4[i].style.marginLeft = "0";
			}

			document.getElementById("footercontact").style.display = 'block';
			document.getElementById("footerlist1").style.display = 'block';
			document.getElementById("footerlist2").style.display = 'block';

		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);