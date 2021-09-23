import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogCardComponent } from './shop/components/catalog-card/catalog-card.component';
import { CatalogComponent } from './shop/components/catalog/catalog.component';
import { CategoryComponent } from './shop/components/category/category.component';
import { MainPageComponent } from './shop/components/main-page/main-page.component';
import { CatalogService } from './shop/services/catalog.service';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', component: MainPageComponent },
  { path: 'items/:id', component: CatalogCardComponent },
  { path: 'category/:category/:subcategory', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
