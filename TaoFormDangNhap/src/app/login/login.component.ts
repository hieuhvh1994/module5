import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rfLogin: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rfLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  onSubmit() {
    console.log(this.rfLogin);
  }

}
