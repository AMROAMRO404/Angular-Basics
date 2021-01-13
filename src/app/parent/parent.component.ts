import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  item: any;
  items = ['item1', 'item2', 'item3', 'item4', 'item5'];
  addToItems(value: any) {
    if (value != '' && !this.items.includes(value)) this.items.push(value);
    else alert('You can not add empty item or exist item');
  }
}
