import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
} from '@angular/core';
import { defaultIfEmpty, every } from 'rxjs';

@Directive({
  selector: '[appNumberNotAloowDirective]',
})
export class NumberNotAloowDirectiveDirective implements OnChanges, OnInit {
  @Input('appNumberNotAloowDirective') givenName: any;
  @Output() sendTheStatus = new EventEmitter();
  constructor(private elment: ElementRef) {}
  spliteTheInput = [];
  newValue: any;
  ngOnInit() {
    // this.newValue = this.givenName;
    console.log(this.newValue);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.newValue = this.givenName;
    // console.log(this.newValue);
  }

  @HostListener('keyup') keyPress(event: KeyboardEvent): any {
    let val = this.givenName.split('');
    let arr = [];
    console.log(val);
    console.log(this.elment.nativeElement.value, 'elemS');
    for (let elm of val) {
      if (isNaN(elm)) {
        console.log(this.newValue);
        this.newValue = arr.push(elm);
      } else {
        console.log(this.elment.nativeElement.value);
        this.newValue = '';
        console.log(this.newValue);
        this.sendTheStatus.emit(this.newValue);
      }
    }
    if (this.newValue.length > 0) {
      this.sendTheStatus.emit(this.newValue.join());
    }
  }
}
