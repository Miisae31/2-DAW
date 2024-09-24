<?php
define('TITLE', 'Ejercicios de PHP');
define('BENVIDA', 'Hola, ¿Qué tal?, ');
define("PI", 3.1416);
$colorPar = "Tomato";
$colorImpar = "Aquamarine";

function IVA(float $prezo, float $iva): float {
    return ($iva * $prezo) + $prezo;
}

function areaCirculo(?float $radio, float $PI): float {
    return $PI * ($radio * $radio);
}

function descuentoFinal(float $prezo, float $desconto): float {
    return $prezo * $desconto;
}

function areaRectangulo(int $ancho, int $alto): int {
    return $ancho * $alto;
}

function perimetroRectangulo(int $ancho, int $alto): int {
    return ($ancho * 2) + ($alto * 2);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo TITLE; ?></title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

<h2>Ejercicio 1</h2>
<h1 class='h1CSS'>Este es el <?php echo TITLE; ?></h1>

<h2>Ejercicio 2</h2>
<span class='spanCSS'><?php printf("%s", BENVIDA . "Hugo"); ?></span>

<h2>Ejercicio 3</h2>
<p>Para calcular el siguiente área utilizaremos esta fórmula:</p>
<p>Fórmula: π x r²</p>
<?php
$radio1 = 10;
$radio2 = 3.24;
$area1 = areaCirculo($radio1, PI);
$area2 = areaCirculo($radio2, PI);
echo "<h3>El área del círculo número 1 es: " . number_format($area1, 2) . "</h3>";
echo "<h3>El área del círculo número 2 es: " . number_format($area2, 2) . "</h3>";
?>

<h2>Ejercicio 4</h2>
<?php
$number1 = rand(1, 100);
$number2 = rand(1, 100);
$number3 = rand(1, 100);
?>
<table>
    <tr>
        <th></th>
        <th>Número1</th>
        <th>Número2</th>
        <th>Número3</th>
    </tr>
    <tr>
        <td>Decimal</td>
        <td><?php echo $number1; ?></td>
        <td><?php echo $number2; ?></td>
        <td><?php echo $number3; ?></td>
    </tr>
    <tr>
        <td>Binario</td>
        <td><?php printf("%b", $number1); ?></td>
        <td><?php echo decbin($number2); ?></td>
        <td><?php echo decbin($number3); ?></td>
    </tr>
    <tr>
        <td>Hexadecimal</td>
        <td><?php echo dechex($number1); ?></td>
        <td><?php echo dechex($number2); ?></td>
        <td><?php echo dechex($number3); ?></td>
    </tr>
</table>

<h2>Ejercicio 5</h2>
<table>
    <tr>
        <th></th>
        <th>Número1</th>
        <th>Número2</th>
        <th>Número3</th>
    </tr>
    <tr style="background-color: <?php echo $number1 % 2 === 0 ? $colorPar : $colorImpar; ?>;">
        <td>Decimal</td>
        <td><?php echo $number1; ?></td>
        <td><?php echo $number2; ?></td>
        <td><?php echo $number3; ?></td>
    </tr>
    <tr style="background-color: <?php echo $number2 % 2 === 0 ? $colorPar : $colorImpar; ?>;">
        <td>Binario</td>
        <td><?php printf("%b", $number1); ?></td>
        <td><?php echo decbin($number2); ?></td>
        <td><?php echo decbin($number3); ?></td>
    </tr>
    <tr style="background-color: <?php echo $number3 % 2 === 0 ? $colorPar : $colorImpar; ?>;">
        <td>Hexadecimal</td>
        <td><?php echo dechex($number1); ?></td>
        <td><?php echo dechex($number2); ?></td>
        <td><?php echo dechex($number3); ?></td>
    </tr>
</table>

<h2>Ejercicio 6</h2>
<?php
$prezo = rand(1, 1000);
$iva = 0.21;
echo "<p>Valor inicial del precio: " . number_format($prezo, 2) . "</p>";
echo "<p>Nuevo precio con IVA del 21%: " . IVA($prezo, $iva) . "</p>";
echo "<p>Valor precio con IVA del 4%: " . IVA($prezo, 0.04) . "</p>";
?>

<h2>Ejercicio 7</h2>
<?php
echo "<p>Área de un círculo con radio 10: " . areaCirculo(10.00, PI) . "</p>";
echo "<p>Área de un círculo con radio 5.23: " . areaCirculo(5.23, PI) . "</p>";
echo "<p>Área de un círculo con radio 187.234: " . areaCirculo(187.234, PI) . "</p>";
?>

<h2>Ejercicio 8</h2>
<?php
$desconto = 0.90;
echo "<p>El precio sin el descuento es: 50</p>";
echo "<p>El precio con el descuento del 10% es: " . descuentoFinal(50, $desconto) . "</p>";
echo "<p>El precio con el descuento del 10% y con el 21 de IVA añadido es: " . IVA(50, $iva) . "</p>";
echo "<p>El precio con el descuento del 10% y con el 21 de IVA añadido sobre un precio aleatorio es: " . IVA($prezo, $iva) . "</p>";
?>

<h2>Ejercicio 9</h2>
<?php
echo "<p>Área de un rectángulo con ancho 10 y alto 5: " . areaRectangulo(10, 5) . "</p>";
echo "<p>Perímetro de un rectángulo con ancho 10 y alto 5: " . perimetroRectangulo(10, 5) . "</p>";
?>

</body>
</html>
