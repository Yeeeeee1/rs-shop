import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './shop/components/main-page/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './shop/components/catalog/catalog.component';
import { MainPageComponent } from './shop/components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { CatalogCardComponent } from './shop/components/catalog-card/catalog-card.component';
import { CategoryComponent } from './shop/components/category/category.component';
import { PricePipe } from './shop/components/category/pipes/price.pipe';
import { SearchWordPipe } from './shop/components/category/pipes/search-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CatalogComponent,
    MainPageComponent,
    CatalogCardComponent,
    CategoryComponent,
    PricePipe,
    SearchWordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
