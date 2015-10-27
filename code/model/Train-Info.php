<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();
$StationA=$_POST["StationA"];
$StationB=$_POST["StationB"];
$Date=Date('Y-m-d');

function StationData($StationAID,$StationBID,$Date)
{
echo ob_start();
echo $StationAID.','.$StationBID;
//http://www.slo-zeleznice.si/sl/component/sz_timetable/?vs=42300&vi=&iz=42207&da=2015-10-25T00%3A00%3A00&showDa=25.10.2015#stationsData#stationsData
//$homepageURL='http://www.slo-zeleznice.si/sl/potniki/slovenija/vozni-redi/vozni-red-s-cenikom?entrystation='.$StationAID.'&via=-1&exitstation='.$StationBID.'&date='.$Date;
$homepageURL='http://www.slo-zeleznice.si/sl/component/sz_timetable/?vs='.$StationAID.'&iz='.$StationBID.'&da='.$Date.'T00%3A00%3A00';
$homepage = file_get_contents($homepageURL);

var_dump($homepage);
$table= ob_get_contents();
echo ob_end_clean();

echo '<br/><a target="_blank" href="'.$homepageURL.'">'.$homepageURL.'</a>';

$table=strstr($table, "Natisnite");
$table=strstr($table, "<table");
$table=substr($table, 0, strpos($table,"</table>")+8);
   
//$table_bottom=strstr($table_bottom,"Datum:" );

#echo $table;
#echo $table_top;
echo $table;
}
StationData($StationA, $StationB, $Date);