import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  infoObj = [
    {date: '2021-02-12', distance: 1000, time: 10}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  updateArray(newElem: any): void {
    this.infoObj.push(newElem);
  }


}
