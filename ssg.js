
widthcheck = 0;


$(document).ready(function() {

	var w = window.innerWidth;

	if (w < 925) {
		widthcheck = 1;
		document.getElementById("circle").style.marginLeft = 'auto';
		document.getElementById("circle").style.marginRight = 'auto';
		document.getElementById("circle").style.position = 'relative';
		document.getElementById('circle').style.marginTop = '275px';

		document.getElementById('upperleft').style.width = '80%';
		document.getElementById('upperleft').style.marginLeft = '10%';
		document.getElementById('upperright').style.width = '80%';
		document.getElementById('upperright').style.marginLeft = '10%';
		document.getElementById('upperright').style.cssFloat = 'left';
		document.getElementById('bottomright').style.width = '80%';
		document.getElementById('bottomright').style.marginLeft = '10%';
		document.getElementById('bottomright').style.cssFloat = 'left';
		document.getElementById('bottomleft').style.width = '80%';
		document.getElementById('bottomleft').style.marginLeft = '10%';

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

			document.getElementById('upperleft').style.width = '80%';
			document.getElementById('upperleft').style.marginLeft = '10%';
			document.getElementById('upperright').style.width = '80%';
			document.getElementById('upperright').style.marginLeft = '10%';
			document.getElementById('upperright').style.cssFloat = 'left';
			document.getElementById('bottomright').style.width = '80%';
			document.getElementById('bottomright').style.marginLeft = '10%';
			document.getElementById('bottomright').style.cssFloat = 'left';
			document.getElementById('bottomleft').style.width = '80%';
			document.getElementById('bottomleft').style.marginLeft = '10%';

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
		}
		widthcheck = 0;
    }
}

window.addEventListener("resize", Resize);