import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class PageToggleService {

  routingCount = 0;
  constructor(
    private router: Router
  ) { }

  goPage(target: string) {
    this.routingCount++;
    if (target == 'stopwatch') {
      this.router.navigateByUrl('/stopwatch');
    } else if (target == 'clock') {
      this.router.navigateByUrl('/clock');
    }
  }
}
