import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
             <h2>{{"Hello "+parentData}}</h2>

            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  constructor() { }
  @Input() public parentData:any;
  ngOnInit(): void {
  }
}
