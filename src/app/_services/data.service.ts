import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Tool } from '../_models/tool';
import { Type } from '../_models/type';
import { Reason } from '../_models/reason';
import { Testimonial } from '../_models/testimonial';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get(environment.host + '/data/types')
      .pipe(
        map(
          (data: any[]) => data.map(t => new Type(t.id, t.name, t.description, t.img))
        )
      );
  }

  getTools(typeId: number) {
    return this.http.get(environment.host + '/data/tools?type_id=' + typeId)
      .pipe(
        map(
          (data: any[]) => data.map(t => new Tool(t.id, t.name, t.description, t.price, t.img, t.type_id))
        )
      );
  }

  getReasons() {
    return this.http.get(environment.host + '/data/reasons')
      .pipe(
        map(
          (data: any[]) => data.map(t => new Reason(t.id, t.title, t.description, t.img))
        )
      );
  }

  getTestimonials() {
    return this.http.get(environment.host + '/data/testimonials')
      .pipe(
        map(
          (data: any[]) => data.map(t => new Testimonial(t.id, t.name, t.text, t.img))
        )
      );
  }
}
