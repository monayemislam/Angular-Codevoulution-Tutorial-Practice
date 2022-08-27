import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <h2 *ngIf="true">Monayem Islam</h2>
              <h2 *ngIf="false">Monayem Islam (Hidden)</h2>

              <h2 *ngIf="displayName; else elseBlock">Codevolution</h2>
              <ng-template #elseBlock>
                 <h2>Codevolution from else block</h2>
              </ng-template>

            <div *ngIf="displayName;then thenBlock; else elseBlock"></div>
            <ng-template #thenBlock>
                 <h2>Codevolution from else block</h2>
              </ng-template>
            <ng-template #elseBlock>
                 <h2>Codevolution from else block</h2>
            </ng-template>

            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  constructor() { }
  public displayName = false;
  ngOnInit(): void {
  }
}
