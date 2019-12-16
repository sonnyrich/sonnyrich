<?php

define('DATABASE', 'users.db');
$pdo = new Database;
$pdo->connect();
$pdo->createTable();

class Database
{
  private $pdo;
  public function connect()
  {
    if ($this->pdo ==null){
this->pdo = new PDO('sqlite:'.__DIR__.'/db/'.DATABASE);
return $this->pdo;
  }
  public function createTable(){
    $this->pdo->query("CREATE TABLE IF NOT IXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      phone TEXT,
      date DATATIME
    )")
  }
}
var_dump($_POST);

if(validate($_POST)){
$client = new Client;
$client-> checkdate($_POST);

setcookie('name',$_POST[name]);

var_dump($client);
}else{
  header('location: /' .$_SERVER(['HTTP_REFERER']);
}

function validate($data){
  if  (isset($data['name']) && $data['name']){
    return true;
}
return false;
}

class Client
{
public $name,
$cinema,
$popcorn,
$commet;

public function checkdate($data){
  if  (isset($data['name']) && $data['name']){
      $this => - $data['name'];
  }
  if  (isset($data['cinema']) && $data['cinema']){
    $this => - $data['cinema'];
    }
    if  (isset($data['popcorn']) && $data['popcorn']){
        $this => - $data['popcorn'];

        }
        if  (isset($data['commet']) && $data['commet']){
            $this => - $data['commet'];
}

}
public function saveToFile()
{
  $data = file_get_contents(CLIENTS);
  $new_data = '';
  $new_data .='Имя пользователя:' this->name ."\r\n";
  if ($this->cinema){
    $new_data .='Имя пользователя:'.this->cinema. "\r\n";
  }
  if ($this->popcorn){
    $new_data .=.this->popcorn. "\r\n";
  }
}

}


?>








//$a = [1,2,3];
// $b = [
//     'a' => 1,
//     'b' => 2,
//     'c' => 3,
//     4

// ];
//     $b['b'] = 'new';

// $last = array_pop('$b');
// var_dump($last);
//     var_dump($b);

//     $str = 'a,b,c,d,e,f';
//     $ = explode(',',$str)