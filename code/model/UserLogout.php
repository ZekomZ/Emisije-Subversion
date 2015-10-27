<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();

unset($_SESSION["Username"]);
unset($_SESSION["Password"]);

unset($_POST["Username"]);
unset($_POST["Password"]);

echo "Hvala za obisk, iz aplikacije ste zdaj odjavljeni.";

