import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]{10}$/)])
    });
  }

  call() {
    window.location.href = 'tel:+79300566913';
  }

  sendMail() {
    window.location.href = 'mailto:info@ostro-nn.ru';
  }

  sendRequest() {
    alert('Отправляем себе запрос на звонок по номеру ' + this.form.get('phone').value);
  }

  vk() {
    window.location.href = 'https://vk.com/ostro_nn/';
  }

  insta() {
    window.location.href = 'https://www.instagram.com/ostro_nn/';
  }

}
