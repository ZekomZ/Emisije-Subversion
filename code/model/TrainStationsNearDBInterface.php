<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include_once './TrainStationsNearDB.php';

$IDStationA = isset($_POST["StationA"])? $_POST["StationA"] : 0;
$IDStationB = isset($_POST["StationB"])? $_POST["StationB"] : 0;
$Action = isset($_POST["Action"])? $_POST["Action"] : 0;


if (($IDStationA!=0) && ($IDStationB!=0) && ($Action!=0))
{
    $result=TrainStationsNearDB::getAB($IDStationA, $IDStationB);
    var_dump($result);
    
    if ($result!=false)
    {
        if ($Action=="100") // Update
        {
            TrainStationsNearDB::update($IDStationA, $IDStationB);
        }
        if ($Action=="200") // Delete
        {
            TrainStationsNearDB::delete($IDStationA, $IDStationB);
        }        
    }
    else
    {
        if ($Action=="100") //Insert
        {
            TrainStationsNearDB::insert($IDStationA, $IDStationB);
        }
    }
        
}

?>