const imgEquino = document.getElementById('img-equino');
const btnChavear = document.getElementById('btnChavear');

btnChavear.addEventListener('click', () => {
    // Array com os caminhos das imagens e seus respectivos alts
    const imagens = [
        { src: "imagens/Mangalarga-horse.png", alt: "Mangalarga-horse" },
        { src: "imagens/Mula-troteira.jpg", alt: "Mula Troteira" },
        { src: "imagens/OutraImagem.png", alt: "Outra Imagem" } // Adicione mais imagens aqui
    ];

    // Encontra o índice da imagem atual
    let indiceAtual = imagens.findIndex(img => img.src === imgEquino.src);

    // Calcula o próximo índice (volta para 0 se estiver no último)
    let proximoIndice = (indiceAtual + 1) % imagens.length;

    // Define a próxima imagem e alt
    imgEquino.src = imagens[proximoIndice].src;
    imgEquino.alt = imagens[proximoIndice].alt;
});