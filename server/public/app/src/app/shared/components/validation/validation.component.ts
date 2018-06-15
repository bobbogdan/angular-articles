import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


const validationMessages = {
  required: {
    message: 'This field is required'
  }
};

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input() control: FormControl;

  get errorMessage(): string {
    console.log(this.control);
    if (!this.control) { return undefined; }
    // tslint:disable-next-line:forin
    for (const error in this.control.errors) {
      const messageData = validationMessages[error];
      if (messageData && (this.control.touched || this.control.dirty)) {
        return messageData.message;
      }
    }
    return undefined;
  }
}
