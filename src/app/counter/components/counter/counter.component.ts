import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>El contador esta en: {{ counter }}</h3>

  <div>
  <button (click)="increaseBy(1)">+1</button>
  </div>
  <br/>
  <div>
  <button (click)="reset()">Reset</button>
  </div>
  <br/>
  <div>
  <button (click)="decreaseBy(1)">-1</button>
  </div>
`
})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
