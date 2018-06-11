import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public addForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: HttpService
  ) {
    this.addForm = this.fb.group({
      title: ' ',
      image: ' ',
      description : ' ',
      publish_date : ' '});
  }


  save(value) {
    this.service
      .postArticle(value)
      .subscribe( () => this.router.navigate(['/main/list']));
  }

  ngOnInit() {
  }

}
