import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signForm!:FormGroup;
  constructor() { }

  ngOnInit() {
    this.validator();
  }

  validator(){
    this.signForm = new FormGroup({
      name : new FormControl(null, {validators: [Validators.required]}),
      email : new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    })
  }

  submit(){
    if (this.signForm.valid) {
      return;
    }
    console.log('form value', this.signForm.value)
  }
}
