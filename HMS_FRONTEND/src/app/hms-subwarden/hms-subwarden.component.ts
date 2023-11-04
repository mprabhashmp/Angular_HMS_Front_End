import { Component } from '@angular/core';
import { SubwardenServiceService } from './subwarden-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hms-subwarden',
  templateUrl: './hms-subwarden.component.html',
  styleUrls: ['./hms-subwarden.component.css']
})
export class HmsSubwardenComponent {

  p: number = 1;
complains:any[]=[];
 

constructor(private subwardenservice: SubwardenServiceService) { }

  ngOnInit() {

    this.getComplains();


  }
  
  formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  getComplains(): void {
    this.subwardenservice.getComplains().subscribe(complains => {
      this.complains = complains;
    });
  }

  
  resolveComplain(c_id: number): void {
    if (window.confirm('Are you sure you want to Accept this complaint?')) {
      this.subwardenservice.resolveComplain(c_id).subscribe(() => {
        this.getComplains();
      });
    }
  }
}
