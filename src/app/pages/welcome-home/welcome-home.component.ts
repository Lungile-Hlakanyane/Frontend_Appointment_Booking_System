import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAppointmentDialogComponent } from '../../reuseable-components/book-appointment-dialog/book-appointment-dialog.component';

@Component({
  selector: 'app-welcome-home',
  standalone: true,
  imports: [],
  templateUrl: './welcome-home.component.html',
  styleUrl: './welcome-home.component.scss'
})
export class WelcomeHomeComponent implements OnInit{
 
  currentDate: string = '';

  constructor(private dialog: MatDialog) {}

  openBookAppointmentDialog() {
    const dialogRef = this.dialog.open(BookAppointmentDialogComponent, {
      width: '600px',  // Set a larger width
      maxWidth: '80vw',  // Limit maximum width for responsiveness
      height: 'auto',    // Allow height to adjust based on content
      position: { top: '10%' } // Centered vertically near the top of the screen
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Appointment booked:', result);
      }
    });
  }

  ngOnInit(): void {
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
