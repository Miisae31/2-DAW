// Deshabilitamos a segunda folla de estilso do documento (exemplo03B.css)
document.styleSheets[1].disabled = true;

function cambiarCSS(){
    // Comprobamos que folla de estilos esta habilitada para deshabilitarla e habilitar a contraria
    
}

document.getElementById("boton").addEventListener("click", () => {
    if(document.styleSheets[0].disabled) { // Se está deshabilitada a folla A
        document.styleSheets[0].disabled = false; // Habilitamola
        document.styleSheets[1].disabled = true; // Deshabilitamola
    } else {
        document.styleSheets[0].disabled = true;// Deshabilitamola
        document.styleSheets[1].disabled = false; // Habilitamola
    }
});
