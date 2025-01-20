import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appTooltipDirective]',
})
export class TooltipDirectiveDirective implements OnInit {
  @Output() sendDescriptionToTheParent = new EventEmitter();
  @Input('appTooltipDirective') productDes: any;
  @Input('appTooltipDirective') productDesUser: any;
  @Input() title: any;
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    // this.sendDescriptionToTheParent.emit(this.productDes);
  }
  @HostListener('mouseenter') onMouseEnter(e: MouseEvent) {
    // this.element.nativeElement.value = 'red';
    // let html = `<div><p>${this.productDes}<p></div>`;
    // this.sendDescriptionToTheParent.emit(this.productDes);
    this.element.nativeElement.title = this.productDes;
    this.element.nativeElement.title = this.productDesUser;
    // this.element.nativeElement.classList.remove('tool');
    // this.element.nativeElement.classList.add('tutu');

    // this.title = this.productDes;
    // return this.productDes;
  }
  @HostListener('mouseleave') onMouseLeave() {
    // console.log(this.title);
    this.element.nativeElement.title = '';
    // this.element.nativeElement.classList.add('tool');
    // this.element.nativeElement.classList.remove('tutu');
  }
}
