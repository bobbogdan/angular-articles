import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {map, pluck, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: HttpService
  ) {
    const article = this.route.snapshot.data['article'];
    const {title, image, description, publish_date} = article;
    this.editForm = this.fb.group({ title, image, description, publish_date});
  }


  save(value) {
    this.service
      .updateArticle(value)
      .subscribe( () => this.router.navigate(['/main/list']));
  }

  ngOnInit() {

  }
}