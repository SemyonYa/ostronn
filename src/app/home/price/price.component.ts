import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { Type } from 'src/app/_models/type';
import { Tool } from 'src/app/_models/tool';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  currentSlideQuantity = 0;
  slideOpts = {
    slidesPerView: this.currentSlideQuantity
  };
  slideOpts1 = {
    slidesPerView: 1
  };
  slideOpts2 = {
    slidesPerView: 2
  };
  slideOpts3 = {
    slidesPerView: 3
  };
  types: Type[] = [];
  imgs: string[] = [
    '/assets/img/knife.jpg',
    '/assets/img/scissors-2.jpg',
    '/assets/img/fil.jpg'
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setSlideQ();
    this.dataService.getTypes()
      .subscribe(
        (data: Type[]) => {
          this.types = data;
          for (const type of this.types) {
            this.dataService.getTools(type.id)
              .subscribe(
                (tools: Tool[]) => {
                  type.fillTools(tools);
                }
              );
          }
        }
      );
    window.onresize = this.setSlideQ.bind(this);
  }

  setSlideQ() {
    const w = window.innerWidth;
    if (w < 600) {
      this.slideOpts.slidesPerView = 1;
      if (this.currentSlideQuantity !== 1) {
        this.currentSlideQuantity = 1;
      }
    } else if (w < 1024) {
      this.slideOpts.slidesPerView = 2;
      if (this.currentSlideQuantity !== 2) {
        this.currentSlideQuantity = 2;
      }
    } else {
      this.slideOpts.slidesPerView = 3;
      if (this.currentSlideQuantity !== 3) {
        this.currentSlideQuantity = 3;
      }
    }
  }
  
  // reloadOnResize() {
  //   const w = window.innerWidth;
  //   if (w < 600) {
  //     if (this.currentSlideQuantity !== 1) {
  //       // console.log('q2', this.currentSlideQuantity);
  //       location.reload();
  //     }
  //   } else if (w < 1024) {
  //     if (this.currentSlideQuantity !== 2) {
  //       // console.log('q2', this.currentSlideQuantity);
  //       location.reload();
  //     }
  //   } else {
  //     if (this.currentSlideQuantity !== 3) {
  //       // console.log('q2', this.currentSlideQuantity);
  //       location.reload();
  //     }
  //   }
  // }

}
