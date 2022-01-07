import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

const API_LOCAL = environment.API_LOCAL;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(API_LOCAL);
  }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(API_LOCAL, book);
  }

  updateBook(id: number, book: Book): Observable<Book>{
    return this.http.put<Book>(API_LOCAL + `/` + id , book);
  }

  deleteBook(id: number): Observable<Book>{
    return this.http.delete<Book>(API_LOCAL + `/` + id);
  }

  findBookByID(id: number): Observable<Book>{
    return this.http.get<Book>(API_LOCAL + `/` + id);
  }




}
