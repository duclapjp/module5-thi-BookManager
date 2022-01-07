import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: Book = {}
  id: number = 0;

  constructor(private bookService: BookService, private activeRoute: ActivatedRoute, private route: Router) {
    this.activeRoute.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      bookService.getBookById(this.id).subscribe(book => {
        this.book = book;
      });
    })
  }

  ngOnInit(): void {
  }

  deleteBook() {
    this.bookService.deleteBook(this.id).subscribe(() => {
      this.route.navigateByUrl('/list')
    });
  }
}
