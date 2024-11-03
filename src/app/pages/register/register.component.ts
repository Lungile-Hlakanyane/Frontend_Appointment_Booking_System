import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): { passwordMismatch: boolean } | null {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  showToast(message: string, duration: number = 2000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      // Simulate registration logic here
      setTimeout(() => {
        this.isLoading = false;
        this.showToast('Registration successful!');
        this.navigateToLogin();
      }, 1500);
    } else {
      this.showToast('Please fill in all required fields correctly.');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}
