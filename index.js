function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books") //gets data
        .then(resp => resp.json()) //converts to JSON
        .then(data => renderBooks(data)); //calls second function(below)
}

function renderBooks(data) {
    const main = document.querySelector('main');
    data.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerHTML = `<h2>${book.name}</h2>`;
        main.appendChild(h2);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
})