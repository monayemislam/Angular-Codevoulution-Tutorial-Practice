import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
             <div *ngFor="let color of colors; index as i">
                  <h1>{{i}}<span>. </span>{{color}}</h1>
             </div>

            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  constructor() { }
  public colors = ['Red','Blue','White','Green'];
  ngOnInit(): void {
  }
}
