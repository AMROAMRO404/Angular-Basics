import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css'],
})
export class TestServiceComponent implements OnInit {
  constructor(private myService: TestService) {}

  ngOnInit(): void {}
  items = this.myService.sheardItems;
  counter: number = 0;
  addItem() {
    this.counter++;
    this.items.push('Item number ' + this.counter);
  }
}
