import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss'],
})
export class InstrumentComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async showMovie(n) {
    const modal = await this.modalController.create({
      component: MovieModalComponent,
      componentProps: {
        firstName: 'Douglas',
        lastName: 'Adams',
        middleInitial: 'N'
      },
      cssClass: 'movie-modal'
    });
    return await modal.present();
  }

}
