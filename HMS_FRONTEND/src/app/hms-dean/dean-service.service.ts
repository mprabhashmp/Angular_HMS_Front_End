import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeanServiceService {

  private apiUrl= 'http://localhost:8080/api/dean/getAllNullComplainstoDean';
  private apiUrl1= 'http://localhost:8080/api/dean';


  constructor(private http: HttpClient) { }

  complains:any;

getWardenComplains(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

resolveComplain(c_id: number): Observable<any> {
  return this.http.put<any>(`${this.apiUrl1}/getresolvebydean/${c_id}`, {});
}

}
