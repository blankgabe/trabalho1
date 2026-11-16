/*// Elementos do carrinho
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

function descontoClienteNovoAtivo() {

    return localStorage.getItem("clienteNovo15") == "sim";
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produto, tamanho) {

    /*let preco = Number(
        produto.preco.replace("R$", "").replace(".", "").replace(",", ".").trim()
    );
   let precoOriginal = Number(
    produto.preco.replace("R$", "").replace(".", "").replace(",", ".").trim()
);

let preco = precoOriginal;

// BLACK FRIDAY
if (typeof blackFridayAtiva === "function" && blackFridayAtiva()) {

    let descontoBlackFriday = produto.desconto || 0;

    if (descontoBlackFriday > 70) {
        descontoBlackFriday = 70;
    }

    preco = preco * (1 - descontoBlackFriday / 100);
}

// DESCONTO DE CLIENTE NOVO
if (descontoClienteNovoAtivo()) {

    preco = preco * 0.85;
}

    // Verificar se o mesmo produto e tamanho já existem
    let existente = carrinho.find(function (item) {
        return item.nome == produto.nome && item.tamanho == tamanho;
    });

    if (existente) {

        existente.quantidade++;

    } else {

        /*carrinho.push({
            nome: produto.nome,
            preco: preco,
            imagem: produto.imagem,
            tamanho: tamanho,
            quantidade: 1
        });
        carrinho.push({
    nome: produto.nome,
    preco: preco,
    precoOriginal: precoOriginal,
    desconto: produto.desconto || 0,
    imagem: produto.imagem,
    tamanho: tamanho,
    quantidade: 1,
    colecao: produto.colecao
});

    }

    // Salvar no LocalStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Produtos que fazem parte de cada coleção
const produtosColecoes = {
    frutas: [
        "Abacatudo",
        "Moranguete",
        "Bananudo"
    ],

    bangers: [
        "Megalo?",
        "Lobo Solitário",
        "Patrick Estrela Bobão",
        "Oi Posso Fala",
        "Vai Curintia",
        "Ih Ala Mane"
    ],

    calabreso: [
        "Calma BB",
        "Calma Calabreso",
        "Calabresa",
        "Sexy Calabreso"
    ],

    speed: [
        "Shhhh",
        "My Mom Is Kinda Homeless"
    ]
};
function comprouColecaoCompleta(colecao) {

    if (!colecao || !produtosColecoes[colecao]) {
        return false;
    }

    return produtosColecoes[colecao].every(function(nomeProduto) {

        return carrinho.some(function(item) {
            return item.nome == nomeProduto;
        });

    });
}

// Verifica se o cliente comprou a coleção inteira
function comprouColecaoCompleta(colecao) {

    if (!colecao || !produtosColecoes[colecao]) {
        return false;
    }

    const nomesNecessarios = produtosColecoes[colecao];

    return nomesNecessarios.every(function(nomeProduto) {

        return carrinho.some(function(item) {
            return item.nome == nomeProduto;
        });

    });
}

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
    let clienteNovo = descontoClienteNovoAtivo();

   carrinho.forEach(function(item) {

    let produtoAtual = null;

    if (typeof produtos !== "undefined") {

        produtoAtual = produtos.find(function(produto) {
            return produto.nome == item.nome;
        });

    }

    if (produtoAtual) {

        let precoOriginal = Number(
            produtoAtual.preco
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim()
        );

        let preco = precoOriginal;

        // BLACK FRIDAY
        if (blackFridayAtiva()) {

            // Se comprou a coleção inteira
            if (comprouColecaoCompleta(produtoAtual.colecao)) {

                // 50% OFF
                preco = preco * 0.50;

            }

            // Se não comprou a coleção inteira
            else if (produtoAtual.desconto > 0) {

                let desconto = produtoAtual.desconto;

                if (desconto > 70) {
                    desconto = 70;
                }

                preco = preco * (1 - desconto / 100);
            }
        }

        // CLIENTE NOVO
        // Pode acumular com a Black Friday
        if (descontoClienteNovoAtivo()) {

            preco = preco * 0.85;

        }

        item.preco = preco;
        item.precoOriginal = precoOriginal;

    }

});

    /*carrinho.forEach(function (item) {

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

    if (clienteNovo) {

    itens.innerHTML += `
        <div class="desconto-cliente-novo">
            🎉 Desconto de cliente novo: <strong>15% OFF</strong>
        </div>
    `;
}

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

function aplicarDescontosLancamentos() {

    if (typeof blackFridayAtiva === "function" && !blackFridayAtiva()) {
        return;
    }

    const produtosLancamentos =
        document.querySelectorAll(".Lancamentos .produto");

    produtosLancamentos.forEach(function(produto) {

        const desconto = Number(produto.dataset.desconto);

        if (!desconto) {
            return;
        }

        const precoElemento = produto.querySelector("span");

        if (!precoElemento) {
            return;
        }

        let precoOriginal = Number(
            precoElemento.innerText
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim()
        );

        let precoFinal =
            precoOriginal - (precoOriginal * desconto / 100);

        precoElemento.outerHTML = `
            <div class="precos">
                <span class="preco-original">
                    ${precoElemento.innerText}
                </span>

                <span class="preco-promocional">
                    ${precoFinal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </span>

                <span class="badge-desconto">
                    ${desconto}% OFF
                </span>
            </div>
        `;
    });
}

aplicarDescontosLancamentos();

function criarPopupDesconto() {

    if (typeof blackFridayAtiva === "function" && !blackFridayAtiva()) {
        return;
    }

    // Só mostra uma vez neste navegador
    if (localStorage.getItem("popup15Visto") == "sim") {
        return;
    }

    const popup = document.createElement("div");

    popup.id = "popup-desconto";

    popup.innerHTML = `
        <div class="popup-conteudo">

            <button id="fechar-popup">
                ×
            </button>

            <h2>🎉 BEM-VINDO À MEGALO!</h2>

            <p class="popup-destaque">
                GANHE 15% OFF
            </p>

            <p>
                Aproveite seu desconto de primeira compra!
            </p>

            <button id="ativar-desconto">
                APROVEITAR 15% OFF
            </button>

        </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("fechar-popup")
        .addEventListener("click", function() {

            localStorage.setItem("popup15Visto", "sim");
            popup.remove();

        });
        document.getElementById("ativar-desconto")
    .addEventListener("click", function() {

        // Ativa o desconto de cliente novo
        localStorage.setItem("clienteNovo15", "sim");

        // Marca o popup como visto
        localStorage.setItem("popup15Visto", "sim");

        popup.remove();

        alert("Seu desconto de 15% foi ativado!");
    });
    /*document.getElementById("ativar-desconto")
        .addEventListener("click", function() {

            // Ativa o desconto de cliente novo
            localStorage.setItem("clienteNovo15", "sim");

            // Marca o popup como visto
            localStorage.setItem("popup15Visto", "sim");

            popup.remove();

            alert("Seu desconto de 15% foi ativado!");
        });
}

// Mostra o popup somente na página inicial
if (document.querySelector(".Lancamentos")) {
    setTimeout(criarPopupDesconto, 1000);
}
    */


// ===============================
// ELEMENTOS DO CARRINHO
// ===============================

const fundoCarrinho = document.getElementById("fundo-carrinho");
const botaoAbrir = document.getElementById("abrir-carrinho");
const botaoFechar = document.getElementById("fechar-carrinho");


// ===============================
// ABRIR CARRINHO
// ===============================

if (botaoAbrir) {

    botaoAbrir.addEventListener("click", function () {

        fundoCarrinho.classList.add("aberto");

    });

}


// ===============================
// FECHAR CARRINHO
// ===============================

if (botaoFechar) {

    botaoFechar.addEventListener("click", function () {

        fundoCarrinho.classList.remove("aberto");

    });

}


// Fechar clicando fora do carrinho
if (fundoCarrinho) {

    fundoCarrinho.addEventListener("click", function (event) {

        if (event.target === fundoCarrinho) {

            fundoCarrinho.classList.remove("aberto");

        }

    });

}


// ===============================
// RECUPERAR CARRINHO
// ===============================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


// ===============================
// CLIENTE NOVO
// ===============================

function descontoClienteNovoAtivo() {

    return localStorage.getItem("clienteNovo15") == "sim";

}


// ===============================
// VERIFICAR BLACK FRIDAY
// ===============================

function promocaoBlackFridayAtiva() {

    const hoje = new Date();

    const fim = new Date(2026, 10, 30, 23, 59, 59);

    return hoje <= fim;

}


// ===============================
// COLEÇÕES
// ===============================

const produtosColecoes = {

    frutas: [
        "Abacatudo",
        "Moranguete",
        "Bananudo"
    ],

    bangers: [
        "Megalo?",
        "Lobo Solitário",
        "Patrick Estrela Bobão",
        "Oi Posso Fala",
        "Vai Curintia",
        "Ih Ala Mane"
    ],

    calabreso: [
        "Calma BB",
        "Calma Calabreso",
        "Calabresa",
        "Sexy Calabreso"
    ],

    speed: [
        "Shhhh",
        "My Mom Is Kinda Homeless"
    ]

};


// Verifica se todos os produtos da coleção estão no carrinho
function comprouColecaoCompleta(colecao) {

    if (!colecao || !produtosColecoes[colecao]) {

        return false;

    }

    return produtosColecoes[colecao].every(function (nomeProduto) {

        return carrinho.some(function (item) {

            return item.nome == nomeProduto;

        });

    });

}


// ===============================
// CALCULAR PREÇO
// ===============================

function calcularPrecoCarrinho(produto) {

    let precoOriginal = Number(
        produto.preco
            .replace("R$", "")
            .replace(".", "")
            .replace(",", ".")
            .trim()
    );

    let preco = precoOriginal;


    // BLACK FRIDAY
    if (promocaoBlackFridayAtiva()) {

        // Coleção completa = 50%
        if (comprouColecaoCompleta(produto.colecao)) {

            preco = preco * 0.50;

        }

        // Desconto individual
        else if (produto.desconto > 0) {

            let desconto = produto.desconto;

            if (desconto > 70) {

                desconto = 70;

            }

            preco = preco * (1 - desconto / 100);

        }

    }


    // CLIENTE NOVO
    // Os 15% acumulam com a Black Friday
    if (descontoClienteNovoAtivo()) {

        preco = preco * 0.85;

    }


    return preco;

}


// ===============================
// ADICIONAR PRODUTO
// ===============================

function adicionarAoCarrinho(produto, tamanho) {

    let precoOriginal = Number(
        produto.preco
            .replace("R$", "")
            .replace(".", "")
            .replace(",", ".")
            .trim()
    );

    let existente = carrinho.find(function (item) {

        return item.nome == produto.nome &&
               item.tamanho == tamanho;

    });


    if (existente) {

        existente.quantidade++;

    }

    else {

        carrinho.push({

            nome: produto.nome,

            preco: precoOriginal,

            precoOriginal: precoOriginal,

            imagem: produto.imagem,

            tamanho: tamanho,

            quantidade: 1,

            colecao: produto.colecao

        });

    }


    // Salvar
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    atualizarCarrinho();

}


// ===============================
// ATUALIZAR CARRINHO
// ===============================

function atualizarCarrinho() {

    const contador =
        document.getElementById("contador-carrinho");

    const itens =
        document.getElementById("itens-carrinho");

    const totalElemento =
        document.getElementById("total-carrinho");

    if (!contador || !itens || !totalElemento) {

        return;

    }


    let quantidadeTotal = 0;

    let total = 0;


    // ===============================
    // RECALCULAR PREÇOS
    // ===============================

    carrinho.forEach(function (item) {

        // Procurar o produto original
        let produtoAtual = null;

        if (typeof produtos !== "undefined") {

            produtoAtual = produtos.find(function (produto) {

                return produto.nome == item.nome;

            });

        }


        if (produtoAtual) {

            item.preco = calcularPrecoCarrinho(produtoAtual);

            item.precoOriginal =
                Number(
                    produtoAtual.preco
                        .replace("R$", "")
                        .replace(".", "")
                        .replace(",", ".")
                        .trim()
                );

        }


        quantidadeTotal += item.quantidade;

        total += item.preco * item.quantidade;

    });


    // ===============================
    // CONTADOR
    // ===============================

    contador.innerText = quantidadeTotal;


    // ===============================
    // TOTAL
    // ===============================

    totalElemento.innerText =
        total.toLocaleString("pt-BR", {

            style: "currency",

            currency: "BRL"

        });


    // ===============================
    // MOSTRAR PRODUTOS
    // ===============================

    itens.innerHTML = "";


    // Aviso de cliente novo
    if (descontoClienteNovoAtivo()) {

        itens.innerHTML += `
            <div class="desconto-cliente-novo">
                🎉 Cliente novo: <strong>15% OFF</strong>
            </div>
        `;

    }


    if (carrinho.length == 0) {

        itens.innerHTML +=
            "<p>Seu carrinho está vazio.</p>";

        return;

    }


    carrinho.forEach(function (item, indice) {

        let precoUnitario =
            item.preco;

        let precoTotal =
            item.preco * item.quantidade;


        itens.innerHTML += `

            <div class="item-carrinho">

                <img src="${item.imagem}" width="80">

                <div>

                    <h3>${item.nome}</h3>

                    <p>
                        Tamanho: ${item.tamanho}
                    </p>

                    <p>

                        ${precoUnitario.toLocaleString(
                            "pt-BR",
                            {
                                style: "currency",
                                currency: "BRL"
                            }
                        )}

                    </p>

                    <p>

                        Total:
                        ${precoTotal.toLocaleString(
                            "pt-BR",
                            {
                                style: "currency",
                                currency: "BRL"
                            }
                        )}

                    </p>


                    <div class="controles-quantidade">

                        <button
                            data-acao="diminuir"
                            data-indice="${indice}">
                            −
                        </button>

                        <span>
                            ${item.quantidade}
                        </span>

                        <button
                            data-acao="aumentar"
                            data-indice="${indice}">
                            +
                        </button>

                    </div>


                    <button
                        class="remover-produto"
                        data-acao="remover"
                        data-indice="${indice}">

                        Remover

                    </button>

                </div>

            </div>

        `;

    });


    // Salvar os preços recalculados
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}


// ===============================
// CONTROLES DO CARRINHO
// ===============================

if (document.getElementById("itens-carrinho")) {

    document
        .getElementById("itens-carrinho")
        .addEventListener("click", function (event) {

            const botao =
                event.target.closest("button");


            if (!botao) {

                return;

            }


            const indice =
                Number(botao.dataset.indice);

            const acao =
                botao.dataset.acao;


            if (acao == "aumentar") {

                carrinho[indice].quantidade++;

            }


            else if (acao == "diminuir") {

                carrinho[indice].quantidade--;

                if (
                    carrinho[indice].quantidade <= 0
                ) {

                    carrinho.splice(indice, 1);

                }

            }


            else if (acao == "remover") {

                carrinho.splice(indice, 1);

            }


            // Salvar
            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            );


            atualizarCarrinho();

        });

}


// ===============================
// POP-UP CLIENTE NOVO
// ===============================

function criarPopupDesconto() {

    if (
        !promocaoBlackFridayAtiva()
    ) {

        return;

    }


    // Já viu o popup
    /*if (
        localStorage.getItem("popup15Visto") == "sim"
    ) {

        return;

    }*/


    const popup =
        document.createElement("div");


    popup.id = "popup-desconto";


    popup.innerHTML = `

        <div class="popup-conteudo">

            <button id="fechar-popup">
                ×
            </button>

            <h2>
                🎉 BEM-VINDO À MEGALO!
            </h2>

            <p class="popup-destaque">
                GANHE 15% OFF
            </p>

            <p>
                Aproveite seu desconto de primeira compra!
            </p>

            <button id="ativar-desconto">
                APROVEITAR 15% OFF
            </button>

        </div>

    `;


    document.body.appendChild(popup);


    document
        .getElementById("fechar-popup")
        .addEventListener("click", function () {

            localStorage.removeItem("clienteNovo15");

            popup.remove();

        });


    document
        .getElementById("ativar-desconto")
        .addEventListener("click", function () {

            localStorage.setItem(
                "clienteNovo15",
                "sim"
            );

            localStorage.setItem(
                "popup15Visto",
                "sim"
            );


            popup.remove();


            atualizarCarrinho();


            alert(
                "Seu desconto de 15% foi ativado!"
            );

        });

}


// Só mostra o popup na página inicial
if (
    document.querySelector(".Lancamentos")
) {

    setTimeout(
        criarPopupDesconto,
        1000
    );

}


// ===============================
// ATUALIZAR AO ABRIR A PÁGINA
// ===============================

atualizarCarrinho();