import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() item: any;
  @Output() newItemEvent = new EventEmitter<any>();
  textAreaValue = '';
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
