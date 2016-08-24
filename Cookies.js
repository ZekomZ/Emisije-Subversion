//http://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var data = getCookie("test");
    if (data != "")
    {
        //alert("Welcome again " + data);
        $("#div-cookies").css("height", "0px");
        $("#div-cookies").css("visibility", "hidden");
    }
    else
    {
       //alert("New visitor " + data);
       $("#div-cookies").css("visibility", "visible");
        $("#div-cookies").animate({
          opacity: 0.9,
          height: "100px",
          background: "#3f3"
        }, 1000, function() {
          // Animation complete.
        });
    }
}

function SetFormatX(ZoomX)
{
    iframeWidth=""+(ZoomX*111)+"%";
     $("#transit-map").css("width", iframeWidth);
}

$(document).ready(function(){
  //alert("document ready");

  checkCookie();

  $("#div-cookies-ok").click(function() {
    //alert('ok');
    $( "#div-cookies" ).animate({
      opacity: 0.1,
      height: "0px"
    }, 2000, function() {
      // Animation complete.
      setCookie("test", "123", 30);
      $("#div-cookies").css("visibility", "hidden");
    });
  });

});
