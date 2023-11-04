import { Component } from '@angular/core';
import { StudentResolveServiceService } from './student-resolve-service.service';
import { HmsHomeService } from '../hms-home/hms-home.service';

@Component({
  selector: 'app-student-resolved-complains',
  templateUrl: './student-resolved-complains.component.html',
  styleUrls: ['./student-resolved-complains.component.css']
})
export class StudentResolvedComplainsComponent {

  p: number = 1;
  complains:any[]=[];
   
  
  constructor(private hmsservice: HmsHomeService) { }
  
    ngOnInit() {
  
      this.getResolveComplains();
  
  
    }
    
    formatDate(timestamp: string): string {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    getResolveComplains(): void {
      this.hmsservice.getResolveComplains().subscribe(complains => {
        this.complains = complains;
      });
    }
}
