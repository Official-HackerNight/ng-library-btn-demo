import { NgModule } from '@angular/core';
import { BtnClickerComponent } from './btn-clicker/btn-clicker.component';
import { MatBadgeModule, MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [ BtnClickerComponent],
  imports: [MatBadgeModule, MatButtonModule],
  exports: [BtnClickerComponent]
})
export class HnClickerLibModule { }
