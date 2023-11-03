import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  private countUser = 'http://localhost:8080/api/admin';
  users:any;

  constructor(private http: HttpClient) { }

  getUserCount(): Observable<number> {
    return this.http.get<number>(`${this.countUser}/userCount`);
  }

}
