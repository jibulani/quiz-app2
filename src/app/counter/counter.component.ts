import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counterValue;
  @Output() counterChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  increaseValue() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  decreaseValue() {
    this.counterValue = Math.max(0, this.counterValue - 1);
    this.counterChange.emit(this.counterValue);
  }

}
