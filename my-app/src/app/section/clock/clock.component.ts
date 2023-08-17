import { Component } from '@angular/core';

import * as moment from 'moment';
import {interval, map} from "rxjs";
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

  timeString: string = "";

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {

    interval(1000)
      .pipe(map(() => {
        return moment().format('YYYY-MM-DD HH:mm:ss');
      }))
      .subscribe(data => {
        this.timeString = data;
      })
  }

  goStopwatch() {
    this.pageToggleService.goPage('stopwatch');
  }

}
