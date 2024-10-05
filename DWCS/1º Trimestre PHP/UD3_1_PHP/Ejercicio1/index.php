<?php
/*

    Título: 
    UD3 - 1 Exercicios básicos con Strings, Datas, Condicionais e Bucle

    Autor: Hugo Fernández Pinho

    Data modificación: 3 De Octubre de 2024

    Versión 1.1

*/
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UD3 - 1 Exercicios básicos con Strings, Datas, Condicionais e Bucles</title>
    <style>
    .bold {
        font-weight: bold;
    }
    </style>
</head>

<body>
    <h2>Ejercicio 1: Apartado 01. Strings.</h2>
    <?php
    $email = "hugofernandezpinho@gmail.com";  // Definimos una variable con el correo a introducir 
    $posicion_arroba = strpos($email, "@");  // Aqui instroducimos en una variable la posicion del '@'

    if ($posicion_arroba != strlen($email)) { // Aqui realizamos una comprobacion de que el correo no acabe en @ 
        $conta = substr($email, 0, $posicion_arroba); // Y aquí añadimos a la variable conta el string antes de @
        $dominio = substr($email, $posicion_arroba + 1); // Y aquí añadimos el dominio despues de @

    }

    if (strpos($dominio, ".") != false and strlen($dominio) > 1) {
        echo "Conta: " . $conta . "\n";
        echo "Dominio: " . $dominio . "\n"; // Aqui comprobamos que el dominio tenga un punto y que sea mayor que 1 caracter
        echo "<p>Cuenta de correo validada " . $email . "</p>"; // Y sacamos por pantalla la cuenta el dominio y el email


    } else {
        echo "<p>El formato de dominio no es valido</p>";   // Imprimimos por pantalla
    }
    ?>
    <h2>Ejercicio 1: Apartado 02. Strings.</h2>

    <?php
    // Creamos una variable con la letra de una cancion.
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

    // Creamos una funcion que va cambiando la cancion poco a poco de caracter en caracter
    function cambioCancion(string $cancion): string
    {           
        $cancionCambiadaA = str_replace("a", "4", $cancion);
        $cancionCambiadaATilde = str_replace("á", "4", $cancionCambiadaA);
        $cancionCambiadaETilde= str_replace("é", "3", $cancionCambiadaATilde);
        $cancionCambiadaE = str_replace("e", "3", $cancionCambiadaETilde);
        $cancionCambiadaITilde = str_replace("í", "0", $cancionCambiadaE);
        $cancionCambiadaI = str_replace("i", "1", $cancionCambiadaITilde);
        $cancionCambiadaOTilde = str_replace("ó", "0", $cancionCambiadaI);
        $cancionCambiadaDefinitiva = str_replace("o", "0", $cancionCambiadaOTilde);
        $cancionCambiadaDefinitiva = str_replace(
            ['A', 'E', 'I', 'O'],
            [
                '<span style="font-size: 30px;">4</span>',      
                '<span style="font-size: 30px;">3</span>',  // Aqui hacemos que si tiene mayusculas (vocales) le aplicamos una fuente mas grande para que resalte
                '<span style="font-size: 30px;">1</span>',
                '<span style="font-size: 30px;">0</span>'
            ],
            $cancionCambiadaDefinitiva
        );

        $cancionCambiadaDefinitiva = str_replace(
            ['Á', 'É', 'Í', 'Ó'],
            [
                '<span style="font-size: 30px;">4</span>',      
                '<span style="font-size: 30px;">3</span>',  // Aqui hacemos que si tiene mayusculas (vocales) y con tildes le aplicamos una fuente mas grande para que resalte
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
    $fechaNoViernes = strtotime("2005-01-22");  // Creamos dos variables, una cae en viernes y la otra no.

    $tiempoActual = time(); // Creamos una variable con la data actual
    $tiempo6Enero = strtotime("2024-01-06"); // Creamos una variable que almacene el timestamp de el 6 de enero
    echo "<p> Tiempo en segundos hoy : " . $tiempoActual . "</p>";
    echo "<p> Tiempo en segundos 6 enero : " . $tiempo6Enero . "</p>";

    echo "<p>Data actual: " . date("l jS \of F Y ") . "</p>";

    $tiempoEnSemanasActual = ($tiempoActual / 3600 / 24 / 7);   // Aqui calculamos el tiempo en semanas actual

    $tiempoEnsemanas6Enero = ($tiempo6Enero / 3600 / 24 / 7);   // Aqui calculamos el tiempo en semanas del 6 de enero

    $tiempoResultante = $tiempoEnSemanasActual - $tiempoEnsemanas6Enero;    // Y aqui vemos el resultado

    echo "<p>Numero de semanas desde el 6 de xaneiro ata hoxe. " . number_format($tiempoResultante, 2) .  "</p>";

    echo venres($fechaViernes);

    echo venres($fechaNoViernes);

    function venres(int $fecha) : bool
    {

        $diaSemana = date("w", $fecha);
        $fecha = date("l jS", $fecha);
        if ($diaSemana === '5') {   // Aqui transformamos la fecha a un formato donde nos saca el dia escrito, comprobamos si esta Friday en el string y en funcion de eso cambiamos la salida
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
    // Creamos variables donde cada una representa una hora
    $horaBuenosDias = "09:00 AM";
    $horaBoasTardes = "01:00 PM";   
    $horaBoasNoites = "10:00 PM";
    $horaPasaPaCama = "03:00 AM";              

    // Llamada a la función
    echo saudar("11:00 AM");
    echo saudar("2:00 PM");
    echo saudar("10:30 AM");            
    echo saudar("4:00 AM");

    function saudar(string $hora): string
    {

        $hora = strtotime($hora);
        
        // Transformamos a timestamp las siguientes horas
        $horaBuenosDias = strtotime("09:00 AM");
        $horaBoasTardes = strtotime("01:00 PM");
        $horaBoasNoites = strtotime("10:00 PM");        
        $horaPasaPaCama = strtotime("03:00 AM");

        // Hacemos un if que dependiendo de la hora que le pasemos cambia la salida
        if ($hora >= $horaBuenosDias and $hora < $horaBoasTardes) {
            return  "<p>¡Buenos Dias!</p>";
        } elseif ($hora >= $horaBoasTardes and $hora < $horaBoasNoites) {
            return "<p>¡Boas Tardes!</p>";                                  
        } elseif ($hora >= $horaBoasNoites and $hora < $horaPasaPaCama) {
            return "<p>¡Boas Noites!</p>";
        } else {
            return "<p>¡Para para a cama!</p>";
        }
    }


    // Inicializamos a 0 todas las variables de contador
    echo "<h3>Apartado Switch</h3>";
    $contadorA = 0;
    $contadorE = 0;
    $contadorI = 0;
    $contadorU = 0;
    $contadorO = 0;                  
    $contadorOutros = 0;
    $contadorNumerico = 0;

    // Creamos una funcion con un switch que vaya contando los distintos caracteres que aparecen
    function contarLetras(string $cadea): void
    {     
        global $contadorA, $contadorE, $contadorI, $contadorU, $contadorO, $contadorOutros, $contadorNumerico;
        for ($i = 0; $i < strlen($cadea); $i++) {
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

    // Llamada de la funcion con el parametro de cadea
    contarLetras($cadena);              
    ?>

    <h2>Apartado 04. Bucles</h2>
    <?php

    $base = 3;
    $exponente = 4;


    // Hacemos una funcion donde le pasamos 2 parametros, la base y el exponente
    function potencias(int $base, int $exponente): void
    {
        echo "<p>El numero escogido para la base es: " . $base . "</p>";         
        echo "<p>El numero escogido de exponente es: " . $exponente . "</p>";


        // Hacemos un bucle donde elevamos la base a i la y sacamos por pantalla
        // la cantidad de veces que se eleva esa base
        for ($i = 1; $i <= $exponente; $i++) {
            $resultado = pow($base, $i);
            echo "$base^$i = $resultado<br>";       
            
        }
    }
    echo potencias($base, $exponente);
    ?>
    <h3>Apartado 2: </h3>
    <?php

     // Creamos un pin default
    $pin = "0230";  
    
    // Hacemos una funcion ataque la cual recibe un pin y lo compara con un bucle de 9999 interacciones
    function ataque(string $pin): void
    {     
        $i=0;
        // Hacemos un bucle do-while con un máximo de 9999 interacciones (Pin de 4 dígitos)
        do {
            
            $pinIntento = str_pad($i, 4, "0", STR_PAD_LEFT);   
             echo "<p>Probando PIN: $pinIntento</p>";
             $i++;
 
             // Si el pin coincide imprimimos el pin coincidente
             if ($pinIntento === $pin) {         
                 echo "<p>O pin foi encontrado e é " . $pinIntento . "</p>";
                 
             }
        } while ($pinIntento !== $pin);
    }


    // Llamamos a la función con un pin random
    echo ataque("0050"); 
    ?>

    <h4>Apartado 3:</h4>

    <table>
        <tr>
            <th>Nombre de la variable</th>
            <th>Valor de la variable</th>
        </tr>
        <?php

         // Hacemos una función frecha que saca cada variable de su clave
        foreach (getenv() as $clave => $valor) {

            // Verificamos si la variable es LANG o PATH para resaltarla

            $boldClass = ($clave === 'LANG' || $clave === 'PATH') ? 'bold' : '';
            echo "<tr>";

            // Le añadimos un estilo a la columna clave
            echo "<td class= '$boldClass' style='background-color: #ffcccc;'>$clave</td>";      

            // Le añadimos un estilo a la columna de valor
            echo "<td style='background-color: #ccffcc;'>$valor</td>";      
            echo "</tr>";
        }

        ?>

    </table>
    <?php
    echo "<footer>©" . date("Y") .  "</footer>";    // Colocamos en el pie de página el símbolo de copyright con el año actual
    ?>
</body>

</html>
<?php
    // FIN DEL CÓDIGO
?>