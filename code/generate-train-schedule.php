<?php /*
<html>
<head>
</head>
<body>
*/ ?>

<?php
  $TrainID="21";

  if (isset($_GET["TrainID"]))
  {
    $TrainID=$_GET["TrainID"];
  }

  $TrainStationsLatLng=array(array(45.8985,15.655),array(45.9238,15.59),array(45.9454,15.5403),array(45.9562,15.4934),array(45.9874,15.4701),array(45.9899,15.3959),array(46.0094,15.3012),array(46.0417,15.2356),array(46.0535,15.2055),array(46.0719,15.1829),array(46.0856,15.1702),array(46.1226,15.0935),array(46.1263,15.0368),array(46.1206,14.9911),array(46.0891,14.8999),array(46.0582,14.8251),array(46.103,14.7917),array(46.0842,14.7367),array(46.0883,14.6876),array(46.0596,14.5832),array(46.0596,14.6152),array(46.0587,14.5127),array(46.1004,14.4645),array(46.1223,14.44),array(46.1379,14.4122),array(46.1565,14.3711),array(46.1746,14.3346),array(46.239,14.3481),array(46.294,14.2584),array(46.311,14.2324),array(46.3233,14.2084),array(46.3404,14.1737),array(46.3604,14.1581),array(46.4019,14.1356),array(46.4272,14.0891),array(46.077,14.4901),array(46.0868,14.4799),array(46.1009,14.5264),array(46.1396,14.5924),array(46.1657,14.594),array(46.2208,14.6036),array(46.2249,14.6092),array(46.2289,14.6095),array(46.0768,14.5032),array(46.1287,14.5599),array(46.1328,14.5677),array(46.1491,14.5925),array(46.1799,14.5907),array(46.1926,14.5882),array(46.2066,14.5945),array(46.0887,14.507),array(46.1189,14.5508),array(46.4361,14.0545),array(45.6488,15.3362),array(45.6424,15.3231),array(45.6323,15.2698),array(45.6164,15.2414),array(45.58,15.191),array(45.5989,15.1615),array(45.6432,15.1622),array(45.682,15.1483),array(45.7146,15.1278),array(45.7579,15.1481),array(45.7999,15.1606),array(45.8047,15.162),array(45.8108,15.1556),array(45.8668,15.0914),array(45.8978,15.0427),array(45.8339,15.1361),array(45.9067,15.0086),array(45.9114,14.9809),array(45.9321,14.9693),array(45.938,14.941),array(45.9405,14.9092),array(45.9432,14.8732),array(45.9408,14.8501),array(45.938,14.803),array(45.9407,14.7791),array(45.9581,14.7424),array(45.9396,14.7076),array(45.9403,14.6852),array(45.9559,14.6522),array(45.9751,14.6176),array(45.9843,14.5727),array(46.0366,14.5195),array(46.0558,14.5291),array(46.0063,15.2897),array(45.9892,15.2399),array(45.9664,15.1908),array(45.9682,15.1633),array(45.958,15.1215),array(45.9595,15.0877),array(45.9492,15.0625),array(45.9348,15.0449),array(45.9061,15.0245),array(46.1255,15.1992),array(46.1549,15.2319),array(46.2286,15.2682),array(46.2215,15.3214),array(46.213,15.396),array(46.2131,15.4395),array(46.2481,15.4304),array(46.2775,15.4981),array(46.3138,15.5763),array(46.3631,15.5981),array(46.264,15.4733),array(46.2274,15.4703),array(46.2308,15.5163),array(46.3951,15.6621),array(46.454,15.6638),array(46.4734,15.6635),array(46.501,15.6629),array(46.5389,15.6512),array(46.4009,15.7203),array(46.4008,15.7658),array(46.4006,15.8007),array(46.4032,15.8551),array(46.4224,15.8787),array(46.4233,15.9836),array(46.4195,16.048),array(46.4152,16.1052),array(46.4203,16.0343),array(46.401,15.6973),array(46.5622,15.6585),array(46.5542,15.6348),array(46.5588,15.5831),array(46.5577,15.5542),array(46.5408,15.5039),array(46.548,15.4516),array(46.563,15.4317),array(46.5749,15.4064),array(46.5906,15.3306),array(46.5865,15.2799),array(46.5965,15.236),array(46.5936,15.1585),array(46.6053,15.1107),array(46.5511,15.6443),array(46.5584,15.6013),array(46.5474,15.5214),array(46.594,15.1259),array(46.6029,15.0784),array(46.604,15.1948),array(46.5563,15.6246),array(46.6099,15.6805),array(46.6542,15.6601),array(46.6744,15.6579),array(46.5758,15.6595),array(46.587,15.0269),array(46.5471,14.9634),array(46.55,14.9218),array(46.5664,14.8414),array(46.5737,15.0209),array(46.5506,14.9867),array(46.4031,16.1561),array(46.4098,16.1762),array(46.4265,16.1791),array(46.4586,16.1567),array(46.5009,16.1554),array(46.521,16.1997),array(46.3911,16.2257),array(46.3891,16.2772),array(46.395,16.1947),array(46.5288,16.1893),array(46.5743,16.1821),array(46.5571,16.1742),array(46.6234,16.2098),array(46.6592,16.1718),array(46.7034,16.1537),array(46.7832,16.1646),array(46.8008,16.2184),array(46.821,16.2815),array(46.8204,16.3292),array(46.2174,15.5603),array(46.235,15.5644),array(46.244,15.5729),array(46.2318,15.6385),array(46.2244,15.6979),array(46.2175,15.7549),array(46.2088,15.7601),array(46.2399,15.6182),array(46.223,15.6613),array(46.2193,15.7357),array(46.1936,15.5941),array(46.1759,15.6021),array(46.1502,15.5992),array(46.1271,15.6012),array(46.1659,15.6047),array(46.1569,15.6092),array(46.2461,15.1898),array(46.2494,15.1671),array(46.2606,15.1122),array(46.2824,15.0662),array(46.3281,15.0379),array(46.3415,15.0197),array(46.3769,15.0497),array(46.3681,15.0814),array(46.3635,15.1043),array(46.2371,15.245),array(46.3812,15.0299),array(46.0213,14.4265),array(45.9876,14.4026),array(45.9657,14.3961),array(45.9215,14.3682),array(45.948,14.3039),array(45.9177,14.2358),array(45.8618,14.275),array(45.8157,14.3128),array(45.7731,14.2217),array(45.7285,14.1855),array(46.0499,14.4933),array(45.6755,14.1914),array(45.6704,14.1056),array(45.6664,14.0722),array(45.6815,13.9649),array(45.6272,13.9752),array(45.6037,13.9353),array(45.6994,13.9305),array(45.5642,13.9422),array(45.5345,13.9429),array(45.4984,13.9439),array(45.4661,13.9551),array(45.539,13.7384),array(45.552,13.8915),array(45.5011,13.9092),array(45.7041,13.8634),array(45.7421,13.8273),array(45.7849,13.8317),array(45.818,13.8481),array(45.8559,13.7842),array(45.876,13.7575),array(45.8858,13.7342),array(45.8875,13.7227),array(45.8991,13.6902),array(45.9058,13.6756),array(45.9282,13.6469),array(45.8867,13.772),array(45.8863,13.9024),array(45.89,13.7361),array(45.877,13.8175),array(45.8825,13.8453),array(45.8868,13.8653),array(45.9552,13.6357),array(45.9727,13.6462),array(46.0461,13.5897),array(46.0581,13.6173),array(46.0837,13.6316),array(46.108,13.6844),array(46.1464,13.7593),array(46.1594,13.8139),array(46.1514,13.8569),array(46.1797,13.9198),array(46.2092,13.967),array(46.2742,13.9591),array(46.289,14.0027),array(46.3384,14.0605),array(46.3683,14.0823),array(46.3875,14.0943),array(46.4104,14.0987),array(46.4238,14.0786),array(45.7649,13.8262),array(45.6413,14.1981),array(45.6157,14.1859),array(45.5692,14.2359),array(46.0634,14.5484 ));

  //echo "Test data..";
  $TrainStationsData =
  array(array('42001','Dobova'),array('42002','Brežice'),
  array('42003','Libna'),array('42004','Krško'),
  array('42005','Brestanica'),array('42006','Blanca'),
  array('42100','Sevnica'),array('42101','Breg'),
  array('42102','Loka'),array('42103','Radeče'),
  array('42200','Zidani Most'),array('42201','Hrastnik'),
  array('42203','Trbovlje'),array('42204','Zagorje'),
  array('42206','Sava'),array('42207','Litija'),
  array('42208','Kresnice'),array('42209','Jevnica'),
  array('42210','Laze'),array('42212','Ljubljana Polje'),
  array('42222','Ljubljana Zalog'),array('42300','Ljubljana'),
  array('42302','Ljubljana Vižmarje'),array('42303','Medno'),
  array('42304','Medvode'),array('42305','Reteče'),
  array('42306','Škofja Loka'),array('42307','Kranj'),
  array('42309','Podnart'),array('42310','Otoče'),
  array('42311','Globoko'),array('42312','Radovljica'),
  array('42313','Lesce-Bled'),array('42314','Žirovnica'),
  array('42315','Slovenski Javornik'),array('42316','Litostroj'),
  array('42317','Ljubljana Stegne'),array('42351','Ljubljana Črnuče'),
  array('42352','Domžale'),array('42353','Jarše-Mengeš'),
  array('42354','Kamnik'),array('42355','Kamnik mesto'),
  array('42356','Kamnik Graben'),array('42357','Ljubljana Brinje'),
  array('42358','Trzin Mlake'),array('42359','Trzin'),
  array('42360','Rodica'),array('42361','Homec pri Kamniku'),
  array('42362','Šmarca'),array('42363','Duplica-Bakovnik'),
  array('42365','Ljubljana Ježica'),array('42366','Trzin ind. cona'),
  array('42400','Jesenice'),array('42501','Rosalnice'),
  array('42502','Metlika'),array('42503','Dobravice'),
  array('42504','Gradac'),array('42505','Črnomelj'),
  array('42506','Otovec'),array('42507','Semič'),
  array('42508','Rožni Dol'),array('42509','Uršna sela'),
  array('42510','Birčna vas'),array('42511','Novo mesto Kandija'),
  array('42512','Novo mesto Center'),array('42600','Novo mesto'),
  array('42601','Mirna Peč'),array('42602','Ponikve na Dolenjskem'),
  array('42603','Hudo'),array('42700','Trebnje'),
  array('42701','Štefan'),array('42702','Velika Loka'),
  array('42703','Šentlovrenc'),array('42704','Gaber'),
  array('42705','Radohova vas'),array('42706','Šentvid pri Stični'),
  array('42707','Ivančna Gorica'),array('42708','Polževo'),
  array('42709','Višnja Gora'),array('42710','Žalna'),
  array('42711','Mlačevo'),array('42800','Grosuplje'),
  array('42801','Šmarje-Sap'),array('42802','Škofljica'),
  array('42804','Ljubljana Rakovnik'),array('42805','Ljubljana Vodmat'),
  array('42901','Boštanj'),array('42902','Jelovec'),
  array('42903','Tržišče'),array('42904','Pijavice'),
  array('42905','Mokronog'),array('42906','Šentrupert'),
  array('42907','Mirna'),array('42908','Gomila'),
  array('42909','Trebnje Kamna Gora'),array('43001','Rimske Toplice'),
  array('43002','Laško'),array('43100','Celje'),
  array('43101','Štore'),array('43102','Šentjur'),
  array('43200','Grobelno'),array('43201','Ponikva'),
  array('43202','Dolga Gora'),array('43203','Poljčane'),
  array('43204','Slovenska Bistrica'),array('43205','Ostrožno'),
  array('43251','Šentvid pri Grobelnem'),array('43252','Šmarje pri Jelšah'),
  array('43300','Pragersko'),array('43301','Rače'),
  array('43302','Orehova vas'),array('43303','Hoče'),
  array('43304','Maribor Tezno'),array('43351','Cirkovce'),
  array('43352','Strnišče'),array('43353','Kidričevo'),
  array('43354','Hajdina'),array('43355','Ptuj'),
  array('43356','Moškanjci'),array('43357','Osluševci'),
  array('43358','Velika Nedelja'),array('43359','Zamušani'),
  array('43360','Šikole'),array('43400','Maribor'),
  array('43401','Maribor Studenci'),array('43402','Limbuš'),
  array('43403','Bistrica ob Dravi'),array('43404','Ruše'),
  array('43405','Fala'),array('43406','Ruta'),
  array('43407','Ožbalt'),array('43408','Podvelka'),
  array('43409','Vuhred elektrarna'),array('43410','Vuhred'),
  array('43411','Vuzenica'),array('43412','Trbonje'),
  array('43413','Maribor Tabor'),array('43414','Marles'),
  array('43415','Ruše tovarna'),array('43416','Trbonjsko jezero'),
  array('43417','Sveti Danijel'),array('43418','Sveti Vid'),
  array('43420','Maribor Sokolska'),array('43451','Pesnica'),
  array('43452','Cirknica'),array('43453','Šentilj'),
  array('43455','Košaki'),array('43500','Dravograd'),
  array('43501','Ravne na Koroškem'),array('43502','Prevalje'),
  array('43503','Holmec'),array('43505','Podklanc'),
  array('43506','Dobrije'),array('43600','Ormož'),
  array('43601','Pušenci'),array('43602','Pavlovci'),
  array('43603','Ivanjkovci'),array('43604','Mekotnjak'),
  array('43605','Ljutomer mesto'),array('43651','Obrež'),
  array('43652','Središče'),array('43653','Frankovci'),
  array('43700','Ljutomer'),array('43701','Veržej'),
  array('43702','Grlava'),array('43703','Lipovci'),
  array('43704','Murska Sobota'),array('43771','Puconci'),
  array('43774','Mačkovci'),array('43775','Gornji Petrovci'),
  array('43776','Šalovci'),array('43777','Hodoš'),
  array('43800','Stranje'),array('43801','Mestinje'),
  array('43802','Podplat'),array('43803','Rogaška Slatina'),
  array('43804','Rogatec'),array('43805','Dobovec'),
  array('43806','Sveti Rok ob Sotli'),array('43807','Tekačevo'),
  array('43808','Rjavica'),array('43809','Vidina'),
  array('43851','Pristava'),array('43852','Sodna vas'),
  array('43853','Podčetrtek'),array('43854','Imeno'),
  array('43855','Podčetrtek Toplice'),array('43856','Atomske Toplice hotel'),
  array('43901','Petrovče'),array('43902','Žalec'),
  array('43903','Šempeter v Savinjski dolini'),array('43904','Polzela'),
  array('43905','Šmartno ob Paki'),array('43906','Paška vas'),
  array('43907','Šoštanj'),array('43909','Velenje Pesje'),
  array('43910','Velenje'),array('43911','Celje Lava'),
  array('43912','Florjan'),array('44001','Brezovica'),
  array('44002','Notranje Gorice'),array('44003','Preserje'),
  array('44004','Borovnica'),array('44005','Verd'),
  array('44006','Logatec'),array('44007','Planina'),
  array('44008','Rakek'),array('44009','Postojna'),
  array('44010','Prestranek'),array('44011','Ljubljana Tivoli'),
  array('44100','Pivka'),array('44101','Košana'),
  array('44102','Gornje Ležeče'),array('44200','Divača'),
  array('44201','Rodik'),array('44202','Hrpelje-Kozina'),
  array('44251','Povir'),array('44300','Prešnica'),
  array('44301','Podgorje'),array('44302','Zazid'),
  array('44303','Rakitovec'),array('44352','Koper'),
  array('44356','Črnotiče'),array('44357','Hrastovlje'),
  array('44500','Sežana'),array('44501','Kreplje'),
  array('44502','Kopriva'),array('44503','Štanjel'),
  array('44504','Branik'),array('44505','Steske'),
  array('44506','Dornberk'),array('44600','Prvačina'),
  array('44601','Okroglica'),array('44602','Volčja Draga'),
  array('44603','Šempeter pri Gorici'),array('44651','Batuje'),
  array('44652','Ajdovščina'),array('44653','Dornberk vas'),
  array('44654','Kamnje'),array('44655','Dobravlje'),
  array('44656','Cesta'),array('44700','Nova Gorica'),
  array('44701','Solkan'),array('44703','Plave'),
  array('44704','Anhovo'),array('44705','Kanal'),
  array('44706','Avče'),array('44707','Most na Soči'),
  array('44708','Podmelec'),array('44709','Grahovo'),
  array('44710','Hudajužna'),array('44711','Podbrdo'),
  array('44712','Bohinjska Bistrica'),array('44713','Nomenj'),
  array('44715','Bohinjska Bela'),array('44716','Bled Jezero'),
  array('44717','Podhom'),array('44718','Vintgar'),
  array('44719','Kočna'),array('44800','Dutovlje'),
  array('44901','Narin'),array('44902','Kilovče'),
  array('44903','Ilirska Bistrica'),array('99998','Ljubljana Moste (BTC)'));
  //echo "Test data..";
  $TrainTrackData=array(
  array('42706','42101','42102','42103','42200','42201','42203','42204','43776','42207','42208','42209','42210','42222','42212','42300'),	array('42200','42103','42102','42101','42706','42006','42005','42004','42003','42002','42001'),	array('42300','42316','42317','42302','42303','42304','42305','42306','42307','42309','42310','42311','42312','42313','42314','42802','42400'),	array('42300','42357','42365','42351','42366','42358','42359','42352','42360','42353','43503','42362','42363','42354','42355','42356'),	array('42200','43001','43002','43100','43101','43102','43200','43201','43205','43202','43203','42802','43300','43301','43302','43303','43304','43400','43455','43451','43452','43453'),	array('43100','43911','43901','42204','42507','43904','43905','43906','43912','43907','43909','43910'),	array('43100','43101','43102','43200','43251','43252','43101','43851','43905','43855','43856','43853','43854','43101','43801','43802','43807','43803','43808','43804','43809','43805','43352'),	array('43400','43413','43401','43420','43414','43402','43403','43415','43404','43405','43406','43407','43408','43409','43410','43101','43411','43416','43412','43352','43500','43505','43506','43501','43502'),	array('43400','43304','43303','43302','43301','43300','43360','43351','43101','43353','43354','43355','43356','43359','43357','43358','43600'),	array('43600','43704','43777'),	array('43600','43653','43651','43907'),	array('43600','43601','43602','43603','43604','43605','43700','43702','43701','43703','43704','43771','43774','43775','43776','43777'),	array('42400','44719','44718','44717','44716','44715','44713','44712','44711','44710','44709','44708','43356','44706','44705','44704','44703','43905','44700'),	array('42400','44712','43356','44700','44603','44602','44601','44600'),	array('44600','44653','44651','44654','44655','44656','44652'),	array('44600','44506','42701','44504','44503','44502','44800','44501','42706'),	array('42300','42805','42804','42802','42362','42800','42711','42204','42709','42708','42707','42706','42705','42704','42703','42702','42701','42700','43201','42601','42603','42600','42512','42511'),	array('42706','42901','42902','42903','42904','42905','42906','42907','42908','42909','42700'),	array('44200','44201','44202','44300'),	array('44300','44356','44357','44352'),	array('44300','44301','44302','44303'),	array('42300','44011','42002','44002','44003','44004','44005','44006','44007','44008','44009','44300','44100'),	array('44100','44901','44902','44903'),	array('44100','44101','44102','44200'));

function getTrainStationID($StationName)
{
  //echo "<br/>getTrainStationID:".$StationName;
  global $TrainStationsData;

  foreach ($TrainStationsData as $i => $StationDataValuePair) {
    if ($StationDataValuePair[1]==$StationName)
    {
      $Result=$StationDataValuePair[0];
      return $Result;
    }

  }
  return null;
}

function getTrainStationLatLng($StationID)
{
  //echo "<br/>getTrainStationID:".$StationName;
  global $TrainStationsData;
  global $TrainStationsLatLng;

  $i=0;
  foreach ($TrainStationsData as $i => $StationDataValuePair) {
    if ($StationDataValuePair[0]==$StationID)
    {
      $Result=$StationDataValuePair[0];
      return $TrainStationsLatLng[$i];
    }
    $i++;
  }
  return null;
}

function setTrainStationID($TrainSchedule)
{
  for ($i=0; $i<count($TrainSchedule[3]); $i++)
  {
    $resultGetTrainStationID=getTrainStationID($TrainSchedule[3][$i]);
    if ($resultGetTrainStationID==null)
    {
        $TrainSchedule[1][$i]="Error";
    }
    else
    {
        $TrainSchedule[1][$i]="OK";
    }
    $TrainSchedule[2][$i]=$resultGetTrainStationID;
    $TrainSchedule[10][$i]=GetTrainStationLatLng($resultGetTrainStationID);


  }
  return $TrainSchedule;
}

function checkHiddenStation($StationA,$StationB)
{
  global $TrainTrackData;
  $StationAPos=-1;
  $StationBPos=-1;
  $TrackN=-1;
  for ($i=0;$i<count($TrainTrackData);$i++)
  {
     for($n=0;$n<count($TrainTrackData[$i]);$n++)
     {
      //echo "...+".$TrainTrackData[$i][$n]."+ (Looking for ".$StationB.")...\n";
       if (strcmp($TrainTrackData[$i][$n],$StationA)==0)
          {
            echo "\n Found A :".$TrainTrackData[$i][$n];
            $StationAPos=$n;
          }
       if (strcmp($TrainTrackData[$i][$n],$StationB)==0)
          {
            echo "\n Found B :".$TrainTrackData[$i][$n];
            $StationBPos=$n;
          }
     }
     if(($StationAPos>-1)&&($StationBPos>-1))
     {
       echo "Found A and B... \n";
       echo "A:".$StationAPos;
       echo "B:".$StationBPos;
       $TrackN=$i;
       break;
     }
  }

  if ($TrackN==-1) {
    echo "Nothing found...\n";
    return null;}
  else
  {
    $ResultTrackData=[];
    $Swap=0;
    if ($StationAPos>$StationBPos)
    {
      $Swap=$StationBPos;
      $StationBPos=$StationAPos;
      $StationAPos=$Swap;
      $Swap=-1;
    }
    for ($i=$StationAPos; $i<=$StationBPos; $i++)
    {
      $ResultTrackData[]=$TrainTrackData[$TrackN][$i];
    }
    if ($Swap==-1)
    {
      $ResultTrackData=array_reverse($ResultTrackData);
    }
    echo "Found track:".$TrackN;
    echo "StationAPos:".$StationAPos;
    echo "StationBPos:".$StationBPos;
    print_r($ResultTrackData);
    return $ResultTrackData;
  }

}

$HTML=file_get_contents('http://www.slo-zeleznice.si/sl/component/sz_timetable/?view=train&vl='.$TrainID.'&da=2017-08-01T00:00:00&tmpl=component%&loadStyles=true');
//echo $HTML;
//echo '<br/>';

// Ime vlaka
$PosStart=strpos($HTML,'Vozni red ',0)+10;
$PosEnd=strpos($HTML,'</caption>',$PosStart);

$VlakIme = substr($HTML,$PosStart,$PosEnd-$PosStart);

//echo "Vlak ime test: ";
//echo $VlakIme;
//echo "\n";

$PosStart=strpos($HTML,'<tbody>',0);
$PosEnd=strpos($HTML,'</tbody>',0);

/*echo "Urnik :";
echo $PosStart;
echo $PosEnd;
echo "Urnik end.";*/
//echo substr($HTML,$PosStart,$PosEnd-$PosStart);
preg_match_all('/(<)(tr>).*?\n.*?<td.*?>(.*?)<\/td>.*?\n.*?<td.*?>(.*?)<\/td>.*?\n.*?<td.*?>(.*?)<\/td>.*?\n.*?<\/tr>/',$HTML,$SearchResult,PREG_PATTERN_ORDER);

$TrainSchedule=setTrainStationID($SearchResult);
//print_r($TrainSchedule);
//echo "HTML start";
//print_r($HTML);
//echo "HTML end";
//echo "Tabela.";

//******************************************************************************
/// Generiranje seznama postaj
$n=0;
$TrainStart="---";
$TrainStop="";
echo "TrainSchedule[TrainScheduleIndex]=[[";
for($i=0;$i<count($TrainSchedule[1]);$i++)
{
  if (strcmp($TrainSchedule[1][$i],"OK")==0)
  {
    if ($TrainStart=="---")
    {
        $TrainStart=$TrainSchedule[5][$i];
    }
    $TrainStop=$TrainSchedule[4][$i];
    echo "\n['".$TrainSchedule[2][$i]."',"."'".$TrainSchedule[3][$i]."',".
    "'".$TrainSchedule[4][$i]."',"."'".$TrainSchedule[5][$i]."',".
    "[".$TrainSchedule[10][$i][0].","."".$TrainSchedule[10][$i][1]."]]";
    if ($i<count($TrainSchedule[1])-1)
    {
      if(strcmp($TrainSchedule[1][$i+1],"OK")==0)
      {
        echo ",";
      }
    }
    $n++;
  }
  else
  {
    echo "\n//Skip --------------------------->".$TrainSchedule[3][$i];
  }
}
echo "\n],";
echo "'".$TrainStart."',";
echo "'".$TrainStop."',\n";
echo "'Initial',\n";
echo "'".$TrainID."',";
echo "'".$VlakIme."'";
echo "];\n";
echo "TrainScheduleIndex++;";
/*
//************************************************************************
/// Generiranje seznama postaj
echo "\n\n\n//HiddenLayer --------------------------->\n\n\n";
$n=0;
$TrainStart="---";
$TrainStop="";

echo "=[[";
for($i=0;$i<count($TrainSchedule);$i++)
{
  if (strcmp($TrainSchedule[1][$i],"OK")==0)
  {
    if ($TrainStart=="---")
    {
        $TrainStart=$TrainSchedule[0][$i];
    }
    if ($i>1)
    {
    //  echo "...A...".$TrainSchedule[2][$i-1];
    //  echo "...B...".$TrainSchedule[2][$i];

      $HiddenStations=checkHiddenStation($TrainSchedule[2][$i-1],$TrainSchedule[2][$i]);
      //print_r($HiddenStations);
    }
    $n++;
  }
  else
  {
    echo "\n//Skip --------------------------->".$TrainSchedule[3][$i];
  }
}

echo "\n],";
echo "'".$TrainStart."',";
echo "'".$TrainStop."'";
echo "];\n";
//************************************************************************
echo "TrainScheduleIndex++;";
// Generiranje seznama poti*/
//print_r($TrainSchedule);
?>
