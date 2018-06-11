import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

import {HttpService} from '../services/http.service';
import {Article} from '../shared/models/articles';

@Injectable()
export class ArticleResolver implements Resolve<Observable<Article>> {
  constructor(private service: HttpService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const id = route.paramMap.get('id');
    return this.service.getArticle()
      .pipe(map(data => data.find(item => item.id === +id)));
  }
}
