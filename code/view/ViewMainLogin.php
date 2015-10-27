<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();

?>
<html>
       
    <head>
        <meta charset="UTF-8"/>
        <script type="text/javascript" src="../jquery.min.js"></script>
        
<script>
    function RegisterFormData()
    {
        alert("Registracija novega uporabnika");
        /*alert($("#RegUsername").val());
        alert($("#RegPassword").val());
        alert($("#RegRePassword").val());
        alert($("#RegEmail").val());
        alert($("#RegFirstName").val());
        alert($("#RegLastName").val());
        */
        $.ajax({
            method: "POST",
            url: "../model/UserRegister.php",
            data: { Username: $("#RegUsername").val(), 
                Password: $("#RegPassword").val(),
                RePassword : $("#RegRePassword").val(),
                Email: $("#RegEmail").val(),
                FirstName: $("#RegFirstName").val(),
                LastName: $("#RegLastName").val()                
                }
            })    
            .done(function( msg ) {
                $("#Register-Response").html(msg);
                
            });
          
    }
    
    function onLoginClick()
    {
        $.ajax({
            method: "POST",
            url: "../model/UserLogin.php",
            data: { 
                Username: $("#Username").val(), 
                Password: $("#Password").val()
                }
            })    
            .done(function( msg ) {
                //$( "#Div-Data-Tools-Debug" ).html(msg);
                alert(msg);
            });
            
            
         $.ajax({
            method: "POST",
            url: "../model/ReloadPage.php",
            data: { 
                Reload : "111"
                }
            })    
            .done(function( msg ) {
                $( "#Div-Data-Tools-Debug" ).html(msg);
                location.reload();
            });
        
            
    }
    
</script>

        
    </head>
<body>
    
<p> Pozdravljeni, za uporabo aplikacije se prijavite z uporabniškim imenom in geslom, 
    ali ustvarite nov uporabniški račun. </p>

<div class="html-div">
<form action="post" target="./model/UserDbInterface.php">
    Prijava obstoječega uporabnika : 
    <div>Uporabniško ime :<input type ="text" id="Username"></input></div>
    <div>Geslo : <input type="password" id="Password"></input></div>
    
</form>
    <button onclick="onLoginClick();"> Prijava </button>
</div>
<div id="LoginResponse"></div>

<br/>

<div class="html-div">
<form action="post" target=".">
    Registracija novega uporabnika : 
    
    <div>Uporabniško ime :<input type ="text" id="RegUsername" ></input></div>
    <div>Geslo : <input type="password" id="RegPassword" ></input></div>
    <div>Ponovite geslo : <input type="password" id="RegRePassword"></input></div>
    <div>E-mail :<input type ="text" id="RegEmail"></input></div>
    <div>Ime<input type ="text" id="RegFirstName"></input></div>
    <div>Priimek<input type ="text" id="RegLastName"></input></div>        

</form>
</div>

<button onclick="RegisterFormData();">
       Register 
</button>


<div id="Register-Response">
  --- Registracija novega uporabnika ---    
</div>
</html>