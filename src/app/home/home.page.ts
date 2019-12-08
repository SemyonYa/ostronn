import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/menu-item';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  mobileIsActive = false;
  constructor() { }

  ngOnInit() {
    this.menu
      // .add({ title: 'Главная', url: '/home' })
      .add({ title: 'Главная с шариками', url: '/start' })
      .add({ title: 'Прайс', url: '/home/price' })
      .add({ title: 'Почему мы?', url: '/home/about' })
      .add({ title: 'Инструменты', url: '/home/instrument' })
      .add({ title: 'Отзывы', url: '/home/testimonial' })
      .add({ title: 'Контакты', url: '/home/contact' });
    // .add({title: 'Почему профессиональная заточка?', url: '/home/why'})
  }

  showMobileMenu() {
    this.mobileIsActive = true;
  }

  hideMobileMenu() {
    this.mobileIsActive = false;
  }

  call() {
    window.location.href = 'tel:+79877539992';
  }

  send() {
    window.location.href = 'mailto:order@ostro-nn.ru';
  }

  doRefresh(e: EventEmitter) {
    location.reload();
  }
}
