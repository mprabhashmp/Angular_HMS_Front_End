import { Component } from '@angular/core';
import { StudentViewWardenService } from './student-view-warden.service';
import { HmsHomeService } from '../hms-home/hms-home.service';

@Component({
  selector: 'app-student-view-warden',
  templateUrl: './student-view-warden.component.html',
  styleUrls: ['./student-view-warden.component.css']
})
export class StudentViewWardenComponent {

  constructor(private viewcomplainservice: StudentViewWardenService,private hmsservice:HmsHomeService) { }


  ngOnInit():void {

    this.loadWardenComplaintsByCurrentUser();

  }
  p: number = 1;
  complaints: any[] = [];

 
  loadWardenComplaintsByCurrentUser() {
    this.hmsservice.getWardenComplains().subscribe(
      (response: any) => {
        this.complaints = response;
      },
      (error: any) => {
        console.error('Error loading complaints:', error);
      }
    );
  }

  formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }
}
