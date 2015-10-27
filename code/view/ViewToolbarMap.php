<?php
// Vir : 11. vaje, pri predmetu Spletne tehnologije
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once './model/UserDBInterface.php';
$SiteModule = isset($_SESSION["Module"])?$_SESSION["Module"]:"Emisije";

$UrlIframe="./Vlaki-Rails-Editor-2-2-2.php";

if (UserDBInterface::CheckLogin())
{
    $urls = [
    "" => function () {
       $UrlIframe="./Vlaki-Rails-Editor-2-2-2.php?mode=start";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Kazalo" => function () {
       $UrlIframe="./view/ViewFooter.php";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Predstavitev" => function () {
       $UrlIframe="http://www.slo-zeleznice.si/sl/potniki/pravna-obvestila";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Prijava" => function () { 
       $UrlIframe="./Vlaki-Rails-Editor-2-2-2.php?mode=login";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Profil" => function () {
       $UrlIframe="./view/ViewToolbarUser.php";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Postaje" => function () {
       $UrlIframe="./Vlaki-Rails-Editor-2-2-2.php?mode=stations";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Tiri" => function () {
       $UrlIframe="./Vlaki-Rails-Editor-2-2-2.php?mode=rails";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "VozniRed" => function () {
       $UrlIframe="http://www.slo-zeleznice.si/sl/potniki/slovenija/vozni-redi/";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "GSM-R" => function () {
       $UrlIframe="http://www.mzi.gov.si/si/dogodki/gsm_r/";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Vlaki" => function () {
       $UrlIframe="./Vlaki-Rails-Editor-2-2-2.php?mode=trains";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Co2" => function () {
       $UrlIframe="http://okolje.arso.gov.si/onesnazevanje_zraka/vsebine/emisije-co2";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "Hrup" => function () {
       $UrlIframe="http://www.uradni-list.si/1/content?id=58875";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    },
    "EMS" => function () {
       $UrlIframe="http://gis.arso.gov.si/atlasokolja/profile.aspx?id=Atlas_Okolja_AXL@Arso";
       //echo "<hr/>".$UrlIframe."<hr/>";
       return $UrlIframe;
    }
];

}
else
    {
        $UrlIframe="./view/ViewMainLogin.php";
    }

try {
    if (isset($urls[$SiteModule])) 
    {
        $UrlIframe=$urls[$SiteModule]();
        
        //echo "URL is set";
        //echo $UrlIframe;
    }
    else
    {
        //$UrlIframe="./view/ViewMainLogin.php";
    }
} catch (Exception $e)
{
var_dump(e);
}
//echo "|||---->";
//echo isset($urls[$SiteModule]);
echo "<hr/>";
echo "<p>".$SiteModule."</p>";
echo "<b>".$UrlIframe."</b>";
echo "<hr/>";
echo "<iframe id=\"karta\" src=\"".$UrlIframe."\" width=\"90%\" height=\"999\"></iframe>";  

?>



 
