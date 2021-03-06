import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { StartComponent } from './start/start.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { MovieModalComponent } from './movie-modal/movie-modal.component';
import { ShadowMoverDirective } from '../_directives/shadow-mover.directive';
import { TestimonialComponent } from './testimonial/testimonial.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePage,
    StartComponent,
    PriceComponent,
    AboutComponent,
    TestimonialComponent,
    InstrumentComponent,
    ContactComponent,
    MovieModalComponent,
    ShadowMoverDirective
  ],
  entryComponents: [
    MovieModalComponent
  ]
})
export class HomePageModule {}
