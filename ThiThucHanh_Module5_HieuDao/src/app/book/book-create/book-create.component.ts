import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  form: any = {};
  book: Book;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    );
    this.bookService.createBook(this.book).subscribe(data => {
      this.router.navigate(['']);
    });
  }

}
