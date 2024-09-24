<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
    <?php
    $radio = 0.00;
    $PI = 3.1416;
    function areaCirculo (?float $radio,float $PI): float {
        $areaTotal = $PI * ($radio * $radio);
        return $areaTotal;
    } 
    ?>

    <?php
    echo "<p>Area de un circulo con radio 10: " .areaCirculo(10.00,$PI). "</p>";
    echo "<p>Area de un circulo con radio 5.23: " .areaCirculo(5.23,$PI). "</p>";
    echo "<p>Area de un circulo con radio 187.234: " .areaCirculo(187.234,$PI). "</p>";
    ?>
    </body>
</html>