<?php

//conectar ao banco de dados 
require_once "conecta.php";

//variavel de conexão com o banco de dados.
$mysql = conectar();

$usuario = json_decode(file_get_contents("php://input"));
var_dump($usuario);

die ();

//comando sql.
$sql = "INSERT INTO usuarios (id, nome, email, senha) VALUES ($id, '$nome', '$email', '$senha')";

excutarSQL($mysql, $sql);


