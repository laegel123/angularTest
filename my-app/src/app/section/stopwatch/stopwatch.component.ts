import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  present: string = "";

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {
  }

  startTime($event: string) {
    this.present = $event;
  }

  goClock() {
    this.pageToggleService.goPage('clock');
  }
}
