import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Article } from './../shared/models/articles';
import { config } from '../config/config';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${config.API}/articles/`);
  }

  public getArticle(id): Observable<Article> {
    return this.http.get<Article>(`${config.API}/articles/${id}`);
  }

  public updateArticle(id, article) {
    return this.http.put(`${config.API}/articles/${id}`, article);
  }

  public postArticle(article) {
    return this.http.post(`${config.API}/articles/`, article);
  }
  public removeArticle(id) {
    return this.http.delete(`${config.API}/articles/${id}`);
  }
}
