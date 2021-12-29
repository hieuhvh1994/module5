import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {group} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rfRegister: FormGroup;

  constructor() { }

  checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const pass = control.get('password').value;
    const confirmPass = control.get('confirmPassword').value;
    return pass?.value === confirmPass?.value ? null : { notmatched: true };
  }

  ngOnInit() {
    this.rfRegister = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    }, {validators: this.checkPasswords});
  }

  onSubmit() {
    // Do something awesome
    console.log(this.rfRegister);
  }



}
