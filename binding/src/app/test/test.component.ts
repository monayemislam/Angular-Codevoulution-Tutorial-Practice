import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
             <button (click)="onClick()">Greet</button>
             {{greetings}}
            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  public name = "Monayem";
  public greetings = "";
  public onClick() {
    this.greetings = "Greetings from"+this.name;
    console.log("hello");
  }
  constructor() { }

  ngOnInit(): void {
  }
}
