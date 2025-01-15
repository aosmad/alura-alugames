//para contar a quantidade de jogos alugados
let jogosAlugados

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
//Este exemplo adiciona um evento DOMContentLoaded que é acionado quando a página é carregada. Nesse momento, ele conta a quantidade inicial de jogos alugados.

//alterar status dos jogos
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    //gameclicado procure um elemento com classe...primeiro imagem
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    //depois botao
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    //para alterar a imagem do disponivel(normal)/alugado(opaco) é o imagem.classList....
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            // Adiciona uma confirmação antes de devolver o jogo
            if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            //para o elemento de CSS que muda o estilo do botão, tu tem que pegar na tag 'a'
            botao.classList.remove('dashboard__item__button--return');
            //para o texto do botão
            botao.textContent = 'Alugar';
            jogosAlugados--;
            }
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogosAlugados++;
        }
        contarEExibirJogosAlugados();
}