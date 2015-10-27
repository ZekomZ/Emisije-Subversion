<html>
    <head>
     <script src="jquery.min.js"></script>    
        <script>
//*************************

function onLoadEvent()
{
  
  var table = document.getElementsByClassName("timetable")[0];
  var output = document.getElementById("div-output");
  
      output.innerHTML =  table.toString();
      alert("onLoad");
      
/*      for (var i=0;i<table.rows.length;i++ )
      {
          output.innerHTML=output.innerHTML+table.rows[i].cells[0].innerHTML+',';
          output.innerHTML=output.innerHTML+table.rows[i].cells[1].innerHTML+',';
          output.innerHTML=output.innerHTML+table.rows[i].cells[2].innerHTML+',';
          output.innerHTML=output.innerHTML+table.rows[i].cells[3].innerHTML+'.';
          output.innerHTML=output.innerHTML+table.rows[i].cells[4].innerHTML+'.';
          output.innerHTML=output.innerHTML+table.rows[i].cells[5].innerHTML+'.';  
          output.innerHTML=output.innerHTML+table.rows[i].cells[6].innerHTML+'.';  
          output.innerHTML=output.innerHTML+'<br/>';
      }*/

   

}

//****************************

$( "*", document.body ).click(function( event ) {
event.stopPropagation();
var domElement = $( this ).get( 0 );

$( "span:first" ).text( "Clicked on - " + domElement.nodeName + "----------" );

});


</script>
    </head>
    <body onload="onLoadEvent();">
        <span>&nbsp;</span>
<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
echo 'Hello World...';
echo '<div id="div-output">ABC</div>';
function StationData($StationAID,$StationBID,$Date)
{
echo ob_start();
//echo $StationAID.','.$StationBID;
$homepageURL='http://www.slo-zeleznice.si/sl/potniki/slovenija/vozni-redi/vozni-red-s-cenikom?entrystation='.$StationAID.'&via=-1&exitstation='.$StationBID.'&date='.$Date;
$homepage = file_get_contents($homepageURL);

var_dump($homepage);
$table= ob_get_contents();
echo ob_end_clean();

echo $homepageURL;

$table=strstr($table, "Natisnite");
$table=strstr($table, "<table");
$table=substr($table, 0, strpos($table,"</table>")+8);
   
//$table_bottom=strstr($table_bottom,"Datum:" );

#echo $table;
#echo $table_top;
echo $table;
}
/*
//Ljubljana 42300 - Borovnica 44004
StationData('44004','42300','1.12.2014');
StationData('42300','44004','1.12.2014');

//Ljubljana 42300- Zidani most 42200
StationData('42300','42200','1.12.2014');
StationData('42200','42300','1.12.2014');

// Zidani most 42200 -- Dobova 42001 
StationData('42200','42001','1.12.2014');
StationData('42001','42200','1.12.2014');

// Ljubljana 42300 -- Jesenice 42400
StationData('42300','42400','1.12.2014');
StationData('42400','42300','1.12.2014');

// Ljubljana 42300 -- Kamnik Graben 42356
StationData('42300','42356','1.12.2014');
StationData('42356','42300','1.12.2014');

// Zidani most 42200 -- Maribor 43400
StationData('42200','43400','1.12.2014');
StationData('43400','42200','1.12.2014');

// Celje 43100 -- Velenje 43910
StationData('43100','43910','1.12.2014');
StationData('43910','43100','1.12.2014');

// Celje 43100 -- Imeno 43854 / Rogatec 43804
StationData('43100','43854','1.12.2014');
StationData('43854','43100','1.12.2014');

// --------------->> Celje 43100 -- Rogatec 43804
StationData('43100','43804','1.12.2014');
StationData('43804','43100','1.12.2014');

// Maribor 43400 -- Prevalje 43502
StationData('43400','43502','1.12.2014');
StationData('43502','43400','1.12.2014');

// Maribor 43400 -- Pragersko 43300 -- Ormož -- Središče
//------------> Maribor 43400 -- Pragersko 43300
StationData('43400','43300','1.12.2014');
StationData('43300','43400','1.12.2014');

// ---------->> Zidani most 42200 -- Ormož 43600
StationData('43600','42300','1.12.2014');
StationData('42300','43600','1.12.2014');

// ---------->> Ormož 43600 -- Središče 43652
StationData('43600','43652','1.12.2014');
StationData('43652','43600','1.12.2014');

// Ormož 43600 -- Hodoš 43777
// ---------->> Ormož 43600 -- Murska sobota 43704
StationData('43600','43704','1.12.2014');
StationData('43704','43600','1.12.2014');

// ---------->> Murska sobota 43704 -- Hodoš 43777
StationData('43704','43777','1.12.2014');
StationData('43777','43704','1.12.2014');

// Jesenice 42400 -- Nova gorica 44700
StationData('42400','44700','1.12.2014');
StationData('44700','42400','1.12.2014');

//--------------->> Bohinjska Bistrica 44712 -- Podbrdo 44711
StationData('44712','44711','1.12.2014');
StationData('44711','44712','1.12.2014');

//--------------->> Bohinjska Bistrica 44712 -- Most na soči 44707
StationData('44712','44707','1.12.2014');
StationData('44707','44712','1.12.2014');

//---------------->> Nova gorica 44700 -- Sežana 44500
StationData('44700','44500','1.12.2014');
StationData('44500','44700','1.12.2014');

//Ljubljana 42300 -- Novo mesto 42600
StationData('42300','42600','1.12.2014');
StationData('42600','42300','1.12.2014');

//---------------->> Novo mesto 42600 -- Novo mesto Kandija 42511
StationData('42600','42511','1.12.2014');
StationData('42511','42600','1.12.2014');

// Novo mesto  42600 -- Metlika 42502
// -------------> Novo mesto Kandija 42511 -- Metlika 42502
StationData('42511','42502','1.12.2014');
StationData('42502','42511','1.12.2014');

// Sevnica 42100 -- Trebnje 42700
StationData('42100','42700','1.12.2014');
StationData('42700','42100','1.12.2014');

//
*/

include 'Zekom-Trains-Iter-1-1.php.html';

?>
<div class="result-timetable" style="width:50%; height:333px;"></div>
</body>