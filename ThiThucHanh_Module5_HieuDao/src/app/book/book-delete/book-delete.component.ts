import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {MatTableDataSource} from '@angular/material/table';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};
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
        this.book = data;
      });
    });
  }
  confirmYes() {
    this.bookService.deleteBook(this.id).subscribe(data => {
      this.router.navigate(['']);
    });
  }

  confirmNo() {
    this.router.navigate(['']);
  }

}
