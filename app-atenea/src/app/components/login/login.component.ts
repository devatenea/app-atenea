import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    struser: "",
    strpassword: ''
  }

  public hide = true;
  public spinner = true;
  public error = true;
  public message: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form : Form) {
    this.spinner = false;
    this.error = true;

    let jsonData = { 
      "phone": this.user.struser,
      "password": this.user.strpassword
    }

    this.router.navigate(['home']);

  }

}
