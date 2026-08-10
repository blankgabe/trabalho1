const produtos = [  
    {
        nome: "Megalo?",
        preco: "R$ 89,90",
        imagem: "assets/megalo peita.png"
    },
    {
        nome: "Lobo Solitário",
        preco: "R$ 89,90",
        imagem: "assets/el lobo cuida su loba.png"
    },
    {
        nome: "Patrick Estrela Bobão",
        preco: "R$ 89,90",
        imagem: "assets/patrick estrela bobao.png"
    },
    {
        nome: "Oi Posso Fala",
        preco: "R$ 89,90",
        imagem: "assets/Camisaoipossofala.png"
    },
    {
        nome: "Vai Curintia",
        preco: "R$ 89,90",
        imagem: "assets/vai curintia.png"
    },
    {
        nome: "Ih Ala Mane",
        preco: "R$ 89,90",
        imagem: "assets/ih ala mane.png"
    },
    {
        nome: "Calma BB",
        preco: "R$ 89,90",
        imagem: "assets/calabreso1.png"
    },
    {
        nome: "Calma Calabreso",
        preco: "R$ 89,90",
        imagem: "assets/calabreso2.png"
    },
    {
        nome: "Calabresa",
        preco: "R$ 89,90",
        imagem: "assets/calabreso3.png"
    },
    {
        nome: "Sexy Calabreso",
        preco: "R$ 89,90",
        imagem: "assets/calabreso4.png"
    },
    {
        nome: "Abacatudo",
        preco: "R$ 89,90",
        imagem: "assets/frutas1.png"
    },
    {
        nome: "Moranguete",
        preco: "R$ 89,90",
        imagem: "assets/frutas2.png"
    },
    {
        nome: "Bananudo",
        preco: "R$ 89,90",
        imagem: "assets/frutas3.png"
    },
    {
        nome: "Shhhh",
        preco: "R$ 89,90",
        imagem: "assets/speed1.png"
    },
    {
        nome: "My Mom Is Kinda Homeless",
        preco: "R$ 89,90",
        imagem: "assets/speed2.png"
    }
];
const catalogo = document.getElementById("catalogo");

produtos.forEach(function(produto) {

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
