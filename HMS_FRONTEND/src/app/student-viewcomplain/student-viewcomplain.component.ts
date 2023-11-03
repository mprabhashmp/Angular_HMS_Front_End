import { Component, OnInit } from '@angular/core';

import { ViewcomplainServiceService } from './viewcomplain.service.service';

@Component({
  selector: 'app-student-viewcomplain',
  templateUrl: './student-viewcomplain.component.html',
  styleUrls: ['./student-viewcomplain.component.css']
})
export class StudentViewcomplainComponent implements OnInit{
 

  constructor(private viewcomplainservice: ViewcomplainServiceService) { }

complains: any[] = [];
ComplainCount:any;
 


  ngOnInit() {

    this.getComplains();
    this.getcomplainCount();
  }

  compdata: any = {
    c_id: 0,
    user_index: '',
    c_itemcode: '',  
    c_description: '',
    //c_image:'',
    fname:'',
    lname: '',
    hostaltype: '',
    room: '',
    status: '',
    created_at: '',

  };

  getcomplainCount() {
    this.viewcomplainservice.getcomplainCount().subscribe(
      (count: any) => {
        this.getcomplainCount = count;
      },
      (error) => {
        console.log('Error retrieving user count:', error);
      }
    );
  }
 

  getComplains(): void {
    this.viewcomplainservice.getComplains().subscribe(complain=> {
      this.complains = complain;

    });
  }

}
