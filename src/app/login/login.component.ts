import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username='holi'
  password='123'
  errorMessage='Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService) {}

  handleLogin(){

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
