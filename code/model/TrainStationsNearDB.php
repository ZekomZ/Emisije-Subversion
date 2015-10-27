<?php
// Vir: 11. vaje, pri predmetu Spletne tehnologije

//CREATE USER 'Zekom123'@'%' IDENTIFIED BY '***';GRANT USAGE ON *.* TO 'Zekom123'@'%' IDENTIFIED BY '***' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;GRANT ALL PRIVILEGES ON `emisije`.* TO 'Zekom123'@'%';

require_once "DBInit.php";



class TrainStationsNearDB {
    protected static $RailType=99;
    /*public static function getStationByID($id) {
        $db = DBInit::getInstance();

        //$id_placeholders = implode(",", array_fill(0, count($ids), "?"));

        $statement = $db->prepare("SELECT IDStation, Name, Lat, Lng
            FROM TrainStations WHERE id = (" . $id . ")");
        $statement->execute($ids);

        return $statement->fetchAll();
    }*/

    public static function getAll() {
        $db = DBInit::getInstance();

        $statement = $db->prepare("SELECT IDRailAB, IDStationA, IDStationB, RailType FROM TrainStationsNear");
        $statement->execute();

        return $statement->fetchAll();
        
    }

    public static function get($id) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("SELECT IDRailAB, IDStationA, IDStationB, RailType FROM TrainStationsNear WHERE IDRailAB = :id");
        $statement->bindParam(":id", $id, PDO::PARAM_INT);
        $statement->execute();

        $station = $statement->fetch();

        if ($station != null) {
            return $station;
        } else {
            throw new InvalidArgumentException("No record with id $id");
        }
    }
    
    public static function getAB($IDStationA, $IDStationB) {
        $db = DBInit::getInstance();
        
        $IDA=min($IDStationA,$IDStationB);
        $IDB=max($IDStationA,$IDStationB);
        
        $statement = $db->prepare("SELECT IDRailAB, IDStationA, IDStationB, RailType FROM TrainStationsNear WHERE IDStationA = :idA AND IDStationB = :idB");
        $statement->bindParam(":idA", $IDA, PDO::PARAM_INT);
        $statement->bindParam(":idB", $IDB, PDO::PARAM_INT);
        $statement->execute();

        $station = $statement->fetch();
        
        //var_dump($statement);
        
        return $station;
/*        if ($station != null) {
            return $station;
        } else {
            throw new InvalidArgumentException("No record with id $id");
        } */
        
        
    }
    

    public static function insert($IDStationA, $IDStationB ) {
        $db = DBInit::getInstance();
        
        $IDA=min($IDStationA,$IDStationB);
        $IDB=max($IDStationA,$IDStationB);
        $IDRailAB=$IDA."-".$IDB;
        
        $statement = $db->prepare("INSERT INTO TrainStationsNear "
                . "(IDRailAB, IDStationA, IDStationB, RailType) "
            ."VALUES (:IDRailAB, :IDStationA, :IDStationB, :RailType)");
        $statement->bindParam(":IDRailAB", $IDRailAB);
        $statement->bindParam(":IDStationA", $IDA);
        $statement->bindParam(":IDStationB", $IDB);
        $statement->bindParam(":RailType", self::$RailType);
        $statement->execute();
        
        var_dump($statement);
    }

    public static function update($IDStationA, $IDStationB) {
        $db = DBInit::getInstance();
                        
        $IDA=max($IDStationA,$IDStationB);
        $IDB=min($IDStationA,$IDStationB);
        $IDRailAB=$IDA."-".$IDB;
        
        $statement = $db->prepare("UPDATE TrainStationsNear "
            . "SET IDRailAB=:IDRailAB, "
            . "IDStationA=:IDStationA, "
            . "IDStationB=:IDStationB, "
            . "RailType=:RailType "
            . "WHERE IDRailAB=:IDRailAB");
        
        $statement->bindParam(":IDRailAB", $IDRailAB);
        $statement->bindParam(":IDStationA", $IDA);
        $statement->bindParam(":IDStationB", $IDB);
        $statement->bindParam(":RailType", self::$RailType);
        $statement->execute();
        
        var_dump($statement);
        
    }

    public static function delete($IDStationA,$IDStationB) {
        $db = DBInit::getInstance();
        
        $IDA=min($IDStationA,$IDStationB);
        $IDB=max($IDStationA,$IDStationB);
        $IDRailAB=$IDA."-".$IDB;
        
        $statement = $db->prepare("DELETE FROM TrainStationsNear WHERE IDRailAB = :IDRailAB");
        $statement->bindParam(":IDRailAB", $IDRailAB, PDO::PARAM_INT);
        $statement->execute();
        
    }    

    public static function search($query) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("SELECT IDStation, name, Lat,Lng FROM TrainStations WHERE MATCH (IDStation,Name) AGAINST (:query IN BOOLEAN MODE)");
        $statement->bindValue(":query", $query);
        $statement->execute();

        return $statement->fetchAll();
    }    
}
