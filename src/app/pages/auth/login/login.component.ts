import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BaseForm } from 'src/app/shared/utils/base-form';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });
  constructor(private fb: FormBuilder, public baseForm: BaseForm
    , public route: Router) { }
  ngOnInit(): void { }

  onLogin() { this.route.navigate(['home']); }
}
