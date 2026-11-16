let produtoSelecionado = null;
let tamanhoSelecionado = null;

const produtos = [  
    {
        nome: "Megalo?",
        preco: "R$ 89,90",
        imagem: "assets/megalo peita.png",
        colecao: "bangers",
        desconto: 20
    },
    {
        nome: "Lobo Solitário",
        preco: "R$ 89,90",
        imagem: "assets/lobao.png",
        colecao: "bangers",
        desconto: 20
    },
    {
        nome: "Patrick Estrela Bobão",
        preco: "R$ 89,90",
        imagem: "assets/patrick estrela bobao.png",
        colecao: "bangers",
        desconto: 20
    },
    {
        nome: "Oi Posso Fala",
        preco: "R$ 89,90",
        imagem: "assets/Camisaoipossofala.png",
        colecao: "bangers",
        desconto: 20
    },
    {
        nome: "Vai Curintia",
        preco: "R$ 89,90",
        imagem: "assets/vaza krl.png",
        colecao: "bangers",
        desconto: 20
    },
    {
        nome: "Ih Ala Mane",
        preco: "R$ 89,90",
        imagem: "assets/ih ala.png",
        colecao: "bangers",
        desconto: 20
    },
    {
        nome: "Calma BB",
        preco: "R$ 89,90",
        imagem: "assets/calma bb.png",
        colecao: "calabreso",
        desconto: 20
    },
    {
        nome: "Calma Calabreso",
        preco: "R$ 89,90",
        imagem: "assets/calma calabreso.png",
        colecao: "calabreso",
        desconto: 20
    },
    {
        nome: "Calabresa",
        preco: "R$ 89,90",
        imagem: "assets/CALABRESA..png",
        colecao: "calabreso",
        desconto: 20
    },
    {
        nome: "Sexy Calabreso",
        preco: "R$ 89,90",
        imagem: "assets/calabreso4.png",
        colecao: "calabreso",
        desconto: 20
    },
    {
        nome: "Abacatudo",
        preco: "R$ 89,90",
        imagem: "assets/abacatudo.png",
        colecao: "frutas",
        desconto: 20
    },
    {
        nome: "Moranguete",
        preco: "R$ 89,90",
        imagem: "assets/moranguete.png",
        colecao: "frutas",
        desconto: 20
    },
    {
        nome: "Bananudo",
        preco: "R$ 89,90",
        imagem: "assets/bananudo irado.png",
        colecao: "frutas",
        desconto: 20
    },
    {
        nome: "Shhhh",
        preco: "R$ 89,90",
        imagem: "assets/shhhhhh speed.png",
        colecao: "speed",
        desconto: 20
    },
    {
        nome: "My Mom Is Kinda Homeless",
        preco: "R$ 89,90",
        imagem: "assets/my mom is kind homeless.png",
        colecao: "speed",
        desconto: 20
    }
];

// Verifica se a Black Friday ainda está ativa
function blackFridayAtiva() {
    const hoje = new Date();
    const fim = new Date(2026, 10, 30, 23, 59, 59);

    return hoje <= fim;
}

// Converte "R$ 89,90" para 89.90
function converterPreco(preco) {
    return Number(
        preco.replace("R$", "")
             .replace(".", "")
             .replace(",", ".")
             .trim()
    );
}

// Formata um número para reais
function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Calcula o preço com desconto
function calcularPrecoPromocional(produto) {

    if (!blackFridayAtiva()) {
        return converterPreco(produto.preco);
    }

    let desconto = produto.desconto || 0;

    // Nunca deixa o desconto passar de 70%
    if (desconto > 70) {
        desconto = 70;
    }

    let precoOriginal = converterPreco(produto.preco);

    return precoOriginal - (precoOriginal * desconto / 100);
}


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

    let precoHTML = produto.preco;

    if (blackFridayAtiva() && produto.desconto > 0) {

        let precoPromocional = calcularPrecoPromocional(produto);

        precoHTML = `
            <span class="preco-original">${produto.preco}</span>
            <span class="preco-promocional">
                ${formatarPreco(precoPromocional)}
            </span>
            <span class="badge-desconto">
                ${produto.desconto}% OFF
            </span>
        `;
    }

    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p class="precos">${precoHTML}</p>
    `;

    div.onclick = function() {
        abrirProduto(produto);
    };

    catalogo.appendChild(div);

});
/*produtosFiltrados.forEach(function(produto) {

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

});*/

function abrirProduto(produto) {
    produtoSelecionado = produto;
    
    tamanhoSelecionado = null;

    document.getElementById("nome-detalhes").innerText = produto.nome;

    if (blackFridayAtiva() && produto.desconto > 0) {

    document.getElementById("preco-detalhes").innerHTML = `
        <span class="preco-original">${produto.preco}</span>
        <span class="preco-promocional">
            ${formatarPreco(calcularPrecoPromocional(produto))}
        </span>
        <span class="badge-desconto">
            ${produto.desconto}% OFF
        </span>
    `;

} else {

    document.getElementById("preco-detalhes").innerText = produto.preco;

}

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
