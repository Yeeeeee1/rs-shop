import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  baseUrl = 'http://localhost:3004/';
  constructor(private api: HttpClient) {}

  getProductByCatalog(): any {
    return this.api
      .get(this.baseUrl + 'categories')
      .pipe(map((val) => console.log(val)));
  }
}
