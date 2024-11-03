import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-appointment-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './book-appointment-dialog.component.html',
  styleUrl: './book-appointment-dialog.component.scss'
})
export class BookAppointmentDialogComponent {

  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookAppointmentDialogComponent>
  ) {
    this.appointmentForm = this.fb.group({
      dateTime: [''],
      location: [''],
      description: ['']
    });
  }

  bookAppointment() {
    const appointmentData = this.appointmentForm.value;
    // Handle booking logic here
    console.log('Appointment Data:', appointmentData);
    this.dialogRef.close(appointmentData); // Pass data back to the parent component if needed
  }

  close() {
    this.dialogRef.close();
  }

}
