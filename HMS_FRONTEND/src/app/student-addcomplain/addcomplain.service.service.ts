import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddcomplainServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/user/complain/create';

  registerUser(regData : any){
    // Send the registration request to the server
    const url = `${this.apiUrl}`
    return this.http.post(url , regData);
  }
}
