<?php
/*
Título: Tarefa 2 - 1 Comenzando con PHP
Autor: Hugo Fernández Pinho
Fecha de última modificación: 24 de septiembre de 2024
Versión: 1.0
*/

/* Ejercicio 1: Definir una constante para el título y generar una etiqueta <h1> con estilo. */
define('title','título');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php // Mostrar el título definido como constante en la etiqueta <title> ?>
    <title><?php echo title;  ?></title>

    <link rel="stylesheet" href="estilos.css"> <!-- Enlace al archivo CSS -->
</head>
<body>

<h2>Ejercicio 1:</h2>

    <?php // Imprimir una etiqueta <h1> con la constante 'title' y aplicarle estilo ?>
    <h1 class ='h1CSS'>Este es el <?php echo title; ?></h1>
    


    <hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 2:</h2>
<?php
/* Ejercicio 2: Definir una constante con un saludo y mostrarla usando printf */
define('BENVIDA','Hola, ¿Qué tal?, ');
define('Nombre','Hugo');
printf ("<span class='spanCSS'>". BENVIDA . "%s </span>", Nombre);
?>

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 3:</h2>
<?php
/* Ejercicio 3: Definir una constante para el valor de PI y calcular el área de dos círculos */
define("PI", "3.1416"); /* Valor de la constante de PI */ 
$radio1 = 10;
$radio2 = 3.24;

/* Cálculo de área de los círculos usando la fórmula del área */
$area1 = PI * ($radio1 * $radio1);
$area2 = PI * ($radio2 * $radio2);

/* Mostrar los resultados formateados a 2 decimales */
echo "<h3>El área del círculo número 1 es: " .number_format($area1,2). "</h3>";
echo "<h3>El área del círculo número 2 es: " .number_format($area2,2). "</h3>";
?>

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 4:</h2>
<?php
/* Ejercicio 4: Generar 3 números aleatorios y mostrar su representación en decimal, binario y hexadecimal */
$number1 = rand(1,100);
$number2 = rand(1,100);
$number3 = rand(1,100);
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
        <td><?php printf("%b", $number1); ?></td> <?php // Mostrar el número en binario usando printf ?>
        <td><?php echo decbin($number2); ?></td> <?php // Alternativa para mostrar en binario ?>
        <td><?php echo decbin($number3); ?></td>
    </tr>
    <tr>
        <td>Hexadecimal</td>
        <td><?php echo dechex($number1); ?></td> <?php // Conversión a Hexadecimal ?>
        <td><?php echo dechex($number2); ?></td>
        <td><?php echo dechex($number3); ?></td>
    </tr>
</table>

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 5:</h2>
<?php
/* Ejercicio 5: Cambiar el color de fondo de las filas de la tabla según si el número es par o impar */
$colorPar = "Tomato";
$colorImpar = "Aquamarine";
?>
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

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 6:</h2>
<?php
/* Ejercicio 6: Calcular el precio con IVA */
$prezo = rand(1,1000);
$iva = 0.21;

/* Función para calcular el precio con IVA */
/**
 * Calcula el precio final después de aplicar el IVA.
 *
 * @param int $prezo El precio base.
 * @param float $iva El porcentaje de IVA a aplicar (por defecto 21%).
 * @return float El precio total con IVA incluido.
 */


function IVA (int $prezo, float $iva = 0.21): float {
    $prezoConIva = ($iva * $prezo) + $prezo;
    return $prezoConIva;
}

/* Mostrar el precio original y los precios con IVA de 21% y 4% */

echo "<p>Valor inicial del precio: " .number_format($prezo,2). "</p>";
echo "<p>Nuevo precio con IVA del 21%: " .IVA($prezo,$iva). "</p>";
echo "<p>Valor precio con IVA del 4%: " .IVA($prezo,0.04). "</p>";
?>

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 7:</h2>
<?php
/* Ejercicio 7: Calcular el área de un círculo */



/* Función para calcular el área de un círculo */
/**
 * Calcula el área de un círculo dado su radio.
 *
 * @param float $radio El radio del círculo.
 * @return float El área del círculo calculada.
 */


function areaCirculo(?float $radio): float {
    return PI * ($radio * $radio);
}

/* Mostrar el área de tres círculos con diferentes radios */
echo "<p>Área de un círculo con radio 10: " .areaCirculo(10.00). "</p>";
echo "<p>Área de un círculo con radio 5.23: " .areaCirculo(5.23). "</p>";
echo "<p>Área de un círculo con radio 187.234: " .areaCirculo(187.234). "</p>";
?>

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 8:</h2>
<?php
/* Ejercicio 8: Calcular el precio con descuento e IVA */
$desconto = 0.90;
$prezoEjercicio8 = 50;

/* Función para aplicar el descuento */
/**
 * Aplica un descuento a un precio dado.
 *
 * @param int $prezoEjercicio8 El precio original.
 * @param float $desconto El porcentaje de descuento a aplicar (como decimal).
 * @return float El precio después de aplicar el descuento.
 */

function aplicarDescuento(int $prezoEjercicio8, float $desconto) : float {
    return $prezoEjercicio8 * $desconto;
}

/* Función para calcular el precio con IVA */
/**
 * Calcula el precio total aplicando el IVA a un precio dado.
 *
 * @param float $prezoEjercicio8 El precio original.
 * @param float $iva El porcentaje de IVA a aplicar (como decimal).
 * @return float El precio total con IVA.
 */

function aplicarIva(float $prezoEjercicio8, float $iva): float {
    return $prezoEjercicio8 * (1 + $iva);
}

/* Calcular el precio final */
$prezoConDesconto = aplicarDescuento($prezoEjercicio8, $desconto);
$prezoFinal = aplicarIva($prezoConDesconto, $iva);




/* Mostrar el precio con descuento e IVA */
echo "<p>El precio sin el descuento es: " . number_format($prezoEjercicio8,2). "</p>";
echo "<p>El precio con el descuento del 10% es: ".number_format($prezoConDesconto,2)."</p>";
echo "<p>El precio con el descuento del 10% y con el IVA del 21% es: ".number_format($prezoFinal,2)."</p>";
?>

<hr> <?php // Línea divisoria para separar los ejercicios ?>

<h2>Ejercicio 9:</h2>
<?php
/* Ejercicio 9: Calcular el área y perímetro de un rectángulo */

/**
 * Calcula el área y el perímetro de un rectángulo.
 *
 * @param float $ancho  El ancho del rectángulo.
 * @param float $alto   El alto del rectángulo.
 * @param float &$area   La variable donde se almacenará el área calculada.
 * @param float &$perimetro La variable donde se almacenará el perímetro calculado.
 */

function calcularAreaYPerimetro (float $ancho, float $alto, float &$area, float &$perimetro): void {
        $area = $ancho * $alto;
        $perimetro = 2 * ($ancho + $alto);
}

$area = 0;
$perimetro = 0;

calcularAreaYPerimetro(10.5,5.2,$area,$perimetro);

/* Mostrar el área y el perímetro de un rectángulo con ancho 10 y alto 5 */
echo "<p>Área de un rectángulo con ancho 10.5 y alto 5.2: " .number_format($area,2)."</p>";
echo "<p>Perímetro de un rectángulo con ancho 10.5 y alto 5.2: " .number_format($perimetro,2)."</p>";
?>
</body>
</html>
