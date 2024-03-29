import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
 
  signForm!:FormGroup;
  constructor() { }

  ngOnInit() {
    this.validator();
  }

  validator(){
    this.signForm = new FormGroup({
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
