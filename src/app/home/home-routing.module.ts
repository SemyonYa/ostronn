import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ContactComponent } from './contact/contact.component';
import { HomePage } from './home.page';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      { path: '', component: StartComponent },
      { path: 'price', component: PriceComponent },
      { path: 'about', component: AboutComponent },
      { path: 'instrument', component: InstrumentComponent },
      { path: 'testimonial', component: TestimonialComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
