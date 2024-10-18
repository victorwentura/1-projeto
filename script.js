function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    //Se for verdadeiro realiza o código entre as chaves 
    //SENÃO realiza o código fora das chaves
    //
    
    //Pegar a Tag Img 
    const img = document.querySelector("#profile img")

    //Substituir a Img
    if (html.classList.contains("light")) {
        // SE estiver em light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/foto2.png")
    } else {
        // SENÃO manter a imagem normal
        img.setAttribute("src", "./assets/foto1.png")
    }
    
    if(html.classList.contains('light')){
        img.setAttribute("alt","Foto de Victor Ventura sorrindo usando óculos e camisa preta, sem barba e fundo branco com a cabeça inclinada para a direita e sentado em uma cadeira")
    } else {
        img.setAttribute("alt", "Foto de Victor Ventura sorrindo usando óculos e camisa preta, sem barba e fundo branco sentado em uma cadeira")
    }

}