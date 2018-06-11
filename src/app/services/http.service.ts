import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Article } from './../shared/models/articles';

const HttpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles/');
  }

  public updateArticle(article) {
    console.log(article);
    return this.http.put('http://localhost:3000/articles/' + article.id, article, HttpOptions);
  }

  public postArticle(article) {
    console.log(article);
    return this.http.post('http://localhost:3000/articles/', article, HttpOptions);
  }
  public removeArticle(target) {
    console.log(target);
    return this.http.delete('http://localhost:3000/articles/' + target, HttpOptions);
  }
}
