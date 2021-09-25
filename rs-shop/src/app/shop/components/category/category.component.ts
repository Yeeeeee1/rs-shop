import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  goods: any = [];
  flag = false;
  searchWord = '';

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      const category = params.category;
      const subcategory = params.subcategory;

      if (category) {
        this.catalogService
          .getGoodsByCategory(category, subcategory)
          .subscribe((data: any) => {
            this.goods = data;
          });
      }
    });
  }

  getCard(id: string): void {
    this.route.navigate(['items', id]);
  }

  notGood(e: Event): void {
    e.stopPropagation();
    alert('Нет товара!');
  }
}
