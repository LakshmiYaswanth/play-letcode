import { Component, OnInit } from '@angular/core';
import { NwbDatePickerOptions, } from '@wizishop/ng-wizi-bulma/lib/date-picker';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor() { }
  options: NwbDatePickerOptions = {
    color: 'danger',
    allowSameDayRange: false,
    displayMode: 'inline',
    showHeader: !true,
    headerPosition: 'top',
    showFooter: false,
    showButtons: false,
    showTodayButton: true,
    showClearButton: true,
    enableMonthSwitch: true,
    enableYearSwitch: false,
    disabledWeekDays: [6],
    weekStart: 0,
    minuteSteps: 1,
    closeOnOverlayClick: false,
    closeOnSelect: false,
    toggleOnInputClick: true
  };

  startDate: string;
  endDate: string;
  ngOnInit(): void {
  }
  valueChange(e) {
    console.log(e);
    this.startDate = e.startDate;
    this.endDate = e.endDate;
    // this.startDate = e

  }
  timer = null;
  timerChange(e) {
    console.log(e);
    this.timer = e.startDate;
  }
  onClear() {
    console.log('clear');
    this.startDate = null
    this.endDate = null;
  }
  onClear1() {
    this.timer = null;
  }
}
