import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { HttpService } from '../../services/http.service';
import { config } from '../../config/config';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editForm: FormGroup;
  public imgPreview: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: HttpService
  ) {
    const article = this.route.snapshot.data['article'];
    let {_id, title, image, description, publish_date} = article;
    publish_date = moment(publish_date).format('YYYY-MM-DD');
    this.imgPreview = config.HOST + image;
    this.editForm = this.fb.group({
      _id: _id,
      title: [title, Validators.required],
      image: [image, Validators.required],
      description : [description, Validators.required],
      publish_date : [publish_date, Validators.required]
    });
  }

  save() {
    const data = this.prepareSave();
    const _id = this.editForm.get('_id').value;
    if (this.editForm.valid) {
      this.service
        .updateArticle(_id, data)
        .subscribe(() => this.router.navigate(['/main/list']));
    }
  }

  setFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editForm.get('image').setValue(file);
      this.editForm.get('image').markAsTouched();
      const reader  = new FileReader();
      reader.onloadend = () => {
        this.imgPreview = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.imgPreview = "";
      }
    }
  }

  private prepareSave(): any {
    const fd = new FormData();
    const formValue = this.editForm.value;
    for (const key in formValue) {
      fd.append(key, this.editForm.get(key).value);
    }
    return fd;
  }
}
