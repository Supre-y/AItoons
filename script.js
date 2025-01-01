let currentPage = 1;
const totalPages = 10;  // Altere conforme o número de páginas de cada capítulo

function updatePage() {
    const imagePath = `capitulo1/${currentPage}.jpg`;
    const mangaImage = document.getElementById('manga-page');
    
    // Verifica se a página existe
    fetch(imagePath)
        .then(response => {
            if (response.ok) {
                mangaImage.src = imagePath;
            } else {
                alert('Página não encontrada!');
            }
        })
        .catch(() => alert('Erro ao carregar a página.'));
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
    if (searchTerm) {
        alert(`Você pesquisou por: ${searchTerm}`);
    } else {
        alert('Digite um termo para pesquisa!');
    }
}
