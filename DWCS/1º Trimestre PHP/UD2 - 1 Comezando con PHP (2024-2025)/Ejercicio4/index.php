<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="ejercicio4.css">
</head>
<body>
    <?php
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
        <?php
        // Se puede usar printf("%b") para pasar a binario directamente
        ?>
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
</body>
</html>