import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  campaignId: string;
  companyId: string;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['user'];
      this.campaignId = params['id'];
      this.companyId = params['company'];
      console.log(this.userId); // Print the parameter to the console. 
      console.log(this.campaignId); // Print the parameter to the console. 
      console.log(this.companyId); // Print the parameter to the console. 
    });
  }

  submit() {
    this.http.post<any>('http://localhost:4000/email/caught', {
      userId: this.userId,
      campaignId: this.campaignId,
    }).subscribe(res => { });
  }

}
