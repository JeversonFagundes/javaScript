<?php

//conectar ao banco de dados 
require_once "conecta.php";

//variavel de conexão com o banco de dados.
$mysql = conectar();

$usuario = json_decode(file_get_contents("php://input"));

//echo $usuario->nome;

//comando sql.
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES 
(
'$usuario->nome', 
'$usuario->email', 
'$usuario->senha'
)";

excutarSQL($mysql, $sql);

$usuario->id_usuario = mysqli_insert_id($mysql);

echo json_encode($usuario);