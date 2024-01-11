import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  date = '';
  currency : number = 0;
  height : number = 0;
  miles : number = 0;

  car = {
    make :'Toyota',
    model : 'Tocoma',
    year : 2016

  };

  onMilesChange(eventTarget: EventTarget) {
    this.miles = parseFloat((eventTarget as HTMLInputElement).value);
  }
  onNameChange(eventTarget: EventTarget) {
    this.name = (eventTarget as HTMLInputElement).value;
  }
  onDateChange(eventTarget: EventTarget) {
    this.date = (eventTarget as HTMLInputElement).value;
  }
  onCurrencyChange(eventTarget: EventTarget) {
    this.currency = parseFloat((eventTarget as HTMLInputElement).value);
  }
  onHeightChange(eventTarget: EventTarget) {
    this.height = parseFloat((eventTarget as HTMLInputElement).value);
  }
}
