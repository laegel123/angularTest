import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsComponent} from "./buttons/buttons.component";
import {TimeDisplayComponent} from "./time-display/time-display.component";
import {StopwatchComponent} from './stopwatch.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [ButtonsComponent
                ,TimeDisplayComponent
                ,StopwatchComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    StopwatchComponent
  ],
})
export class StopwatchModule { }
