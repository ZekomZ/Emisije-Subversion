<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once './model/TrainStationsDB.php';
include_once './model/TrainStationsNearDB.php';

//echo "//START_________>";
$TrainStationData=TrainStationsDB::getAll();
$TrainStationDataMaxRecords=  sizeof($TrainStationData);
//$TrainStationEditorMode=; 
//echo "<b>";
//echo $TrainStationDataMaxRecords;
//echo "</b>";

// Init Stations for Javascript:
// Format :   
// var Stations =[new google.maps.LatLng(45.886277,13.902437), ... ];
//var_dump(TrainStationsDB::getAll());

echo "var Stations =[";
for ($i=0;$i<$TrainStationDataMaxRecords;$i++)
{
    
    echo "new google.maps.LatLng(";
    echo $TrainStationData[$i]["Lat"];
    echo",";
    echo $TrainStationData[$i]["Lng"];
    
    if ( $i < $TrainStationDataMaxRecords - 1)
    {
        echo "),";
    }
}

echo " )];";
echo " ";
?>

<?php



    /*var StationsData=
[['44652','Ajdovščina'],
['44704','Anhovo'],
['43856','Atomske Toplice hotel'], ... ]; */

echo " ";
    echo "var StationsData = [";
for ($i=0;$i<$TrainStationDataMaxRecords;$i++)
{
    
    echo "['";
    echo $TrainStationData[$i]["IDStation"];
    echo"','";
    echo $TrainStationData[$i]["Name"];
    echo "']";
    if ( $i < $TrainStationDataMaxRecords - 1)
    {
        echo ",";
    }
}

echo " ];";

?>

<?php
$TrainStationsNearData=TrainStationsNearDB::getAll();
//var_dump($TrainStationsNearData);
$TrainStationsNearDataMaxRecords=sizeof($TrainStationsNearData);
//var_dump($TrainStationsNearDataMaxRecords);
echo "var railPolyLines =[];";
for ($i=0;$i<$TrainStationsNearDataMaxRecords;$i++)
{
    
    $TempRailAB=$TrainStationsNearData[$i];
    $TempLocationA=TrainStationsDB::get($TempRailAB["IDStationA"]);
    $TempLocationB=TrainStationsDB::get($TempRailAB["IDStationB"]);
   
    echo "railPolyLines[".$i."]=";
    echo "[[".$TempLocationA["Lat"].",".$TempLocationA["Lng"].",".
            $TempRailAB["IDStationA"].",".$TempRailAB["IDStationB"]."]";
    echo  ",";
    echo "[".$TempLocationB["Lat"].",".$TempLocationB["Lng"]."]];";
    
    
            
            
    
    /*if ( $i < $TrainStationDataMaxRecords - 1)
    {
        echo "),";
    }*/
}

?>



    <?php /*
 //[new google.maps.LatLng(45.886277,13.902437), ... ];
        $SQLString="";
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
  document.getElementById("div-path-data").innerHTML=SQLString; */
    ?>
