import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
              <input #myId type="text">
             <button (click)="logMessage(myId.value)">Log</button>
            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  public name = "Monayem";
  public logMessage(logMessageData: any) {
    console.log(logMessageData);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
