
widthcheck = 0;

function expandMenu() {
	document.getElementById("expand").style.display = 'none';
	var menu = document.getElementsByClassName("full");
	var i;
	for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "block";
	}
}

function LizTimerSwitch1() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {LizTimerSwitch1();}, 10000);
	}
	else {
		document.getElementById("liz_img").src = "liz2.jpg";
		setTimeout(function() {LizTimerSwitch2();}, 10000);
	}
}

function LizTimerSwitch2() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {LizTimerSwitch2();}, 10000);
	}
	else {
		document.getElementById("liz_img").src = "liz.jpg";
		setTimeout(function() {LizTimerSwitch1();}, 10000);
	}
}

function DaneTimerSwitch1() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {DaneTimerSwitch1();}, 10000);
	}
	else {
		document.getElementById("dane_img").src = "dane2.jpg";
		setTimeout(function() {DaneTimerSwitch2();}, 10000);
	}
}

function DaneTimerSwitch2() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {DaneTimerSwitch2();}, 10000);
	}
	else {
		document.getElementById("dane_img").src = "dane.jpg";
		setTimeout(function() {DaneTimerSwitch1();}, 10000);
	}
}

function MattTimerSwitch1() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {MattTimerSwitch1();}, 10000);
	}
	else {
		document.getElementById("matt_img").src = "matt2.jpg";
		setTimeout(function() {MattTimerSwitch2();}, 10000);
	}
}

function MattTimerSwitch2() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {MattTimerSwitch2();}, 10000);
	}
	else {
		document.getElementById("matt_img").src = "matt.jpg";
		setTimeout(function() {MattTimerSwitch1();}, 10000);
	}
}

function TonyTimerSwitch1() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {TonyTimerSwitch1();}, 10000);
	}
	else {
		document.getElementById("tony_img").src = "tony2.jpg";
		setTimeout(function() {TonyTimerSwitch2();}, 10000);
	}
}

function TonyTimerSwitch2() {
	var w = window.innerWidth;
	if (w < 925) {
		setTimeout(function() {TonyTimerSwitch2();}, 10000);
	}
	else {
		document.getElementById("tony_img").src = "tony.jpg";
		setTimeout(function() {TonyTimerSwitch1();}, 10000);
	}
}

$(document).ready(function() {

	var w = window.innerWidth;

	if (w < 925) {
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
	}
	else {
		widthcheck = 0;
		setTimeout(function() {LizTimerSwitch1();}, 10000);
		setTimeout(function() {DaneTimerSwitch1();}, 8000);
		setTimeout(function() {MattTimerSwitch1();}, 12000);
		setTimeout(function() {TonyTimerSwitch1();}, 6000);
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<925) {
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
		}
		widthcheck = 1;
    }
    else {
    	if (widthcheck==1) {

			document.getElementById('description').style.fontSize = "large";
			document.getElementById('description').style.width = '63%';
			document.getElementById('descimage').style.width = '25%';
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
		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);