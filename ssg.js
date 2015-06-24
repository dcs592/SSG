
widthcheck = 0;


$(document).ready(function() {

	var w = window.innerWidth;

	if (w < 925) {
		widthcheck = 1;
		document.getElementById("circle").style.marginLeft = 'auto';
		document.getElementById("circle").style.marginRight = 'auto';
		document.getElementById("circle").style.position = 'relative';
		document.getElementById('circle').style.marginTop = '275px';

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
		document.getElementById('section2').style.width = '100%';
		document.getElementById('section2').style.cssFloat = 'left';
		document.getElementById('divider2').style.display = 'inline-block';
		document.getElementById('section2').style.marginTop = '-8px';

		document.getElementById('newstable1').style.width = '100%';
		document.getElementById('newstable2').style.width = '100%';

		document.getElementById('description').style.fontSize = "medium";
		document.getElementById('description').style.width = '90%';
		document.getElementById('descimage').style.width = '90%';
		document.getElementById('descimage').style.cssFloat = "left";
		document.getElementById('descimage').style.marginLeft = "5%";
		document.getElementById('songdesc').style.fontSize = "medium";

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
	}
})

function Resize() {
    var w = window.innerWidth;
    if (w<925) {
    	if (widthcheck==0) {
			document.getElementById("circle").style.marginLeft = 'auto';
			document.getElementById("circle").style.marginRight = 'auto';
			document.getElementById("circle").style.position = 'relative';
			document.getElementById('circle').style.marginTop = '275px';

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
			document.getElementById('section2').style.width = '100%';
			document.getElementById('section2').style.cssFloat = 'left';
			document.getElementById('divider2').style.display = 'inline-block';
			document.getElementById('section2').style.marginTop = '-8px';

			document.getElementById('newstable1').style.width = '100%';
			document.getElementById('newstable2').style.width = '100%';

			document.getElementById('description').style.fontSize = "medium";
			document.getElementById('description').style.width = '90%';
			document.getElementById('descimage').style.width = '90%';
			document.getElementById('descimage').style.cssFloat = "left";
			document.getElementById('descimage').style.marginLeft = "5%";
			document.getElementById('songdesc').style.fontSize = "medium";

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
			document.getElementById("circle").style.marginLeft = '35%';
			document.getElementById("circle").style.position = 'absolute';
			document.getElementById('circle').style.marginTop = '175px';

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

			document.getElementById('upperright').style.marginTop = '8%';
			document.getElementById('upperleft').style.marginTop = '8%';
			document.getElementById('bottomright').style.marginTop = '6%';
			document.getElementById('bottomleft').style.marginTop = '6%';

			document.getElementById("menu").style.position = "fixed";

			document.getElementById('section1').style.width = '75%';
			document.getElementById('section2').style.width = '25%';
			document.getElementById('section2').style.cssFloat = 'right';
			document.getElementById('divider2').style.display = 'none';
			document.getElementById('section2').style.marginTop = '-5px';

			document.getElementById('newstable1').style.width = '50%';
			document.getElementById('newstable2').style.width = '50%';

			document.getElementById('description').style.fontSize = "large";
			document.getElementById('description').style.width = '63%';
			document.getElementById('descimage').style.width = '25%';
			document.getElementById('descimage').style.cssFloat = "right";
			document.getElementById('descimage').style.marginLeft = "0";
			document.getElementById('songdesc').style.fontSize = "large";

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