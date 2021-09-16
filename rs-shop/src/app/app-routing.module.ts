import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './shop/components/catalog/catalog.component';
import { MainPageComponent } from './shop/components/main-page/main-page.component';
import { CatalogService } from './shop/services/catalog.service';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
