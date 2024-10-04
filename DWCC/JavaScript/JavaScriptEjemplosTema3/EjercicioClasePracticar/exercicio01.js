/* QUEREMOS UNHA PAXINA WEB QUE ABRA NHA XANELA DE 300X300 PIXELES E COR NEGRA DE FONDO CUXA POSICIÓN INICIAL SERA PEGADA Á PARTE ESQUERDA DA PANTALLA E CENTRADA NA VERTICAL.

A XANELA TERA QUE MOVERSE CARA Á DEREITA UN PÍXEL CADA 5ms E, AO CHEGAR AO OUTRO LADO, REBOTAR. E ASI CONTINUAMENTE.A

DECLARAMOS UNHA FUNCIÓN QEU VAI PERMITIR "DURMIR" O NAVEGADOR DURANTE UN TEMPO ESPECIFICADO, USANDO PROMISES */

function durmir(tempo) {
        return new Promise(resultado => setTimeout(resultado, tempo));
}   // Que necesitemos chamala usaremos "await durmir(5);"

async function rebotarXanela(){
    window.moveTo(500,100);
    await durmir(5);
}

window.open("exercicio", "", "width=400, height=200");