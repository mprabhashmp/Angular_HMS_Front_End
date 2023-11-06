import { Component } from '@angular/core';
import { AdminAssignRoomService } from './admin-assign-room.service';

@Component({
  selector: 'app-admin-assign-rooms',
  templateUrl: './admin-assign-rooms.component.html',
  styleUrls: ['./admin-assign-rooms.component.css']
})
export class AdminAssignRoomsComponent {


  input_user_index: string = '';
  input_room_no: string = '';
  errorMessage: string = '';

  constructor(private assignService: AdminAssignRoomService) {}

  assignStudent() {
    this.assignService.assignStudent(this.input_user_index, this.input_room_no)
      .subscribe(
        (data) => {
          // Handle successful response if necessary
        },
        (error) => {
          this.errorMessage = error;
        }
      );
  }
}
