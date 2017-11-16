var SimulationTime = new Date();
var GlobalSimulationTimeMS = 999;
var GlobalSimulationRefreshRate=111;
var GlobalSimulationSteps=0;
var GlobalTrainId = 0;
var GlobalTimeLastRefreshedMS=GetSimulationTime().getTime();
var GlobalOldSimulationSteps=GlobalSimulationSteps;
var GlobalSimulationMode=-1;

SimulationTime.setHours(7);

var SQLMarker=null;
var OldSqlMarker=null;
var SQLMacroIconA = {
    url: './images/Hypnocat-SQL-A.png',
    // This marker is 33 pixels wide by 33 pixels high.
    size: new google.maps.Size(111 , 111),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(44, 40)

};

var SQLMacroIconB = {
    url: './images/Hypnocat-SQL-B.png',
    // This marker is 33 pixels wide by 33 pixels high.
    size: new google.maps.Size(111, 111),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(44, 40)
};

function TrainMacroError(e)
{
  //alert(e);
}

function ShowIconSQL()
{
  try {


    var NewSQLMarker=null;
    if (SQLMarker != null)
    {
      SQLMarker.setMap(null);
    }
    SQLMarker=null;

    if ((GlobalSimulationSteps>TrainSchedule.length))
    {
      /*if ((GlobalSimulationSteps%10) == 0)
      {
      SQLMarker = new google.maps.Marker({
             position: new google.maps.LatLng(46.0717549,14.5185765),
             title: 'SQL : 100% ...',
             map: map,
             icon:SQLMacroIconA,
             zIndex: 111
         });
         //return;
       }
       else
       {
        return;
      }*/
      return;
      }


      if (GlobalSimulationSteps%5 == 1)
      {
         NewSQLMarker = new google.maps.Marker({
                position: new google.maps.LatLng(46.0717549,14.5185765),
                title: 'SQL loading ...',
                map: map,
                icon:SQLMacroIconA,
                zIndex: 99
            });
      }
      else if (GlobalSimulationSteps%5 == 2)
      {
         NewSQLMarker = new google.maps.Marker({
                position: new google.maps.LatLng(46.0717549,14.5185765),
                title: 'SQL loading ...',
                map: map,
                icon:SQLMacroIconA,
                zIndex: 11
            });
      }
      else if (GlobalSimulationSteps%5 == 3)
      {
         NewSQLMarker = new google.maps.Marker({
                position: new google.maps.LatLng(46.0717549,14.5185765),
                title: 'SQL loading ...',
                map: map,
                icon:SQLMacroIconA,
                zIndex: 55
            });
      }
      else
      {
        NewSQLMarker = new google.maps.Marker({
               position: new google.maps.LatLng(46.0717549,14.5185765),
               title: 'SQL loading ...',
               map: map,
               icon:SQLMacroIconB,
               zIndex: 99
           });
      }

      if(SQLMarker != null)
      {
        SQLMarker.setMap(null);
      }

      SQLMarker=null;

      SQLMarker = NewSQLMarker;

            setTimeout(function()
            {
              if (SQLMarker != null)
              {
                SQLMarker.setMap(null);
              }
              SQLMarker = null;
            }
            ,111);

          } catch (e) {
              TrainMacroError(e);
          } finally {

          }

}


function TrainMacroDisplayTime()
{
  try {

  // https://www.w3schools.com/jsref/jsref_gettime.asp
  var seconds = 1000;
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;

      //var date = new Date();
      var date=GetSimulationTime();
      var t = date.getTime();

      var hours00 = date.getHours();
      if (hours00 < 10){hours00='0'+hours00;}
      var minutes00 = date.getMinutes();
      if (minutes00 < 10){minutes00='0'+minutes00;}
      var seconds00 = date.getSeconds();
      if (seconds00 < 10){seconds00='0'+seconds00;}

      $('#div-console-data').html('<h1>[ '+hours00+':'+minutes00+':'+seconds00+' ]</h1>\n<br/>');
      $("#div-console-data").css("color", "green");
      $(".div-toolbar-footer-breadcrumbs").css("color", TransitPolyLinesColor[CameraColorSelector]);

      var MacroProgressBar=Math.round(GlobalSimulationSteps/TrainSchedule.length*100);

      var TimeElapsed=date.getTime()-GlobalTimeLastRefreshedMS;
      var FramesComplete=Math.round(GlobalSimulationSteps - GlobalOldSimulationSteps);

      GlobalOldSimulationSteps=GlobalSimulationSteps;
      GlobalTimeLastRefreshedMS=date.getTime();
      GlobalTimeElapsedSimulationSteps=GlobalSimulationSteps;
      GlobalFPS=0;
      GlobalFPS=Math.round(FramesComplete/TimeElapsed*1000);
      if (GlobalFPS===undefined)
      {
        GlobalFPS=-1;
      }
      else if (GlobalFPS==NaN)
      {
        GlobalFPS=-1;
      }

      var dots=".";

      if (MacroProgressBar<=100)
      {
        if (((MacroProgressBar%11)>=(0)) && ((MacroProgressBar%11)<=(5)))
        {
          dots = dots +".";
        }
        if (((MacroProgressBar%11)>=(5)) && ((MacroProgressBar%11)<=(10)))
        {
          dots = dots +".";
        }

      $('#div-console-data').append('<h3>Loading '+dots+'</h3> Progress : '+MacroProgressBar+'%" <br/> ---> [ '+GlobalSimulationSteps+' ]</b>\n<br/>');
      $("#div-console-data").css("color", TransitPolyLinesColor[CameraColorSelector]);
      }
      else {
        /*$('#div-console-data').append('Simulation steps : ---> [ '+GlobalSimulationSteps+' ]</b>\n<br/>');
        $('#div-console-data').append('FPS :'+ dots +'  [ <h3>'+(GlobalFPS)+'</h3> ] frames per second '+ dots +'<br/>');

        $("#div-console-data").css("color", TransitPolyLinesColor[CameraColorSelector]);*/
      }


    } catch (e) {
        TrainMacroError(e);
    } finally {

    }
}

function TrainMacroDisplayTimeStart()
{
  try {

     setInterval(function(){TrainMacroDisplayTime();},GlobalSimulationRefreshRate);
     setInterval(function(){SetSimulationTime(GlobalSimulationTimeMS);},GlobalSimulationRefreshRate);
     InitTrainMacro();
     //clearInterval(TrainMacroTimerObject);

   } catch (e) {
      TrainMacroError(e);
   } finally {

   }
}

function GetSimulationTime()
{
  try {
   if (GlobalSimulationMode==111)
   {
     return SimulationTime;
   }
   else
   {
     return new Date();
   }
 } catch (e) {
    TrainMacroError(e);
 } finally {

 }
}

function SetSimulationTime(AddMiliSeconds)
{
  try {

   SimulationTime=new Date(SimulationTime.getTime()+AddMiliSeconds);

 } catch (e) {
    TrainMacroError(e);
 } finally {

 }
}

function CheckTime(HourMinSec,TrainId)
{
  try {

   //alert(HourMin);
   var MSDot = HourMinSec.indexOf(".");
   var HourMin = "HH:MM";
   if (MSDot == -1)
   {
     HourMin=HourMinSec;
   }
   else
   {
      HourMin=HourMinSec.substring(0,MSDot);
      //alert("HourMinSec:"+HourMinSec+"-->HourMin"+HourMin);
   }

   var DateA = new Date(0);
   var DateX = GetSimulationTime();
   var HMColon = HourMin.indexOf(":");
   if (HMColon == -1)
   {/*alert(TrainId+"CheckTime error:("+HourMin+"):("
   +TrainSchedule[TrainId][IndexTimeStart]+"|"+TrainSchedule[TrainId][IndexTimeEnd]+")-->("
   +HourMin.substring(0,HMColon)+"|"+HourMin.substring(HMColon+1,HourMin.length)+"):("+DateA.getTime()+"):("+DateX.getTime()+")-->"+DiffTime);*/
   return null;}

   var Hours = parseInt(HourMin.substring(0,HMColon));
   //alert("Hours :"+Hours);
   var Minutes = parseInt(HourMin.substring(HMColon+1,HourMin.length));
   //alert("Minutes :"+Minutes);
   var Seconds = 0;
   if(MSDot!=-1){
     Seconds = parseInt(HourMinSec.substring(MSDot+1,HourMinSec.length))
     //alert ("Hey Seconds : "+Seconds+":"+HourMinSec.substring(MSDot+1,HourMinSec.length));
   };

   DateA.setFullYear(DateX.getFullYear());
   DateA.setMonth(DateX.getMonth());
   DateA.setDate(DateX.getDate());
   DateA.setHours(Hours);
   DateA.setMinutes(Minutes);
   DateA.setSeconds(Seconds);

   var DiffTime = DateA.getTime()-DateX.getTime();
   /*alert("("+HourMin+"):("
   +HourMin.substring(0,HMColon)+"|"
   +HourMin.substring(HMColon+1,HourMin.length)
   +"):("+DateA.getTime()
   +"):("+DateX.getTime()
   +"("+DateX.getHours()+"|"+DateX.getMinutes()+")"
   +")-->"+DiffTime);
*/
   //alert(HourMinSec+"-->:"+Hours+"-:-"+Minutes+"-.-"+Seconds+" : "+ DiffTime);
   return DiffTime;

 } catch (e) {
    TrainMacroError(e);
 } finally {

 }
}

var IndexTimeStart = 1;
var IndexTimeEnd = 2;
var IndexTrainStatus = 3;
var IndexTrainMarkerObject = 6;
var IndexTrainInfoWindow = 7;
var IndexMacroTrack = 10;
var IndexMicroPosition = 11;
var IndexTrackLineObject = 12;
var IndexTrainMacroTimerInstance = 13;
var IndexTrainStopObject = 14;
var IndexTrainStopNumber = 15;
var IndexStopInfoWindow = 16;
var IndexTrainInfoWindowIsOpen=17;
var IndexTrainInfoPathObject=18;

var SubIndexTrainArr = 2;
var SubIndexTrainDep = 3;

var TrainMacroInstanceBusy = -1;
var TrainMacroMainInstance = null;

function InitTrainMacro()
{
   try {

   TrainMacroMainInstance = setInterval(function()
     { if (TrainMacroInstanceBusy == -1)
         {InitTrainMacroInstance(GlobalTrainId);}
     }, 0);

   } catch (e) {
      TrainMacroError(e);
   } finally {

   }
}

function CheckMidnightTime(TimeA,TimeB)
{
  try {

  var HMColon = TimeA.indexOf(":");
  var HoursA = parseInt(TimeA.substring(0,HMColon));
  HMColon = TimeB.indexOf(":");
  var HoursB = parseInt(TimeB.substring(0,HMColon));
  var Result = HoursA>HoursB;
  return Result;


  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function CheckTrainActive(TrainId)
{
  try {

  var Result = false;
  if (CheckMidnightTime(TrainSchedule[TrainId][IndexTimeStart],TrainSchedule[TrainId][IndexTimeEnd]))
  {
    Result  =  ((CheckTime(TrainSchedule[TrainId][IndexTimeStart],TrainId)>= 0) &&
             (CheckTime("23:59.59",TrainId)<=0))
             ||
             ((CheckTime("0:00.00",TrainId)>=0) &&
             (CheckTime(TrainSchedule[TrainId][IndexTimeEnd],TrainId)<=0));
  }
  else
  {
    Result = ((CheckTime(TrainSchedule[TrainId][IndexTimeStart],TrainId)<=0)
    &&(CheckTime(TrainSchedule[TrainId][IndexTimeEnd],TrainId)>=0));
  }

  return Result;

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function GetTrackTimeMS(TimeA,TimeB)
{
  try {

  var HMColon = TimeA.indexOf(":");
  var HoursA = parseInt(TimeA.substring(0,HMColon));
  var MinutesA = parseInt(TimeA.substring(HMColon+1,TimeA.length));
  HMColon = TimeB.indexOf(":");
  var HoursB = parseInt(TimeB.substring(0,HMColon));
  var MinutesB = parseInt(TimeB.substring(HMColon+1,TimeB.length));

  //if (HoursA>HoursB){alert("GetTrackTimeMS error");}
  var Result = ((HoursB-HoursA)*60+(MinutesB-MinutesA))*60*1000;

  return Result;

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function SetMacroTrack(TrainId)
{
  try {

  var NewMacroTrack = TrainSchedule[TrainId][IndexMacroTrack];
  var CheckTimeX = 0;
  var CheckTimeY = 0;
  for (var i = 0;i<TrainSchedule[TrainId][0].length-1;i++)
  {
    var CheckTimeX = CheckTime(TrainSchedule[TrainId][0][i][SubIndexTrainArr]+".00");
    if (CheckTimeX==null) {CheckTime(TrainSchedule[TrainId][0][i][SubIndexTrainDep]+".00");}

      //alert(CheckTimeX+":"+CheckTimeY);
      if(CheckTimeX<=0)
      {
            //("CheckTimeX:"+CheckTimeX+":"+TrainId+":"+TrainSchedule[TrainId]);
            NewMacroTrack = i;

      }
      else
      {
        break;
      }

  }

  if (TrainSchedule[TrainId][IndexMacroTrack] != NewMacroTrack) // Clear Train icon
  {
    //alert("SetMacroTrack : TrainId"+TrainId+ " NewMacroTrack"+NewMacroTrack  );
      TrainSchedule[TrainId][IndexMicroPosition]=0;

      if(TrainSchedule[TrainId][IndexTrackLineObject] != null)
      {
        TrainSchedule[TrainId][IndexTrackLineObject].setMap(null);
      }
      TrainSchedule[TrainId][IndexTrackLineObject] = null;

      if(TrainSchedule[TrainId][IndexTrainMarkerObject] != null)
      {
        TrainSchedule[TrainId][IndexTrainMarkerObject].setMap(null);
      }
      TrainSchedule[TrainId][IndexTrainMarkerObject] = null;

      ShowIconSQL()

      $('#div-console-data').html('<h1>[ '+TrainSchedule[TrainId]+'</h1>');

                //Clear TrainStation Marker Objects

                      if (TrainSchedule[TrainId][IndexStopInfoWindow]!=null)
                      {
                        TrainSchedule[TrainId][IndexStopInfoWindow].close();
                      }

                      if (TrainSchedule[TrainId][IndexTrainStopObject]!=null)
                      {
                        TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);
                      }
                      TrainSchedule[TrainId][IndexTrainStopObject] = null;

       if(TrainSchedule[TrainId][IndexTrainStopObject] !=null)
       {
         TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);
       }
       TrainSchedule[TrainId][IndexTrainStopObject] = null;

       TrainSchedule[TrainId][IndexTrainStopNumber] = -1;

       TrainSchedule[TrainId][IndexMacroTrack] = NewMacroTrack;
  }

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function SetMicroPosition(TrainId)
{
  try {

  var ActiveMacroTrack = TrainSchedule[TrainId][IndexMacroTrack];
  var TimeA = TrainSchedule[TrainId][0][ActiveMacroTrack][SubIndexTrainDep]+".59";
  var TimeB = TrainSchedule[TrainId][0][ActiveMacroTrack+1][SubIndexTrainArr]+".00";
  var CheckTimeA = CheckTime(TimeA,TrainId);
  //alert(CheckTimeFlagA);
  var CheckTimeB = CheckTime(TimeB,TrainId);
  //alert(CheckTimeFlagB);
  var SimTime=GetSimulationTime();
  var CheckTimeX = CheckTime(SimTime.getHours()+":"+SimTime.getMinutes()+"."+SimTime.getSeconds(),TrainId);




  var NewMicroPosition=TrainSchedule[TrainId][IndexMicroPosition];
  if (CheckTimeA<=0)
  {
    if (CheckTimeB>=0)
    {
        NewMicroPosition = Math.round((CheckTimeX-CheckTimeA)/(CheckTimeB-CheckTimeA)*100);
        /*if (TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]==1)
        {
            alert(CheckTimeA+":"+CheckTimeB+" - "+CheckTimeX);
        }*/

    }
  }

  if (NewMicroPosition<0) {NewMicroPosition=0;}
  if (NewMicroPosition>100) {NewMicroPosition=100;}
  //alert(CheckTimeFlagX+":"+CheckTimeFlagA+"-"+CheckTimeFlagB);
  // alert (NewMicroPosition);
  if (!(NewMicroPosition >= TrainSchedule[TrainId][IndexMicroPosition]))
    {
      //alert("TrainId:"+TrainId+" Micro position:"+TrainSchedule[TrainId][IndexMicroPosition]+"-"+NewMicroPosition);
    }
  //NewMicroPosition = 50;
  var TrainKMComplete=NewMicroPosition-TrainSchedule[TrainId][IndexMicroPosition];
  //alert(TrainKMComplete);
  if (TrainKMComplete<0){return;}

  TrainSchedule[TrainId][IndexMicroPosition] = NewMicroPosition;

  var NanoSteps=5;
  var NanoPosition=0;

  for (var i=1; i<NanoSteps; i++)
  {
    NanoPosition=NewMicroPosition+Math.round(i*TrainKMComplete/NanoSteps);
    if (NanoPosition>100) {NanoPosition=100;}
    setTimeout(function(){SetNanoPosition(TrainId, NanoPosition);},GlobalSimulationRefreshRate*i*NanoSteps);
  }


  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function SetNanoPosition(TrainId, NanoPosition)
{
  try {

  TrainSchedule[TrainId][IndexMicroPosition]=NanoPosition;
  animateTrainMacro(TrainId);


  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function CheckStationStop(TrainId)
{
  try {

  //alert("CheckStationStop:"+TrainId);
  var Result=false;
  var CheckTimeX=0;
  var CheckTimeY=0;
  var HTMLContent="";
  var LastStationIndex=TrainSchedule[TrainId][0].length-1;

  for (i = 0;i<TrainSchedule[TrainId][0].length-1;i++)
  {
      var CheckTimeX = CheckTime(TrainSchedule[TrainId][0][i][SubIndexTrainArr]+".00");
      if (CheckTimeX==null) {CheckTime(TrainSchedule[TrainId][0][i][SubIndexTrainDep]+".00");}
      var CheckTimeY = CheckTime(TrainSchedule[TrainId][0][i][SubIndexTrainArr]+".59");

      //CheckTimeX=CheckTimeX-GlobalTrainStopExtraTime;
      //CheckTimeY=CheckTimeY+GlobalTrainStopExtraTime;
      //alert("Station stop Check - CheckTimeX:"+CheckTimeX+" CheckTimeY:"+CheckTimeY+" TrainId:"+TrainId);
      if(CheckTimeX<=0)
      {
         if (CheckTimeY>0)
         {
           Result=true;

           TrainSchedule[TrainId][IndexMacroTrack]=i;
           TrainSchedule[TrainId][IndexMicroPosition]=0;
           animateTrainMarker(TrainId);

           if (TrainSchedule[TrainId][IndexTrainMarkerObject]!=null)
            {
              //TrainSchedule[TrainId][IndexTrainMarkerObject].setPosition(new google.maps.LatLng(TrainSchedule[TrainId][0][i][4][0],TrainSchedule[TrainId][0][i][4][1]));
              //alert(TrainSchedule[TrainId][IndexTrainMarkerObject].getPosition());
            }

           if (TrainSchedule[TrainId][IndexTrainStopNumber]!=i)
           {
             TrainSchedule[TrainId][IndexTrainStopNumber]=i;
           }
           else
           {
              return false;
           }
           //alert("Station stop - Stop:"+TrainId);

           if(TrainSchedule[TrainId][IndexStopInfoWindow]!=null)
           {
             TrainSchedule[TrainId][IndexStopInfoWindow].close();
           }

           if(TrainSchedule[TrainId][IndexTrainStopObject]!=null)
           {
             TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);
           }
           TrainSchedule[TrainId][IndexTrainStopObject] = null;


           TrainSchedule[TrainId][IndexTrainStopObject] = new google.maps.Marker({
                     position: new google.maps.LatLng(TrainSchedule[TrainId][0][i][4][0],TrainSchedule[TrainId][0][i][4][1]),
                     title: 'Info : --- ',
                     map: map,
                     icon:TransitTrainMacroActionIconLargeGreen,
                     zIndex: (zIndexTrainMarker - 1)
                 });

                        HTMLContent+="<h2>"+TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][0]+
                        " - "+TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][1]+"</h2>";
                        HTMLContent+=TrainSchedule[TrainId][5]+' '
                        +'<b>'+TrainSchedule[TrainId][0][0][1]+'</b> - '
                        +'<b>'+TrainSchedule[TrainId][0][LastStationIndex][1]+'</b>'
                        +' ... ' + TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][SubIndexTrainArr];

            //alert("Station stop new Location :"+TrainSchedule[TrainId][0][i][4][0]+":"+TrainSchedule[TrainId][0][i][4][1]);
            TrainSchedule[TrainId][IndexStopInfoWindow] = new google.maps.InfoWindow({
                   content: HTMLContent
                 });

             TrainSchedule[TrainId][IndexTrainStopObject].addListener('click', function() {
                   TrainSchedule[TrainId][IndexStopInfoWindow].open(map, TrainSchedule[TrainId][IndexTrainStopObject]);
                   if (TrainSchedule[TrainId][IndexTrainInfoWindow])
                   {
                      TrainSchedule[TrainId][IndexTrainInfoWindow].open(map, TrainSchedule[TrainId][IndexTrainMarkerObject]);
                      TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]=1;
                   }
             });


                        if (TrainSchedule[TrainId][0][i][1]!=TrainSchedule[1][0][1][1])
                        {
                           TrainSchedule[TrainId][IndexStopInfoWindow].open(map, TrainSchedule[TrainId][IndexTrainStopObject]);
                        }

             setTimeout(
               function()
               {
                if (TrainSchedule[TrainId][IndexStopInfoWindow] != null)
                {
                  TrainSchedule[TrainId][IndexStopInfoWindow].close();
                }
                //TrainSchedule[TrainId][IndexStopInfoWindow]=null;

                if (TrainSchedule[TrainId][IndexTrainStopObject] != null)
                {
                  TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);
                }
                TrainSchedule[TrainId][IndexTrainStopObject]=null;
              }, 22222);

              return Result;

         }
      }

  }
  return false;

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function CheckLastStation(TrainId)
{

  var CheckTimeX=CheckTime(TrainSchedule[TrainId][0][(TrainSchedule[TrainId][0].length-1)][SubIndexTrainArr]);
  var LastStationIndex=TrainSchedule[TrainId][0].length-1;
  var HTMLContent="";

/*  if (TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]==1)
  {
    alert(TrainId+":"+CheckTimeX);
  }*/
    if ((CheckTimeX<=180000) && (CheckTimeX>=-180000))
    {

      if (TrainSchedule[TrainId][IndexTrainStopObject]!=null)
      {
        return;
      }

      TrainSchedule[TrainId][IndexTrainStopObject] = new google.maps.Marker({
                position: new google.maps.LatLng(TrainSchedule[TrainId][0][LastStationIndex][4][0],TrainSchedule[TrainId][0][LastStationIndex][4][1]),
                title: 'Info : --- ',
                map: map,
                icon:TransitTrainMacroActionIconLargeGreen,
                zIndex: (zIndexTrainMarker - 1)
            });

       HTMLContent+="<h1>"+TrainSchedule[TrainId][5]+"</h1>";
       HTMLContent+=TrainSchedule[TrainId][5]+' '
       +'<b>'+TrainSchedule[TrainId][0][0][1]+'</b> - '
       +'<b>'+TrainSchedule[TrainId][0][LastStationIndex][1]+'</b>'
       +' ... ' + TrainSchedule[TrainId][0][LastStationIndex][SubIndexTrainArr];

       TrainSchedule[TrainId][IndexStopInfoWindow] = new google.maps.InfoWindow({
              content: HTMLContent
       });

       TrainSchedule[TrainId][IndexStopInfoWindow].open(map, TrainSchedule[TrainId][IndexTrainStopObject]);

       setTimeout(
         function()
         {
          if (TrainSchedule[TrainId][IndexStopInfoWindow] != null)
          {
            TrainSchedule[TrainId][IndexStopInfoWindow].close();
          }
          //TrainSchedule[TrainId][IndexStopInfoWindow]=null;

          if (TrainSchedule[TrainId][IndexTrainStopObject] != null)
          {
            TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);
          }
          TrainSchedule[TrainId][IndexTrainStopObject]=null;
        }, 22222);



    }
}


function InitTrainMacroInstance(InstanceId)
{
  try {

  var TrainId = GlobalTrainId;
  if (GlobalSimulationSteps>0)
  {
    if (TrainMacroInstanceBusy != -1)
    {
      return "TrainId instance busy:"+TrainId;
    }
    TrainMacroInstanceBusy=InstanceId;
  }

  ShowIconSQL();

  GlobalSimulationSteps++;

  //alert ("InitTrainMacroInstance:"+TrainId);
  //alert("Init train macro 1");
  //alert("InitTrainMacro");
  // TrainSchedule[i][3] index 3 - reserved Train status - Initial, Active
  // TrainSchedule[i][6] index 6 - reserved for google.maps marker object
  // TrainSchedule[i][7] index 7 - reserved for google.maps infowindow object
  // TrainSchedule[i][10] index 10 - reserved for MacroTrain integer TrackId station track index
  // TrainSchedule[i][11] index 11 - reserved for integer ( 0 - 1000 ) micro position between station track index
  // TrainSchedule[i][12] index 12 - reserved for Train Track line object.
  // TrainSchedule[i][13] index 13 - reserved for TrainMacroTimerInstance

  //alert(TrainSchedule.length);

    //for ( TrainId=0; TrainId < TrainSchedule.length; TrainId++ )
    //for ( TrainId=450; TrainId<500; TrainId++ )
    if ((TrainId>0) || (TrainId<TrainSchedule.length))
    {
        if (TrainSchedule[TrainId][IndexTrainStatus] === 'Initial') // Vlak na začetku proge
        {
          //alert("Initial:"+TrainSchedule[i]);
          if (TrainSchedule[TrainId][0].length>1)
            {
              TrainSchedule[TrainId][IndexTrainStatus] = 'Active';
              TrainSchedule[TrainId][IndexMacroTrack] = 0;
              TrainSchedule[TrainId][IndexMicroPosition] = 0;
              TrainSchedule[TrainId][IndexTrackLineObject] = null;
              TrainSchedule[TrainId][IndexTrainMarkerObject] = null;
              TrainSchedule[TrainId][IndexTrainMacroTimerInstance] = null;
              TrainSchedule[TrainId][IndexTrainStopObject] = null;
              TrainSchedule[TrainId][IndexTrainStopNumber] = 0;
              TrainSchedule[TrainId][IndexStopInfoWindow] = null;
              TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]=-1;
              TrainSchedule[TrainId][IndexTrainInfoPathObject]=null;
            }
        }

        CheckLastStation(TrainId);

        if (CheckTrainActive(TrainId)!=true) // If a train is not active, clear all markers and objects from the map
        {
          if (TrainSchedule[TrainId][IndexTrainStopObject]!=null){TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);}
          if (TrainSchedule[TrainId][IndexTrackLineObject]!=null){TrainSchedule[TrainId][IndexTrackLineObject].setMap(null);}
          if (TrainSchedule[TrainId][IndexTrainMarkerObject]!=null){TrainSchedule[TrainId][IndexTrainMarkerObject].setMap(null);}
          if (TrainSchedule[TrainId][IndexTrainInfoWindow]!=null){TrainSchedule[TrainId][IndexTrainInfoWindow].setMap(null);}

          TrainSchedule[TrainId][IndexTrainInfoWindow] = null ;
          TrainSchedule[TrainId][IndexTrackLineObject] = null;
          TrainSchedule[TrainId][IndexTrainMarkerObject] = null;
          TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]=-1;

          NewTrainInfoPathObject(TrainId);

          GlobalTrainId++;
          GlobalTrainId = GlobalTrainId%TrainSchedule.length;
          TrainMacroInstanceBusy = -1;

          return "TrainId inactive"+TrainId;
        }
        else
        {
          $('#div-console-data').append('<b>-+[ InitTrainMacro('+ TrainId +') ]+-</b>');
        }

        if (TrainSchedule[TrainId][0].length>1)
            {
              TrainSchedule[TrainId][IndexTrainStatus] = 'Active';

              SetMacroTrack(TrainId);
              SetMicroPosition(TrainId);
              StartTrainMacroWorker(TrainId);

            }

  }
  GlobalTrainId++;
  GlobalTrainId = GlobalTrainId%TrainSchedule.length;

  TrainMacroInstanceBusy = -1;

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function StartTrainMacroWorker(TrainId)
{
  try {

    if (TrainSchedule[TrainId][IndexTrainMacroTimerInstance]===null)
    {
      //alert("Start "+TrainId);
      StartTrainMacroAnimation(TrainId);
    }

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

// This example adds an animated symbol to a polyline.
function StartTrainMacroAnimation(TrainId)
{
  try {

      // Define the symbol, using one of the predefined paths ('CIRCLE')
      // supplied by the Google Maps JavaScript API.

      // https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-dashed

    var TrainPositionSymbol  =  {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8,
    strokeColor: '#FF2211'
    };

    TrackId = TrainSchedule[TrainId][IndexMacroTrack];

          if (TrainId <= 0)
          {
            TrainId = 0;
          }
          else if (TrainId>TrainSchedule.length)
          {
            TrainSchedule.length-1;
          }

          if (TrackId <= 0)
          {
            TrackId = 0;
          }
          else if (TrackId > 1)
          {
            if ( TrackId > TrainSchedule[TrainId][0].length - 2 )
            {
              TrackId = 0; // Train macro requires at least two line objects
            }
          }

        if (TrainSchedule[TrainId][0][TrackId] === undefined){//alert("TrainSchedule[TrainId][0][TrackId] undefined : TrainId:"+TrainId+" TrackId:"+TrainSchedule[TrainId][IndexMacroTrack]);
        return null;}
        if (TrainSchedule[TrainId][0][TrackId][4][0] === undefined){//alert("TrainSchedule[TrainId][0][TrackId][4][0] undefined : TrainId:"+TrainId+" TrackId:"+TrainSchedule[TrainId][IndexMacroTrack]);
        return null;}
        if (TrainSchedule[TrainId][0][TrackId][4][1] === undefined){//alert("TrainSchedule[TrainId][0][TrackId][4][1] undefined : TrainId:"+TrainId+" TrackId:"+TrainSchedule[TrainId][IndexMacroTrack]);
        return null;}
        if (TrainSchedule[TrainId][0][TrackId+1][4][0] === undefined){//alert("TrainSchedule[TrainId][0][TrackId+1][4][0] undefined : TrainId:"+TrainId+" TrackId:"+TrainSchedule[TrainId][IndexMacroTrack]);
        return null;}
        if (TrainSchedule[TrainId][0][TrackId+1][4][1] === undefined){//alert("TrainSchedule[TrainId][0][TrackId+1][4][1] undefined : TrainId:"+TrainId+" TrackId:"+TrainSchedule[TrainId][IndexMacroTrack]);
        return null;}

            // See: https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-dashed
            // Create the polyline, passing the symbol in the 'icons' property.
            // Give the line an opacity of 0.
            // Repeat the symbol at intervals of 20 pixels to create the dashed effect.
            if (TrainSchedule[TrainId][IndexTrackLineObject]==null)
            {
            TrainSchedule[TrainId][IndexTrackLineObject] = new google.maps.Polyline({
              path: [{lat: TrainSchedule[TrainId][0][TrackId][4][0], lng: TrainSchedule[TrainId][0][TrackId][4][1]},
               {lat:TrainSchedule[TrainId][0][TrackId+1][4][0], lng: TrainSchedule[TrainId][0][TrackId+1][4][1]}],
              strokeOpacity: 0.3,
              icons: [{
                icon: TrainPositionSymbol,
                offset: TrainSchedule[TrainId][IndexMicroPosition]+'%',
                zIndex: zIndexTrainStation-1
              }],
              zIndex:zIndexTrainStation-1,
              map: map

            });
            }
            //TrainSchedule[TrainId][IndexTrackLineObject]=TrainLineObject;
            CheckStationStop(TrainId);
    /*
            if (!CheckStationStop(TrainId))
            {
              //Clear TrainStopObject and HTML INFO Box
              if(TrainSchedule[TrainId][IndexStopInfoWindow]!=null)
              {
                TrainSchedule[TrainId][IndexStopInfoWindow].close();
              }
              TrainSchedule[TrainId][IndexStopInfoWindow]=null;

              if(TrainSchedule[TrainId][IndexTrainStopObject]!=null)
              {
                TrainSchedule[TrainId][IndexTrainStopObject].setMap(null);
              }
              TrainSchedule[TrainId][IndexTrainStopObject] = null;

              TrainSchedule[TrainId][IndexTrainStopNumber] = -1;

            }
    */
            animateTrainMacro(TrainId);

      } catch (e) {
          TrainMacroError(e);
      } finally {

      }
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateTrainMacro(TrainId)
{
  try {

        var count = TrainSchedule[TrainId][IndexMicroPosition];

        var icons = TrainSchedule[TrainId][IndexTrackLineObject].get('icons');
          icons[0].offset = Math.round(count) + '%';
          TrainSchedule[TrainId][IndexTrackLineObject].set('icons', icons);
          animateTrainMarker(TrainId);
          TrainMacroDisplayTime();

    } catch (e) {
        TrainMacroError(e);
    } finally {

    }
}

var TransitTrainMacroActionIcon = {
    url: './images/MTS_Trolley_icon.png',
    // This marker is 33 pixels wide by 33 pixels high.
    size: new google.maps.Size(33 , 33),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(16, 22)
};

var TransitTrainMacroActionIconLarge = {
    url: './images/MTS_Trolley_icon(Large).png',
    // This marker is 33 pixels wide by 33 pixels high.
    size: new google.maps.Size(50 , 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(25, 55)
};

var TransitTrainMacroActionIconLargeGreen = {
    url: './images/MTS_Trolley_icon(Large).png',
    // This marker is 33 pixels wide by 33 pixels high.
    size: new google.maps.Size(50 , 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(25, 55)
};

function NewTrainInfoPathObject(TrainId)
{
  try {

    if (TrainSchedule[TrainId][IndexTrainInfoPathObject]!=null)
    {
      TrainSchedule[TrainId][IndexTrainInfoPathObject].setMap(null);
    }
    TrainSchedule[TrainId][IndexTrainInfoPathObject]=null;

    if (TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]!=1)
    {
      return;
    }

    var flightPlanCoordinates = [];
    //alert("TrainId:"+TrainId+":"+TrainSchedule[TrainId][0][3]);
    for (var i=0; i<TrainSchedule[TrainId][0].length; i++)
    {
      //alert(i);
      if (TrainSchedule[TrainId][0][i][4][0]===undefined)
      {
        return;
        //alert("Error "+TrainSchedule[TrainId][0]+":"+i)
      }
      else {
        flightPlanCoordinates[i]=
              {lat: TrainSchedule[TrainId][0][i][4][0], lng: TrainSchedule[TrainId][0][i][4][1]};
      }

    }

    TrainSchedule[TrainId][IndexTrainInfoPathObject] = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#d8362b',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            zIndex:zIndexTrainStation-1
          });

    TrainSchedule[TrainId][IndexTrainInfoPathObject].setMap(map);
    //alert("AAA");

  } catch (e) {
      TrainMacroError(e);
  } finally {

  }
}

function ZoomTrainIcon(TrainId)
{
    if (TrainSchedule[TrainId][IndexTrainMarkerObject] != null)
    {
      ResetMarkers();
      google.maps.event.trigger(map, 'click', {
            latLng: TrainSchedule[TrainId][IndexTrainMarkerObject].getPosition()
      });
      map.setZoom(16);
    }
}

function NewTrainInfoWindow(TrainId)
{
  try {

    if (TrainSchedule[TrainId][IndexTrainInfoWindow]!=null)
    {
      TrainSchedule[TrainId][IndexTrainInfoWindow].setMap(null);
    }
    TrainSchedule[TrainId][IndexTrainInfoWindow]=null;

    if (TrainSchedule[TrainId][IndexTrainMarkerObject]==null)
    {
    TrainSchedule[TrainId][IndexTrainMarkerObject] = new google.maps.Marker({

            position: new google.maps.LatLng(
              TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][4][0],
              TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][4][1]),
            title: 'Vlak:  '+TrainSchedule[TrainId][5],
            map: map,
            icon:TransitTrainMacroActionIcon,
            zIndex:zIndexTrainMarker+TrainId
        });
    }
    else
    {
      TrainSchedule[TrainId][IndexTrainMarkerObject].setPosition
      (
        new google.maps.LatLng(
          TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][4][0],
          TrainSchedule[TrainId][0][TrainSchedule[TrainId][IndexMacroTrack]][4][1])
      );
    }

    var HTMLContent="";

    HTMLContent+="<table border=0>";
    HTMLContent+="<tr>";
    HTMLContent+="<td><a href='javascript:ZoomTrainIcon("+TrainId+")'><img src='./images/Searchtool.png'/></a></td>";
    HTMLContent+="<td><h1>"+TrainSchedule[TrainId][5]+"</h1></td>";
    HTMLContent+="</tr></table>";

    var StartN=TrainSchedule[TrainId][IndexMacroTrack]-2;
    if (StartN>TrainSchedule[TrainId][0].length-5)
    {
      StartN=TrainSchedule[TrainId][0].length-5;
    }
    if (StartN<0){StartN = 0;}
    var EndN=StartN+5;
    if (EndN>=TrainSchedule[TrainId][0].length){EndN = TrainSchedule[TrainId][0].length-1;}
    //http://www.slo-zeleznice.si/sl/component/sz_timetable/?view=train&vl=499&da=2018-10-31T00:00:00&tmpl=component%&loadStyles=true
    var TrainScheduleURL=
    "http://www.slo-zeleznice.si/sl/component/sz_timetable/?view=train"
    +"&vl="+TrainSchedule[TrainId][4]
    +"&da=2018-10-31T00:00:00&tmpl=component%&loadStyles=true";

    /*var TrainScheduleURL=
    "http://www.slo-zeleznice.si/sl/component/sz_timetable/"
    +"?vs="+TrainSchedule[TrainId][0][0][0]
    +"&iz="+TrainSchedule[TrainId][0][TrainSchedule[TrainId][0].length-1][0]
    +"&da=2018-10-31T00%3A00%3A00&showDa=31.10.2018#stationsData#stationsData"
*/
    HTMLContent+='<a href="'+TrainScheduleURL+'" target="_blank"> Vozni red : '+TrainSchedule[TrainId][5]+' '
    +'<b>'+TrainSchedule[TrainId][0][0][1]+'</b> - '
    +'<b>'+TrainSchedule[TrainId][0][TrainSchedule[TrainId][0].length-1][1]+'</b>'
    +'</a>';
   HTMLContent+="<hr>";
   HTMLContent+="<b>Postaja ... Prihod ... Odhod</h2></b>";
   HTMLContent+="<hr>";
   HTMLContent+=""+TrainSchedule[TrainId][0][0][1]+
               ".."+TrainSchedule[TrainId][0][0][3]+"..."+
               "<br/>";
   HTMLContent+="<hr>";
   HTMLContent+="<h2> ... </h2>";

    for (var i=StartN;i<=EndN;i++)
    {
///      HTMLContent+="StartN:"+StartN+" I:-->"+i+" MacroTrack:"+TrainSchedule[TrainId][IndexMacroTrack]+"<br/>";

      if (TrainSchedule[TrainId][0][i][1]==TrainSchedule[1][0][1][1]){continue;}

      if (i>=TrainSchedule[TrainId][0].length)
      {
        break;
      }

      if (i==TrainSchedule[TrainId][IndexMacroTrack])
      {
        HTMLContent+="<b>"+TrainSchedule[TrainId][0][i][1]+""+
                    ".."+TrainSchedule[TrainId][0][i][2]+"..."+
                    ".."+TrainSchedule[TrainId][0][i][3]+"...</b>"+
                    "<br/>";
      }
      else
      {
        HTMLContent+=""+TrainSchedule[TrainId][0][i][1]+""+
                    ".."+TrainSchedule[TrainId][0][i][2]+"..."+
                    ".."+TrainSchedule[TrainId][0][i][3]+"..."+
                    "<br/>";
      }
    }
    HTMLContent+="<h2> ... </h2>";
    HTMLContent+="<hr>";
    HTMLContent+=""+TrainSchedule[TrainId][0][TrainSchedule[TrainId][0].length-1][1]+""+
                ".."+TrainSchedule[TrainId][0][TrainSchedule[TrainId][0].length-1][2]+"..."+
                "<br/>";

    HTMLContent+="<hr><br/>";

    TrainSchedule[TrainId][IndexTrainInfoWindow] = new google.maps.InfoWindow({
          content: HTMLContent
        });

    TrainSchedule[TrainId][IndexTrainMarkerObject].addListener('click', function() {
          //alert("TrainId click:"+TrainId+" : "+TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]);
          if(TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]==1)
          {
              if(TrainSchedule[TrainId][IndexTrainInfoWindow]!=null)
              {
                TrainSchedule[TrainId][IndexTrainInfoWindow].close();
              }
              TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]=-1;

              if(TrainSchedule[TrainId][IndexTrainInfoPathObject]!=null)
              {
                TrainSchedule[TrainId][IndexTrainInfoPathObject].setMap(null);
              }
              TrainSchedule[TrainId][IndexTrainInfoPathObject]=null;
          }
          else if(TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]==-1)
          {
            TrainSchedule[TrainId][IndexTrainInfoWindow].open(map, TrainSchedule[TrainId][IndexTrainMarkerObject]);
            TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]=1;
            setTimeout(
              function()
              {
                if (TrainSchedule[TrainId][IndexTrainInfoWindow]!=null)
                {
                  TrainSchedule[TrainId][IndexTrainInfoWindow].close();
                }
              }
              ,111111
            );
            NewTrainInfoPathObject(TrainId);
            //alert("TrainId open:"+TrainId);
          }
    });

    google.maps.event.addListener(TrainSchedule[TrainId][IndexTrainInfoWindow],"closeclick", function() {
          TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]=-1;
          NewTrainInfoPathObject(TrainId);
          //alert("TrainId closeclick:"+TrainId);
    });

    if (TrainSchedule[TrainId][IndexTrainInfoWindowIsOpen]==1)
    {TrainSchedule[TrainId][IndexTrainInfoWindow].open(map, TrainSchedule[TrainId][IndexTrainMarkerObject]);}

  } catch (e) {
     TrainMacroError(e);
  } finally {

  }
}
function animateTrainMarker(TrainId)
{
   try {

      //alert("Animate");
      //alert(TrainId + " : " + TrainSchedule[TrainId][IndexTrackLineObject]);
      var AX = parseFloat(TrainSchedule[TrainId][IndexTrackLineObject].getPath().getAt(0).lat());
      var AY = parseFloat(TrainSchedule[TrainId][IndexTrackLineObject].getPath().getAt(0).lng());
      var BX = parseFloat(TrainSchedule[TrainId][IndexTrackLineObject].getPath().getAt(1).lat());
      var BY = parseFloat(TrainSchedule[TrainId][IndexTrackLineObject].getPath().getAt(1).lng());
      offset = parseFloat(TrainSchedule[TrainId][IndexMicroPosition]);
      var CX = AX+(BX-AX)*(offset/100);
      var CY = AY+(BY-AY)*(offset/100);
      //alert(CX+":"+CY);

      NewTrainInfoWindow(TrainId);

      TrainSchedule[TrainId][IndexTrainMarkerObject].setPosition(new google.maps.LatLng(CX,CY));
      TrainSchedule[TrainId][IndexTrainInfoWindow].setPosition(new google.maps.LatLng(CX,CY));
      TrainMacroDisplayTime();
      TrainSchedule[TrainId][IndexTrainMacroTimerInstance] = null;
      //alert("Finished "+TrainId);

    } catch (e) {
        TrainMacroError(e);
    } finally {

    }
}
