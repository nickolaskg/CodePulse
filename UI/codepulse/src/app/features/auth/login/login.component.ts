import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model: LoginRequest;

  constructor(private authService: AuthService,
    private cookService: CookieService, private router: Router
    ) {
    this.model = {
      email: '',
      password: ''
    };
  }

  onFormSubmit(): void {
    this.authService.login(this.model).subscribe({
      next: response => {
        // Set Auth Cookie
        this.cookService.set('Authorization', `Bearer ${response.token}`, 
          undefined, '/', undefined, true, 'Strict');

          // Set User
          this.authService.setuser({
            email: response.email,
            roles: response.roles
          });

        // Redirect back to Home
        this.router.navigateByUrl('/');
      }
    });
  }
  
}
