<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UD3 - 1 Exercicios básicos con Strings, Datas, Condicionais e Bucles</title>
</head>
<body>
    <h2>Ejercicio 1: Apartado 01. Strings.</h2>
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
    <h2>Ejercicio 1: Apartado 02. Strings.</h2>

    <?php
        $cancion = "When she was just a girl
She expected the world
But it flew away from her reach so
She ran away in her sleep
and dreamed of
Para-para-paradise, Para-para-paradise, Para-para-paradise
Every time she closed her eyes

When she was just a girl
She expected the world
But it flew away from her reach
and the bullets catch in her teeth
Life goes on, it gets so heavy
The wheel breaks the butterfly
Every tear a waterfall             
In the night the stormy night she’ll close her eyes
In the night the stormy night away she’d fly

and dreams of
Para-para-paradise
Para-para-paradise
Para-para-paradise
Oh oh oh oh oh oh-oh-oh
She’d dream of
Para-para-paradise
Para-para-paradise
Para-para-paradise
Oh oh oh oh oh oh-oh-oh-oh";

function cambioCancion($cancion){
$cancionCambiadaA=str_replace("a","4",$cancion);
$cancionCambiadaE=str_replace("e","3",$cancionCambiadaA);
$cancionCambiadaI=str_replace("i","1",$cancionCambiadaE);
$cancionCambiadaDefinitiva=str_replace("o","0",$cancionCambiadaI);
$cancionCambiadaDefinitiva = str_replace(
    ['A', 'E', 'I', 'O'], 
    [
        '<span style="font-size: 30px;">4</span>', // Tamaño de fuente notable
        '<span style="font-size: 30px;">3</span>', // Cambié larger por un tamaño en px
        '<span style="font-size: 30px;">1</span>',
        '<span style="font-size: 30px;">0</span>'
    ],
            $cancionCambiadaDefinitiva
    );
    return $cancionCambiadaDefinitiva;
}

echo cambioCancion($cancion);
?>

<h2>Ejercicio 2: Datas.</h2>
<?php
$fechaViernes = strtotime("2005-01-21");
$fechaNoViernes = strtotime("2005-01-22");

$tiempoActual = time();
$tiempo6Enero = strtotime("2024-01-06");
echo "<p> Tiempo en segundos hoy : " . $tiempoActual . "</p>";
echo "<p> Tiempo en segundos 6 enero : " . $tiempo6Enero . "</p>";

echo "<p>Data actual: ". date("l jS \of F Y ") . "</p>";

echo "<footer>©".date("Y") .  "</footer>"; 

$tiempoEnSemanasActual = ($tiempoActual / 3600 / 24 / 7); 

$tiempoEnsemanas6Enero = ($tiempo6Enero / 3600 / 24 / 7);

$tiempoResultante = $tiempoEnSemanasActual - $tiempoEnsemanas6Enero;

echo "<p>Numero de semanas desde el 6 de xaneiro ata hoxe. " .number_format($tiempoResultante,2) .  "</p>";

echo venres($fechaViernes);

echo venres($fechaNoViernes);

function venres($fecha) {
    $fecha = date("l jS", $fecha);
    if (str_contains($fecha,"Friday")) {
        echo "<p>¡El día es Viernes! y por lo tanto saca un uno por pantalla </p>";
        return true;
    } else {
        echo "<p>¡El día no es Viernes!</p>";
        return false;
    }
}
?>  

<h2>Apartado 03. Condicionais.</h2>

<?php
 $horaBuenosDias = "09:00 AM";
 $horaBoasTardes = "01:00 PM";
 $horaBoasNoites = "10:00 PM";
 $horaPasaPaCama = "03:00 AM";

echo saudar("11:00 AM");
echo saudar("2:00 PM");
echo saudar("10:30 AM");
echo saudar("4:00 AM");

function saudar($hora) {

    $hora = strtotime($hora);
    $horaBuenosDias = strtotime("09:00 AM");
    $horaBoasTardes = strtotime("01:00 PM");
    $horaBoasNoites = strtotime("10:00 PM");
    $horaPasaPaCama = strtotime("03:00 AM");

    if ($hora >= $horaBuenosDias and $hora < $horaBoasTardes) {
        return  "<p>¡Buenos Dias!</p>";
    } elseif ($hora >= $horaBoasTardes and $hora < $horaBoasNoites) {
        return "<p>¡Boas Tardes!</p>";
    } elseif ($hora >= $horaBoasNoites and $hora < $horaPasaPaCama) {
        return"<p>¡Boas Noites!</p>";
    } else{
        return "<p>¡Para para a cama!</p>";
    }
}

echo "<h3>Apartado Switch</h3>";
    $contadorA = 0;
    $contadorE = 0;
    $contadorI = 0;
    $contadorU = 0;
    $contadorO = 0;
    $contadorOutros = 0;
    $contadorNumerico = 0;
function contarLetras($cadea) {
    global $contadorA,$contadorE,$contadorI,$contadorU,$contadorO,$contadorOutros,$contadorNumerico;
    for ($i=0;$i < strlen($cadea); $i++){ 
        $letra = strtolower($cadea[$i]);
        switch ($letra) {
            case 'a':
                $contadorA++;
                break;
            case 'e':
                $contadorE++;
                break;
            case 'i':
                $contadorI++;
                break;
            case 'o':
                $contadorO++;
                break;
            case 'u':
                $contadorU++;
                break;
            default:
                if (is_numeric($letra)) {
                    $contadorNumerico++;
                } else {
                    $contadorOutros++;
                }
                break;
        }
    }


    echo "Vocales A: $contadorA\n";
    echo "Vocales E: $contadorE\n";
    echo "Vocales I: $contadorI\n";
    echo "Vocales O: $contadorO\n";
    echo "Vocales U: $contadorU\n";
    echo "Otros caracteres: $contadorOutros\n";
    echo "Caracteres numéricos: $contadorNumerico\n";
}

$cadena = "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";
contarLetras($cadena);
?>

<h2>Apartado 04. Bucles</h2>
<?php

$base = 3;
$exponente = 4;

function potencias($base,$exponente){
   echo "<p>El numero escogido para la base es: " . $base . "</p>";
   echo "<p>El numero escogido de exponente es: " . $exponente. "</p>";
   
   for ($i = 1; $i <= $exponente; $i++) {
    $resultado = pow($base, $i); 
    echo "$base^$i = $resultado<br>";
    }  
}
echo potencias($base, $exponente);
?>
<h3>Apartado 2: </h3>
<?php
$pin = "0230";
function ataque($pin) {
    for ($i=0; $i < 9999 ; $i++) { 
        $pinIntento = str_pad($i, 4, "0", STR_PAD_LEFT);
        echo "<p>Probando PIN: $pinIntento</p>";
        if ($pinIntento === $pin) {
            echo "<p>O pin foi encontrado e é " . $pinIntento ."</p>";
            break;
        }
    }
}

echo ataque("0050");
?>

<h4>Apartado 3:</h4>

<table>
        <tr>
            <th>Nombre de la variable</th>
            <th>Valor de la variable</th>
        </tr>
    <?php
        
        foreach (getenv() as $clave => $valor) {
        echo "<tr>";
        echo "<td style='background-color: #ffcccc;'>$clave</td>";
        echo "<td style='background-color: #ccffcc;'>$valor</td>";
        echo "</tr>";
        }
        
    ?>
        
    </table>

</body>
</html>