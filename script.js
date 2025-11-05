let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensDiv = document.getElementById("itens-carrinho");
    const totalDiv = document.getElementById("total");
    const contador = document.getElementById("contador");

    itensDiv.innerHTML = "";
    carrinho.forEach((item, index) => {
        itensDiv.innerHTML += `
            <p>${item.nome} - R$ ${item.preco.toFixed(2)} 
            <button onclick="removerItem(${index})">❌</button></p>`;
    });

    totalDiv.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    contador.textContent = carrinho.length;
}

function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function abrirCarrinho() {
    document.getElementById("caixa-carrinho").style.display = "block";
}

function fecharCarrinho() {
    document.getElementById("caixa-carrinho").style.display = "none";
}
