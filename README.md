# ClickStore

ClickStore é um projeto que combina HTML, CSS, JavaScript e a API do Mercado Livre para criar uma loja online simples onde os usuários podem pesquisar e visualizar produtos disponíveis no Mercado Livre.

## Funcionalidades

Pesquisa de produtos: Os usuários podem pesquisar produtos digitando palavras-chave no campo de pesquisa.
    Listagem de produtos: 
        Os resultados da pesquisa são exibidos em uma lista com imagens, nomes e preços dos produtos.
![Texto Alternativo da Imagem](/img/print1.PNG)
![Texto Alternativo da Imagem](/img/print2.PNG)

## Instalação

Clone o repositório do ClickStore em sua máquina local:
git clone https://github.com/seu-usuario/clickstore.git

Navegue para a pasta do projeto:
cd clickstore

Abra o arquivo index.html no seu navegador da web.

## Exemplo de Código
Aqui está um exemplo de código JavaScript que realiza a pesquisa na API do Mercado Livre:

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');

    searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => displayResults(data.results))
    .catch((error) => console.error('Erro na busca: ', error));
    });

    function displayResults(results) {
    resultsContainer.innerHTML = '';

    results.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productDiv.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.title;
        productDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Preço: R$ ${product.price}`;
        productDiv.appendChild(productPrice);

        resultsContainer.appendChild(productDiv);

    });
    }

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar ou adicionar novas funcionalidades ao projeto ClickStore, sinta-se à vontade para fazer um fork do repositório e enviar um pull request.

## Autor

Guilherme Benjamin Sordi - [https://github.com/gu1lh3rm3s0rd1/](https://github.com/gu1lh3rm3s0rd1).

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter mais detalhes.
