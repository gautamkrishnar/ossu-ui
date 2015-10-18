!(function getUser() {
      function getParameterByName( name ){
		  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		  var regexS = "[\\?&]"+name+"=([^&#]*)";
		  var regex = new RegExp( regexS );
		  var results = regex.exec( window.location.href );
		  if( results == null )
		    return "";
		  else
		    return decodeURIComponent(results[1].replace(/\+/g, " "));
		}


      var code = getParameterByName('code');
      var xhttp = new XMLHttpRequest;
      xhttp.open('POST', 'https://ossu.io/api/auth/github/callback', true);
      xhttp.timeout = 5000;
      xhttp.ontimeout = function() {
      	window.location.href = '/error?err=timeout';
      }
      xhttp.send(code);
      xhttp.onreadystatechange = function(xhttp) {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          var userObject = xhttp.responseText;
          xhttp.open('POST', 'https://ossu.io/', true);
          xhttp.send(userObject);
        }
        else if (xhttp.readyState === 4 && xhttp.status === 400) {
        var errorCode = xhttp.status;
        window.location.href = "/error?err=no_auth"
        };
        console.log(xhttp.status)
      } 
    })();