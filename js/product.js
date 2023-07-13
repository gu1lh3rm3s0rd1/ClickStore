var produtos = [{
    nome: "Produto 1",
    preco: "$9.99",
    imagem: "caminho/para/imagem1.jpg"
  },
  {
    nome: "Produto 2",
    preco: "$19.99",
    imagem: "caminho/para/imagem2.jpg"
  },
];

function criarProdutos() {
  var container = document.querySelector('.produto');

  produtos.forEach(function (produto) {
    var produtoItem = document.createElement('div');
    produtoItem.className = 'produto-item';

    var produtoImagem = document.createElement('div');
    produtoImagem.className = 'produto-imagem';
    produtoImagem.style.backgroundImage = 'url(' + produto.imagem + ')';

    var produtoNome = document.createElement('div');
    produtoNome.className = 'produto-nome';
    produtoNome.textContent = produto.nome;

    var produtoPreco = document.createElement('div');
    produtoPreco.className = 'produto-preco';
    produtoPreco.textContent = produto.preco;

    produtoItem.appendChild(produtoImagem);
    produtoItem.appendChild(produtoNome);
    produtoItem.appendChild(produtoPreco);

    container.appendChild(produtoItem);
  });
}

criarProdutos();
