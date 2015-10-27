<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
     session_start();
     if (isset($_POST["Reload"])) 
     {
         $_SESSION["Reload"]=$_POST["Reload"];
         unset($_POST["Reload"]);
     }
     
     
?>