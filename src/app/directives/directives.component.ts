import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  items: String[] = [];
  isToggle: boolean = false;
  counter = 0;
  buttonText = 'Toggle';
  toggle() {
    if (this.isToggle) {
      this.buttonText = 'Toggle';
    } else {
      this.buttonText = 'hiddeen';
    }
    this.counter++;
    console.log('tapped ...');
    this.isToggle = !this.isToggle;
    let toPush = 'this item was pushed at ' + this.items.length;
    this.items.push(toPush);
  }
}
