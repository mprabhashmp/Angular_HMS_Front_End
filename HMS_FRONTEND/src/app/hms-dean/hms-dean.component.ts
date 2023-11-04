import { Component } from '@angular/core';
import { DeanServiceService } from './dean-service.service';

@Component({
  selector: 'app-hms-dean',
  templateUrl: './hms-dean.component.html',
  styleUrls: ['./hms-dean.component.css']
})
export class HmsDeanComponent {

  p: number = 1;
  complains:any[]=[];
   
  
  constructor(private deanservice: DeanServiceService) { }
  
    ngOnInit() {
  
      this.getWardenComplains();
  
    }
    
    formatDate(timestamp: string): string {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  
    getWardenComplains(): void {
      this.deanservice.getWardenComplains().subscribe(complains => {
        this.complains = complains;
      });
    }
  
    
    resolveComplain(c_id: number): void {
      if (window.confirm('Are you sure you want to Accept this complaint?')) {
        this.deanservice.resolveComplain(c_id).subscribe(() => {
          this.getWardenComplains();
        });
      }
    }
}
