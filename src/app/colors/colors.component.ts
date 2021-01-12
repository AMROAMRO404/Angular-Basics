import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  constructor(public rout:ActivatedRoute) { }
  color:any

  ngOnInit(): void {
    this.rout.paramMap.subscribe( paramMap => {
      this.color = paramMap.get('color');
  }) 
  }

  addColor(newColor: any) {
    this.color = newColor
  }
}
