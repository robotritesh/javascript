
function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); 
    this.author = author;     
    this.genre = genre;       
}


Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

Books.prototype.getAuthor = function() {
    console.log(`${this.name} is written by ${this.author}.`);
};
