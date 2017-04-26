/**
@module Gama-Editor
*/
/**@inner*/
var GamaKartaImg  = [];
var GamaKartaLatLng = [];
var GamaKartaDatUra = [];
var GamaKartaLokacijaIme = [];
var GamaKartaInfoMarker = [];
var GamaKartaInfoWindow =[];
var GamaColorSelector=0;

function ButtonHelpInfo(ButtonNumber)
{
  GamaColorSelector++;
  GamaColorSelector=GamaColorSelector%TransitPolyLinesColor.length;

  $('#div-console-data').append('<br/>-----( ButtonHelpInfo )---------> '+ GamaColorSelector+'--> '+ TransitPolyLinesColor[GamaColorSelector]);
  $("#div-console-data").css("color", TransitPolyLinesColor[GamaColorSelector]);
  $(".div-toolbar-footer-breadcrumbs").css("color", TransitPolyLinesColor[GamaColorSelector]);
}

/**
@function createMarkerGreen
@param {google.maps.LatLng} point
@param {string} ime
@param {integer} vrednost
@param {MIME} slika
@param {object} datura
@desc
Source : {@link http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/MZO_gmaps1.html}
Funkcija, ki naredi marker (Creates a marker whose info window displays the letter corresponding)
*/
function createMarkerGreen(point, ime, vrednost, slika, datura) {
                // This example displays a marker.
                // When the user clicks the marker, an info window opens.
                  var imgWidth=Math.ceil(1182*(0.50));
                  var imgHeight=Math.ceil(470*(0.50));

                  if (vrednost==0)
                  {
                    imgWidth=Math.ceil(821*0.7);
                    imgHeight=Math.ceil(660*0.7);
                  }

                  var contentString='';
                  contentString='<br/><img class="img-gama" src="'+slika+'" width="'+imgWidth+'" height="'+imgHeight+'"/><br/>';

                  var infowindow = new google.maps.InfoWindow({
                    content: contentString
                  });


          /**@inner*/
          var GamaSymbol;

          if (vrednost == -1) {
              GamaSymbol =
              {
                url: 'http://www.lju-airport.si/images/icon_webcam1.png',
                // This marker is 20 pixels wide by 32 pixels high.
                size: new google.maps.Size(320, 240),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(110, 110)
              }
          }
          else if (vrednost == -2) {
            GamaSymbol =
            {
              url: 'http://www.lju-airport.si/images/icon_webcam2.png',
              // This marker is 20 pixels wide by 32 pixels high.
              size: new google.maps.Size(35, 35),
              // The origin for this image is (0, 0).
              origin: new google.maps.Point(0, 0),
              // The anchor for this image is the base of the flagpole at (0, 32).
              anchor: new google.maps.Point(30, 17)
            }
          }
          else if (vrednost == 0)
          {
            GamaSymbol = {
            url: 'http://www.sherv.net/cm/emo/futurama/hypnotoad-smiley-emoticon.gif',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(75, 75),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(30, 30)
            }
          }

          else if (vrednost == 1)
          {
            GamaSymbol = {
            url: 'http://www.ursjv.gov.si/fileadmin/_migrated/pics/pozor_radioaktivno.jpg',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(77, 100),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
            }

          }

          else if (vrednost == 2)
          {
            GamaSymbol = {
            url: 'http://www.ursjv.gov.si/fileadmin/_migrated/pics/pozor_sevanje.jpg',

            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(77, 100),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
            }

          }
          else {
            GamaSymbol = {
            url: 'http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/icons/zeleno.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(32, 37),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(16, 16)
            };

          }

                  var marker = new google.maps.Marker({
                    position: point,
                    icon: GamaSymbol,
                    map: map,
                    title: ime
                  });

                  marker.addListener('click', function() {
                    infowindow.open(map, marker);

                  });

                  GamaKartaInfoWindow[vrednost]=infowindow;

        return marker;
        }


function LoadGamaInfo()
{

$('#div-path-data').append('------> Loading Gama Info');
var GamaKartaId=0;

GamaKartaImg[GamaKartaId]  = 'http://www.arso.gov.si/vreme/napovedi%20in%20podatki/radar_anim.gif';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.065511, 14.513489);
GamaKartaDatUra[GamaKartaId] ="Republika Slovenija, Ministrstvo za okolje in prostor, Agencija Republike Slovenije za okolje";
GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-ARSO";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);
GamaKartaInfoWindow[GamaKartaId].open(map, GamaKartaInfoMarker[GamaKartaId]);

GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_NEK-URSJV.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9397,15.5132);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Krsko-NEK-URSJV";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);

GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_LJ-Brinje-IJS.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0944,14.5984);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-Brinje-IJS";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);

GamaKartaId++;
GamaKartaImg[GamaKartaId]  = 'http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_LJ-Bezigrad.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0655,14.5122);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: 3.8.2016 22:30:00";
GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-Bezigrad";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);

GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_LJ-Brinje-URSJV.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0938,14.5946);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-Brinje-URSJV";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Brinje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0938,14.5945);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Brinje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Brnik.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.2173,14.4726);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Brnik";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Celje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.2344,15.2623);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Celje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Dolenje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.8661,13.9013);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Dolenje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Dvor.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0621,14.3449);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Dvor";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Gacnik.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.6174,15.6838);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Gacnik";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Gornja_Radgona.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.6811,15.9954);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Gornja Radgona";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Hrastje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0743,14.5539);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Hrastje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Hrastnik.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1439,15.0831);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Hrastnik";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Ilirska_Bistrica.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.5529,14.2354);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ilirska Bistrica";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Iska_vas.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9361,14.5144);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Iska vas";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Jesenice_na_Dol_.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.8601,15.6929);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Jesenice na Dolenjskem";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Kamnik.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.2242,14.6133);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Kamnik";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Koper.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.5645,13.7446);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Koper";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Krajinski_park_Goricko.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.8359,16.0306);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Krajinski park Goricko";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Lendava.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.5525,16.4578);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Lendava";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Levec.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.2400,15.2155);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Levec";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Loce.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3014,15.4936);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Loce";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Malkovec.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9532,15.2049);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Malkovec";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_MB-Center.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.5587,15.6511);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Maribor-Center";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_MB-Slivnica.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.4795,15.6820);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Maribor-Slivnica";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Muta.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.6120,15.1635);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Muta";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_N__Gorica.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9555,13.6523);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Nova Gorica";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Park_Skocjanske_jame.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.6634,13.9930);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Park Skocjanske jame";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Podbocje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.8644,15.4557);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Podbocje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Podcetrtek.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1548,15.6082);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Podcetrtek";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Ptuj.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.4219,15.8542);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ptuj";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Radenci.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.6418,16.0486);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Radenci";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Ravne_na_Koroskem.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.5476,14.9399);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ravne na Koroskem";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Rogla.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.4528,15.3313);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Rogla";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Rudno_polje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3462,13.9238);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: ";
GamaKartaLokacijaIme[GamaKartaId]="Rudno polje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Suha.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1619,14.3256);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Suha";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Todraz.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0827,14.1615);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Todraz";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Trbovlje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1387,15.0351);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Trbovlje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Zagorje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1311,14.9961);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Zagorje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Bovec.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3307,13.5541);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Bovec";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Doblice.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.5600,15.1460);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Doblice";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Kocevje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.5611,14.8580);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Kocevje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Kredarica.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3789,13.8491);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Kredarica";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Krvavec.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.2974,14.5337);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Krvavec";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Lesce.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3620,14.1717);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Lesce";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Lisca.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0677,15.2848);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Lisca";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_LJ-Bezigrad.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0655,14.5122);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-Bezigrad";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_MB-Tabor.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.5392,15.6362);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Maribor-Tabor";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_MS-Rakican.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.6520,16.1911);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Rakican";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_NG-Bilje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.8954,13.6242);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Bilje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Novo_mesto.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.8016,15.1774);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Novo mesto";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Secovlje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.4752,13.6158);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Secovlje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Postojna.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.7661,14.1928);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Postojna";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Ratece.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.4969,13.7127);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ratece";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Sl__Gradec.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.4894,15.1112);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Slovenj Gradec";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Velenje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3603,15.1119);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Velenje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Vnajnarje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0516,14.6667);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();;
GamaKartaLokacijaIme[GamaKartaId]="Vnajnarje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Brege.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9198,15.4977);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Brege";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Gor__Lenart.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9299,15.5726);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Gornji Lenart";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Leskovec.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9376,15.4733);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Leskovec";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Libna.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9525,15.5138);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Libna";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Krsko.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9611,15.4954);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Krsko";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Pesje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9399,15.5548);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Pesje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Skopice.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9078,15.5449);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Skopice";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Sp__Stari_Grad.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9429,15.5312);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Spodnji Stari Grad";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Vihre.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9142,15.5246);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Vihre";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Brezice.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9067,15.5965);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Brezice";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Cerklje.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.8840,15.5230);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Cerklje";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Krsko-Videm.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9480,15.4951);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Krsko-Videm";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Krsko-NEK.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9397,15.5131);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Krsko-NEK";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Sv_Mohor.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(45.9887,15.4763);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Brestanica-Sv.Mohor";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Sostanj.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.3770,15.0536);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Sostanj";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Lakonca.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1358,15.0471);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Lakonca";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_Prapretno.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.1402,15.0731);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Prapretno";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


GamaKartaId++;
GamaKartaImg[GamaKartaId]='http://www.radioaktivnost.si/ewsmambo/EWS/POZDRAV/24ur/GMA_graf_LJ-Vic.png';
GamaKartaLatLng[GamaKartaId] = new google.maps.LatLng(46.0424,14.4875);
GamaKartaDatUra[GamaKartaId] ="Datum in ura zadnje meritve: "+Date();
GamaKartaLokacijaIme[GamaKartaId]="Ljubljana-Vic";
GamaKartaInfoMarker[GamaKartaId] = createMarkerGreen(GamaKartaLatLng[GamaKartaId], GamaKartaLokacijaIme[GamaKartaId], GamaKartaId, GamaKartaImg[GamaKartaId], GamaKartaDatUra[GamaKartaId]);


//alert('finished loading');

}
