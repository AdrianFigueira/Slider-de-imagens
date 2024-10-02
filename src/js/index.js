const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0

setaAvancar.addEventListener('click', function () {
    if (imagemAtual === imagens.length - 1) return
    esconderImagemAtual()
    mostrarProximaImagem()
    mostrarOuEsconderSetas()
})
setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) return
    esconderImagemAtual()
    mostrarImagemAnterior()
    mostrarOuEsconderSetas()
})

function esconderImagemAtual() {
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}
function mostrarProximaImagem() {
    imagemAtual++
    imagens[imagemAtual].classList.add('mostrar')
}
function mostrarImagemAnterior() {
    imagemAtual--
    imagens[imagemAtual].classList.add('mostrar')
}
function mostrarOuEsconderSetas() {
    const verificarPrimeiraImagem = imagemAtual !== 0
    if (verificarPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade')
    } else {
        setaVoltar.classList.add('opacidade')
    }

    const verificarUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1
    if (verificarUltimaImagem) {
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }
}

