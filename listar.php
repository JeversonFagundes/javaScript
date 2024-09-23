<?php

require_once "conecta.php";

$mysql = conectar();

$sql = "SELECT * FROM usuarios";

$resultado = excutarSQL($mysql, $sql);

$usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

echo json_encode($usuarios);



