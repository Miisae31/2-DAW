var empresa = document.getElementById("empresa")
var etiquetaNome = document.getElementById("lnome");
var cif = document.getElementById("cif")

// Engadimos ao checkbox 'empresa' un escoitador de evento para 'change
empresa.addEventListener("change", ()=>{
    // Se p cjeclnpx esta a,rcadp
    if(empresa.checked){
        cif.disabled = false;
        etiquetaNome.textContent = "Razon Social";
    } else { // Se o checkbox esta desmarcado
        cif.disabled = true;
        etiquetaNome.textContent = "Nome";
    }
});
