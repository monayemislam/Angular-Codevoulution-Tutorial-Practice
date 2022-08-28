import { outputAst } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
             <h2>{{"Hello "+parentData}}</h2>
            <button (click)="fireEvent()">Send Event</button>
            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  constructor() { }
  @Input() public parentData:any;
  @Output() public childEvent = new EventEmitter();
  ngOnInit(): void {
  }
  public fireEvent(){
    this.childEvent.emit('Hey Monayem ! I\'m coming from child component');
  }
}
