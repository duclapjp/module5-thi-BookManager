import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book={}
  id: number=0;
  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute,
              private route: Router) {
    this.activateRoute.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      this.bookService.getBookById(this.id).subscribe(book =>{
        this.book = book;
      });
    })
  }

  ngOnInit(): void {
  }
  updateBookById(id: number) {
    this.bookService.updateBook(id, this.book).subscribe(()=>{
      this.route.navigateByUrl('/list')
    })
  }
}
