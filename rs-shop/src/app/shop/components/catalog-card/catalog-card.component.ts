import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss'],
})
export class CatalogCardComponent implements OnInit {
  goods: any;
  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = param.id;

      if (id) {
        this.catalogService.getGood(id).subscribe((data: any) => {
          this.goods = [data];
        });
      }
    });
  }
}
