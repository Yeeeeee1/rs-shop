import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IpService {
  baseUrl = 'https://ipinfo.io/json?token=90dfb5a8f4afdd';
  constructor(private api: HttpClient) {}

  getApi(): Observable<any> {
    return this.api.get(this.baseUrl);
  }
}
