let produtoSelecionado = null;
let tamanhoSelecionado = null;

const produtos = [  
    {
        nome: "Megalo?",
        preco: "R$ 89,90",
        imagem: "assets/megalo peita.png",
        colecao: "bangers"
    },
    {
        nome: "Lobo Solitário",
        preco: "R$ 89,90",
        imagem: "assets/lobao.png",
        colecao: "bangers"
    },
    {
        nome: "Patrick Estrela Bobão",
        preco: "R$ 89,90",
        imagem: "assets/patrick estrela bobao.png",
        colecao: "bangers"
    },
    {
        nome: "Oi Posso Fala",
        preco: "R$ 89,90",
        imagem: "assets/Camisaoipossofala.png",
        colecao: "bangers"
    },
    {
        nome: "Vai Curintia",
        preco: "R$ 89,90",
        imagem: "assets/vaza krl.png",
        colecao: "bangers"
    },
    {
        nome: "Ih Ala Mane",
        preco: "R$ 89,90",
        imagem: "assets/ih ala.png",
        colecao: "bangers"
    },
    {
        nome: "Calma BB",
        preco: "R$ 89,90",
        imagem: "assets/calma bb.png",
        colecao: "calabreso"
    },
    {
        nome: "Calma Calabreso",
        preco: "R$ 89,90",
        imagem: "assets/calma calabreso.png",
        colecao: "calabreso"
    },
    {
        nome: "Calabresa",
        preco: "R$ 89,90",
        imagem: "assets/CALABRESA..png",
        colecao: "calabreso"
    },
    {
        nome: "Sexy Calabreso",
        preco: "R$ 89,90",
        imagem: "assets/calabreso4.png",
        colecao: "calabreso"
    },
    {
        nome: "Abacatudo",
        preco: "R$ 89,90",
        imagem: "assets/abacatudo.png",
        colecao: "frutas"
    },
    {
        nome: "Moranguete",
        preco: "R$ 89,90",
        imagem: "assets/moranguete.png",
        colecao: "frutas"
    },
    {
        nome: "Bananudo",
        preco: "R$ 89,90",
        imagem: "assets/bananudo irado.png",
        colecao: "frutas"
    },
    {
        nome: "Shhhh",
        preco: "R$ 89,90",
        imagem: "assets/shhhhhh speed.png",
        colecao: "speed"
    },
    {
        nome: "My Mom Is Kinda Homeless",
        preco: "R$ 89,90",
        imagem: "assets/my mom is kind homeless.png",
        colecao: "speed"
    }
];
const catalogo = document.getElementById("catalogo");

const colecao = catalogo.dataset.colecao;

let produtosFiltrados;

if (colecao) {
    produtosFiltrados = produtos.filter(function(produto) {
        return produto.colecao == colecao;
    });
} else {
    produtosFiltrados = produtos;
}
produtosFiltrados.forEach(function(produto) {

    const div = document.createElement("div");

    div.classList.add("produto");

    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
    `;

    div.onclick = function() {
        abrirProduto(produto);
    };

    catalogo.appendChild(div);

});

function abrirProduto(produto) {
    produtoSelecionado = produto;
    
    tamanhoSelecionado = null;

    document.getElementById("nome-detalhes").innerText = produto.nome;

    document.getElementById("preco-detalhes").innerText = produto.preco;

    document.getElementById("imagem-detalhes").src = produto.imagem;

    document.getElementById("catalogo").style.display = "none";

    document.getElementById("detalhes-produto").style.display = "flex";

}
function voltarCatalogo() {

    document.getElementById("detalhes-produto").style.display = "none";

    document.getElementById("catalogo").style.display = "grid";

}
// Selecionar tamanho
const botoesTamanho = document.querySelectorAll(".tamanhos button");

botoesTamanho.forEach(function(botao) {

    botao.addEventListener("click", function() {

        tamanhoSelecionado = botao.innerText;

        botoesTamanho.forEach(function(b) {
            b.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

    });

});

// Botão de adicionar ao carrinho
const botaoAdicionar = document.querySelector(".botao-carrinho");

if (botaoAdicionar) {

    botaoAdicionar.addEventListener("click", function() {

        if (tamanhoSelecionado == null) {
            alert("Escolha um tamanho primeiro!");
            return;
        }

        adicionarAoCarrinho(produtoSelecionado, tamanhoSelecionado);

    });

}
