import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.scss']
})
export class AddrecordComponent implements OnInit {
  date = new Date();
  time = 0;
  distance = 0;
  @Output() myeventEmit = new EventEmitter<object>();
  constructor() { }

  ngOnInit(): void {
  }

  addingInfo(): void {
    this.myeventEmit.emit({date: this.date, distance: this.distance, time: this.time});
    console.log({date: this.date, distance: this.distance, time: this.time});
    this.doDefaultValue();
  }

  doDefaultValue(): void {
    this.date = new Date();
    this.distance = 0;
    this.time = 0;
  }

}
