
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

	if (w < 900) {
		widthcheck = 1;

		document.getElementById('expand').style.display = 'inline-block';
		var menu = document.getElementsByClassName("full");
		var i;
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "none";
		}

		document.getElementById("pageBody").style.width = "600 px";

/*
		var icons = document.getElementsByTagName("td");
		icons[0].style.padding ="5px 5px 5px 0px";
		icons[1].style.padding ="5px 5px 5px 5px";
		icons[2].style.padding ="5px 0px 5px 5px";
		*/
	}
	else {
		widthcheck = 0;
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<900) {
    	if (widthcheck==0) {

			document.getElementById('expand').style.display = 'inline-block';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "none";
			}

			document.getElementById("pageBody").style.width = "600 px";

/*
			var icons = document.getElementsByTagName("td");
			icons[0].style.padding ="5px 5px 5px 0px";
			icons[1].style.padding ="5px 5px 5px 5px";
			icons[2].style.padding ="5px 0px 5px 5px";
			*/
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

			document.getElementById("pageBody").style.width = "1100 px";
/*
			var icons = document.getElementsByTagName("td");
			icons[0].style.padding ="25px 25px 25px 25px";
			icons[1].style.padding ="25px 25px 25px 25px";
			icons[2].style.padding ="25px 25px 25px 25px";
			*/
		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);