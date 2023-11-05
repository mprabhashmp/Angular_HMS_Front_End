import { Component } from '@angular/core';
import { ResolvedServiceService } from './resolved-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-resolved-complains',
  templateUrl: './resolved-complains.component.html',
  styleUrls: ['./resolved-complains.component.css']
})
export class ResolvedComplainsComponent {


  p: number = 1;
  complains:any[]=[];
  complainscopy:any[]=[];
  combinedData: any[] = [];
  
  constructor(private resolvedservice: ResolvedServiceService) { }
  
    ngOnInit() {
  
      // this.getResolvedComplains();
      // this.getResolvedComplainsCopy();
      this.getCombinedData();
  
    }
    
    formatDate(timestamp: string): string {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  
    // getResolvedComplains(): void {
    //   this.resolvedservice.getResolvedComplains().subscribe(complains => {
    //     this.complains = complains;
    //   });
    // }

    // getResolvedComplainsCopy(): void {
    //   this.resolvedservice.getResolvedComplainsCopy().subscribe(complainscopy => {
    //     this.complainscopy = complainscopy;
    //   });
    // }

    getCombinedData(): void {
      forkJoin({
        complains: this.resolvedservice.getResolvedComplains(),
        complainsCopy: this.resolvedservice.getResolvedComplainsCopy()
      }).subscribe(data => {
        this.combinedData = data.complains.map((complain, index) => {
          complain.createdAtCopy = data.complainsCopy[index].createdAt;
          return complain;
        });
      });
    }
  
}
