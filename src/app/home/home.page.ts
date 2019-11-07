import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/menu-item';

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
      .add({ title: 'Главная', url: '/home' })
      .add({ title: 'Прайс', url: '/home/price' })
      .add({ title: 'О заточке и гарантиях', url: '/home/about' })
      .add({ title: 'Инструменты', url: '/home/instrument' })
      .add({ title: 'Контакты', url: '/home/contact' });
    // .add({title: 'Почему профессиональная заточка?', url: '/home/why'})
  }

  showMobileMenu() {
    this.mobileIsActive = true;
  }
  
  hideMobileMenu() {
    this.mobileIsActive = false;
  }
}
