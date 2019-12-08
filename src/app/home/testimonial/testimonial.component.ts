import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/_models/testimonial';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  imgs: string[] = [
    '/assets/img/knife.jpg',
    '/assets/img/scissors-2.jpg',
    '/assets/img/fil.jpg'
  ];
  testis: Testimonial[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTestimonials()
      .subscribe(
        (data: Testimonial[]) => {
          this.testis = data;
        }
      );
  }

}
