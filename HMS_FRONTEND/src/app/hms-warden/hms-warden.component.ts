import { Component} from '@angular/core';
import { WardenServiceService } from './warden-service.service';

@Component({
  selector: 'app-hms-warden',
  templateUrl: './hms-warden.component.html',
  styleUrls: ['./hms-warden.component.css']
})
export class HmsWardenComponent{


p: number = 1;
complains:any[]=[];
 

constructor(private wardenservice: WardenServiceService) { }

  ngOnInit() {

    this.getWardenComplains();

  }
  
  formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) + '| ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  getWardenComplains(): void {
    this.wardenservice.getWardenComplains().subscribe(complains => {
      this.complains = complains;
    });
  }

  
  resolveComplain(c_id: number): void {
    if (window.confirm('Are you sure you want to Accept this complaint?')) {
      this.wardenservice.resolveComplain(c_id).subscribe(() => {
        this.getWardenComplains();
      });
    }
  }
  
}
