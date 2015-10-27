<b> GSM-R </b>
    
<h1>Podatki o uporabniku</h1> 

---<br/>
<script>
    function onLogoutClick()
    {
        $.ajax({
        method: "POST",
        url: "./model/UserLogout.php",
        data: { StationA: SelectedStationA, StationB: SelectedStationB }
        })    
        .done(function( msg ) {
            alert(msg);
          
            setTimeout(location.reload(),10000);
          
        
          
        });
    }
</script>
<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include_once './model/UserDBInterface.php';
if (UserDBInterface::CheckLogin()) 
{
    $Username=isset($_SESSION["Username"])?$_SESSION["Username"]:"Zekom";
    $UserData=UserDB::get($Username);
//    var_dump($UserData);
    echo "<hr/>";
    echo "Uporabnik : <b>".$UserData["Username"]."</b><br/>";
    echo "<hr/>";
    echo "Ime : <b>".$UserData["FirstName"]."</b><br/>";
    echo "Priimek : <b>".$UserData["LastName"]."</b><br/>";
    echo "<hr/>";
    echo "<p align=\"center\"><button onclick=\"onLogoutClick();\">Odjava</button></p>";
        
}
else
{
    echo "<a href> Prijava v aplikacijo </a>";
}

?>