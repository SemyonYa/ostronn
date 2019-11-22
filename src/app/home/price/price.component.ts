import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3,
    pager: false,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,      modifier: 1,
      slideShadows: true,
    },
  };

  constructor() { }

  ngOnInit() {
    this.setSlideQ();
    // window.onresize = this.setSlideQ;
    // () => {
    //   console.log('w, h', window.innerWidth, window.innerHeight);
    // };
  }

  // resize(n) {
  //   this.slideOpts.slidesPerView = n;
  //   console.log(this.slideOpts);
  // }

  setSlideQ() {
    const w = window.innerWidth;
    console.log('w', w);
    if (w < 1024) {
      this.slideOpts.slidesPerView = 2;
    }
    if (w < 600) {
      this.slideOpts.slidesPerView = 1;
    }
  }

}
