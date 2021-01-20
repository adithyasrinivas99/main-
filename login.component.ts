import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string='';
  password: string='';
  type: string='';
  links: string='';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  LoginUser(): Observable<boolean>{

    if (this.type.match('applicant|Applicant')){
      this.links = 'http://localhost:8080/app/Applicant' + this.username + '/' + this.password;
    }
    else if (this.type.match('Admission|admission')){
       this.links = 'http://localhost:8080/app/Admission' + this.username + '/' + this.password;
    }
    else if (this.type.match('universitystaff|Universitystaff')){
      this.links = 'http://localhost:8080/app/university_staff_member' + this.username + '/' + this.password;
     
    }
    
    return this.http.get<boolean>(this.links);   }
}
