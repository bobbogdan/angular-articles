import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public addForm: FormGroup;
  public imgPreview: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: HttpService) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description : ['', Validators.required],
      publish_date : ['', Validators.required]
    });
  }

  save() {
    const data = this.prepareSave();
    if (this.addForm.valid) {
      this.service
        .postArticle(data)
        .subscribe(() => this.router.navigate(['/main/list']));
    }
  }

  setFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addForm.get('image').setValue(file);
      this.addForm.get('image').markAsTouched();
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
    const formValue = this.addForm.value;
    for (const key in formValue) {
      fd.append(key, this.addForm.get(key).value);
    }
    return fd;
  }

}
