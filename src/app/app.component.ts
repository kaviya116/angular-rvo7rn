import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  isSelected: string;
  arr = [
    { name: 'Mango', type: 'fruits' },
    { name: 'Apple', type: 'fruits' },
    { name: 'Cat', type: 'animal' },
    { name: 'Biriyani', type: 'food' },
    { name: 'Dog', type: 'animal' },
    { name: 'Noodles', type: 'food' },
  ];
  checked(value) {
    // console.log(value);
    this.isSelected = value;
  }
}
