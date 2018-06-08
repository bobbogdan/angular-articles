import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {map, pluck, switchMap} from 'rxjs/operators';

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
    private service: HttpService
  ) {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: number) => this.service.getJSON()
          .pipe(map(data => data.find(item => item.id === +id))))
      )
      .subscribe((result: any) => {
        console.log(result);
        const {title, image, description, publish_date} = result;
        this.editForm = new FormGroup({
          tittttttle:  new FormControl()
        });
      });
  }

  save(value) {
    console.log(value);
  }

  ngOnInit() {

  }
}
