import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[myTR]',
  templateUrl: './a-row.component.html',
  styleUrls: ['./a-row.component.css'],
})
export class ARowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() employee: any;
}
