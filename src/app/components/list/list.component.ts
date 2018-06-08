import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

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
    console.log(target);
    this.service.getJSON().subscribe(data => {
      const current = data.filter( item => {
        return item.id === target + 1;
      });
      console.log(current);
      this.router.navigate(['/main/edit/' + current[0].id]);
    });
  }

  ngOnInit() {
    this.service.getJSON().subscribe(data => {
      this.articles = data;
    });
  }
}
