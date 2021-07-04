<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!--<script async src="https://arc.io/widget.min.js#Vxv9MvRT"></script> -->
	<title> nj7Music</title>
    <link rel="manifest" href="/manifest.json"></link><meta name="theme-color" content="#ffffff">
	<meta name="author" content="nj, Tuhin Pal and Bootstrap contributors">
	<meta name="generator" content="nj AutoBot Model 1O1">
    <link rel="icon shortcut" type="image/x-icon" href="/images/favicon.png" />
	<link href="/css/themes/dark/bootstrap.min.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.6.4/plyr.css" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-104532450-8"></script>
	<script src="/js/api-config.js"></script>
	<script>window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-104532450-8');
        </script>
        </head>
        <body >
          <div class="container min-height">
            <center><br><br><a href="/">
            <img src="/images/logo.png" alt="JioSaavn Music" width="208px"></a><br><br><br></center>
            <center>
                <div class="card">
                    <div id="status"></div>
                    <div class="card-body">
                        <div>
                            <audio id="aplayer" width="100%" playsinline controls>
                                <source src="" type="audio/mpeg"> Your browser does not support the audio element. </audio><br>
                        </div>
                        <form id="switch" action="/">
                            <div id="input"></div>
                        </form>
                        <p id="download" class="center"></p>
                        <div id="links" class="center"></div>
                    </div>
                </div>
            </center>
            <p id="status" class="center"></p><form id="switch" action="/">
            <div id="input"></div></form>
            <p id="download" class="center"></p><div id="links" class="center"></div><p class="center">
                <p class="float-right"> <a href="#">Back to top</a> </p><b>Powered By  </b> 
            <a href="https://nitishjeet7.tk" target="_blank">nitishjeet7</a><p onclick="switchfunc()" class="center2">Beta Version 3.0.1</p></a>



        <script src="/js/script.js"></script>
	<script src="/js/bootstrap.bundle.min.js"></script>
	<script src="https://cdn.plyr.io/3.6.4/plyr.polyfilled.js" type="text/javascript"></script>
	<script>
	const player = new Plyr('#aplayer');
	document.getElementsByClassName('plyr--full-ui')[0].style.display = "none";

	function checkplayer() {
		var hsk = document.getElementById('aplayer').src;
		var hs = document.getElementById('aplayer');
		if(hsk.endsWith('.mp3') === true || hsk.endsWith('.mp4') === true) {
			document.getElementsByClassName('plyr--full-ui')[0].style.display = "block";
		} else {
			hs.style.display = "none";
		}
	}
	setTimeout(checkplayer, 5000);
	</script>
</body>

</html>

