/**
* Class wrapper Transit.js
* @class Transit
* @classdesc
* See : {@link https://developers.google.com/maps/documentation/javascript/shapes}
* This example creates an interactive map which constructs a
* polyline based on user clicks. Note that the polyline only appears
* once its path property contains two LatLng coordinates.
*
* @requires Weather-Editor
* @requires Bus-Editor
* @requires Train-Editor
* @requires Cookies
*/
function Transit()
{
   /**
   * @constructor {google.maps.coordinates}
   * @inner
   **/
   this.documentation=null;
   /*
   addLatLng
   AddStationMarkers
   AddWeatherStationMarkers
   AddXMLStationRail
   animateCircle
   CatchException
    DeleteLastMarker
    DisplayStationInfo
    ExecuteSQL
    FindMarkerByStationID
    FunctionStart
    Initialize
    InitTransitPath
    InitTransitPathData
    LoadTrafficInfo
    MaximizeAugmentedReality
    onClickInfo
    OnClickInfoWeatherStation
    RailSelectA
    RailSelectB
    ResetMarkers
    ResetPolyLine
    ResetStations
    SelectStationMarker
    SelectWeatherStationMarkers
    StartMacro
    UpdateDocumentationInformation
    UpdateStreetViewLocation
    ZoomStationA
    ZoomStationB
    ZoomStationX
     */
}

/**@instance */
NewTransit=Transit()
{

}

/**
* @class TransitEngine
* @constructor
*/
function TransitEngine()
{

}

var EditMode="transit";
var UserMarkers=[];
var StationMarkers=[];
var StationMarkerObjects=[];
var TransitPathAll=[];
var TransitPathCoordinates=[];
var TrainStationCount=0;
var TransitPathCoordinates=[];
var TransitFunctionCalls=0;
var AutoClearConsole=111;
var GlobalTransitPathSingleIndex=0;
var GlobalTransitPathInstanceBusy=-1;
var GlobalTransitLineRefreshRate=55;
var GlobalZoomRefresh=Date.now();
var zIndexBusStation=11;
var zIndexTrainStation=22;
var zIndexBusPath=5;
var zIndexTrainPath=9;
var zIndexTrainMarker=550;

/**@global*/
var map=null;
var centerPositionLatLng=null;


try
{
  /**
  * @function FunctionStart
  * @description Handles exceptions from all functions via debug thread and console
  * Link (W3CSchools)  : {@link http://www.w3schools.com/jsref/jsref_try_catch.asp}
  * @param {function} Sender - Notify debug console with function object attached as a sender.
  */
function FunctionStart(Sender)
{
  TransitFunctionCalls+=1;
  TransitFunctionCalls=TransitFunctionCalls%TransitPolyLinesColor.length;
  UpdateDocumentationInformation(Sender.name);

  $('#div-console-debug').html('<div style="color:'+TransitPolyLinesColor[TransitFunctionCalls]+'"> Start function : <a href="#emisije-top" onclick="UpdateDocumentationInformation(\''+Sender.name+'\')">'+Sender.name+'</a><br/></div>'+$('#div-console-debug').html());

 if (document.getElementById("checkbox-console-auto").checked)
 {
    if ($('#div-console-debug').html().length>555)
    {
      $('#div-console-debug').html("Autoclear console ---:>");
    }
  }
}

/**
* @function CatchException
* @description <a name="CatchException"></a>
* Handles exceptions from all functions via debug thread and console
*
* Link (W3CSchools)  : {@link http://www.w3schools.com/jsref/jsref_try_catch.asp}
* @param {function} Sender - The copy of an instance of a function or an object, reporting the error.
* @param {object} Error - The exception object, returned from a try .. catch block.
* @link CatchException
* @desc Class Transit.js {@link Transit}
*/

function CatchException(Sender, Error)
{
    //alert(Sender.name+":"+Error);
    var ErrorMsg="";
    if (typeof Sender=="function")
    {
      ErrorMsg+="Exception in function : "+Sender.name+"<br/>";
      ErrorMsg+="Error message:"+Error+"<br/>";
    }
    else
    {
        ErrorMsg+="Exception in unknown function : ";
        ErrorMsg+="Error message:"+Error+"<br/>";
    }
    $('#div-console-debug').html(ErrorMsg+$('#div-console-debug').html());
}

StationInfoWindowA = new google.maps.InfoWindow({
  content: "StationsInfoText[markerID]"
});

StationInfoWindowB = new google.maps.InfoWindow({
  content: "StationsInfoText[markerID]"
});

var polyOptions = {};

var trafficLayer = new google.maps.TrafficLayer();
trafficLayer.setMap(map);

/*
var TransitStationIcon = {
path: 'M 0,0 -10,-3 -6,-10 0,-10 6,-10 10,-3 z',
fillColor: 'blue',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};
*/

var TransitStationIcon = {
url: './images/Bus-stop-icon.png',
// This marker is 20 pixels wide by 32 pixels high.
size: new google.maps.Size(20, 18),
// The origin for this image is (0, 0).
origin: new google.maps.Point(0, 0),
// The anchor for this image is the base of the flagpole at (0, 32).
anchor: new google.maps.Point(10, 18)
};

if (EditMode=="rails")
{
var TransitStationIcon = {
path: 'M 0,0 -5,-3 -3,-5 0,-5 3,-5 5,-3 z',
fillColor: 'blue',
fillOpacity: 0.6,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};
}

if (EditMode=="transit")
{
/*var TransitStationIcon = {
path: 'M 0,0 -5,-3 -3,-5 0,-5 3,-5 5,-3 z',
fillColor: 'blue',
fillOpacity: 0.3,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};*/
var TransitStationIcon = {
url: './images/Bus-stop-icon.png',
// This marker is 20 pixels wide by 32 pixels high.
size: new google.maps.Size(16, 20),
// The origin for this image is (0, 0).
origin: new google.maps.Point(0, 0),
// The anchor for this image is the base of the flagpole at (0, 32).
anchor: new google.maps.Point(8, 10),

fillOpacity:0.5
};

}

var TransitStationAIcon = {
path: 'M 0,0 -30,-20 0,-10 31,-20 z',
fillColor: 'green',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};

var TransitStationBIcon = {
path: 'M 0,0 -30,20 0,10 31,20 z',
fillColor: 'red',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'green',
strokeWeight: 1
};

var TransitStationSelected=0;
var TransitStationMarkerASelectedID=1;
var TransitStationMarkerBSelectedID=1;

var TransitStationMarkerA=new google.maps.Marker({
position: new google.maps.LatLng(46.886277,13.902437),
title: '#StationA' ,
map: map
});

var TransitStationMarkerB=new google.maps.Marker({
position: new google.maps.LatLng(46.05809,13.617254),
title: '#StationB' ,
map: map
});

var poly;// = new google.maps.Polyline(polyOptions);

/**
@function FindMarkerByStationID
@param {integer} StationID
*/
function FindMarkerByStationID(StationID)
{
this.FunctionRef=FindMarkerByStationID;
FunctionStart(this.FunctionRef);
try
{
  var tempSizeStationsData=StationsData.length;
  var MarkerID=-1;

  for(var i=0; i<tempSizeStationsData; i++)
  {
            // alert(i+":"+StationID+"StationsData:"+StationsData[i][0]);
      if (StationsData[i][0] == StationID)
      {
          //alert(i+"StationsData: "+StationsData[i][0]);
          MarkerID=i;
          break;
      }
  }
  //alert ("FindMarkerByStationID result:"+MarkerID);
  return MarkerID;
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}
/*
function InitRailPolyLines()
{
//vir:https://developers.google.com/maps/documentation/javascript/shapes

var StationA=-1;
var StationB=-1;

var i=-1;
//alert("InitRailPolyLines");
//var railPathCoordinates=[]; <--- global variable
TrainStationCount=BusPolyLines[0].length;
var busPolyLinesIndex = TrainStationCount;

for ( TransitPolyLines of busPolyLines )
{
  busPolyLinesIndex++;
  for (TransitPath of TransitPolyLines)
  {
   i++;
   TransitPathCoordinates=[];

   for ( TransitPathCoord of TransitPath)
   {
       //alert(TransitPathCoord);
       TransitPathCoordinates[TransitPathCoordinates.length]=new google.maps.LatLng(TransitPathCoord[0], TransitPathCoord[1]);
       //alert(TransitPathCoord.length);
       if (TransitPathCoord.length===4) // Pri prvem zapisu je v 3. in 4. stolpcu še zaporedna št. postaje
       {
           StationA=FindMarkerByStationID(TransitPathCoord[2]);
           StationB=FindMarkerByStationID(TransitPathCoord[3]);
           //alert(StationA+":"+StationB);
       }
   }

//alert("Add new polyline:"+"i:"+ i +":" + StationA +" : "+StationB);

TransitPathAll.push( new google.maps.Polyline({
      path: TransitPathCoordinates,
      geodesic: true,
      strokeColor: TransitPolyLinesColor[busPolyLinesIndex],
      strokeOpacity: 0.7,
      strokeWeight: 6
  }));

//alert("Add Listener: "+railPathAll[railPathAll.length-1]+":"+i+":"+StationA+":"+StationB);

google.maps.event.addListener(TransitPathAll[TransitPathAll.length-1],

        'click', function (i,StationMarkerIDA,StationMarkerIDB)
           {
               return function ()
               {
                   //alert(i+" : OnClick, RailAB -  StationA:"+StationMarkerIDA+" StationB:"+StationMarkerIDB);
                   //alert("AddListener:Marker:"+i);
                   SelectStationMarker(StationMarkerIDA);
                   SelectStationMarker(StationMarkerIDB);
                   //StationMarkersNotifyPHP();

               };

           }(i-TrainStationCount,StationA,StationB)
        );

        TransitPathAll[TransitPathAll.length-1].setMap(map);
      }

    }

}
*/

/**
@function Initialize
@description The function to initialize Google.maps map object to its initial state.
@fires ResetMarkers
@fires AddStationMarkers
@fires InitTransitPath
@param {object} null
*/
function Initialize()
{
this.FunctionRef=Initialize;
FunctionStart(this.FunctionRef);
//try
{
  // See : {@link https://developers.google.com/maps/documentation/javascript/markers}
  centerPositionLatLng=new google.maps.LatLng(46.0587303,14.5126836);
  var mapOptions = {
  zoom: 9,
  center: new google.maps.LatLng(46.0587, 14.7111),
  gestureHandling: 'greedy'
  };

    map = new google.maps.Map(document.getElementById('div-map-canvas'), mapOptions);
    trafficLayer.setMap(null);

// https://developers.google.com/maps/documentation/javascript/events
    map.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function() {
          CenterMapViewUserMarkers();
      }, 300);
    });


  ResetMarkers();


  if ($("input#checkbox-bus:checkbox:checked").val()=="Bus"){AddStationMarkers();}

  InitTransitPath();
  UpdateStreetViewLocation(WeatherStationData[0][1],WeatherStationData[0][2]);
  DisplayAugmentedReality();

  if ($("input#checkbox-train:checkbox:checked").val()=="Train"){setTimeout(AddTrainStationMarkers(),5111);}
  if ($("input#checkbox-camera:checkbox:checked").val()=="Camera"){setTimeout(LoadCameraInfo(),3111);}
  if ($("input#checkbox-weather:checkbox:checked").val()=="Weather"){AddWeatherStationMarkers();}
  if ($("input#checkbox-train:checkbox:checked").val()=="Train")
  {TrainMacroInstance=setTimeout(TrainMacroDisplayTimeStart(),7777);}
  if ($("input#checkbox-gama:checkbox:checked").val()=="Gama"){LoadGamaInfo();}
  if ($("input#checkbox-traffic:checkbox:checked").val()=="Traffic"){LoadTrafficInfo();}

  // Add a listener for the click event
  google.maps.event.addListener(map, 'click', addLatLng);
  google.maps.event.addListener(TransitStationMarkerA, "mouseover", DisplayStationInfo(1,StationInfoWindowA));
  google.maps.event.addListener(TransitStationMarkerB, "mouseover", DisplayStationInfo(2,StationInfoWindowB));
}
//catch(Error)
{
//  CatchException(this.FunctionRef,Error);
}
}

function CenterMapViewUserMarkers()
{
  var Zoom=map.getZoom();
  if ((Date.now()-GlobalZoomRefresh)<10000)
  {
     return;
  }
  else
  {
    GlobalZoomRefresh=Date.now();
  }
  if (UserMarkers.length>0)
  {
    map.panTo(UserMarkers[UserMarkers.length-1].getPosition());

    map.setZoom(Zoom-1);
    map.setZoom(Zoom);
  }
  else
  {
    map.panTo(centerPositionLatLng);

    map.setZoom(Zoom-1);
    map.setZoom(Zoom);
  }
}

/**
* Handles click events on a map, and adds a new point to the Polyline.
* @param {google.maps.MouseEvent} event
*/

/**
@function ResetPolyLine
@description The function to reset the poly lines, added by users clicks
@param {object} null
*/
function ResetPolyLine()
{
this.FunctionRef=ResetPolyLine;
FunctionStart(this.FunctionRef);
try
{

  var path=[];
  for( var i=0; i<UserMarkers.length; i++ )
  {
   path.push(new google.maps.LatLng(UserMarkers[i]["position"].lat(),UserMarkers[i]["position"].lng()));
   //alert(path[i]+"::"+i+":"+UserMarkers[i]["position"].lat()+"/"+UserMarkers[i]["position"].lng());
  }
  //alert(path.length);

  polyOptions =
  {
  path: path,
  strokeColor: '#393',
  strokeOpacity: 0.7,
  strokeWeight: 2
  };
  if (typeof poly != 'undefined'){ poly.setMap(null); }
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function LoadTrafficInfo
@description The function to initialize Google.maps traffic layer
@param {object} null
*/
function LoadTrafficInfo()
{
this.FunctionRef=LoadTrafficInfo;
FunctionStart(this.FunctionRef);
try
{
  trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
// *****************************
@function AddXMLStationRail
@description The function to generate XML string for rail data
@param {object} null
// *****************************
*/
function AddXMLStationRail()
{
this.FunctionRef=AddXMLStationRail;
FunctionStart(this.FunctionRef);
try
{
  if (StationsData[TransitStationMarkerASelectedID] === undefined){return null;}
  if (StationsData[TransitStationMarkerBSelectedID] === undefined){return null;}

  StationAID=StationsData[TransitStationMarkerASelectedID][0];
  StationBID=StationsData[TransitStationMarkerBSelectedID][0];

  if (StationAID>=StationBID) // ID-ji postaj naj bodo urejeni naraščajoče od manjšega ID, proti večjemu, če je StationAID > StationBID, postaji zamenjamo
  {
     StationTMP=StationBID;
     StationBID=StationAID;
     StationAID=StationTMP;
  }

  document.getElementById("div-console-data").innerHTML=
         "Transit-Path-Data :<br/>" +
         "-->"+StationAID+"-"+StationBID+"' <---,---> '"+StationAID+"', '"+StationBID+"'<--";

}
catch(Error)
{
 CatchException(this.FunctionRef,Error);
}
}

/**
@function addLatLng
@description The function to add user marker to google.maps.LatLng coordinates
@param {google.maps.event} event
*/
function addLatLng(event)
{

this.FunctionRef=addLatLng;
FunctionStart(this.FunctionRef);
try
{
  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  //
  //path.push(event.latLng);

  // Add a new marker at the new plotted point on the polyline.
  var marker = new google.maps.Marker   ({
  position: event.latLng,
  title: '#' + path.getLength(),
  map: map
  });
  //alert('Add marker :'+marker.getPosition().lat()+':'+marker.getPosition().lng());
  UpdateStreetViewLocation(marker.getPosition().lat(),marker.getPosition().lng());
  UserMarkers.push(marker);
  ResetPolyLine();
  CenterMapViewUserMarkers();
  //INSERT INTO `test`.`Train-Rails-Location`
  //(`IDRailAB`, `IDStationA`, `IDStationB`, `Type`)
  //VALUES ('99999-111111', '99999', '111111', '0');

  //INSERT INTO `test`.`Train-Rails-Details`
  // (`IDRailABLatLng`, `IDRailAB`, `RailIndex`, `Lat`, `Lng`)
  // VALUES ('99999', '11111', '1', '123123', '2312312');

  /*AddXMLStationRail();

  for (var i=0;i<UserMarkers.length;i++)
  {

  "INSERT INTO `test`.`Transit-Rails-Details`"
  "(`IDRailABLatLng`, `IDRailAB`, `RailIndex`, `Lat`, `Lng`) "
  "VALUES ('99999', '11111', '1', '123123', '2312312');"

    document.getElementById("div-console-data").innerHTML=
    document.getElementById("div-console-data").innerHTML+
    "<br/>"+"#"+i+":"+UserMarkers[i]["position"].toString()+"/"+UserMarkers[i]["title"].toString();
  }

  ResetPolyLine();*/
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ResetMarkers
@description The function to reset user added markers, poly lines and path from google.maps (map) object to null
@fires ResetPolyLine
@fires UpdateDocumentationInformation(this.FunctionRef);
@param {object} null
*/
function ResetMarkers()
{
this.FunctionRef=ResetMarkers;
FunctionStart(this.FunctionRef);
try
{
  for (var i=0;i<UserMarkers.length;i++)
  {
    UserMarkers[i].setMap(null);
  }
  UserMarkers=[];

  ResetPolyLine();
  CenterMapViewUserMarkers();
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ResetStations
@description The function to load data in TransitStation memory bank and add station markers to the google.maps (map) object
@fires Initialize
@fires UpdateDocumentationInformation(this.FunctionRef);
@param {object} null
*/
function ResetStations()
{
this.FunctionRef=ResetStations;
FunctionStart(this.FunctionRef);
try
{
  GlobalSimulationSteps=0;
  GlobalTrainId = 0;

    // IE11 does not support of iterator : Adding idexes
    // TransitPathSingleIndex : Iterator for active TransitPath array object
    var TransitPathSingleIndex=0;
    // TransitPathSingleIndex : Iterator for active TransitPath array object
    var StationMarkersSingleIndex=0;

   for (TransitPathSingleIndex=0; TransitPathSingleIndex<TransitPath.length; TransitPathSingleIndex++)
   {
     TransitPathSingle=TransitPath[TransitPathSingleIndex];
     TransitPathSingle.setMap(null);
   }
   TransitPath=[];
   TransitPathCoordinates=[];

   for (StationMarkersSingleIndex=0;StationMarkersSingleIndex<StationMarkers.length;StationMarkersSingleIndex++)
   {
     var StationMarkersSingle = StationMarkers[StationMarkersSingleIndex];
     StationMarkersSingle.setMap(null);
   }

   StationMarkers=[];

   Initialize();
 }
 catch(Error)
 {
   CatchException(this.FunctionRef,Error);
 }
}

/**
@function DeleteLastMarker
@description The function to delete the most recently added user marker end poly-line from the google.maps (map) object and redraw the path
@fires Transit.ResetPolyLine
@param {object} null
*/
function DeleteLastMarker()
{
this.FunctionRef=DeleteLastMarker;
FunctionStart(this.FunctionRef);
try
{
  if (UserMarkers.length>0)
  {
    UserMarkers[UserMarkers.length-1].setMap(null);
    UserMarkers=UserMarkers.slice(0,UserMarkers.length-1);
  }

  ResetPolyLine();
  CenterMapViewUserMarkers();
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}
// Source : https://developers.google.com/maps/documentation/javascript/examples/event-domListener
google.maps.event.addDomListener(window, 'load', Initialize);

/**
@function DisplayStationInfo
@description The function to display info and detail of the google.maps.marker, representing a transit station
@listens {google.maps.click} map.onClick
@param {integer} markerID
@param {HTML} StationInfoWindow
*/
function DisplayStationInfo(markerID, StationInfoWindow)
{
this.FunctionRef=DisplayStationInfo;
FunctionStart(this.FunctionRef);
try
{
  //alert("DisplayStationInfo");
  StationInfoWindow.close();

  StationInfoWindow = new google.maps.InfoWindow({
    content: StationsInfoText[markerID]
  });

  //StationInfoWindow.open(map, stationMarkers [markerID] );
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function SelectStationMarker
@description The function to select a station marker and set a most recent SelectStationMarker to the google.maps.LatLng coordinates of the selected station marker
@listens {google.maps.marker} google.maps.marker click
@param {integer} markerID A positive integer number, representing the index of a station marker in stationMarkers (google.maps.marker)
@fires Transit.ResetMarkers
@fires Transit.RailSelectA
@fires Transit.RailSelectB
*/
function SelectStationMarker(markerID)
{
this.FunctionRef=SelectStationMarker;
FunctionStart(this.FunctionRef);
try
{
  //alert("TransitStationSelected"+TransitStationSelected);
  ResetMarkers();
  switch (TransitStationSelected)
  {
  case 0 :
      RailSelectA(markerID);
      //alert("RailSelectA()"+TransitStationSelected);
      TransitStationSelected=10;
      break;

  case 10 :
      RailSelectB(markerID);
      //alert("RailSelectB()"+TransitStationSelected);
      TransitStationSelected=0;
      break;
  }

  AddXMLStationRail();
      //alert("SelectStationMarker:"+stationMarkers[markerID].getPosition().lat()+":"+stationMarkers[markerID].getPosition().lng());
}
catch(Error)
  {
    CatchException(this.FunctionRef,Error);
  }
}

/**
@function RailSelectA
@description The function to set active focus and a special "Active station - Green marker" to the most recently clicked google.maps.marker in StationMarkers[] array of station locations
@listens {google.maps.marker} google.maps.marker click
@param {integer} markerID .. A positive integer number, representing the index of a markerID in the stored table StationMarkers[]
*/

function RailSelectA(markerID)
{
this.FunctionRef=RailSelectA;
FunctionStart(this.FunctionRef);
try
{
  TransitStationMarkerA.setPosition(
          new google.maps.LatLng(
          StationMarkers[markerID].getPosition().lat(),
          StationMarkers[markerID].getPosition().lng())
  );

  TransitStationMarkerASelectedID=markerID;
  UpdateStreetViewLocation(StationMarkers[markerID].getPosition().lat(),StationMarkers[markerID].getPosition().lng());
  //alert("RailSelectA:"+stationMarkers[markerID].getPosition().lat()+":"+stationMarkers[markerID].getPosition().lng());

  //document.getElementById("div-console-data").innerHTML=TransitStationMarkerA.keys.toString();
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function RailSelectB
@description The function to set active focus and a special "Active station - Red marker" to the most recently clicked google.maps.marker in StationMarkers[] array of station locations
@param {integer} markerID .. A positive integer number, representing the index of a markerID in the stored table StationMarkers[]
@listens {google.maps.marker} google.maps.marker click
@fires UpdateStreetViewLocation
*/
function RailSelectB(markerID)
{
this.FunctionRef=RailSelectB;
FunctionStart(this.FunctionRef);
try
{
    TransitStationMarkerB.setPosition(
        new google.maps.LatLng(
        StationMarkers[markerID].getPosition().lat(),
        StationMarkers[markerID].getPosition().lng())
      );

  TransitStationMarkerBSelectedID=markerID;
  UpdateStreetViewLocation(StationMarkers[markerID].getPosition().lat(),StationMarkers[markerID].getPosition().lng());
  //alert("RailSelectB:"+stationMarkers[markerID].getPosition().lat()+":"+stationMarkers[markerID].getPosition().lng());
  //document.getElementById("div-console-data").innerHTML=trainStationMarkerB.keys.toString();
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ZoomStationA
@description The function to set google.maps.setZoom() of the map (google.maps object) to the nearest location of Marker A
@param {object} null
@listens {google.maps.marker} google.maps.marker click
@fires (worker) window.setTimeout three woker threads are open, to create a smooth zoom effect... :)
*/
function ZoomStationA()
{
this.FunctionRef=ZoomStationA;
FunctionStart(this.FunctionRef);
try
{
  CenterMapViewUserMarkers();
  //map.panTo(TransitStationMarkerA.getPosition());

  ResetMarkers();
  google.maps.event.trigger(map, 'click', {
        latLng: TransitStationMarkerA.getPosition()
  });

  window.setTimeout(function() {
    map.setZoom(16);
  }, 100);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ZoomStationB
@description The function to set google.maps.setZoom() of the map (google.maps object) to the nearest location of Marker B
@param {object} null
@listens {google.maps.marker} google.maps.marker click
@fires (worker) window.setTimeout worker threads are open, to create a smooth zoom effect... :)
*/
function ZoomStationB()
{
this.FunctionRef=ZoomStationB;
FunctionStart(this.FunctionRef);
try
{
  CenterMapViewUserMarkers();

  //map.panTo(TransitStationMarkerA.getPosition());

  ResetMarkers();
  google.maps.event.trigger(map, 'click', {
        latLng: TransitStationMarkerA.getPosition()
  });

  window.setTimeout(function() {
    map.setZoom(9);
  }, 100);

  window.setTimeout(function() {
    //map.panTo(TransitStationMarkerB.getPosition());

      ResetMarkers();
      google.maps.event.trigger(map, 'click', {
            latLng: TransitStationMarkerB.getPosition()
      });

  }, 500);

  window.setTimeout(function() {
    map.setZoom(16);
  }, 500);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}
/**
@function ZoomBus
@description The function to set google.maps.setZoom() of the map (google.maps object) to the nearest location of a bus
@param {object} null
@listens {google.maps.marker} google.maps.marker click
@fires (worker) window.setTimeout worker threads are open, to create a smooth zoom effect... :)
@constructor
*/
function ZoomBus()
{
this.FunctionRef=ZoomBus;
FunctionStart(this.FunctionRef);
try
{
  //map.panTo(Stations[TransitFunctionCalls%Stations.length]);

  ResetMarkers();
  google.maps.event.trigger(map, 'click', {
        latLng: Stations[TransitFunctionCalls%Stations.length]
  });

  window.setTimeout(function() {
    map.setZoom(16);
  }, 250);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ZoomTrain
@description The function to set google.maps.setZoom() of the map (google.maps object) to the nearest location of a train
@param {object} null
@listens {google.maps.marker} google.maps.marker click
@fires (worker) window.setTimeout worker threads are open, to create a smooth zoom effect... :)
@constructor
*/
function ZoomTrain()
{
this.FunctionRef=ZoomTrain;
FunctionStart(this.FunctionRef);
try
{
  //map.panTo(TrainStations[TransitFunctionCalls%TrainStations.length]);
    ResetMarkers();
    google.maps.event.trigger(map, 'click', {
          latLng: TrainStations[TransitFunctionCalls%TrainStations.length]
    });


  window.setTimeout(function() {
    map.setZoom(16);
  }, 111);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ZoomHelicopter
@description The function to set google.maps.setZoom() of the map (google.maps object) to the nearest location of a helicopter
@param {object} null
@listens {google.maps.marker} google.maps.marker click
@fires (worker) window.setTimeout three woker threads are open, to create a smooth zoom effect... :)
@constructor
*/
function ZoomHelicopter()
{
this.FunctionRef=ZoomHelicopter;
FunctionStart(this.FunctionRef);
try
{
  if (document.getElementById("checkbox-gama").checked==false)
  {
    document.getElementById("checkbox-gama").checked=true;
    ResetStations();
  }
  HelicopterLatLng=GamaKartaLatLng[TransitFunctionCalls%GamaKartaLatLng.length];
  //alert ("Helicopter : "+ TransitFunctionCalls +"-"+GamaKartaLatLng.length)
  //map.panTo(HelicopterLatLng);

  ResetMarkers();
  google.maps.event.trigger(map, 'click', {
        latLng: HelicopterLatLng
  });

  window.setTimeout(function() {
    map.setZoom(13);
  }, 100);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ZoomStationX
@description The function to set google.maps.setZoom() of the map (google.maps object) to the nearest location of Marker B
@param {object} null
@listens {google.maps.marker} google.maps.marker click
@fires (worker) window.setTimeout()
*/
function ZoomStationX()
{
this.FunctionRef=ZoomStationX;
FunctionStart(this.FunctionRef);
try
{
  map.panTo(centerPositionLatLng);
  window.setTimeout(function() {
    CenterMapViewUserMarkers();
    map.setZoom(9);
  }, 100);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function AddStationMarkers
@description The function to add station markers (google.maps.markers) to the map (google.maps object), from the StationData[] array
@param {object} null
@listens {google.maps.marker} google.maps.marker click
*/
function AddStationMarkers()
{
this.FunctionRef=AddStationMarkers;
FunctionStart(this.FunctionRef);
try
{
  //alert("AddStationMarkers");
  var markerObject;
  var marker;
  var markerEvent;
  var i=0;

  for (i=0; i<Stations.length; i++)
  {
      marker = new google.maps.Marker({
              position: Stations[i],
              title: StationsData[i][0].toString() + '#' + StationsData[i][1].toString(),
              map: map,
              icon:TransitStationIcon,
              zIndex:zIndexBusStation
          })
      StationMarkers.push(marker);

       //markerEvent=
      markerObject =
      {
          stationID:i
      }
      StationMarkerObjects.push( markerObject );

      google.maps.event.addListener(StationMarkers[i],
             'click', function(i)
             {
                 return function()
                 {
                     //alert("AddListener:Marker:"+i);
                     SelectStationMarker(i);
                     onClickInfo();
                     //StationMarkersNotifyPHP(i);
                 }

             }(i)
          );
  }

  TransitStationMarkerA= new google.maps.Marker({
  position: new google.maps.LatLng(46.00,13.00),
  title: '#StationA' ,
  icon:TransitStationAIcon,
  map: map
  });


  TransitStationMarkerB= new google.maps.Marker({
  position: new google.maps.LatLng(47.00,13.00),
  title: '#StationB' ,
  icon:TransitStationBIcon,
  map: map
  });
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function ExecuteSQL
@description The function to add station markers (google.maps.markers) SQL
@param {object} null
@listens {google.maps.marker} google.maps.marker click
*/
function ExecuteSQL()
{
this.FunctionRef=ExecuteSQL;
FunctionStart(this.FunctionRef);
try
{
  SQLString="";
  //document.getElementById("div-console-data").innerHTML;
  //document.getElementById("div-console-data").innerHTML=
  var GoogLatLng = new google.maps.LatLng(44,77);
  for (var i=0; i<Stations.length ; i++)
  {
   GoogLatLng = Stations[i];

  SQLString=SQLString+
  "\n INSERT INTO `emisije`.`TransitStations` " +
  "(`IDStation`, `Name`, `Lat`, `Lng`) " +
  " VALUES ('"+StationsData[i][0]+"','"+StationsData[i][1]+"', '"+GoogLatLng.lat() +"', '"+GoogLatLng.lng()+"'); \n" ;
  }
  document.getElementById("div-console-data").innerHTML=SQLString;
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}


var TransitPath=[];

/**
@function InitTransitPathData
@description The function to draw polylines between stations, defined in BusPolyLines[] in Bus-Editor.js
// Station data (Bus, Train, Car) will be loaded in Trans
// https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-animate
// This example adds an animated symbol to a polyline.
@param {object} null
*/
function InitTransitPathData()
{
this.FunctionRef=InitTransitPathData;
FunctionStart(this.FunctionRef);
try
{
  TransitPathCoordinates=[];
  var TransitPathIndex=-1;
  var i=-1;
  // IE11 Does not support -of- iterator; Added Indexes
  // Index : TransitPolyLinesIndex --> Index of active poly-line of a path between two stations
  var TransitPolyLinesIndex=0;
  // Index : TransitPathSingle --> Two pairs of Lat-Lng locations of the transit path from the "train / bus" route track
  var TransitPathSingleIndex=0;
  // Index : TransitPathCoord  --> Single pair of Lat-Lng data
  var TransitPathCoordIndex=0;

  for (TransitPolyLinesIndex=0; TransitPolyLinesIndex<BusPolyLines.length; TransitPolyLinesIndex++)
  {
    TransitPolyLines=BusPolyLines[TransitPolyLinesIndex];
    TransitPathIndex++;

  for (TransitPathSingleIndex=0;TransitPathSingleIndex<TransitPolyLines.length;TransitPathSingleIndex++)
  {
      TransitPathSingle = TransitPolyLines[TransitPathSingleIndex];
     if(TransitPathIndex>0)
     {
       if(!($("input#checkbox-bus:checkbox:checked").val()=="Bus"))
       {
         break;
       }
     }
     var TransitPathCoordinatesSingle=[];
     for ( TransitPathCoordIndex=0;TransitPathCoordIndex<TransitPathSingle.length;TransitPathCoordIndex++ )
     {
       TransitPathCoord=TransitPathSingle[TransitPathCoordIndex];

       if(TransitPathIndex==0)
       {
         if(!($("input#checkbox-train:checkbox:checked").val()=="Train")){break;}
       }
         TransitPathCoordinatesSingle.push(
                 new google.maps.LatLng(TransitPathCoord[0], TransitPathCoord[1]));
         //alert(TransitPathCoord.length);
         /*if (TransitPathCoord.length===4) // Pri prvem zapisu je v 3. in 4. stolpcu še zaporedna št. postaje
         {
             StationA=FindMarkerByStationID(TransitPathCoord[2]);
             StationB=FindMarkerByStationID(TransitPathCoord[3]);
             //alert(StationA+":"+StationB);
         }*/
     }
     TransitPathCoordinates.push(TransitPathCoordinatesSingle);
  //alert("Add new polyline:"+"i:"+ i +":" + StationA +" : "+StationB);
  var TransitSymbol = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 8,
  strokeColor: TransitPolyLinesColor[TransitPathIndex]
  };

  TransitPath.push(
          new google.maps.Polyline({
  path: TransitPathCoordinatesSingle,
  icons: [{
    icon: TransitSymbol,
    offset: '100%'
  }],
  strokeWeight: 0,
  zIndex: zIndexBusPath,
  map: map

  }));

  }
  }
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function InitTransitPath
@description The function to add google.maps.Polyline to map (google.maps.object) from stored data in TransitPath[]
// https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-animate
// This example adds an animated symbol to a polyline.
@param {object} null
@fires animateCircle
@fires InitTransitPathData
*/
function InitTransitPath()
{
this.FunctionRef=InitTransitPath;
FunctionStart(this.FunctionRef);
try
{
  // var TransitPathCoordinates=[];
  InitTransitPathData();
  /*TrainPathCoordinates[0]= [
  new google.maps.LatLng(16.11, 15.191),
  new google.maps.LatLng(50, 16)
  ];*/
  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  var TransitSymbol = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 8,
  strokeColor: '#393'
  };

  // Create the polyline and add the symbol to it via the 'icons' property.
  TransitPath[0] = new google.maps.Polyline({
  path: TransitPathCoordinates[0],
  icons: [{
    icon: TransitSymbol,
    offset: '100%'
  }],
  map: map
  });

  animateCircle();
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.

/**
@function animateCircle
@description The function to animate symbols on a path between stations, defined in PathData[]
// https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-animate
// This example adds an animated symbol to a polyline.
@param {object} null
@fires animateCircle
@fires InitTransitPathData
@fires {worker} window.setInterval
*/
function animateCircle()
{
this.FunctionRef=animateCircle;
FunctionStart(this.FunctionRef);
try
{
  var count = 0;

  TransitPathSingleIndex=0;
  // IE 11 does not suppor of iterator. Added Indexes:
  // TransitPathSingleIndex : TransitPath declared transit icon (airplane/bus/train) animation data of the active path between two stations

  window.setInterval(function AnimateBus() {

    if (GlobalTransitPathInstanceBusy!=-1)
    {return;}

    var StartTransitLine=GlobalTransitPathSingleIndex;
    var EndTransitLine=StartTransitLine+GlobalTransitLineRefreshRate;
    if (EndTransitLine>=TransitPath.length)
    {EndTransitLine = TransitPath.length-1;}

    for (var i = StartTransitLine; i<EndTransitLine;i++)
    {
      GlobalTransitPathSingleIndex=i;
      GlobalTransitPathInstanceBusy=GlobalTransitPathSingleIndex;

      TransitPathSingle=TransitPath[GlobalTransitPathSingleIndex];

      count = (count + 1) % 200;

      var icons = TransitPathSingle.get('icons');
      icons[0].offset = (count / 2) + '%';
      TransitPathSingle.set('icons', icons);
    }

    GlobalTransitPathSingleIndex++;
    GlobalTransitPathSingleIndex=GlobalTransitPathSingleIndex%TransitPath.length;
    GlobalTransitPathInstanceBusy=-1;
  }, 111);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}

}

/**
@function onClickInfo
@description The function to animate symbols on a path between stations, defined in PathData[]
// Tutorial : see {@tutorial OnClickInfo}
@param {object} null
@fires animateCircle
@fires InitTransitPathData
@fires {worker} window.setInterval
*/
function onClickInfo()
{
this.FunctionRef=onClickInfo;
FunctionStart(this.FunctionRef);
try
{
  var url="";
  var NewStation=StationAID;


  //alert(url);

  StationAID=StationsData[TransitStationMarkerASelectedID][0];
  StationBID=StationsData[TransitStationMarkerBSelectedID][0];

  //$('#div-console-data').append('<br/>-----( Url )---------><br/><a target="_blank" href="'+url+'">'+url+'</a>');
  $('#div-console-data').append('<br/>-----( StationA :) )--------->'+StationAID);
  $('#div-console-data').append('<br/>-----( StationB :) )--------->'+StationBID);

  //alert(url);
  url='http://www.lpp.si/sites/default/files/lpp_vozniredi/iskalnik/index.php?stop='+StationAID;
  $('#div-toolbar-footer-left').html('<h1>'+StationsData[TransitStationMarkerASelectedID][1]+'</h1>');
  $('#div-toolbar-footer-left').append('<h2>( '+StationsData[TransitStationMarkerASelectedID][0]+' )</h2>');
  $('#div-toolbar-footer-left').append('<h3> Vozni red :</h3>');
  $('#div-toolbar-footer-left').append('<h2><a target="_blank" href="'+url+'">'+url+'</a></h2>');



    url='http://www.lpp.si/sites/default/files/lpp_vozniredi/iskalnik/index.php?stop='+StationBID;
    $('#div-toolbar-footer-right').html('<h1>'+StationsData[TransitStationMarkerBSelectedID][1]+'</h1>');
    $('#div-toolbar-footer-right').append('<h2>( '+StationsData[TransitStationMarkerBSelectedID][0]+' )</h2>');
    $('#div-toolbar-footer-right').append('<h3> Vozni red :</h3>');
    $('#div-toolbar-footer-right').append('<h2><a target="_blank" href="'+url+'">'+url+'</a></h2>');


  return NewStation;
  //$('iframeId').contents().get(0).location.href
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}


/**
@function StartMacro
@description The function to start an auto-test macro function on the map (google.maps) object.
// Tutorial : see {@tutorial OnClickInfo}
@param {google.maps.marker} object
@fires {worker} window.setInterval
@fires ZoomStationA
*/
function StartMacro(ZoomX)
{
this.FunctionRef=StartMacro;
FunctionStart(this.FunctionRef);
try
{
  if (document.getElementById("checkbox-bus").checked==false)
  {
    document.getElementById("checkbox-bus").checked=true;
    ResetStations();
  }

  Station=Math.ceil(Math.random()*(StationMarkers.length-1));
  SelectStationMarker(Station);

  Station=Math.ceil(Math.random()*(StationMarkers.length-1));
  SelectStationMarker(Station);

  var NewStation=onClickInfo();

  //$('#div-console-data').append('<br/>-----( ZoomX :) )--------->'+(NewStation === StationAID));
  //$('#div-console-data').append('<br/>-----( ZoomY :) )--------->'+(NewStation === StationBID));

  //$('#div-console-data').append('<br/>-----( A:'+StationsData[TransitStationMarkerASelectedID][0]+' B:'+StationsData[TransitStationMarkerBSelectedID][0]+')');
  ZoomStationA();
  /*if (NewStation === StationAID)
  {
    //$('#div-console-data').append('<br/>-----( ZoomA :) )--------->'+StationBID);
    setTimeout(ZoomStationA(),500);
  }*/
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}


// *******************************************************************************
// Vreme - Podatki samodejnih postaj
//------------------------------------------------------------------------------
/*var WeatherStationIcon = {
path: 'M -1,-1 -7,11 -11,13 -7,17 -3,21 3,21 7,17 13,11 7,13 8,11 9,-1 -3,-3 -1,1 z',
icon : '../img/abc.gif',
fillColor: 'red',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'blue',
strokeWeight: 3
};
*/

WeatherStationIcon = {
url: './images/Helianthus_annuus_sunflower-Resized-4x.jpg',
// This marker is 20 pixels wide by 32 pixels high.
size: new google.maps.Size(111, 77),
// The origin for this image is (0, 0).
origin: new google.maps.Point(0, 0),
// The anchor for this image is the base of the flagpole at (0, 32).
anchor: new google.maps.Point(55, 33)
};

WeatherStationBaseIconX = {
url: './images/girl-in-sunflower-dress-and-sunflower-field-resized-4x.jpg',
// This marker is 20 pixels wide by 32 pixels high.
size: new google.maps.Size(35, 35),
// The origin for this image is (0, 0).
origin: new google.maps.Point(0, 0),
// The anchor for this image is the base of the flagpole at (0, 32).
anchor: new google.maps.Point(30, 17)
};

WeatherClubCardIcon = {
  url: './images/Helianthus_annuus_sunflower-Resized-4x.jpg',
  // This marker is 20 pixels wide by 32 pixels high.
  size: new google.maps.Size(111, 77),
  // The origin for this image is (0, 0).
  origin: new google.maps.Point(0, 0),
  // The anchor for this image is the base of the flagpole at (0, 32).
  anchor: new google.maps.Point(55, 33)
};

var WeatherStationIconSelectedX = {
path: 'M -1,-1 -3,7 -5,11 -7,17 -9,21 -3,17 -5,25 5,25 3,17 9,21 7,17 5,11 3,7 -1,-1 z',
fillColor: 'green',
fillOpacity: 0.7,
scale: 1,
strokeColor: 'red',
strokeWeight: 3
};

WeatherStationMarkers=new Array();
var WeatherStationMarkerX=null;

/**
@function AddWeatherStationMarkers
@description The function to initialize Weather Station Markers in WeatherStationMarkers[] (google.maps.marker) and add weather station markers on the map (google.maps) object
Tutorial : see {@tutorial AddWeatherStationMarkers}
@description : Added airport webcam : http://www.lju-airport.si/sl/interaktivno-letalisce/webcam/
@param {google.maps.marker} object
@listens {google.maps.markers.onclick event} WeatherStationMarkers[i]
*/
function AddWeatherStationMarkers()
{
this.FunctionRef=AddWeatherStationMarkers;
FunctionStart(this.FunctionRef);
try
{
  var markerObject;
  var marker;
  var markerEvent;
  var i=1;

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);

  if (WeatherStationMarkers.length>0)
  {
    //return;
  }
/*
  WeatherStationData[46] = new Array("Aerodrom Ljubljana - Webcam 1", 46.227348, 14.455521);
  WeatherStationData[47] = new Array("Aerodrom Ljubljana - Webcam 2", 46.232124, 14.440645);
*/
  /*
  // @description Add markers for airport web cams 1 and 2
  */
/*  new google.maps.Marker({
            position: new google.maps.LatLng(46.227348, 14.455521),
            title: WeatherStationData[i][0] + '#Aerodrom Ljubljana - Webcam 1' ,
            map: map,
            icon:WeatherStationAirport1
        });

  new google.maps.Marker({
            position: new google.maps.LatLng(46.232124, 14.440645),
            title: WeatherStationData[i][0] + '#Aerodrom Ljubljana - Webcam 2' ,
            map: map,
            icon:WeatherStationAirport2
        });
/*
        GamaKartaImg[GamaKartaId]  = ;
        GamaKartaLatLng[GamaKartaId] = n
        GamaKartaDatUra[GamaKartaId] =;
        GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-ARSO";
        GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);
        GamaKartaInfoWindow[GamaKartaId].open(map, GamaKartaInfoMarker[GamaKartaId]);
*/
  createMarkerGreen('http://www.lju-airport.si/webcam/video2.jpg', new google.maps.LatLng(46.227348, 14.455521), -1, "#Aerodrom Ljubljana - Webcam 1", "http://www.lju-airport.si/sl/interaktivno-letalisce/webcam/");
  createMarkerGreen('http://www.lju-airport.si/webcam/video1.jpg', new google.maps.LatLng(46.232124, 14.440645), -2, "#Aerodrom Ljubljana - Webcam 2", "http://www.lju-airport.si/sl/interaktivno-letalisce/webcam/");

  for (i=0; i<WeatherStationData.length; i++)
  {

      if (i==45){
        WeatherStationMarkers[i] = new google.maps.Marker({
                position: new google.maps.LatLng(WeatherStationData[i][1],WeatherStationData[i][2]),
                title: WeatherStationData[i][0] + '#Arso - Samodejna vremenska postaja' ,
                map: map,
                icon:WeatherClubCardIcon
            });
      }
     else if (i==0){
        WeatherStationMarkers[i] = new google.maps.Marker({
                position: new google.maps.LatLng(WeatherStationData[i][1],WeatherStationData[i][2]),
                title: WeatherStationData[i][0] + ' # Arso - Samodejna vremenska postaja' ,
                map: map,
                icon:WeatherStationBaseIconX
            });
      }
      else {
        WeatherStationMarkers[i] = new google.maps.Marker({
                position: new google.maps.LatLng(WeatherStationData[i][1],WeatherStationData[i][2]),
                title: WeatherStationData[i][0] + '# Lokacija samodejne vremenske postaje ARSO' ,
                map: map,
                icon:WeatherStationIcon
            });
      }

      google.maps.event.addListener(WeatherStationMarkers[i],
             'click', function(i)
             {
                 return function()
                 {
                     //alert("AddListener:Marker:"+i);
                     SelectWeatherStationMarker(i);
                     OnClickInfoWeatherStation(i);
                     //StationMarkersNotifyPHP(i);
                 }

             }(i)
          );
  }

  WeatherStationMarkerX=new google.maps.Marker({
  position: new google.maps.LatLng(46.062500, 14.543833),
  title: '#ARSO - Podatki samodejnih postaj' ,
  icon:WeatherStationIconSelectedX,
  map: map
  });
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function SelectWeatherStationMarkers
@description The function to select a marker from WeatherStationMarkers[] (google.map.marker)
@param {google.maps.marker} MarkerID
@listens {google.maps.onclick event} WeatherStationMarkers[i]
*/
function SelectWeatherStationMarker(MarkerID)
{
  //alert("WeatherStationSelected ID:"+MarkerID);
}

/**
@function OnClickInfoWeatherStation
@description The function to display info of a marker from WeatherStationMarkers[] (google.map.marker)
@param {google.maps.marker} MarkerID
@fires UpdateStreetViewLocation
@listens {google.maps.onclick event} WeatherStationMarkers[i]
*/
function OnClickInfoWeatherStation(MarkerID)
{
this.FunctionRef=OnClickInfoWeatherStation;
FunctionStart(this.FunctionRef);
try
{
  //alert("GasStationSelected OnClickInfo ID:"+MarkerID+":Data-->"+WeatherStationData[MarkerID][0]+"(:"+WeatherStationData[MarkerID][1]+" , "+WeatherStationData[MarkerID][2]+":)===>"+DestinationUrl);
  UpdateStreetViewLocation(WeatherStationData[MarkerID][1],WeatherStationData[MarkerID][2]);
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function UpdateStreetViewLocation
@description The function to update google.streetview object to a location last added to users custom path, markers and polylines.
// displays a generated image from google.streetview api.
@param {google.maps.LatLng} LocationLat
@param {google.maps.LatLng} LocationLng
@listens {google.maps.onclick event} WeatherStationMarkers[i]
*/
function UpdateStreetViewLocation(LocationLat, LocationLng)
{
this.FunctionRef=UpdateStreetViewLocation;
FunctionStart(this.FunctionRef);
try
{
  // https://en.wikipedia.org/wiki/Inverse_trigonometric_functions
  var LocationOriginLat=16.474-LocationLat;
  var LocationOriginLng=13.565-LocationLng;
  var LocationDate=new Date();
  var LocationTime=LocationDate.getHours();

  var LocationHeading=(Math.cos((LocationTime)/24*360)*90+45)%360;
  var LocationPitch=(Math.cos((LocationTime)/24)*10-5)%360;
  var DestinationUrl='https://maps.googleapis.com/maps/api/streetview?size=600x300&location='+LocationLat+','+LocationLng+'&heading='+LocationHeading+'8&pitch='+LocationPitch+'&key=AIzaSyD3ftXQcNKQgHXgNbZ7bud7S0N_TUFyubQ';
  //alert('Pitch:-->'+LocationPitch+':Heading -->'+LocationHeading);

  document.getElementById("img-zekom-street-view").src=DestinationUrl;

  document.body.style.background = "url('"+DestinationUrl+"') no-repeat top right";
  document.body.style.backgroundPosition = "50px 50px";

}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}

/**
@function UpdateDocumentationInformation
@description The function to JsDoc HTML5 object to a location last added to users custom path, markers and polylines.
* displays a generated image from google.streetview api
* See {@link http://www.w3schools.com/jsref/prop_frame_src.asp}
@param {string} SenderName
* and users manual.
@listens {google.maps.onclick event} onClickUserInterface
*/
function UpdateDocumentationInformation(SenderName)
{
this.FunctionRef=UpdateDocumentationInformation;
//if (Sender.name!="FunctionStart") {FunctionStartthis.FunctionRef)};
try
{
  //alert('Documentation : Pitch:-->'+LocationPitch+':Heading -->'+LocationHeading);

  var DocumentUrl="";
  if ((SenderName=="") || (SenderName==null))
  {
    DocumentUrl="./out/Transit.html";
  }
  else if (SenderName=="ZoomBus")
  {
    DocumentUrl="./out/ZoomBus.html";
  }
  else if (SenderName=="ZoomTrain")
  {
    DocumentUrl="./out/ZoomTrain.html";
  }
  else if (SenderName=="ZoomHelicopter")
  {
    DocumentUrl="./out/ZoomHelicopter.html";
  }
  else
  {
    DocumentUrl="./out/global.html#"+SenderName;
  }

  document.getElementById("iframe-documentation").src=DocumentUrl;

}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}


/**
@function SwitchAugmentedReality
@description The function to set CSS properties to the {#div-hd-image} DOM element. ( MaximizeAugmentedReality() - HD image to top )
* See {@link https://api.jquery.com/css/}
* See {@link http://api.jquery.com/prop/}
* See {@link http://www.w3schools.com/jsref/met_win_scrollto.asp}
* See {@link http://www.w3schools.com/jsref/prop_checkbox_checked.asp}
@param {object} null
@fires DisplayAugmentedReality
@listens {google.maps.onclick event} onClickUserInterface
*/
function SwitchAugmentedReality()
{
  this.FunctionRef=SwitchAugmentedReality;
  FunctionStart(this.FunctionRef);
try
{
  //alert('Switch Augmented Reality : -->');

  //window.scrollTo(0,0);

  if ( document.getElementById("checkbox-augmented-reality").checked )
  {
      document.getElementById("checkbox-augmented-reality").checked=false;
  }
  else
  {
      document.getElementById("checkbox-augmented-reality").checked=true;
  }
  //alert('Switch : '+ document.getElementById("checkbox-augmented-reality").checked);
  DisplayAugmentedReality();
}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}

/**
@function DisplayAugmentedReality
@description The function to set CSS properties to the {#div-hd-image} DOM element. ( DisplayAugmentedReality() - HD image to top )
* See {@link https://api.jquery.com/css/}
* See {@link http://api.jquery.com/prop/}
* See {@link http://www.w3schools.com/jsref/met_win_scrollto.asp}
* See {@link http://www.w3schools.com/jsref/dom_obj_style.asp}
* See {@link http://www.w3schools.com/jsref/prop_checkbox_checked.asp}
@param {object} null
@listens {google.maps.onclick event} onClickUserInterface
*/
function DisplayAugmentedReality()
{
  this.FunctionRef=DisplayAugmentedReality;
  FunctionStart(this.FunctionRef);
try
{
  //alert('Display Augmented Reality : -->');

  //window.scrollTo(0,0);

  if (document.getElementById("checkbox-augmented-reality").checked)
  {
    document.getElementById("div-hd-image").style.visibility="visible";
    document.getElementById("iframe-threejs-3d").style.visibility="visible";
  }
  else
  {
    document.getElementById("div-hd-image").style.visibility="hidden";
    document.getElementById("iframe-threejs-3d").style.visibility="hidden";
  }

}
catch(Error)
{
  CatchException(this.FunctionRef,Error);
}
}
