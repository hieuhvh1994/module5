import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};
  id: number;
  constructor(
    private bookService: BookService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.bookService.findBookByID(this.id).subscribe(data => {
        this.book = data;
      });
    });
  }

}
