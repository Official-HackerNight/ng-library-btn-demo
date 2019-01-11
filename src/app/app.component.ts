import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentCount = 0;
  title = 'ng-btn-clicker-lib-demo ';

  /**
   * Handles the event emitted by clicking the counter-button component from our library
   * @param newCount desc
   */
  handleCountChanged(newCount: number) {
    this.currentCount = newCount;
  }
}
