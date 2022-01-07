import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book ={};
  constructor(private bookService: BookService,
              private route: Router) { }

  ngOnInit(): void {
  }
  createNewBook(){
    this.bookService.createNewBook(this.book).subscribe(() => {
      this.route.navigateByUrl('/list')
    });
  }
}
