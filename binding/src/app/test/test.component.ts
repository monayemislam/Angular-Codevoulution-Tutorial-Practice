import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <div [ngSwitch]="color">
                  <div *ngSwitchCase="'blue'">You have choosen blue color</div>
                  <div *ngSwitchCase="'red'">You have choosen red color</div>
                  <div *ngSwitchDefault>You have choosen default color</div>
              </div>

            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  constructor() { }
  public color = "abllgjklj";
  ngOnInit(): void {
  }
}
