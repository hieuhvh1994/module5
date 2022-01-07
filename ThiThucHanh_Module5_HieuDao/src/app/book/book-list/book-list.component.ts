import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../model/book';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {BookService} from '../../service/book.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'edit', 'delete'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  books: Book[] = [];
  id: number;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

}
