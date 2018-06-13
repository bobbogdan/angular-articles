import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: HttpService) {
    this.addForm = this.fb.group({
      title: ' ',
      image: ' ',
      description : ' ',
      publish_date : ' '});
  }

  save() {
    const data = this.prepareSave();
    this.service
      .postArticle(data)
      .subscribe(() => this.router.navigate(['/main/list']));
  }

  setFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addForm.get('image').setValue(file);
    }
  }

  private prepareSave(): any {
    const fd = new FormData();
    const formValue = this.addForm.value;
    for (const key in formValue) {
      fd.append(key, this.addForm.get(key).value);
    }
    return fd;
  }

}
