import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Directive({
  selector: '[appRowColorDirective]',
})
export class RowColorDirectiveDirective implements OnChanges {
  @Input() color: any;
  @Input() colorOfUserTableRow: any;
  @Input() productList: any;
  @Input('appRowColorDirective') givenName: any;
  @Input() rowIdValue: any;
  @Input() productListOfUser: any;
  colorLess = 'none';
  constructor(private element: ElementRef) {}

  ngOnChanges() {
    if (this.productList) {
      if (this.productList)
        if (this.productList.productname == this.givenName)
          this.element.nativeElement.style.background = this.color;
        else {
          this.element.nativeElement.style.background = this.colorLess;
        }
    }
    if (this.productListOfUser)
      if (this.productListOfUser.productname == this.givenName)
        this.element.nativeElement.style.background = this.colorOfUserTableRow;
      else {
        this.element.nativeElement.style.background = this.colorLess;
      }
  }
}
