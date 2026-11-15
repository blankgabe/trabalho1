// Elementos do carrinho
const fundoCarrinho = document.getElementById("fundo-carrinho");
const botaoAbrir = document.getElementById("abrir-carrinho");
const botaoFechar = document.getElementById("fechar-carrinho");

// Abrir carrinho
botaoAbrir.addEventListener("click", function () {
    fundoCarrinho.classList.add("aberto");
});

// Fechar carrinho
botaoFechar.addEventListener("click", function () {
    fundoCarrinho.classList.remove("aberto");
});

// Fechar clicando fora do carrinho
fundoCarrinho.addEventListener("click", function (event) {
    if (event.target === fundoCarrinho) {
        fundoCarrinho.classList.remove("aberto");
    }
});
// Recuperar carrinho salvo no navegador
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


// Adicionar produto ao carrinho
function adicionarAoCarrinho(produto, tamanho) {

    let preco = Number(
        produto.preco.replace("R$", "").replace(".", "").replace(",", ".").trim()
    );

    // Verificar se o mesmo produto e tamanho já existem
    let existente = carrinho.find(function (item) {
        return item.nome == produto.nome && item.tamanho == tamanho;
    });

    if (existente) {

        existente.quantidade++;

    } else {

        carrinho.push({
            nome: produto.nome,
            preco: preco,
            imagem: produto.imagem,
            tamanho: tamanho,
            quantidade: 1
        });

    }

    // Salvar no LocalStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();

    // Abrir o carrinho automaticamente
    fundoCarrinho.classList.add("aberto");
}


// Atualizar informações do carrinho
function atualizarCarrinho() {

    let contador = document.getElementById("contador-carrinho");
    let itens = document.getElementById("itens-carrinho");
    let totalElemento = document.getElementById("total-carrinho");

    // Somar quantidades
    let quantidadeTotal = 0;
    let total = 0;

    carrinho.forEach(function (item) {

        quantidadeTotal += item.quantidade;
        total += item.preco * item.quantidade;

    });

    contador.innerText = quantidadeTotal;

    totalElemento.innerText = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Mostrar produtos
    itens.innerHTML = "";

    if (carrinho.length == 0) {
        itens.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach(function (item, indice) {

        itens.innerHTML += `
        <div class="item-carrinho">

            <img src="${item.imagem}" width="80">

            <div>
                <h3>${item.nome}</h3>
                <p>Tamanho: ${item.tamanho}</p>

                <p>
                    R$ ${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
                </p>

                <div class="controles-quantidade">
                    <button data-acao="diminuir" data-indice="${indice}">−</button>

                    <span>${item.quantidade}</span>

                    <button data-acao="aumentar" data-indice="${indice}">+</button>
                </div>

                <button class="remover-produto"
                    data-acao="remover"
                    data-indice="${indice}">
                    Remover
                </button>

            </div>

        </div>
    `;

    });

}


// Atualizar carrinho ao carregar a página
atualizarCarrinho();

// Controlar quantidade e remoção dos produtos
document.getElementById("itens-carrinho").addEventListener("click", function(event) {

    const botao = event.target.closest("button");

    if (!botao) {
        return;
    }

    const indice = Number(botao.dataset.indice);
    const acao = botao.dataset.acao;

    if (acao == "aumentar") {

        carrinho[indice].quantidade++;

    } 

    else if (acao == "diminuir") {

        carrinho[indice].quantidade--;

        if (carrinho[indice].quantidade <= 0) {
            carrinho.splice(indice, 1);
        }

    } 

    else if (acao == "remover") {

        carrinho.splice(indice, 1);

    }

    // Salvar alterações
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();

});