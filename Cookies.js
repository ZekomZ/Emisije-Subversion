/**@module Cookies
* @class Cookie
* @constructor
* @desc Class wrapper for javascript Cookies.js script
* See : {@link http://www.w3schools.com/js/js_cookies.asp}
*/
Cookie=function(){};

/**
@function setCookie
@desc sets cookie for a user session
@param {string} cname
@param {string} cvalue
@param {integer} cexdays
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
@function getCookie
@desc get cookie for a user session
@param {string} cname
*/
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

/**
@function checkCookie
@desc sets cookie for a user session
@param {string} cname
@param {string} cvalue
@param {integer} cexdays
*/
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
        document.getElementById("div-cookies").style.visibility="visible";
        $("#div-cookies").animate({
          opacity: 0.9,
          height: "100px",
          background: "#3f3"
        }, 1000, function() {
          // Animation complete.
        });
    }
}

/**
@function SetFormatX
@memberof Cookies
@param {integer} A positive number, representing google.maps.zoom ( 1 - 32 )
*/
function SetFormatX(ZoomX)
{
    iframeWidth=""+((ZoomX-1)*111+96)+"%";
     $("#transit-map").css("width", iframeWidth);
}

$(document).ready(function(){
  //alert("document ready");

  checkCookie();

  $("#div-cookies-ok").click(function() {
    //alert('ok');
    $( "#div-cookies" ).animate({
      opacity: 0.1,
      height: "0px",
      visibility: "hidden"
    }, 2000, function() {
      // Animation complete.
      setCookie("test", "123", 30);
      $("#div-cookies").css("visibility", "hidden");
    });
  });

});
