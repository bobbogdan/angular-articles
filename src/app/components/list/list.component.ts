import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public articles: Array<any>;

  constructor(
    private router: Router,
    private service: HttpService
  ) {

  }

  editArticle(target) {
    this.service.getArticle().subscribe(data => {
      const current = data.filter( item => {
        return item.id === target + 1;
      });
      this.router.navigate(['/main/edit/' + current[0].id]);
    });
  }

  removeArticle(target) {
    this.service.removeArticle(target).pipe(
      switchMap(() => this.service.getArticle())
    )
    .subscribe(data => {
      this.articles = data;
    });
  }

  ngOnInit() {
    this.service.getArticle().subscribe(data => {
      this.articles = data;
    });
  }
}
