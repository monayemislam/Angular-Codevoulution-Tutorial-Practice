import { outputAst } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>{{name | uppercase}}</h2>
            <h2>{{name | lowercase}}</h2>
            <h2>{{name | titlecase}}</h2>
            <h2>{{name | slice:3:5}}</h2>
            <h2>{{friend | json}}</h2>


            <h3>{{5.678|number:'1.2-3'}}</h3>
            <h3>{{5.678|number:'3.4-5'}}</h3>
            <h3>{{5.678|number:'3.1-2'}}</h3>

            <h3>{{0.50|percent}}</h3>

            <h3>{{0.50|currency}}</h3>
            <h3>{{0.50|currency:'GBP'}}</h3>
            <h3>{{0.50|currency:'EUR':'code'}}</h3>
            <h3>{{0.50|currency:'BDT'}}</h3>

            <h3>{{date}}</h3>
            <h3>{{date|date:'short'}}</h3>
            <h3>{{date|date:'shortDate'}}</h3>
            <h3>{{date|date:'shortTime'}}</h3>

            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  public name:any = "Thank you Codevolution";
  public friend:any = {
    "name":"Mahfuz",
    "university":"Islamic University, Kushtia"
  }
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
