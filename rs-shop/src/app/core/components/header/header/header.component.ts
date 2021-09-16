import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IpService } from 'src/app/core/services/ip.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  city = '';
  constructor(private ipService: IpService) {}

  ipSub: Subscription | null = new Subscription();

  ngOnInit(): void {
    this.ipService.getApi().subscribe((data) => (this.city = data.city));
  }

  ngOnDestroy(): void {
    if (this.ipSub) {
      this.ipSub.unsubscribe();
      this.ipSub = null;
    }
  }
}
