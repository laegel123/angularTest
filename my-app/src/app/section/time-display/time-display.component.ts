import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit, OnChanges {

  @Input() inputData : string = "";

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  // @ts-ignore
  timeInterval;
  constructor() {
  }

  ngOnInit() {

  }

  timeStart() {
    this.timeInterval = setInterval(() => {

      this.ms++;

      if (this.ms == 100) {
        this.sec++;
        this.ms = 0;
      }

      if (this.sec == 60) {
        this.min++;
        this.sec = 0;
      }
    }, 10);

  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'inputData') {

        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }


}
