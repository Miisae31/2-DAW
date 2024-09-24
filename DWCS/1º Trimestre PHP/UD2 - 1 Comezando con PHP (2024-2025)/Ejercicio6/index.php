<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
    <?php
    $prezo = rand(1,1000);
    $iva = 0.21;
    function IVA (int $prezo,float $iva): float {
        $prezoConIva = ($iva * $prezo) + $prezo;
        return $prezoConIva;
    } 
    ?>

    <?php
    echo "<p>Valor inicial del precio : " .number_format($prezo,2). "</p>";
    echo "<p>Nuevo precio con IVA del 21%: " .IVA($prezo,$iva). "</p>";
    echo "<p>Valor precio con IVA del 4%: " .IVA($prezo,0.04). "</p>";
    ?>

    </body>
</html>