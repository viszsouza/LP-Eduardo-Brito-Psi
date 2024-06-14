function menu(){
    //console.log("Clicou")
    const abrirMenu = document.getElementById("abrirMenu")
    const fecharMenu = document.getElementById("fecharMenu")
    const itens = document.querySelector(".nav")

    // Quando o menu e o botão p/fechar o menu não estiverem aparecendo - ABRIR o menu
    if (itens.style.display == "none"){
        itens.style.display = "block";
        abrirMenu.style.display = "none";
        fecharMenu.style.display = "block";
    } 
    // Quando o menu e o botão p/fechar o menu estiverem aparecendo  - FECHAR o menu
    else{
        itens.style.display = "none";
        abrirMenu.style.display = "block";
        fecharMenu.style.display = "none";
    }
}