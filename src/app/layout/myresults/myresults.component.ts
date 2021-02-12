import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myresults',
  templateUrl: './myresults.component.html',
  styleUrls: ['./myresults.component.scss']
})
export class MyresultsComponent implements OnInit {

  @Input() infoObj: any;
  constructor() { }

  ngOnInit(): void {
  }
}
