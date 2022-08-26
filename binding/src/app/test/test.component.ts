import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
             <h2 [style.color]="bindingColor">Style Binding</h2>
             <h2 [style.color]="hasError?'red':'green'">Style Binding</h2>
             <h2 [ngStyle]="messageStyle">Style Binding</h2>
            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  public name = "Monayem";
  public hasError:boolean = false;
  public bindingColor = "red";
  public messageStyle = {
    "color": "yellow",
    "backgroundColor" : "green"
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
