<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//include_once './model/TrainStationsDB.php';
//include_once './model/TrainStationsNearDB.php';
// Vir: http://api.jquery.com/jQuery.ajax/
//session_start();

//var_dump($_SESSION);

$StationA=$_SESSION["StationA"];
$StationB=$_SESSION["StationB"];

?>

3 <h1>Podatki iz interaktivne karte</h1>
<ul class="ul-kazalo">
                                    <li><a href="./index-A.php/zemljevid-postaje">Postaje</a></li>
                                    <li><a href="./index-A.php/zemljevid-tiri">Tiri</a></li>
                                    <li><a href="./index-A.php/zemljevid-vlaki">Vlaki na karti</a></li>
                                    <li><a href="./index-A.php/zemljevid-voznired">Vozni red</a></li>
</ul>

<div id="Div-Data-Tools"> 123456790 </div>
<script>
    
    
    $( "#Div-Data-Tools" ).html("ABC");
    
    function RefreshData()
    {    
        $.get( "./controler/MapDataUpdate.php", function( data ) {
            $( "#Div-Data-Tools" ).html( data );
            
            setTimeout(RefreshData(),10000);
        });
    }
    
    setTimeout(RefreshData(),10000);
</script>    

<script>
function onClickUpdate()
{
    //alert("OnCLick");
    $.ajax({
    method: "POST",
    url: "./model/TrainStationsNearDBInterface.php",
    data: { Action:"100", StationA: SelectedStationA, StationB: SelectedStationB }
    })    
    .done(function( msg ) {
      $( "#Div-Data-Tools-Debug" ).html(msg);
      location.reload();
    });
    
    /*
    $.ajax({
type: "POST",
url: "",
data: data,
success: success,
dataType: dataType
});*/
}

function onClickDelete()
{
    //alert("OnCLick");
    $.ajax({
    method: "POST",
    url: "./model/TrainStationsNearDBInterface.php",
    data: { Action:"200", StationA: SelectedStationA, StationB: SelectedStationB }
    })    
    .done(function( msg ) {
      $( "#Div-Data-Tools-Debug" ).html(msg);
      location.reload();
    });
    
}

function onClickInfo()
{
    $( "#VozniRed" ).html("ABC");
    
    $.ajax({
    method: "POST",
    url: "./model/Train-Info.php",
    data: { Datum:"1.1.2015", StationA: SelectedStationA, StationB: SelectedStationB }
    })    
    .done(function( msg ) {
      //alert(msg);
      $( "#VozniRed" ).html(msg);
    });
}
</script>

<button onclick="onClickUpdate();">Insert/Update</button>
<button onclick="onClickDelete();">Delete</button>
<button onclick="onClickInfo();">Info</button>

<div id="Div-Data-Tools-Debug"></div>
<div id="VozniRed"></div>
<?php
echo "----";

?>

