import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  goods: any;
  catalogs: any;
  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      const id = param.id;

      if (id) {
        this.catalogService.getGood(id).subscribe((data: any) => {
          // data = data.json();
          this.goods = [data];
        });
      }
    });
    this.catalogService.getCatalogProducts().subscribe((data: any) => {
      this.catalogs = data;
    });
  }

  getGoodsByCategory(categoryName: string, subcategoryName: string): void {
    this.router.navigate(['category', categoryName, subcategoryName]);
  }
}
