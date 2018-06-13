import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: HttpService
  ) {
    const article = this.route.snapshot.data['article'];
    const {_id, title, image, description, publish_date} = article;
    this.editForm = this.fb.group({ _id, title, image, description, publish_date});
  }

  save() {
    const data = this.prepareSave();
    const _id = this.editForm.get('_id').value;
    this.service
      .updateArticle(_id, data)
      .subscribe(() => this.router.navigate(['/main/list']));
  }

  setFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editForm.get('image').setValue(file);
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
