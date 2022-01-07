import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  form: any = {};
  book: Book;
  id: number;
  constructor(
    private bookService: BookService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.bookService.findBookByID(this.id).subscribe(data => {
        this.form = data;
      });
    });
  }

  ngSubmit() {
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    );
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      this.router.navigate(['']);
    });
  }

}
