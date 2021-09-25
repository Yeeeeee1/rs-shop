import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  itemsLinksArr: string[] = [
    'items/KGN39AW32RL',
    'items/612fe4ecf622511779f25dfc',
    'items/613466ec4147cbfd2740f225',
    'items/6133c712ff6e142c165c9dfb',
    'items/612e05c53a4458874142f298',
    'items/613327be9637972f804b6806',
  ];
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
}
