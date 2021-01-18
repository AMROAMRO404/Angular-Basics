import { Component, OnInit } from '@angular/core';
import { ScrollDirective } from '../scroll.directive';
import { TestService } from '../test.service';

@Component({
  selector: 'app-load-mimic-behavior',
  templateUrl: './load-mimic-behavior.component.html',
  styleUrls: ['./load-mimic-behavior.component.css'],
})
export class LoadMimicBehaviorComponent implements OnInit {
  constructor(private myService: TestService) {}

  ngOnInit(): void {}

  arrayToShow = this.myService.sheardItems;
}
