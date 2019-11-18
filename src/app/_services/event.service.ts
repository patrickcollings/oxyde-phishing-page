import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  link(userId, campaignId) {
    return this.http.post<any>(`${environment.apiUrl}/event/link`, {
      userId: userId,
      campaignId: campaignId,
    });
  }

  credential(userId, campaignId) {
    return this.http.post<any>(`${environment.apiUrl}/event/credential`, {
      userId: userId,
      campaignId: campaignId,
    });
  }
}
