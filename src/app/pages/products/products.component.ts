import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (booksData) => {
        this.books = booksData;
      },
      error: (Error) => {
        console.error(Error);
      },
    });
  }
}
