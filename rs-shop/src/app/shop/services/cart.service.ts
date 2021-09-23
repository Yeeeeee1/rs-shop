import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'http://localhost:3004/';
  constructor(private api: HttpClient) {}

  setUser(name: string, password: string): any {
    console.log(this.baseUrl + 'users');
    this.api.post(this.baseUrl + 'users/register', {
      name: name,
      password: password,
      cart: [],
      favourite: [],
    });
  }

  getUser(): any {}
}
