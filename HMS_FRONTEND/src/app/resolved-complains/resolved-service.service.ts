import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolvedServiceService {

  private apiUrl= 'http://localhost:8080/api/user/complain/getAllResolvedComplains';
  private apiUrl1= 'http://localhost:8080/api/user/complain/resolvedcomplainscopy';

  constructor(private http: HttpClient) { }

  complains:any;
  complainscopy:any;

getResolvedComplains(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}


getResolvedComplainsCopy(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl1);
}


}
