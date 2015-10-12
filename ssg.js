
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
	//	document.getElementById('schedule').style.width = '100%';
		document.getElementById('fb-page').style.display = 'none';
	//	document.getElementById('section3').style.width = '100%';
	//	document.getElementById('section3').style.position = 'relative';
	//	document.getElementById('divider2').style.display = 'inline-block';
	//	document.getElementById('divider3').style.display = 'inline-block';
	//	document.getElementById('fb-page').style.marginTop = '-30px';
	//	document.getElementById('section3').style.marginTop = '-30px';

		document.getElementById('newstable1').style.width = '100%';
		document.getElementById('newstable2').style.width = '100%';

	//	document.getElementById('description').style.fontSize = "medium";
	//	document.getElementById('description').style.width = '90%';
	//	document.getElementById('descimage').style.width = '90%';
	//	document.getElementById('descimage').style.cssFloat = "left";
	//	document.getElementById('descimage').style.marginLeft = "5%";
	//	document.getElementById('songdesc').style.fontSize = "medium";

	//	document.getElementById('image1').style.width = '90%';

		document.getElementById('expand').style.display = 'inline-block';
		var menu = document.getElementsByClassName("full");
		var i;
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "none";
		}

	/*	var images = document.getElementsByClassName("image");
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
		}*/
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
		//	document.getElementById('schedule').style.width = '100%';
			document.getElementById('fb-page').style.display = 'none';
		//	document.getElementById('section3').style.width = '100%';
		//	document.getElementById('section3').style.position = 'relative';
		//	document.getElementById('divider2').style.display = 'inline-block';
		//	document.getElementById('divider3').style.display = 'inline-block';
		//	document.getElementById('fb-page').style.marginTop = '-30px';
		//	document.getElementById('section3').style.marginTop = '-30px';

			document.getElementById('newstable1').style.width = '100%';
			document.getElementById('newstable2').style.width = '100%';

		/*	document.getElementById('description').style.fontSize = "medium";
			document.getElementById('description').style.width = '90%';
			document.getElementById('descimage').style.width = '90%';
			document.getElementById('descimage').style.cssFloat = "left";
			document.getElementById('descimage').style.marginLeft = "5%";
			document.getElementById('songdesc').style.fontSize = "medium";

			document.getElementById('image1').style.width = '90%';
*/
			document.getElementById('expand').style.display = 'inline-block';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "none";
			}
/*
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
			}*/
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
		//	document.getElementById('schedule').style.width = '60%';
			document.getElementById('fb-page').style.display = 'inline-block';
		//	document.getElementById('section3').style.width = '40%';
		//	document.getElementById('section3').style.position = 'absolute';
		//	document.getElementById('divider2').style.display = 'none';
		//	document.getElementById('divider3').style.display = 'none';
		//	document.getElementById('fb-page').style.marginTop = '0';
		//	document.getElementById('section3').style.marginTop = '0';

			document.getElementById('newstable1').style.width = '50%';
			document.getElementById('newstable2').style.width = '50%';
/*
			document.getElementById('description').style.fontSize = "large";
			document.getElementById('description').style.width = '63%';
			document.getElementById('descimage').style.width = '25%';
			document.getElementById('descimage').style.cssFloat = "right";
			document.getElementById('descimage').style.marginLeft = "0";
			document.getElementById('songdesc').style.fontSize = "large";

			document.getElementById('image1').style.width = '50%';
*/
			document.getElementById('expand').style.display = 'none';
			var menu = document.getElementsByClassName("full");
			var i;
			for (i = 0; i < menu.length; i++) {
				menu[i].style.display = "inline-block";
			}
/*
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
			}*/
		}
		widthcheck = 0;
    }
}


window.addEventListener("resize", Resize);