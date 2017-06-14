
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

		document.getElementById('description').style.fontSize = "medium";
		document.getElementById('description').style.width = '90%';
		document.getElementById('descimage').style.width = '90%';
		document.getElementById('descimage').style.cssFloat = "left";
		document.getElementById('descimage').style.marginLeft = "5%";

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
			d1[i].style.marginLeft = "0%";
			d1[i].style.paddingLeft = "5%";
			d1[i].style.position = "relative";
			d1[i].style.marginTop = "0%";
		}

		var d3 = document.getElementsByClassName("descimage2");
		var i;
		for (i = 0; i < d3.length; i++) {
			d3[i].style.width = "90%";
			d3[i].style.cssFloat = "left";
			d3[i].style.marginLeft = "0%";
			d3[i].style.marginTop = "0";
			d3[i].style.paddingLeft = "5%";
		}

		var d4 = document.getElementsByClassName("member");
		var i;
		for (i = 0; i < d4.length; i++) {
			d4[i].style.width = "90%";
			d4[i].style.marginLeft = "0px";
			d4[i].style.textAlign = "left";
			d4[i].style.paddingLeft = "5%";
		}

		var d5 = document.getElementsByClassName("memberdesc");
		var i;
		for (i = 0; i < d5.length; i++) {
			d5[i].style.width = "90%";
		}

		var d6 = document.getElementsByClassName("instrument");
		var i;
		for (i = 0; i < d4.length; i++) {
			d6[i].style.marginTop = "60px";
			d6[i].style.float = "left";
			d6[i].style.marginLeft = "5%";
		}	

		document.getElementById("pageBody").style.width = "600 px";

	}
	else {
		widthcheck = 0;
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<900) {
    	if (widthcheck==0) {

			document.getElementById('description').style.fontSize = "medium";
			document.getElementById('description').style.width = '90%';
			document.getElementById('descimage').style.width = '90%';
			document.getElementById('descimage').style.cssFloat = "left";
			document.getElementById('descimage').style.marginLeft = "5%";

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
				d1[i].style.marginLeft = "0%";
				d1[i].style.paddingLeft = "5%";
				d1[i].style.position = "relative";
				d1[i].style.marginTop = "0%";
			}

			var d3 = document.getElementsByClassName("descimage2");
			var i;
			for (i = 0; i < d3.length; i++) {
				d3[i].style.width = "90%";
				d3[i].style.cssFloat = "left";
				d3[i].style.marginLeft = "0%";
				d3[i].style.marginTop = "0";
				d3[i].style.paddingLeft = "5%";
			}

			var d4 = document.getElementsByClassName("member");
			var i;
			for (i = 0; i < d4.length; i++) {
				d4[i].style.width = "90%";
				d4[i].style.marginLeft = "0px";
				d4[i].style.textAlign = "left";
				d4[i].style.paddingLeft = "5%";
			}

			var d5 = document.getElementsByClassName("memberdesc");
			var i;
			for (i = 0; i < d5.length; i++) {
				d5[i].style.width = "90%";
			}

			var d6 = document.getElementsByClassName("instrument");
			var i;
			for (i = 0; i < d4.length; i++) {
				d6[i].style.marginTop = "60px";
				d6[i].style.float = "left";
				d6[i].style.marginLeft = "5%";
			}	

			document.getElementById("pageBody").style.width = "600 px";
		}
		widthcheck = 1;
    }
    else {
    	if (widthcheck==1) {

			document.getElementById('description').style.fontSize = "large";
			document.getElementById('description').style.width = '53%';
			document.getElementById('descimage').style.width = '35%';
			document.getElementById('descimage').style.cssFloat = "right";
			document.getElementById('descimage').style.marginLeft = "0";

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
				d1[i].style.width = "55%";
				d1[i].style.cssFloat = "left";
				d1[i].style.marginLeft = "40%";
				d1[i].style.marginTop = "55px";
				d1[i].style.paddingLeft = "30px";
				d1[i].style.position = "absolute";
			}

			var d3 = document.getElementsByClassName("descimage2");
			var i;
			for (i = 0; i < d3.length; i++) {
				d3[i].style.width = "40%";
				d3[i].style.marginTop = "0px";
				d3[i].style.marginLeft = "0%";
				d3[i].style.paddingLeft = "10px";
				d3[i].style.position = "relative";
			}

			var d4 = document.getElementsByClassName("member");
			var i;
			for (i = 0; i < d4.length; i++) {
				d4[i].style.width = "auto";
				d4[i].style.marginLeft = "40%";
				d4[i].style.textAlign = "center";
				d4[i].style.paddingLeft = "30px";
			}

			var d5 = document.getElementsByClassName("memberdesc");
			var i;
			for (i = 0; i < d5.length; i++) {
				d5[i].style.width = "73%";
			}

			var d6 = document.getElementsByClassName("instrument");
			var i;
			for (i = 0; i < d4.length; i++) {
				d6[i].style.marginTop = "20px";
				d6[i].style.float = "right";
				d6[i].style.marginLeft = "0px";
			}	

			document.getElementById("pageBody").style.width = "1100 px";
		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);