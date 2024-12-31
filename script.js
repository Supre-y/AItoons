let currentPage = 1;
const totalPages = 10;  // Altere conforme o número de páginas de cada capítulo

function updatePage() {
    document.getElementById('manga-page').src = `capitulo1/${currentPage}.jpg`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function search() {
    const searchTerm = document.getElementById('search-bar').value;
    alert(`Você pesquisou por: ${searchTerm}`);
}
