﻿
# clickStore

clickStore é um projeto que combina HTML, CSS, JavaScript e a API do Mercado Livre para criar uma loja online simples onde os usuários podem pesquisar e visualizar produtos disponíveis no Mercado Livre.

## Funcionalidades

Pesquisa de Produtos:

- Os usuários podem pesquisar produtos digitando palavras-chave no campo de pesquisa. Ao digitar, os resultados da pesquisa são exibidos em tempo real para ajudar os usuários a encontrar os produtos desejados.

Listagem de Produtos:

- Os resultados da pesquisa são exibidos em uma lista responsiva com imagens, nomes e preços dos produtos. A lista de produtos se ajusta automaticamente para se adequar a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente em dispositivos móveis, tablets e computadores.

Com essas funcionalidades, o site de compras permite aos usuários encontrar facilmente os produtos desejados, tornando a experiência de compra mais rápida e agradável. A abordagem responsiva garante que os usuários possam acessar o site em qualquer dispositivo, melhorando a acessibilidade e a usabilidade.

![Texto Alternativo da Imagem](/img/baner.PNG)
![Texto Alternativo da Imagem](/img/print2.PNG)

## Link do Projeto

[Confira o Projeto](https://clickstore.netlify.app/)

## Como Usar

1. Clone o repositório do clickBuy em sua máquina local:
   ```bash
   git clone https://github.com/gu1lh3rm3s0rd1/ClickStore.git

2. Navegue para a pasta do projeto:
    ```bash
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

Contribuições são bem-vindas! Se você deseja melhorar ou adicionar novas funcionalidades ao projeto clickStore, sinta-se à vontade para fazer um fork do repositório e enviar um pull request.

## Como Contatar

Se você estiver interessado(a) em colaborar em algum projeto ou apenas quiser bater um papo, fique à vontade para entrar em contato comigo. Abaixo estão os meus canais de contato:

- E-mail: @gsordi2507@gmail.com / @gsordi123@outlook.com
- GitHub: [gu1lh3rm3s0rd1](https://github.com/gu1lh3rm3s0rd1)
- LinkedIn: [guilhermesordi](https://www.linkedin.com/in/guilhermebenjamim/)

## Autor

Guilherme Benjamim Sordi - [https://github.com/gu1lh3rm3s0rd1/](https://github.com/gu1lh3rm3s0rd1).

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter mais detalhes.
