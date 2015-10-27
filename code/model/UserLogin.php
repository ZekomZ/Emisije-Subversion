<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();

include_once './UserDBInterface.php';


$_SESSION["Username"]=$_POST["Username"];
$_SESSION["Password"]=$_POST["Password"];

if (UserDBInterface::CheckLogin()) 
{
    echo "Uspešno ste se prijavili v aplikacijo";
    
}

else
{
    echo "Prijava v aplikacijo ni uspela, preverite uporabniško ime in geslo.";
    
    //echo "Session:";
    //var_dump($_SESSION);
    //echo "Post:";
    //var_dump($_POST);
}