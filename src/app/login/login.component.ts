import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({ // to load task form
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void { // to login and navigate to dashboard
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.authService.login(username, password)) {
        this.router.navigate(['/dashboard']);
      } else { // handle case where login fails
        alert('Invalid credentials');
      }
    }
    else{ // handle case where form is invalid
      if(this.loginForm.get('username')?.errors?.['required']){ // handle case where username is invalid
        alert('Username is required');
        return
      }
      if(this.loginForm.get('password')?.errors?.['required']){ // handle case where password is invalid
        alert('Password is required');
        return
      }
    }
    // alert(this.loginForm.value.username +':'+ this.loginForm.value.password);
  }
}