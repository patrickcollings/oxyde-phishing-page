import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-outlook-reset',
  templateUrl: './outlook-reset.component.html',
  styleUrls: ['./outlook-reset.component.css']
})
export class OutlookResetComponent implements OnInit {

  userId: string;
  campaignId: string;
  companyId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
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
    this.http.post<any>(`${environment.apiUrl}/email/caught`, {
      userId: this.userId,
      campaignId: this.campaignId,
    }).subscribe(
      res => { 
        window.open('https://account.microsoft.com/account/', '_self');
      },
      err => {
        window.open('https://account.microsoft.com/account/', '_self');
      });
  }

}
