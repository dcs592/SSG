
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

		var dates = document.getElementsByClassName("date");
		var i;
		for (i = 0; i < dates.length; i++) {
			dates[i].style.position = 'relative';
			dates[i].style.marginLeft = 'auto';
			dates[i].style.marginRight = 'auto';
			dates[i].style.width = '80%';
			dates[i].style.paddingLeft = '0px';
			dates[i].style.paddingRight = '0px';
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

			document.getElementById("footercontact").style.display = 'none';
			document.getElementById("footerlist1").style.display = 'none';
			document.getElementById("footerlist2").style.display = 'none';


			var dates = document.getElementsByClassName("date");
			var i;
			for (i = 0; i < dates.length; i++) {
				dates[i].style.position = 'relative';
				dates[i].style.marginLeft = 'auto';
				dates[i].style.marginRight = 'auto';
				dates[i].style.width = '80%';
				dates[i].style.paddingLeft = '0px';
				dates[i].style.paddingRight = '0px';
			}

		}
		widthcheck = 1;
    }
    else {
    	if (widthcheck==1) {

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

			document.getElementById("footercontact").style.display = 'block';
			document.getElementById("footerlist1").style.display = 'block';
			document.getElementById("footerlist2").style.display = 'block';


			var dates = document.getElementsByClassName("date");
			var i;
			for (i = 0; i < dates.length; i++) {
				dates[i].style.position = 'absolute';
				dates[i].style.marginLeft = '15%';
				dates[i].style.width = '125px';
				dates[i].style.paddingLeft = '15px';
				dates[i].style.paddingRight = '15px';
			}

		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);