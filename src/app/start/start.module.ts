import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StartPage } from './start.page';
import { ShadowMoverDirective } from '../_directives/shadow-mover.directive';
import { ShadowMover2Directive } from '../_directives/shadow-mover2.directive';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StartPage,
    ShadowMover2Directive
  ]
})
export class StartPageModule {}
