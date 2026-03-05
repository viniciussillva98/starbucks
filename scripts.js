let imagem = document.querySelector(".imagem-cop")
let circulo = document.querySelector(".circulo")

function trocaimagem(endereco) {
    imagem.src = endereco
}
function trocacor(cor) {
    circulo.style.background = cor
}
