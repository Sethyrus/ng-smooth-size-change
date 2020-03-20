import { Component, OnChanges, HostBinding, Input, ElementRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ng-ssc',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      overflow: hidden;
    }
  `],
  animations: [
    trigger('grow', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({ width: '{{startWidth}}px', height: '{{startHeight}}px', opacity: 0 }),
        animate('.5s ease'),
      ], { params: { startWidth: 0 } })
    ])
  ]
})

export class NgSmoothSizeChangeComponent implements OnChanges {
  @Input() trigger: any;

  startWidth: number;
  startHeight: number;

  constructor(private element: ElementRef) { }

  @HostBinding('@grow') get grow() {
    return { value: this.trigger, params: { startWidth: this.startWidth, startHeight: this.startHeight } };
  }

  setStartWidth() {
    this.startWidth = this.element.nativeElement.clientWidth;
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges() {
    this.setStartWidth();
    this.setStartHeight();
  }
}
