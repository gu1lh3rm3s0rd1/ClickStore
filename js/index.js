window.addEventListener("DOMContentLoaded", (event) => {
  //evento para capturar o submit
  document.getElementById("busca").addEventListener("submit", function (event) {
    event.preventDefault();

    let query = document.getElementById("input").value.trim();
    if (query !== "") {
      searchProducts(query);
    }
  });
});

let itemsPerPage = 20;
let currentPage = 1;
let totalItems = 0;
let totalPages = 0;
let currentResults = [];

function searchProducts(query) {
  let url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(
    query
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      totalItems = data.results.length;
      totalPages = Math.ceil(totalItems / itemsPerPage);
      currentPage = 1;
      currentResults = data.results;
      displayResults();
    })
    .catch((error) => console.error("Erro ao realizar a pesquisa:", error));
}

function displayResults() {
  let resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (currentResults.length === 0) {
    resultsContainer.innerHTML = "Nenhum resultado encontrado.";
    return;
  }

  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = currentResults.slice(startIndex, endIndex);

  currentItems.forEach(function (product) {
    let productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div style='display: grid;
                  justify-content: center;
                  align-content: center;
                  align-items: center;
                  justify-items: start;'>
        <p>${product.title}</p>
        <p>R$ ${product.price}</p>
      </div>
    `;
    resultsContainer.appendChild(productElement);
  });

  let paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  let prevButton = document.createElement("button");
  prevButton.classList.add("btn", "btn:hover");
  prevButton.textContent = "< Anterior";
  prevButton.id = "prev-btn";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", goToPreviousPage);
  paginationContainer.appendChild(prevButton);

  let nextButton = document.createElement("button");
  nextButton.classList.add("btn", "btn:hover");
  nextButton.textContent = "Próximo >";
  nextButton.id = "next-btn";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", goToNextPage);
  paginationContainer.appendChild(nextButton);
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayResults();
  }
}

function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    displayResults();
  }
}
