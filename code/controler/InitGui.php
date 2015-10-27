<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//session_start();

include_once './model/TrainStationsDB.php';

var_dump( TrainStationsDB::getAll()[rand(0, 262)]["Name"] ) ;

$_SESSION["StationA"]=isset($_SESSION["StationA"])?$_SESSION["StationA"]:"11111";
$_SESSION["StationB"]=isset($_SESSION["StationB"])?$_SESSION["StationB"]:"22222";
$_SESSION["Username"]=isset($_SESSION["Username"])?$_SESSION["Username"]:"---";
$_SESSION["Password"]=isset($_SESSION["Password"])?$_SESSION["Password"]:"---";
$_SESSION["Module"]=isset($_SESSION["Module"])?$_SESSION["Module"]:"ABC";

//$_SESSION["StationA"]="11111";
//$_SESSION["StationB"]="22222";
//$_SESSION["Username"]="Zekom";
//$_SESSION["Password"]="123456";
//$_SESSION["Module"]="ABC";
