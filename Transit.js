    // Vir : https://developers.google.com/maps/documentation/javascript/shapes
// This example creates an interactive map which constructs a
// polyline based on user clicks. Note that the polyline only appears
// once its path property contains two LatLng coordinates.
//var editMode="<?php echo isset($_GET["mode"])?$_GET["mode"]:""?>";

var editMode="trains";
var markers=[];
var stationMarkers=[];
var stationMarkerObjects=[];
var railPathAll=[];
var railPathCoordinates=[];

var TrainPathCoordinates=[];
//var railPolyLines=[];
//railPolyLines[0]=[[45.8985,15.655],[45.923,15.59],[45.987,15.4701]];
var map;

StationInfoWindowA = new google.maps.InfoWindow({
  content: "StationsInfoText[markerID]"
});

StationInfoWindowB = new google.maps.InfoWindow({
  content: "StationsInfoText[markerID]"
});

var polyOptions = {};

var trainStationIcon = {
path: 'M 0,0 -10,-3 -6,-10 0,-10 6,-10 10,-3 z',
fillColor: 'blue',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};

if (editMode=="rails")
{
var trainStationIcon = {
path: 'M 0,0 -5,-3 -3,-5 0,-5 3,-5 5,-3 z',
fillColor: 'blue',
fillOpacity: 0.6,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};
}

if (editMode=="trains")
{
var trainStationIcon = {
path: 'M 0,0 -5,-3 -3,-5 0,-5 3,-5 5,-3 z',
fillColor: 'blue',
fillOpacity: 0.3,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};
}

var trainStationAIcon = {
path: 'M 0,0 -30,-20 0,-10 31,-20 z',
fillColor: 'green',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'red',
strokeWeight: 1
};

var trainStationBIcon = {
path: 'M 0,0 -30,20 0,10 31,20 z',
fillColor: 'red',
fillOpacity: 0.8,
scale: 1,
strokeColor: 'green',
strokeWeight: 1
};

var trainStationSelected=0;
var trainStationMarkerASelectedID=1;
var trainStationMarkerBSelectedID=1;

var trainStationMarkerA= new google.maps.Marker({
position: new google.maps.LatLng(46.886277,13.902437),
title: '#StationA' ,
map: map
});

var trainStationMarkerB= new google.maps.Marker({
position: new google.maps.LatLng(46.05809,13.617254),
title: '#StationB' ,
map: map
});

var poly;// = new google.maps.Polyline(polyOptions);

function FindMarkerByStationID(StationID)
{
//alert("FindMarkerByStationID");
var tempSizeStationsData=StationsData.length;
//alert(tempSizeStationsData);
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

function InitRailPolyLines()
{
//vir:https://developers.google.com/maps/documentation/javascript/shapes

var StationA=-1;
var StationB=-1;

var i=1000;
//alert("InitRailPolyLines");
//var railPathCoordinates=[]; <--- global variable

for (railPath of railPolyLines )
{
   i++;
   railPathCoordinates=[];

   for ( railCoord of railPath)
   {
       //alert(railCoord);
       railPathCoordinates[railPathCoordinates.length]=new google.maps.LatLng(railCoord[0], railCoord[1]);
       //alert(railCoord.length);
       if (railCoord.length===4) // Pri prvem zapisu je v 3. in 4. stolpcu še zaporedna št. postaje
       {
           StationA=FindMarkerByStationID(railCoord[2]);
           StationB=FindMarkerByStationID(railCoord[3]);
           //alert(StationA+":"+StationB);
       }
   }

//alert("Add new polyline:"+"i:"+ i +":" + StationA +" : "+StationB);

railPathAll.push( new google.maps.Polyline({
    path: railPathCoordinates,
    geodesic: true,
    strokeColor: '#CCBB11',
    strokeOpacity: 1.0,
    strokeWeight: 6
}));


//alert("Add Listener: "+railPathAll[railPathAll.length-1]+":"+i+":"+StationA+":"+StationB);

google.maps.event.addListener(railPathAll[railPathAll.length-1],

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

           }(i,StationA,StationB)
        );

railPathAll[railPathAll.length-1].setMap(map);
}
}

function initialize() {
// Vir : https://developers.google.com/maps/documentation/javascript/markers
var mapOptions = {
zoom: 9,
// Center the map on Kamnik, Slovenija.
center: new google.maps.LatLng(46.0587, 14.5127)
};

map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

ResetMarkers();
AddStationMarkers();
if (editMode=="rails"){InitRailPolyLines();}
if (editMode=="trains"){InitTrainPath();}
// Add a listener for the click event
google.maps.event.addListener(map, 'click', addLatLng);
google.maps.event.addListener(trainStationMarkerA, "mouseover", DisplayStationInfo(1,StationInfoWindowA));
google.maps.event.addListener(trainStationMarkerB, "mouseover", DisplayStationInfo(2,StationInfoWindowB));

}

/**
* Handles click events on a map, and adds a new point to the Polyline.
* @param {google.maps.MouseEvent} event
*/

function ResetPolyLine()
{
var path=[];
for( var i=0; i<markers.length; i++ )
{
 path.push(new google.maps.LatLng(markers[i]["position"].lat(),markers[i]["position"].lng()));
 //alert(path[i]+"::"+i+":"+markers[i]["position"].lat()+"/"+markers[i]["position"].lng());
}
//alert(path.length);

polyOptions =
{
path: path,
strokeColor: '#000000',
strokeOpacity: 1.0,
strokeWeight: 3
};
if (typeof poly != 'undefined'){ poly.setMap(null); }
poly = new google.maps.Polyline(polyOptions);
poly.setMap(map);

}

function addSQLStationRail()
{
StationAID=StationsData[trainStationMarkerASelectedID][0];
StationBID=StationsData[trainStationMarkerBSelectedID][0];

if (StationAID>=StationBID) // ID-ji postaj naj bodo urejeni naraščajoče od manjšega ID, proti večjemu, če je StationAID > StationBID, postaji zamenjamo
{
   StationTMP=StationBID;
   StationBID=StationAID;
   StationAID=StationTMP;
}

document.getElementById("Div-Path-Data").innerHTML=
       "Transit-Path-Data :<br/>" +
       "-->"+StationAID+"-"+StationBID+"', '"+StationAID+"', '"+StationBID+"'<--";

}

function addLatLng(event) {

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

markers.push(marker);
ResetPolyLine();
//INSERT INTO `test`.`Train-Rails-Location`
//(`IDRailAB`, `IDStationA`, `IDStationB`, `Type`)
//VALUES ('99999-111111', '99999', '111111', '0');

//INSERT INTO `test`.`Train-Rails-Details`
// (`IDRailABLatLng`, `IDRailAB`, `RailIndex`, `Lat`, `Lng`)
// VALUES ('99999', '11111', '1', '123123', '2312312');

addSQLStationRail();

for (var i=0;i<markers.length;i++)
{

"INSERT INTO `test`.`Train-Rails-Details`"
"(`IDRailABLatLng`, `IDRailAB`, `RailIndex`, `Lat`, `Lng`) "
"VALUES ('99999', '11111', '1', '123123', '2312312');"

  document.getElementById("div-path-data").innerHTML=
  document.getElementById("div-path-data").innerHTML+
  "<br/>"+"#"+i+":"+markers[i]["position"].toString()+"/"+markers[i]["title"].toString();
}

ResetPolyLine();
}

function ResetMarkers()
{

for (var i=0;i<markers.length;i++)
{
    markers[i].setMap(null);
}
markers=[];

ResetPolyLine();
}

function DeleteLastMarker()
{
// TODO : add check if zero markers
markers[markers.length-1].setMap(null);
markers=markers.slice(0,markers.length-1);
ResetPolyLine();

}

google.maps.event.addDomListener(window, 'load', initialize);

function DisplayStationInfo(markerID, StationInfoWindow )
{
//alert("DisplayStationInfo");
StationInfoWindow.close();

StationInfoWindow = new google.maps.InfoWindow({
  content: StationsInfoText[markerID]
});

//StationInfoWindow.open(map, stationMarkers [markerID] );
}

function SelectStationMarker(markerID)
{
//alert("trainStationSelected"+trainStationSelected);

ResetMarkers();
switch (trainStationSelected)
{
case 0 :
    RailSelectA(markerID);
    //alert("RailSelectA()"+trainStationSelected);
    trainStationSelected=10;
    break;

case 10 :
    RailSelectB(markerID);
    //alert("RailSelectB()"+trainStationSelected);
    trainStationSelected=0;
    break;
}

addSQLStationRail();
    //alert("SelectStationMarker:"+stationMarkers[markerID].getPosition().lat()+":"+stationMarkers[markerID].getPosition().lng());
}

function RailSelectA(markerID)
{
trainStationMarkerA.setPosition(
        new google.maps.LatLng(
        stationMarkers[markerID].getPosition().lat(),
        stationMarkers[markerID].getPosition().lng())
);

trainStationMarkerASelectedID=markerID;

//alert("RailSelectA:"+stationMarkers[markerID].getPosition().lat()+":"+stationMarkers[markerID].getPosition().lng());

//document.getElementById("div-path-data").innerHTML=trainStationMarkerA.keys.toString();
}

function RailSelectB(markerID)
{
    trainStationMarkerB.setPosition(
        new google.maps.LatLng(
        stationMarkers[markerID].getPosition().lat(),
        stationMarkers[markerID].getPosition().lng())
);

trainStationMarkerBSelectedID=markerID;

//alert("RailSelectB:"+stationMarkers[markerID].getPosition().lat()+":"+stationMarkers[markerID].getPosition().lng());
//document.getElementById("div-path-data").innerHTML=trainStationMarkerB.keys.toString();
}


function ZoomStationA()
{
map.panTo(trainStationMarkerA.getPosition());
window.setTimeout(function() {
  map.setZoom(16);
}, 500);

}

function ZoomStationB()
{
map.panTo(trainStationMarkerA.getPosition());

window.setTimeout(function() {
  map.setZoom(9);
}, 500);

window.setTimeout(function() {
  map.panTo(trainStationMarkerB.getPosition());
}, 1000);

window.setTimeout(function() {
  map.setZoom(16);
}, 1000);

}

function ZoomStationX()
{
map.panTo(trainStationMarkerA.getPosition());

window.setTimeout(function() {
  map.setZoom(11);
}, 500);

window.setTimeout(function() {
  map.panTo(trainStationMarkerB.getPosition());
}, 1000);

window.setTimeout(function() {
  map.setZoom(9);
}, 2000);

}

function StationMarkersNotifyPHP ()
{
//alert("StationMarkersNotifyPHP");
$.ajax({
method: "POST",
url: "./controler/MapDataUpdate.php",
data: { StationA: StationAID, StationB: StationBID }
})
.done(function( msg ) {
  //alert("Map update");
});
}


function AddStationMarkers()
{
//alert("AddStationMarkers");
var markerObject;
var marker;
var markerEvent;
stationMarkers=[];
for (var i=0; i<Stations.length; i++)
{
    marker = new google.maps.Marker({
            position: Stations[i],
            title: StationsData[i][0].toString() + '#' + StationsData[i][1].toString(),
            map: map,
            icon:trainStationIcon
        })
    stationMarkers.push(marker);

     //markerEvent=
    markerObject =
    {
        stationID:i
    }
    stationMarkerObjects.push( markerObject );

    google.maps.event.addListener(stationMarkers[i],
           'click', function(i)
           {
               return function()
               {
                   //alert("AddListener:Marker:"+i);
                   SelectStationMarker(i);
                   StationMarkersNotifyPHP();
               }

           }(i)
        );
}

trainStationMarkerA= new google.maps.Marker({
position: new google.maps.LatLng(46.00,13.00),
title: '#StationA' ,
icon:trainStationAIcon,
map: map
});


trainStationMarkerB= new google.maps.Marker({
position: new google.maps.LatLng(47.00,13.00),
title: '#StationB' ,
icon:trainStationBIcon,
map: map
});

}

function SaveRail()
{

}

function UndoRail()
{

}

function RefreshStation()
{

}

function ExecuteSQL()
{
SQLString="";
//document.getElementById("div-path-data").innerHTML;
//document.getElementById("div-path-data").innerHTML=
var GoogLatLng = new google.maps.LatLng(44,77);
for (var i=0; i<Stations.length ; i++)
{
 GoogLatLng = Stations[i];

SQLString=SQLString+
"\n INSERT INTO `emisije`.`TrainStations` " +
"(`IDStation`, `Name`, `Lat`, `Lng`) " +
" VALUES ('"+StationsData[i][0]+"','"+StationsData[i][1]+"', '"+GoogLatLng.lat() +"', '"+GoogLatLng.lng()+"'); \n" ;
}
document.getElementById("div-path-data").innerHTML=SQLString;
}

// https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-animate


// This example adds an animated symbol to a polyline.

var TrainPath=[];

function InitTrainPathData()
{
TrainPathCoordinates=[];
for (railPath of railPolyLines )
{
   i++;

   TrainPathCoordinatesSingle=[];
   for ( railCoord of railPath )
   {

       TrainPathCoordinatesSingle.push(
               new google.maps.LatLng(railCoord[0], railCoord[1]));
       //alert(railCoord.length);
       /*if (railCoord.length===4) // Pri prvem zapisu je v 3. in 4. stolpcu še zaporedna št. postaje
       {
           StationA=FindMarkerByStationID(railCoord[2]);
           StationB=FindMarkerByStationID(railCoord[3]);
           //alert(StationA+":"+StationB);
       }*/
   }
   TrainPathCoordinates.push(TrainPathCoordinatesSingle);
//alert("Add new polyline:"+"i:"+ i +":" + StationA +" : "+StationB);
var TrainSymbol = {
path: google.maps.SymbolPath.CIRCLE,
scale: 8,
strokeColor: '#393'
};


TrainPath.push(
        new google.maps.Polyline({
path: TrainPathCoordinatesSingle,
icons: [{
  icon: TrainSymbol,
  offset: '100%'
}],
map: map

}));

}
}

function InitTrainPath()
{
// var TrainPathCoordinates=[];
InitTrainPathData();

/*TrainPathCoordinates[0]= [
new google.maps.LatLng(16.11, 15.191),
new google.maps.LatLng(50, 16)
];*/

// Define the symbol, using one of the predefined paths ('CIRCLE')
// supplied by the Google Maps JavaScript API.
var TrainSymbol = {
path: google.maps.SymbolPath.CIRCLE,
scale: 8,
strokeColor: '#393'
};

// Create the polyline and add the symbol to it via the 'icons' property.
TrainPath[0] = new google.maps.Polyline({
path: TrainPathCoordinates[0],
icons: [{
  icon: TrainSymbol,
  offset: '100%'
}],
map: map
});

animateCircle();
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle() {
var count = 0;
window.setInterval(function() {

  for (TrainPathSingle of TrainPath)
  {
    count = (count + 1) % 200;

    var icons = TrainPathSingle.get('icons');
    icons[0].offset = (count / 2) + '%';
    TrainPathSingle.set('icons', icons);
  }
}, 1000);
}


function onClickInfo()
{
$( "#Div-Debug-Info" ).html("ABC--123-456-789-000");

$.ajax({
method: "POST",
url: "./model/Train-Info.php",
data: { Datum:"1.1.2015", StationA: trainStationMarkerASelectedID, StationB: trainStationMarkerBSelectedID }
})
.done(function( msg ) {
  $( "#Div-Debug-Data" ).html(msg);
});
}

//google.maps.event.addDomListener(window, 'load', initialize);
function StartMacro(RepeatX)
{

Station=Math.ceil(Math.random()*131);
SelectStationMarker(Station);
Station=Math.ceil(Math.random()*111);
SelectStationMarker(Station);

onClickInfo();

setTimeout(ZoomStationA(),1000);
setTimeout(ZoomStationB(),3000);
setTimeout(ZoomStationX(),9000);

if ( RepeatX>0 ) {setTimeout(StartMacro(RepeatX-1),11000);}

}
