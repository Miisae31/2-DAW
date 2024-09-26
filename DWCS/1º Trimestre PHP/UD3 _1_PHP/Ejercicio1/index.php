<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UD3 - 1 Exercicios básicos con Strings, Datas, Condicionais e Bucles</title>
</head>
<body>
    <h2>Apartado 01. Strings</h2>
<?php
    $email = "hugofernandezpinho@gmail.com";
    $posicion_arroba = strpos($email,"@");
    
    if ($posicion_arroba != strlen($email)) {
        $conta = substr($email,0, $posicion_arroba);
        $dominio = substr($email,$posicion_arroba +1);
    
    } 
    
    if (strpos($dominio, ".") != false and strlen($dominio) > 1) {
        echo "Conta: " . $conta . "\n";
        echo "Dominio: " . $dominio . "\n"; 
        echo "<p>Cuenta de correo validada " .$email. "</p>";
       

    } else {
        echo "<p>El formato de dominio no es valido</p>";
    }
?>
</body>
</html>