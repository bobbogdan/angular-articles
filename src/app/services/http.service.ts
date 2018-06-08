import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Article } from './../shared/models/articles';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles/');
  }
}
