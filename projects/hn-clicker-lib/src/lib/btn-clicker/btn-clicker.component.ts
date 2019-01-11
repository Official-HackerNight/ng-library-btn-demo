import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-btn-clicker',
  templateUrl: './btn-clicker.component.html',
  styleUrls: ['./btn-clicker.component.css']
})
export class BtnClickerComponent implements OnInit {
  clickCount = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * Increments the count when the button is clicked and emits an event
   * to notify parent component of new count value
   */
  handleButtonClick() {
    this.clickCount++;
    this.countChanged.emit(this.clickCount);
  }

}
