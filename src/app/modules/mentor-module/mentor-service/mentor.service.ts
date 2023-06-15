import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private baseUrl:string=`${environment.API_URL}/api`
  private mentors: any;
  constructor(private http:HttpClient) {}

  setData(data: any) {
    this.mentors = data;
  }

  getData(): any {
    return this.mentors;
  }

  getUserDonations(userid:number):any{
    return this.http.get(`${this.baseUrl}/profile/${userid}/`)
  }
  



}
