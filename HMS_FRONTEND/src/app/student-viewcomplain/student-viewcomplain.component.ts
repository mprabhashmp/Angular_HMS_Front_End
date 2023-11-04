import { Component, OnInit } from '@angular/core';

import { ViewcomplainServiceService } from './viewcomplain.service.service';
import { HmsHomeService } from '../hms-home/hms-home.service';

@Component({
  selector: 'app-student-viewcomplain',
  templateUrl: './student-viewcomplain.component.html',
  styleUrls: ['./student-viewcomplain.component.css']
})
export class StudentViewcomplainComponent implements OnInit{
 

  constructor(private viewcomplainservice: ViewcomplainServiceService,private hmsservice:HmsHomeService) { }


  ngOnInit():void {

    this.loadComplaintsByCurrentUser();

  }

  complaints: any[] = [];

 
  loadComplaintsByCurrentUser() {
    this.hmsservice.getComplains().subscribe(
      (response: any) => {
        this.complaints = response;
      },
      (error: any) => {
        console.error('Error loading complaints:', error);
      }
    );
  }
}

