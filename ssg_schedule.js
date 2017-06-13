
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

	if (w < 800) {
		widthcheck = 1;

		//document.getElementById('expand').style.display = 'inline-block';
		//var menu = document.getElementsByClassName("full");
		//var i;
		//for (i = 0; i < menu.length; i++) {
		//	menu[i].style.display = "none";
		//}

		document.getElementById("pageBody").style.width = "600 px";
		//document.getElementById("footercontact").style.display = 'none';
		//document.getElementById("footerlist1").style.display = 'none';
		//document.getElementById("footerlist2").style.display = 'none';	
	}
	else {
		widthcheck = 0;
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<800) {
    	if (widthcheck==0) {

			//document.getElementById('expand').style.display = 'inline-block';
			//var menu = document.getElementsByClassName("full");
			//var i;
			//for (i = 0; i < menu.length; i++) {
			//	menu[i].style.display = "none";
			//}

			document.getElementById("pageBody").style.width = "600 px";

		}
		widthcheck = 1;
    }
    else {
    	if (widthcheck==1) {

			//document.getElementById('expand').style.display = 'none';
			//var menu = document.getElementsByClassName("full");
			//var i;
			//for (i = 0; i < menu.length; i++) {
			//	menu[i].style.display = "inline-block";
			//}

			document.getElementById("pageBody").style.width = "1100 px";
			//document.getElementById("footercontact").style.display = 'block';
			//document.getElementById("footerlist1").style.display = 'block';
			//document.getElementById("footerlist2").style.display = 'block';



		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);