import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IpService } from 'src/app/core/services/ip.service';
import { CatalogService } from 'src/app/shop/services/catalog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  city = '';
  showModal = false;
  name: string | null = '';
  login = '';
  password = '';
  data: any = [];
  constructor(
    private ipService: IpService,
    private modalService: NgbModal,
    private catalogService: CatalogService
  ) {}

  ipSub: Subscription | null = new Subscription();

  openSm(content: any): void {
    this.modalService.open(content, { size: 'sm' });
  }

  auth(): void {
    if (this.login && this.password) {
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
      this.name = this.login;
      this.modalService.dismissAll();
    }
  }

  signOutFunc(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    this.name = '';
  }

  changeCity(city: string): void {
    this.city = city;
  }

  search(e: Event): void {
    alert('Не работает!');
    /* if ((<HTMLInputElement>e.target).value.length > 2) {
      this.catalogService.getCatalogProducts().subscribe((data: any) => {
        console.log(data);
        data.map((value: any) => {
          console.log(value.name);
          value.subCategories.map((value: any) =>
            value.name
              .toLowerCase()
              .includes((<HTMLInputElement>e.target).value) === true
              ? this.data.push({ id: value.id, name: value.name })
              : null
          );
        });
        console.log(this.data);
      });
    } */
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('login');
    this.ipService.getApi().subscribe((data) => {
      this.city = data.city;
    });
  }

  ngOnDestroy(): void {
    if (this.ipSub) {
      this.ipSub.unsubscribe();
      this.ipSub = null;
    }
  }
}
