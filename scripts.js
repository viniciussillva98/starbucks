let imagem = document.querySelector(".imagem-cop")
let span = document.querySelector("span")

function trocaimagem(endereco) {

    imagem.style.opacity = "0"

    setTimeout(() => {
        imagem.src = endereco
        imagem.style.opacity = "1"
    }, 300)

}

function trocacor(cor) {

    span.style.opacity = "0"

    setTimeout(() => {
        span.style.color = cor
        span.style.opacity = "1"
    }, 300)
}