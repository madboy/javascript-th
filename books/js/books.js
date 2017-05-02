"use strict";

const Book = function(title, author, image, isbn, pages) {
    this.title = title;
    this.author = author;
    this.image = image;
    this.isbn = isbn;
    this.pages = pages;
};

const books = [
    new Book(
        "The Ultimate Hitchhiker's Guide to the Galaxy",
        "Douglas Adams", "https://images-na.ssl-images-amazon.com/images/I/514lGrZn9TL._SX330_BO1,204,203,200_.jpg",
        "0345453743",
        "832"),
    new Book(
        "The Hitchhiker's Guide to Python: Best Practices for Development",
        ["Tanya Schlusser", "Kenneth Reitz"],
        "https://images-na.ssl-images-amazon.com/images/I/5182TyS6gJL._SX379_BO1,204,203,200_.jpg",
        "1491933178",
        "338")
]
