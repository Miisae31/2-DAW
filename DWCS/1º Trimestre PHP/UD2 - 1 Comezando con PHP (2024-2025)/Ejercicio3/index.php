<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
    <p>Para calcular el siguiente area utilizaremos esta formula: </p>
    <p>Formula: π x r²</p>
    <?php
    define("PI", "3.1416");
    $radio1 = 10;
    $radio2 = 3.24;
    $area1 = PI * $radio1;
    $area2 = PI * $radio2;
    echo "<h3>El area del círculo número 1 es :" .number_format($area1,2). "</h3>";
    echo "<h3>El area del círculo número 2 es :" .number_format($area2,2). "</h3>";
    ?>


</body>
</html>