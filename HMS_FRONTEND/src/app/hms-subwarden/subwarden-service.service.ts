import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubwardenServiceService {

  private apiUrl= 'http://localhost:8080/api/user/complain/getAllComplains';
  private apiUrl1= 'http://localhost:8080/api/subwarden';
  // private complainCount= 'http://localhost:8080/api/subwarden';

  constructor(private http: HttpClient) { }

  complains:any;

getComplains(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

resolveComplain(c_id: number): Observable<any> {
  return this.http.put<any>(`${this.apiUrl1}/getresolvebysubwarden/${c_id}`, {});
}



}
