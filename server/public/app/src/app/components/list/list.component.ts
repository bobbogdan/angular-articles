import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { map, switchMap } from 'rxjs/operators';
import { config } from '../../config/config';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public host: string = config.HOST;
  public articles: Array<any>;

  constructor(
    private router: Router,
    private service: HttpService) {  }

  ngOnInit() {
    this.service.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  editArticle(id) {
    this.router.navigate(['/main/edit/', id]);
  }

  removeArticle(id) {
    console.log(id);
    this.service.removeArticle(id)
    .subscribe(() => {
      this.articles = this.articles.filter(article => article._id !== id);
    });
  }
}
