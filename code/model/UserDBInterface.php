<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Vir: http://www.phpliveregex.com/
//Vir: http://php.net/manual/en/function.preg-match.php

require_once 'UserDB.php';



class UserDBInterface
{
       
    public static function CheckLogin()
    {
        $Username=isset($_SESSION["Username"])?$_SESSION["Username"]:"";
        $Password=isset($_SESSION["Password"])?$_SESSION["Password"]:"";
        
        if($Username=="") {return false;}
        if($Password=="") {return false;}
        
        $UserRecord= UserDB::get($Username);
        
        echo("UserDBInterface:CheckLogin() -----> UserRecord : ");
        //var_dump($UserRecord);
        /*echo "----CheckLogin----";
        echo "Username:".$Username;
        echo "Password:".$Password;
        echo "<br/>----->";
        echo ($UserRecord["Username"]==$Username ) && ($UserRecord["Password"]=="111");
        echo "-----><br/>";*/
        //var_dump($UserRecord);
        
        //  echo "----CheckLogin-----";
        //  echo (($UserRecord["Username"]==$Username ) && ($UserRecord["Password"]=="aaa"));
        //  echo "--------------------";
        
            //return true;
            if (($UserRecord["Username"]===$Username ) && ($UserRecord["Password"]===$Password))
            {
                
            echo "----CheckLogin Succcess----";
            echo "Username:".$Username."=!=".$UserRecord["Username"]."<br/>";
            //echo "Password:".$Password."=!=".$UserRecord["Password"]."<br/>";
            echo "Password: ****** =!= ****** <br/>";
            //echo "<br/>----->";
            //echo ($UserRecord["Username"]==$Username ) && ($UserRecord["Password"]=="111");
            echo "-----><br/>";
        
                return true;
                
            }
            else 
            {
                echo "Login failed.";
                echo "Username:".$Username."<br/>";
                //echo "Password:".$Password."<br/>";
                echo "Password: ****** <br/>";
                return false;
            }
        
    }
    
}
 /*  
$UserName = isset($_POST["Username"])?$_POST["Username"]:"";
$PassWord = isset($_POST["Password"])?$_POST["Username"]:"";
$RePassword = isset($_POST["RePassword"])?$_POST["RePassword"]:"";
$Email = isset($_POST["Email"])?$_POST["Email"]:"";
$FirstName = isset($_POST["FirstName"])?$_POST["FirstName"]:"";        
$LastName = isset($_POST["LastName"])?$_POST["LastName"]:"";
$Mode = isset($_POST["Mode"])?$_POST["Mode"]:"";
*/
/*
$input_line=$UserName;
if (preg_match("/\A([a-zA-Z]{1}([\d]|[a-zA-Z]){4,9})\z/", $input_line, $output_array)!=1)
{
    echo "Uporabniško ime se mora začeti s črko ( A..Z ) , dolgo je lahko vsaj 5 in največ 10 znakov";
}
*/