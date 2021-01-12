import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-table',
  templateUrl: './e-table.component.html',
  styleUrls: ['./e-table.component.css'],
})
export class ETableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  employee: any;
  emoployes = [
    {
      Employee: {
        name: 'Ali',
        age: '28',
        email: 'ali@gmail.com',
        mobile: '3421231',
      },
    },
    {
      Employee: {
        name: 'Omar',
        age: '24',
        mobile: '756745',
        email: 'Omar@gmail.com',
      },
    },
    {
      Employee: {
        name: 'Amro',
        age: '22',
        email: 'Amro@gmail.com',
        company: 'company1',
      },
    },
  ];
}
