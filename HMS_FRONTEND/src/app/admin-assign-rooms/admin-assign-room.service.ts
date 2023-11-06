import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAssignRoomService {

  private REST_API_SERVER = "http://localhost:8080/api/user/assign/";

  constructor(private httpClient: HttpClient) { }

  assignStudent(input_user_index: string, input_room_no: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.REST_API_SERVER}${input_user_index}/${input_room_no}`;

    return this.httpClient.get<any>(url, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };
}
