<?php
// Vir: 11. vaje, pri predmetu Spletne tehnologije
session_start();

//require_once("controller/BookController.php");
//require_once("controller/StoreController.php");
//require_once("controller/UserController.php");

//require_once("ViewHelper.php");

//define("BASE_URL", $_SERVER["SCRIPT_NAME"] . "/");
//define("IMAGES_URL", rtrim($_SERVER["SCRIPT_NAME"], "index.php") . "static/images/");
//define("CSS_URL", rtrim($_SERVER["SCRIPT_NAME"], "index.php") . "static/css/");

$path = isset($_SERVER["PATH_INFO"]) ? trim($_SERVER["PATH_INFO"], "/") : "";

echo $_SERVER["PATH_INFO"];
echo "<br/>";
echo $path;
echo "<br/>";

$_SESSION["Module"]="Kazalo";

$urls = [
    "" => function () {
       $_SESSION["Module"]="Emisije";
    },
    "aplikacija-kazalo" => function () {
       $_SESSION["Module"]="Kazalo";
    },
    "aplikacija-predstavitev" => function () {
       $_SESSION["Module"]="Predstavitev";
    },
    "uporabnik-prijava" => function () {
       $_SESSION["Module"]="Prijava";
    },
    "uporabnik-profil" => function () {
       $_SESSION["Module"]="Profil";
    },
    "zemljevid-postaje" => function () {
       $_SESSION["Module"]="Postaje";
    },
    "zemljevid-tiri" => function () {
       $_SESSION["Module"]="Tiri";
    },
    "zemljevid-vlaki" => function () {
       $_SESSION["Module"]="Vlaki";
    },
    "zemljevid-voznired" => function () {
       $_SESSION["Module"]="VozniRed";
    },
    "emisije-gsm-r" => function () {
       $_SESSION["Module"]="GSM-R";
    },
    
    "emisije-CO2" => function () {
       $_SESSION["Module"]="Co2";
    },
    "emisije-hrup" => function () {
       $_SESSION["Module"]="Hrup";
    },
    "emisije-ems" => function () {
       $_SESSION["Module"]="EMS";
    }
];

try {
    if (isset($urls[$path])) {
       $urls[$path]();
       echo $_SESSION["Module"];
       header("location: ../index.php");
            //include "index.php";
       
    } else {
        echo "No controller for '$path'";
    }
} catch (Exception $e) {
    echo "An error occurred: <pre>$e</pre>";
    // ViewHelper::error404();
} 
