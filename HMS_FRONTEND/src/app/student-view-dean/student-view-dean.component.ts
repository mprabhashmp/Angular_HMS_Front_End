import { Component } from '@angular/core';
import { HmsHomeService } from '../hms-home/hms-home.service';

@Component({
  selector: 'app-student-view-dean',
  templateUrl: './student-view-dean.component.html',
  styleUrls: ['./student-view-dean.component.css']
})
export class StudentViewDeanComponent {

  constructor(private hmsservice:HmsHomeService) { }


  ngOnInit():void {

    this.loadDeanComplaintsByCurrentUser();

  }
  p: number = 1;
  complaints: any[] = [];

 
  loadDeanComplaintsByCurrentUser() {
    this.hmsservice.getDeanComplains().subscribe(
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
