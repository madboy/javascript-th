"use strict";

const show_books_button = document.querySelector("#show-books");
const like_to_read = document.querySelector("#like-to-read");
const like_to_read_list = document.querySelector("#like-to-read-list");
const have_read_list = document.querySelector("#have-read-list");

const formatBook = book => {
    let html = "";
    html += "<strong>" + book.title + "</strong>, ";
    html += `<i>${book.author}</i>`;
    return html;
}

const formatLikeToReadBook = book => {
    return formatBook(book) + `<button id="${book.isbn}">Mark as read</button>`;
}

const formatHaveReadBook = book => {
    return formatBook(book);
}

const addBook = book => {
    const bookList = document.createElement('li');
    bookList.setAttribute("id", book.isbn);
    bookList.innerHTML = formatLikeToReadBook(book);
    like_to_read_list.appendChild(bookList);
}

const addReadBook = book => {
    const bookList = document.createElement('li');
    bookList.setAttribute("id", book.isbn);
    bookList.innerHTML = formatHaveReadBook(book);
    have_read_list.appendChild(bookList);
}

const removeBook = isbn => {
    console.log("I've been told to remove " + isbn);
    for (const book of books) {
        if (book.isbn === isbn) {
            console.log("I've found the book to remove");
        }
    }
}

const addBooks = () => {
    for (const book of books) {
        addBook(book);
    }
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
    // relying on that we're setting isbn 10 numbers for all books
    // I'm sure there's better ways of identfying what to remove
    // and what not to remove
    if (parseInt(event.target.id)) {
        const parent = event.target.parentNode;
        const grandParent = parent.parentNode;
        grandParent.removeChild(parent);

        for (const book of books) {
            if (event.target.id === book.isbn) {
                addReadBook(book);
            }
        }
    }
})

// Moving items around
// listUl.addEventListener('click', (event) => {
//   if (event.target.tagName == 'BUTTON' && event.target.className === 'remove') {
//     let li = event.target.parentNode;
//     let ul = li.parentNode;
//     ul.removeChild(li);
//   }
                        
//   if (event.target.tagName == 'BUTTON' && event.target.className === 'up') {
//     let li = event.target.parentNode;
//     let prev_li = li.previousElementSibling;
//     let ul = li.parentNode;
    
//     if (prev_li) {
//      ul.insertBefore(li, prev_li);
//     }
//   }

//   if (event.target.tagName == 'BUTTON' && event.target.className === 'down') {
//     let li = event.target.parentNode;
//     let next_li = li.nextElementSibling;
//     let ul = li.parentNode;
    
//     if (next_li) {
//       ul.insertBefore(next_li, li);
//     }
//   }
//  });
