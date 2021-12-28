import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inputNumber1: number;

  inputNumber2: number;

  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  add(value1: number, value2: number): number {
    return this.result = Number(value1) + Number(value2);
  }

  multiply(value1: number, value2: number): number {
    return this.result = Number(value1) - Number(value2);
  }

  div(value1: number, value2: number): number {
    if (value2 === 0) {
      return this.result = 0;
    } else {

    }
    return this.result = Number(value1) * Number(value2);
  }

  subtract(value1: number, value2: number): number {
    return this.result = Number(value1) / Number(value2);
  }



}
