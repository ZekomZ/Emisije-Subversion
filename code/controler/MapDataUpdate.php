<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();
include_once '../model/TrainStationsDB.php';
include_once '../model/TrainStationsNearDB.php';

$_SESSION["StationA"] = isset($_SESSION["StationA"]) ? $_SESSION["StationA"] : "-1-";
$_SESSION["StationB"] = isset($_SESSION["StationB"]) ? $_SESSION["StationB"] : "-1-";
$_SESSION["EditorMode"] = isset($_SESSION["EditorMode"]) ? $_SESSION["EditorMode"] : "-1-";

$_SESSION["StationA"] = isset($_POST["StationA"]) ? $_POST["StationA"] : $_SESSION["StationA"];
$_SESSION["StationB"] = isset($_POST["StationB"]) ? $_POST["StationB"] : $_SESSION["StationB"];


//$id = (isset($_POST["id"])) ? intval($_POST["id"]) : 0;

$StationA=$_SESSION["StationA"];
$StationB=$_SESSION["StationB"];

var_dump($_SESSION);
echo "TimeOfDay";
//var_dump(gettimeofday());
echo "<br/>";
echo "<hr/>";
echo "<br/><b>StationA:".$StationA."</b><br/>";
$StationData=TrainStationsDB::get($StationA);
if (isset($StationData["Name"]))
{
        echo '<p><b>'.$StationData["Name"].'</b></p>';        
}
echo '<div><p>';
var_dump($StationData);
echo '</p></div>';
echo '<hr/>';
//var_dump(TrainStationsDB::get($StationA));

echo "<br/><b>StationB:".$StationB."</b><br/>";
$StationData=TrainStationsDB::get($StationB);
if (isset($StationData["Name"]))
{
        echo '<p><b>'.$StationData["Name"].'</b></p>';        
}
echo '<div><p>';
var_dump($StationData);
echo '</p></div>';
echo '<hr/>';
//var_dump(TrainStationsDB::get($StationB));

echo "<br><b>StationNear: Od :".max($StationA,$StationB).", do:".min($StationA,$StationB)."-</b><br/>";
var_dump(TrainStationsNearDB::getAB($StationA,$StationB));

echo "<hr/>";
echo "Random number ( test if script is refreshing ): ";
var_dump(rand(0, 1000));

echo "<br/>";
?>

<script>
   var SelectedStationA = "<?php echo $StationA?>";
   var SelectedStationB = "<?php echo $StationB?>";   
   <?php if (isset ($_SESSION["Reload"]))
   {
       unset($_SESSION["Reload"]);   
       
       echo "setTimeout(function(){location.reload();reloadIframe();},1000);";
       
       //echo "alert(\"Reload\");";
   }
   else
   {
       //echo "alert(\"No Reload\");";
   }
       
   ?>
</script>
