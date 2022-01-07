import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: Book = {
  }
  id:number=0;
  constructor(private bookService: BookService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      bookService.getBookById(this.id).subscribe(book => {
        this.book = book
      });
    })

  }
  ngOnInit(): void {

  }
  getBookById(){
    console.log(this.book);
    return this.bookService.getBookById(this.id).subscribe();
  }
}
