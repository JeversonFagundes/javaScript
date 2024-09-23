<?php

$id_usuario = $_GET['id_usuario'];

require_once "conecta.php";

$mysql = conectar();

$sql = "SELECT id_usuario, nome, email FROM usuario WHERE id_usuario = $id_usuario";

$resultado = excutarSQL($mysql, $sql);

$usuario = mysqli_fetch_assoc($resultado);

echo json_encode($usuario);
