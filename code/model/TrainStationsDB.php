<?php
// Vir: 11. vaje, pri predmetu Spletne tehnologije

//CREATE USER 'Zekom123'@'%' IDENTIFIED BY '***';GRANT USAGE ON *.* TO 'Zekom123'@'%' IDENTIFIED BY '***' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;GRANT ALL PRIVILEGES ON `emisije`.* TO 'Zekom123'@'%';

require_once "DBInit.php";

class TrainStationsDB {

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

        $statement = $db->prepare("SELECT IDStation, Name, Lat, Lng FROM TrainStations");
        $statement->execute();

        return $statement->fetchAll();
    }

    public static function get($id) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("SELECT IDStation, Name, Lat, Lng FROM TrainStations WHERE IDStation = :id");
        $statement->bindParam(":id", $id, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetch();

/*        if ($station != null) {
            return $station;
        } else {
            throw new InvalidArgumentException("No record with id $id");
        }*/
    }

    /*public static function insert($author, $title, $description, $price, $year, $quantity) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("INSERT INTO book (author, title, description, price, year, quantity) 
            VALUES (:author, :title, :description, :price, :year, :quantity)");
        $statement->bindParam(":author", $author);
        $statement->bindParam(":title", $title);
        $statement->bindParam(":description", $description);
        $statement->bindParam(":price", $price);
        $statement->bindParam(":year", $year);
        $statement->bindParam(":quantity", $quantity);
        $statement->execute();
    }

    public static function update($id, $author, $title, $description, $price, $year, $quantity) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("UPDATE book SET author = :author, title = :title, 
            description = :description, price = :price, year = :year, quantity = :quantity 
            WHERE id = :id");
        $statement->bindParam(":author", $author);
        $statement->bindParam(":title", $title);
        $statement->bindParam(":description", $description);
        $statement->bindParam(":price", $price);
        $statement->bindParam(":year", $year);
        $statement->bindParam(":quantity", $quantity);
        $statement->bindParam(":id", $id, PDO::PARAM_INT);
        $statement->execute();
    }

    public static function delete($id) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("DELETE FROM book WHERE id = :id");
        $statement->bindParam(":id", $id, PDO::PARAM_INT);
        $statement->execute();
    }*/    

    public static function search($query) {
        $db = DBInit::getInstance();

        $statement = $db->prepare("SELECT IDStation, name, Lat,Lng FROM TrainStations WHERE MATCH (IDStation,Name) AGAINST (:query IN BOOLEAN MODE)");
        $statement->bindValue(":query", $query);
        $statement->execute();

        return $statement->fetchAll();
    }    
}
