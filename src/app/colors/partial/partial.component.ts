import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.css']
})
export class PartialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() color:any;
  @Output() newColorEvent = new EventEmitter<any>();
  addNewColor(value: string) {
    this.newColorEvent.emit(value);
  }


}
