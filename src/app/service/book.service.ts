import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  createNewBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}
