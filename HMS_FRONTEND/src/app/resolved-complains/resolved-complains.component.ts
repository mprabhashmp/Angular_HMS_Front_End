import { Component } from '@angular/core';
import { ResolvedServiceService } from './resolved-service.service';

@Component({
  selector: 'app-resolved-complains',
  templateUrl: './resolved-complains.component.html',
  styleUrls: ['./resolved-complains.component.css']
})
export class ResolvedComplainsComponent {


  p: number = 1;
  complains:any[]=[];
   
  
  constructor(private resolvedservice: ResolvedServiceService) { }
  
    ngOnInit() {
  
      this.getResolvedComplains();
  
  
    }
    
    formatDate(timestamp: string): string {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  
    getResolvedComplains(): void {
      this.resolvedservice.getResolvedComplains().subscribe(complains => {
        this.complains = complains;
      });
    }
  
}
