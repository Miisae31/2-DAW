<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
    <?php
    $ancho = 0;
    $alto = 0;
    function areaRectangulo (int $ancho,int $alto): int {
        $areaTotalRectangulo = $ancho * $alto;
        return $areaTotalRectangulo;
    } 

    function perimetroRectangulo (int $ancho, int $alto): int {
        $perimetro = ($ancho * 2) + ($alto * 2);
        // Aqui tenemos un var:dump que nos mostrara el valor de la variable $acho var_dump($ancho);
        // var_dump($alto);
        // Aqui tenemos un var:dump que nos mostrara el valor de la variable $alto var_dump($ancho);
        // Aqui tenemos un die(); que corta en ese preciso instante el codigo.
        // die();
        return $perimetro;
    }
    ?>

    <?php
    echo "<p>Area de un rectángulo con ancho 10 y con alto 5: " .areaRectangulo(10,5)."</p>";
    echo "<p>Perímetro de un rectángulo con ancho 10 y con alto 5: " .perimetroRectangulo(10,5)."</p>";

    
    ?>
    </body>
</html>