
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

		document.getElementById("footercontact").style.display = 'none';
		document.getElementById("footerlist1").style.display = 'none';
		document.getElementById("footerlist2").style.display = 'none';

		document.getElementById("albumdesc").style.width = "90%";
		document.getElementById("albumdesc").style.marginTop = "0px";
		document.getElementById("albumcolumn").style.width = "90%";
		document.getElementById("cd_ad_persp").style.width = "50%";

		var icons = document.getElementsByTagName("td");
		icons[0].style.padding ="10px 10px 10px 10px";
		icons[0].style.display = "inline-block";
		icons[1].style.padding ="10px 10px 10px 10px";
		icons[1].style.display = "inline-block";
		icons[2].style.padding ="10px 10px 10px 10px";
		icons[2].style.display = "inline-block";
		icons[3].style.padding ="5px 0px 5px 10px";
		icons[3].style.display = "inline-block";

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

			document.getElementById("footercontact").style.display = 'none';
			document.getElementById("footerlist1").style.display = 'none';
			document.getElementById("footerlist2").style.display = 'none';

			document.getElementById("albumdesc").style.width = "90%";
			document.getElementById("albumdesc").style.marginTop = "0px";
			document.getElementById("albumcolumn").style.width = "90%";
			document.getElementById("cd_ad_persp").style.width = "50%";

			var icons = document.getElementsByTagName("td");
			icons[0].style.padding ="10px 10px 10px 10px";
			icons[0].style.display = "inline-block";
			icons[1].style.padding ="10px 10px 10px 10px";
			icons[1].style.display = "inline-block";
			icons[2].style.padding ="10px 10px 10px 10px";
			icons[2].style.display = "inline-block";
			icons[3].style.padding ="5px 0px 5px 10px";
			icons[3].style.display = "inline-block";
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

			document.getElementById("footercontact").style.display = 'block';
			document.getElementById("footerlist1").style.display = 'block';
			document.getElementById("footerlist2").style.display = 'block';

			document.getElementById("albumdesc").style.width = "55%";
			document.getElementById("albumdesc").style.marginTop = "55px";
			document.getElementById("albumcolumn").style.width = "80%";
			document.getElementById("cd_ad_persp").style.width = "30%";

			var icons = document.getElementsByTagName("td");
			icons[0].style.padding ="25px 25px 25px 25px";
			icons[0].style.display = "table-cell";
			icons[1].style.padding ="25px 25px 25px 25px";
			icons[1].style.display = "table-cell";
			icons[2].style.padding ="25px 25px 25px 25px";
			icons[2].style.display = "table-cell";
			icons[3].style.padding ="25px 25px 25px 25px";
			icons[3].style.display = "table-cell";
		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);