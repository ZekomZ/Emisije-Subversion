<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
session_start();
include_once './controler/InitGui.php';

var_dump($_SESSION);
?>

<html>
    <head>
        <title>iT - Interaktivna karta SŽ - Emisije v okolju, C02, karta hrupa - Urejevalnik WebGl</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./css/emisije.css" />
        <script type="text/javascript" src="./jquery.min.js"></script>
        <script>
            function reloadIframe()
            {
                document.getElementById('karta').src+='';
                //alert("reloadIframe : " + document.getElementById('karta').contentDocument.location );
            }

        </script>
    </head>
    <body onload="reloadIframe();">

        <div class ="html-div-body">
            <div class ="html-div-header">
                <div class="html-div-header-frame-left">
                    <div class="html-div">
                        <?php include("./view/ViewToolbarUser.php"); ?>
                    </div>
                </div>
                <div class="html-div-header-frame-right">
                    <div class="html-div">
                        <?php include("./view/ViewToolbarTools.php"); ?>
                    </div>
                </div>
            </div>
        </div>

        <div class ="html-div-body">

            <div class="html-div-body-frame-left">
                <?php include("./view/ViewToolbarMap.php"); ?>
            </div>

            <div class="html-div-body-frame-right">
                <div class="html-div">
                   <?php include("./view/ViewToolbarData.php");    ?>
                </div>
            </div>

        </div>

        <div class ="html-div-body">
            <div class="html-div-footer">
                <div class="html-div-footer-frame-left">
                    <div class="html-div"> Navigacija za (1) - Urejevalnik


                </div>
            </div>

            <div class="html-div-footer-frame-right">

                <div class="html-div-footer-frame-right-2col-left">
                    <div class="html-div"> Navigacija za (2) - Interaktivna karta <br/>

                    </div>
                </div>

                <div class="html-div-footer-frame-right-2col-right">
                    <div class="html-div"> Navigacija za (3) - Karta emisij

                    </div>
                </div>

            </div>

            </div>
        </div>

        <div class ="html-div-body">
            <div class="html-div-footer">
                <?php include("./view/ViewFooter.php");    ?>
            </div>
        </div>
    </div>

    <div class ="html-div-body">
      +++:<iframe src="http://localhost/Zekom-Emisije/Emisije-Subversion/branches/gh-pages/" width="3333" height="2222"></iframe>:+++
    </div>

    </body>
</html>
