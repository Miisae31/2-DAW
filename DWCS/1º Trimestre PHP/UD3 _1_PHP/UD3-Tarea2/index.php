<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UD3-Tarea2</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <?php
    $diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; // Definimos un array con los días de la semana
    $totalDeDias = "31"; // Definimos una variable con día final del mes.
    $primerDiaMes = "1"; // Definimos una variable con el primer día del mes.

    echo  "<table border='1' id='tabla'> 
            <tr>"; // Imprimimos la tabla por pantalla
            
            
    // Creamos la cabecera con los días de la semana
    foreach ($diasSemana as $dia) { 
        echo "<th>$dia</th>"; 
    }
    echo "<tr></tr>";

     // Rellenamos las celdas vacías al inicio del mes
    for ($i = 0; $i < $primerDiaMes - 1; $i++) {
        echo "<td class='celdasVaciasInicioMes'></td>"; // Si el mes empieza en un día diferente a Lunes, dejamos celdas vacías.
    }

    // Generamos los días del mes
    for ($dia = 1; $dia <= $totalDeDias; $dia++) {
        $diaDeLaSemana = ($primerDiaMes + $dia - 2) % 7; // Calculamos el día de la semana, ajustando el índice para que el Lunes sea 1
        $clase = ($diaDeLaSemana == 5) || ($diaDeLaSemana == 6) ? "class = 'fin-de-semana'" : ""; // Verificamos si es fin de semana (Sábado o Domingo)
        echo "<td $clase>$dia</td>"; 
        if ($diaDeLaSemana == 6) { // Si es Domingo (6), iniciamos una nueva fila
            echo "<tr></tr>";
        }
        
    }

    // Calculamos cuántas celdas vacías necesitamos al final del mes
    $diaDeLaSemana = ($primerDiaMes + $totalDeDias - 2) % 7;  // Determinamos el día de la semana del último día del mes
    $celdasVacias = 6 - $diaDeLaSemana; // Calculamos cuántas celdas vacías son necesarias para completar la última fila
    for ($j = 0; $j < $celdasVacias; $j++) {
                                                        

        echo "<td class = 'celdasVaciasFinMes'></td>";  // Imprimimos las celdas vacías al final del mes
    }

    echo "</tr></table>"; // Cerramos la tabla
    ?>
</body>

</html>