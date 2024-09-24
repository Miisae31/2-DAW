<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $prezo = rand(1,1000);
    $desconto = 0.90;
    $iva = 0.21;
    function descuentoFinal ($prezo,$desconto){
        $prezoConDesconto = $prezo * $desconto;
        return $prezoConDesconto;
    }
    
    function IVA (int $prezo,float $iva): float {
        $prezoConIva = ($iva * $prezo) + $prezo;
        return $prezoConIva;
    }
    ?>

    <?php 
    echo "<p> El precio sin el descuento es: 50 </p>";
    echo "<p> El precio con el decuento del 10% es : ".descuentoFinal(50,$desconto)."</p>";
    echo "<p> El precio con el descuento del 10 % y con el 21 de iva añadido es : ".IVA(50,$iva). "</p>";
    echo "<p> El precio con el descuento del 10 % y con el 21 de iva añadido sobre un prezo aleatorio es : ".IVA($prezo,$iva). "</p>";
    ?>
</body>
</html>