import { Component } from '@angular/core';
import { SubwardenServiceService } from './subwarden-service.service';

@Component({
  selector: 'app-hms-subwarden',
  templateUrl: './hms-subwarden.component.html',
  styleUrls: ['./hms-subwarden.component.css']
})
export class HmsSubwardenComponent {

  
complains: any[] = [];
ComplainCount:any;
 

constructor(private subwardenservice: SubwardenServiceService) { }

  ngOnInit() {

    this.getComplains();
    this.getcomplainCount();
  }

  // compdata: any = {
  //   c_id: 0,
  //   user_index: '',
  //   c_itemcode: '',  
  //   c_description: '',
  //   //c_image:'',
  //   fname:'',
  //   lname: '',
  //   hostaltype: '',
  //   room: '',
  //   status: '',
  //   created_at: '',

  // };

  getcomplainCount() {
    this.subwardenservice.getcomplainCount().subscribe(
      (count: any) => {
        this.getcomplainCount = count;
      },
      (error) => {
        console.log('Error retrieving user count:', error);
      }
    );
  }
 

  getComplains(): void {
    this.subwardenservice.getComplains().subscribe(complain=> {
      this.complains = complain;

    });
  }

}
