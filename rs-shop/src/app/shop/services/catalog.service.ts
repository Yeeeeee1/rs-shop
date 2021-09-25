import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  baseUrl = 'http://localhost:3004/';
  constructor(private api: HttpClient) {}

  getCatalogProducts(): any {
    return this.api.get(this.baseUrl + 'categories');
  }

  getGoodsByCategory(category: string, subCategory: string): any {
    return this.api.get(
      this.baseUrl + 'goods/' + 'category/' + category + '/' + subCategory
    );
  }

  getGood(id: string): any {
    return this.api.get(this.baseUrl + 'goods/item/' + id);
    // .pipe(map((value: any) => console.log(value)));
  }
}
