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
      phone: new FormControl('', [ Validators.required, Validators.pattern(/^[0-9\+]{12}$/)])
    });
  }

  send() {
    alert('call ' + this.form.get('phone').value);
  }

}
