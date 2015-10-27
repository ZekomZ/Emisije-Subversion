<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once './UserDB.php';

session_start();
/*
Username:$("#RegUsername"), 
Password: $("#RegPassword"),
RePassword : $("#RegRePassword"),
Email: $("#RegEmail"),
FirstName: $("#RegFirstName"),
                LastName: $("#RegLastName")
*/
    $RegisterFormOK=100;
    $Password="";
    $RePassword="";
    
echo "Registracija novega uporabnika";
    
if ((isset($_POST["Username"])) && ($_POST["Username"]!=""))
    { $Username = $_POST["Username"]; } 
    else { $RegisterFormOK=0; echo "<p>Uporabniško ime ni pravilno vnešeno (obvezno), preverite obrazec. </p>";}

if (isset($_POST["Password"]) && ($_POST["Password"] != "")) 
    { $Password = $_POST["Password"]; } 
    else { $RegisterFormOK=0; echo "<p>Geslo ni vnešeno (obvezno), preverite obrazec. </p>";}

if (isset($_POST["RePassword"]) && ($_POST["RePassword"] != ""))
    { $RePassword = $_POST["RePassword"]; } 
    else { $RegisterFormOK=0; echo "<p> Ponovni vnos gesla ni vnešen (obvezno), preverite obrazec. </p>";}
    
    if ($Password!=$RePassword) { $RegisterFormOK=0; echo "<p>Geslo in ponovni vnos gesla se ne ujemata (obvezno), preverite obrazec. </p>";}
    
if (isset($_POST["Email"]) && ($_POST["Email"] != ""))
    { $Email = $_POST["Email"]; } 
    else { $RegisterFormOK=0; echo "<p>E-posta ni vnešena (obvezno), preverite obrazec. </p>";}

if (isset($_POST["FirstName"]) && ($_POST["FirstName"] != ""))
    { $FirstName = $_POST["FirstName"]; } 
    else { $RegisterFormOK=0; echo "<p>Ime ni vnešeno (obvezno), preverite obrazec. </p>";}

if (isset($_POST["LastName"]) && ($_POST["LastName"] != ""))
    { $LastName = $_POST["LastName"]; } 
    else { $RegisterFormOK=0; echo "<p>Priimek ni vnešen (obvezno), preverite obrazec. </p>";}
    
if ($RegisterFormOK!=100)
{
   echo "<p>Zaradi napak v obrazcu, registracija ni uspela. Preglejte opozorila in ponovno poskusite.</p>";
}
else 
{
  echo "Username:".$Username;
  echo "Password:".$Password;
  echo "Email:".$Email;
  echo "FirstName:".$FirstName;
  echo "LastName:".$LastName;
    
   UserDB::insert($Username, $Password, $Email, $FirstName, $LastName);
    
   echo "<br/>Registracija uporabnika ". $Username 
            . " je uspela. Prijavite se z uporabniškim imenom in geslom, na obrazcu za prijavo. <br/>";
   
}


    
