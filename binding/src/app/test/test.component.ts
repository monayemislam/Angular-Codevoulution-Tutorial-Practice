import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
             <h2 class="text-success">Codevolution</h2>
             <h2 [class]="successClass">Codevolution</h2>
             <h2 [class.text-danger]="hasError">Codevolution</h2>
             <h2 [ngClass]="messageClasses">Codevolution</h2>
            `,
  styles: [`
      .text-success{
        color: darkgreen;
      }
      .text-danger{
        color: darkred;
      }
      .text-special{
        border: 2px solid red;
      }
  `]
})
export class TestComponent implements OnInit {

  public name = "Monayem";
  public successClass = "text-success";
  public hasError:boolean = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-special" : this.successClass
  }
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello "+this.name
  }
}
