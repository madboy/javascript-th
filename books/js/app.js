"use strict";

const show_books_button = document.querySelector("#show-books");
const like_to_read = document.querySelector("#like-to-read");
const like_to_read_list = document.querySelector("#like-to-read-list");
const have_read_list = document.querySelector("have_read_list");

const formatBook = book => {
    let html = "";
    html += "<strong>" + book.title + "</strong>, ";
    html += book.author;
    return html;
}

// const formatUnReadBookList = () => {
//     let html = "";
//     for (const book of books) {
//         html += "<li>" + formatBook(book);
//         html += '<button id="book-read">Mark as read</button>' + "</li>";
//     }
//     return html;
// }

// const formatReadBookList = () => {
//     let html = "";
//     for (const book of readBooks) {
//         html += "<li>" + formatBook(book);
//     }
//     return html;
// }

const formatLikeToReadBook = book => {
    return formatBook(book) + '<button id="book-read">Mark as read</button>'
}

const addBook = book => {
    const bookList = document.createElement('li');
    bookList.innerHTML = formatLikeToReadBook(book);
    like_to_read_list.appendChild(bookList);
}

const addBooks = () => {
    for (const book of books) {
        addBook(book);
    }
    // const bookList = document.createElement('li');
    // bookList.innerHTML = formatUnReadBookList();
    // like_to_read_list.appendChild(bookList);
}

const toggleBookList = (event) => {
    console.log(event.target.tagName);
    if (like_to_read_list.style.display === 'block') {
        like_to_read_list.style.display = 'none';
        show_books_button.textContent = "Show books";
    } else {
        like_to_read_list.style.display = 'block';
        show_books_button.textContent = "Hide books";        
    }
}

window.addEventListener('load', () => addBooks());
show_books_button.addEventListener('click', () => toggleBookList(event));
like_to_read.addEventListener('click', (event) => {
    console.log(event.target.tagName);
})

