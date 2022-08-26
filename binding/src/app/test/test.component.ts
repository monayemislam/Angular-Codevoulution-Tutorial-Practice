import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
             <input type="text" [id]="myId" value="14">
             <input type="text" [disabled]="isDisabled" value="{{name}}">
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Monayem";
  public myId="testId";
  public isDisabled=true;
  public siteUrl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello "+this.name
  }
}
