import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcomplainServiceService {


  private apiUrl = 'http://localhost:8080/api/user/complain'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) {}

  createComplain(complainData: FormData) {
    return this.http.post(this.apiUrl + '/create', complainData);
  }
}
